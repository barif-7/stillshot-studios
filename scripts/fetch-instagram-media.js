import fs from 'fs/promises'
import path from 'path'

const PROFILE_URL = process.env.INSTAGRAM_PROFILE_URL || 'https://www.instagram.com/stillshotstudios/'
const OUT_DIR = path.join(process.cwd(), 'data', 'instagram')

async function download(url, filePath) {
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } })
  if (!res.ok) throw new Error(`Download failed: ${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await fs.writeFile(filePath, buf)
}

function extractProfileData(html) {
  const patterns = [
    /"edge_owner_to_timeline_media"\s*:\s*(\{.*?\})\s*,\s*"edge_felix_video_timeline"/s,
    /"edge_owner_to_timeline_media"\s*:\s*(\{.*?\})\s*,\s*"edge_saved_media"/s,
    /"ProfilePage".*?"edge_owner_to_timeline_media"\s*:\s*(\{.*?\})/s,
  ]
  for (const re of patterns) {
    const m = html.match(re)
    if (m) {
      try {
        return JSON.parse(`{"edge_owner_to_timeline_media":${m[1]}}`)
      } catch {
        continue
      }
    }
  }
  return null
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })

  const res = await fetch(PROFILE_URL, { headers: { 'user-agent': 'Mozilla/5.0' } })
  if (!res.ok) throw new Error(`Profile fetch failed: ${res.status}`)
  const html = await res.text()
  await fs.writeFile(path.join(OUT_DIR, 'profile.html'), html)

  const profile = extractProfileData(html)
  const edges = profile?.edge_owner_to_timeline_media?.edges ?? []
  const posts = []

  for (const edge of edges) {
    const node = edge?.node
    if (!node) continue
    const children = node.edge_sidecar_to_children?.edges?.map((childEdge) => ({
      media_type: childEdge.node?.is_video ? 'VIDEO' : 'IMAGE',
      media_url: childEdge.node?.video_url || childEdge.node?.display_url || null,
    })) ?? []

    posts.push({
      id: node.id,
      shortcode: node.shortcode,
      caption: node.edge_media_to_caption?.edges?.[0]?.node?.text ?? null,
      timestamp: node.taken_at_timestamp ?? null,
      media_type: node.is_video ? 'VIDEO' : node.edge_sidecar_to_children ? 'CAROUSEL_ALBUM' : 'IMAGE',
      media_url: node.video_url || node.display_url || null,
      permalink: node.shortcode ? `https://www.instagram.com/p/${node.shortcode}/` : null,
      children,
    })
  }

  await fs.writeFile(path.join(OUT_DIR, 'manifest.json'), JSON.stringify({ profile_url: PROFILE_URL, posts }, null, 2))

  for (const item of posts) {
    const postDir = path.join(OUT_DIR, item.id)
    await fs.mkdir(postDir, { recursive: true })
    const downloaded_filenames = []

    if (item.media_type === 'CAROUSEL_ALBUM' && item.children.length) {
      for (const [index, child] of item.children.entries()) {
        const ext = child.media_type === 'VIDEO' ? 'mp4' : 'jpg'
        const filename = `${String(index + 1).padStart(2, '0')}.${ext}`
        if (child.media_url) {
          await download(child.media_url, path.join(postDir, filename))
          downloaded_filenames.push(filename)
        }
      }
    } else if (item.media_url) {
      const ext = item.media_type === 'VIDEO' ? 'mp4' : 'jpg'
      const filename = `cover.${ext}`
      await download(item.media_url, path.join(postDir, filename))
      downloaded_filenames.push(filename)
    }

    await fs.writeFile(path.join(postDir, 'meta.json'), JSON.stringify({
      post_url: item.permalink,
      caption: item.caption,
      timestamp: item.timestamp,
      downloaded_filenames,
    }, null, 2))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
