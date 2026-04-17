export const instagramImageUrls = {
  heroMain: 'https://www.instagram.com/p/BQ2JaUWgjc3/media',
  heroSupport: 'https://www.instagram.com/p/BQ6Sdb2gEF2/media',
  work1: 'https://www.instagram.com/p/BQ_VofBg_kz/media',
  work2: 'https://www.instagram.com/p/BQtQ0ZHA751/media',
  work3: 'https://www.instagram.com/p/CDf6AFCBiEu/media',
  work4: 'https://www.instagram.com/p/CTh4HfAl5NO/media',
  aboutPortrait: 'https://www.instagram.com/p/BSrKsPyAkzJ/media',
  credibilityWall: 'https://www.instagram.com/p/BSk2gcvAT3v/media',
} as const

export type InstagramImageKey = keyof typeof instagramImageUrls

export function resolveInstagramImage(key: InstagramImageKey) {
  return instagramImageUrls[key]
}
