import { InstagramFrame } from '../components/InstagramFrame'
import { ArrowRight, Camera, ChevronRight, Grid3X3, Mail, MoveUpRight, Sparkles } from 'lucide-react'

import {
  aboutPortraitUrl,
  credibilityWallUrl,
  heroMainUrl,
  heroSupportUrl,
  work1Url,
  work2Url,
  work3Url,
  work4Url,
} from '../data/instagram/selected-images'

type WorkItem = {
  title: string
  category: string
  description: string
  tone: string
  image: string
  alt: string
}

const featuredWork: WorkItem[] = [
  {
    title: 'Tower Geometry',
    category: 'Architecture',
    description: 'Low-angle facade work with strong verticals and a crisp editorial finish.',
    tone: 'Refined structure, clean lines, and controlled contrast.',
    image: work1Url,
    alt: 'Tall modern skyscraper framed against the sky',
  },
  {
    title: 'Golden Horizon',
    category: 'Landscapes',
    description: 'A warm sunset frame that brings atmosphere to the page without feeling heavy.',
    tone: 'Soft color transitions, reflective light, and a cinematic calm.',
    image: work2Url,
    alt: 'Golden sunset over water with a glowing horizon',
  },
  {
    title: 'Neon Street',
    category: 'City Nights',
    description: 'Bright night color and street energy, kept sharp and contemporary.',
    tone: 'Motion, contrast, and a modern nighttime palette.',
    image: work3Url,
    alt: 'Neon-lit city street at night',
  },
  {
    title: 'Night Canal',
    category: 'Cityscapes',
    description: 'Tall buildings and water reflections give the portfolio a more cinematic edge.',
    tone: 'Layered depth, bright points of light, and a polished urban mood.',
    image: work4Url,
    alt: 'Night canal between tall buildings with reflections on the water',
  },
]

const collections = ['Architecture', 'Cityscapes', 'Editorial', 'Portraits', 'Landscapes']

const services = [
  'Portrait Sessions',
  'Brand and Lifestyle Shoots',
  'Event Coverage',
  'Creative Direction',
  'Custom Visual Projects',
]

const process = [
  'Discovery and visual alignment',
  'Shot planning, mood, and location direction',
  'Production with calm, precise execution',
  'Curation and delivery with a polished finish',
]

const principles = [
  'Every project starts with visual clarity, not volume.',
  'Lighting, composition, and editing are treated as part of the same language.',
  'The studio experience is designed to feel calm, considered, and premium.',
  'Image sets are curated to feel cohesive across web, social, and print use cases.',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Camera className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-medium tracking-[0.28em] text-white/70 uppercase">StillShot Studios</div>
              <div className="text-xs text-white/40">Photography portfolio</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#work" className="transition-colors hover:text-white">Work</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200/90">
            <Sparkles className="h-3.5 w-3.5" />
            Premium photography studio
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Editorial photography with a calm, cinematic point of view.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 text-balance">
            StillShot Studios creates refined portrait, lifestyle, event, and conceptual imagery for clients who want work that feels composed, intentional, and visually lasting.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5"
            >
              Book a session <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
            >
              View featured work <MoveUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {['Portraits', 'Cityscapes', 'Editorial'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/65">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InstagramFrame image={heroMainUrl} alt="Warm symmetrical corridor with repeating arches and hanging lights" label="Selected hero frame" priority className="sm:col-span-2 aspect-[16/11]" />
          <InstagramFrame image={heroSupportUrl} alt="Close-up of splashing water against a textured surface" label="Motion frame" className="aspect-[4/5]" />
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Studio note</div>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Built from a small, curated set of local Instagram frames, so the homepage opens with real work instead of placeholders.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Featured work</div>
            <h2 className="mt-3 text-3xl font-semibold">A curated look at the studio’s visual range.</h2>
          </div>
          <div className="hidden text-sm text-white/45 md:block">Selected from local Instagram downloads only.</div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredWork.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 transition-transform hover:-translate-y-1">
              <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
                <InstagramFrame image={item.image} alt={item.alt} label={item.category} className="aspect-[4/5]" />
                <div className="flex flex-col justify-between rounded-[1.5rem] bg-neutral-950/70 p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">{item.category}</div>
                    <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/64">{item.description}</p>
                  </div>
                  <p className="mt-8 border-t border-white/8 pt-4 text-sm leading-7 text-white/50">{item.tone}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="flex items-center gap-3">
          <Grid3X3 className="h-4 w-4 text-amber-400" />
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Collections</div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {collections.map((collection) => (
            <div key={collection} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/75 transition-colors hover:bg-white/[0.06]">
              {collection}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">About</div>
          <h2 className="mt-3 text-3xl font-semibold">A studio focused on visual calm, clarity, and craft.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            StillShot Studios approaches photography as a full visual system: direction, light, timing, framing, and edit all work together so the final image feels measured and premium.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">Creative standards</div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/65">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
          <InstagramFrame image={aboutPortraitUrl} alt="Side-profile portrait of a smiling woman near a bright window" label="About / portrait frame" className="aspect-[4/5]" />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Services</div>
            <h2 className="mt-3 text-3xl font-semibold">Photography services shaped around high-end presentation.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              Designed for clients who want a strong visual result and a polished working experience from first contact to final delivery.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium">{service}</h3>
                  <ChevronRight className="h-4 w-4 text-white/35" />
                </div>
                <p className="mt-3 text-sm leading-7 text-white/58">
                  Tailored to the subject, setting, and mood so the final image set feels cohesive and ready to present.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 lg:p-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Creative approach</div>
          <div className="mt-4 grid gap-4 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-neutral-950/55 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">0{index + 1}</div>
                <h3 className="mt-3 text-base font-medium">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Credibility & quality</div>
          <h2 className="mt-3 text-3xl font-semibold">Trust is built through consistency, preparation, and restraint.</h2>
          <p className="mt-5 text-base leading-8 text-white/65">
            Instead of leaning on fake social proof, the studio leans on what clients actually experience: clear communication, thoughtful direction, clean delivery, and imagery that holds up in premium contexts.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm font-medium">What clients can expect</div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/62">
              <li>• Clear planning before the shoot</li>
              <li>• Calm on-set direction</li>
              <li>• Refined curation and finishing</li>
              <li>• A premium, low-friction experience</li>
            </ul>
          </div>
          <InstagramFrame image={credibilityWallUrl} alt="Two curving modern towers against a pale sky" label="Credibility / structure frame" className="aspect-[4/5]" />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/40">Contact / booking</div>
              <h2 className="mt-3 text-3xl font-semibold">Ready to shape the next set of images?</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Reach out to discuss portraits, brand work, event coverage, or a custom concept. Replace the placeholders below with your preferred contact details when you’re ready.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a href="mailto:hello@stillshotstudios.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="https://www.instagram.com/stillshotstudios/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/85">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 px-6 py-8 text-sm text-white/45 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>StillShot Studios</div>
          <div>Premium photography portfolio</div>
        </div>
      </footer>
    </main>
  )
}
