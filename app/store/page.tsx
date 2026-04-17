import Link from 'next/link'
import { ArrowRight, Camera, Check, Mail, Package, ShoppingBag, Sparkles } from 'lucide-react'
import { InstagramFrame } from '../../components/InstagramFrame'
import { heroMainUrl, heroSupportUrl } from '../../data/instagram/selected-images'
import { printProducts, printSteps, storeHighlights } from '../../data/store-content'

export const metadata = {
  title: 'Store — StillShot Studios',
  description: 'Archival fine art prints from the strongest images in the StillShot Studios portfolio.',
}

function buildPrintInquiryHref(title: string) {
  const subject = encodeURIComponent(`StillShot Studios print inquiry: ${title}`)
  const body = encodeURIComponent(`Hi StillShot Studios,\n\nI’d like to purchase a print of "${title}".\n\nPlease send sizing, paper, and shipping details.\n`)
  return `mailto:hello@stillshotstudios.com?subject=${subject}&body=${body}`
}

export default function StorePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Camera className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-medium tracking-[0.28em] text-white/70 uppercase">StillShot Studios</div>
              <div className="text-xs text-white/40">Print store</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#prints" className="transition-colors hover:text-white">Prints</a>
            <a href="#details" className="transition-colors hover:text-white">Details</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200/90">
            <ShoppingBag className="h-3.5 w-3.5" />
            Fine art print store
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            The best frames, available as archival prints.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 text-balance">
            Each print is selected for strong composition, tonal depth, and wall-ready presence. Choose a favorite, pick a size, and request a purchase by email.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#prints"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5"
            >
              Browse prints <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@stillshotstudios.com?subject=StillShot%20Studios%20print%20request"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
            >
              Request purchase <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {storeHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/65">
                <div className="font-medium text-white/80">{item.title}</div>
                <div className="mt-2 leading-6">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <InstagramFrame image={heroMainUrl} alt="Warm symmetrical corridor with repeating arches and hanging lights" label="Signature print preview" priority className="sm:col-span-2 aspect-[16/11]" />
          <InstagramFrame image={heroSupportUrl} alt="Close-up of splashing water against a textured surface" label="Paper texture study" className="aspect-[4/5]" />
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Order flow</div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-white/70">
              {printSteps.map((step, index) => (
                <div key={step} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/8 text-xs text-amber-200">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prints" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/40">Available prints</div>
            <h2 className="mt-3 text-3xl font-semibold">A small, curated set of the strongest images.</h2>
          </div>
          <div className="hidden text-sm text-white/45 md:block">Archival prints start at $85.</div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {printProducts.map((product) => (
            <article key={product.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 transition-transform hover:-translate-y-1">
              <div className="grid gap-4 lg:grid-cols-[1fr_0.92fr]">
                <InstagramFrame image={product.image} alt={product.alt} label={product.category} className="aspect-[4/5]" />
                <div className="flex flex-col justify-between rounded-[1.5rem] bg-neutral-950/70 p-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">{product.category}</div>
                    <h3 className="mt-3 text-2xl font-medium">{product.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/64">{product.description}</p>
                    <div className="mt-6 space-y-3 text-sm text-white/70">
                      <div><span className="text-white/40">Sizes</span> {product.sizes.join(', ')}</div>
                      <div><span className="text-white/40">Paper</span> {product.paper}</div>
                      <div><span className="text-white/40">Edition</span> {product.edition}</div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-white/8 pt-4">
                    <div className="flex items-center justify-between gap-4 text-sm text-white/55">
                      <span>{product.price}</span>
                      <span className="inline-flex items-center gap-1 text-amber-200/80"><Check className="h-4 w-4" /> Ready to order</span>
                    </div>
                    <a
                      href={buildPrintInquiryHref(product.title)}
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition-transform hover:-translate-y-0.5"
                    >
                      Buy print <Package className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="details" className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-white/40">Print details</div>
          <h2 className="mt-3 text-3xl font-semibold">Built for walls that need something calm and premium.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            This is a lean print store by design, with a focused selection instead of an endless catalog. If you want a custom size or a different crop, send a note and we can quote it.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-200/70">What’s included</div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/65">
              <li>Archival print production</li>
              <li>Finish options on request</li>
              <li>Shipping timeline before payment</li>
              <li>Custom sizing quotes available</li>
            </ul>
          </div>
          <InstagramFrame image={heroSupportUrl} alt="Close-up of splashing water against a textured surface" label="Detail / texture" className="aspect-[4/5]" />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/40">Contact / purchase</div>
              <h2 className="mt-3 text-3xl font-semibold">Want one of these on your wall?</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Send a quick note and I’ll reply with sizing, paper options, and shipping details for the print you want.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-neutral-950/45 p-6 text-sm leading-7 text-white/70">
              <div className="text-sm font-medium text-white/85">Best next step</div>
              <p className="mt-3">Choose a print, hit buy, and I’ll send back the details needed to finalize the order.</p>
              <a href="mailto:hello@stillshotstudios.com" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950">
                Email the studio <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 px-6 py-8 text-sm text-white/45 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>StillShot Studios print store</div>
          <Link href="/" className="text-white/65 transition-colors hover:text-white">Back to portfolio</Link>
        </div>
      </footer>
    </main>
  )
}
