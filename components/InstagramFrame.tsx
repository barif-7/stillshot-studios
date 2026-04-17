"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { InstagramImageKey } from '../data/instagram/selected-images'

type InstagramImageMap = Record<InstagramImageKey, string>

type InstagramFrameProps = {
  imageKey: InstagramImageKey
  alt: string
  label: string
  className?: string
  priority?: boolean
}

let instagramImageMapPromise: Promise<InstagramImageMap> | null = null

function loadInstagramImageMap() {
  if (!instagramImageMapPromise) {
    instagramImageMapPromise = fetch('/api/instagram-images').then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to load Instagram image map: ${response.status}`)
      }

      return response.json() as Promise<InstagramImageMap>
    })
  }

  return instagramImageMapPromise
}

export function InstagramFrame({ imageKey, alt, label, className = '', priority = false }: InstagramFrameProps) {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    loadInstagramImageMap()
      .then((map) => {
        if (!cancelled) {
          setImage(map[imageKey])
        }
      })
      .catch(() => {
        if (!cancelled) {
          setImage(null)
        }
      })

    return () => {
      cancelled = true
    }
  }, [imageKey])

  return (
    <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] ${className}`}>
      {image ? (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-white/5" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42))]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="glass inline-flex rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/70">
          {label}
        </div>
      </div>
    </div>
  )
}
