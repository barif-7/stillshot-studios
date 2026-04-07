import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StillShot Studios — Premium Photography Portfolio',
  description: 'Cinematic, editorial photography for brands, portraits, events, and creative concepts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
