"use client"

import { useMemo, useState } from 'react'

export function InquiryForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('Portrait Session')
  const [details, setDetails] = useState('')

  const href = useMemo(() => {
    const subject = encodeURIComponent(`StillShot Studios inquiry: ${project}`)
    const body = encodeURIComponent(`Name: ${name || 'Your name'}\nEmail: ${email || 'Your email'}\nProject type: ${project}\n\nProject details:\n${details || 'A few notes about timing, location, and intended use.'}`)
    return `mailto:hello@stillshotstudios.com?subject=${subject}&body=${body}`
  }, [name, email, project, details])

  return (
    <form className="rounded-[1.75rem] border border-white/10 bg-neutral-950/45 p-6">
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white" value={project} onChange={(e) => setProject(e.target.value)}>
          <option>Portrait Session</option>
          <option>Brand / Lifestyle Shoot</option>
          <option>Event Coverage</option>
          <option>Creative Direction</option>
        </select>
        <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30" placeholder="Share timing, location, and what you need photographed." value={details} onChange={(e) => setDetails(e.target.value)} />
        <a href={href} className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5">
          Start inquiry
        </a>
      </div>
    </form>
  )
}

