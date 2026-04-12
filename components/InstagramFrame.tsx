"use client"

type InstagramFrameProps = {
  image: string
  alt: string
  label: string
  className?: string
  priority?: boolean
}

export function InstagramFrame({ image, alt, label, className = '', priority = false }: InstagramFrameProps) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] ${className}`}>
      <img
        src={image}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42))]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="glass inline-flex rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/70">
          {label}
        </div>
      </div>
    </div>
  )
}
