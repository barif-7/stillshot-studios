import { work1Url, work2Url, work3Url, work4Url } from './instagram/selected-images'

export type PrintProduct = {
  title: string
  category: string
  description: string
  image: string
  alt: string
  price: string
  sizes: string[]
  paper: string
  edition: string
}

export const printProducts: PrintProduct[] = [
  {
    title: 'Tower Geometry',
    category: 'Architecture print',
    description: 'Clean verticals and precise contrast make this a strong centerpiece for a home office or studio wall.',
    image: work1Url,
    alt: 'Tall modern skyscraper framed against the sky',
    price: 'From $85',
    sizes: ['8x10', '12x18', '20x30'],
    paper: 'Archival matte or lustre finish',
    edition: 'Open edition',
  },
  {
    title: 'Golden Horizon',
    category: 'Landscape print',
    description: 'A warm, atmospheric frame that works well as a quiet focal point in living spaces.',
    image: work2Url,
    alt: 'Golden sunset over water with a glowing horizon',
    price: 'From $95',
    sizes: ['8x10', '12x18', '24x36'],
    paper: 'Museum-grade matte paper',
    edition: 'Open edition',
  },
  {
    title: 'Neon Street',
    category: 'Night city print',
    description: 'Bold color and street energy, kept sharp so it still feels premium when printed large.',
    image: work3Url,
    alt: 'Neon-lit city street at night',
    price: 'From $110',
    sizes: ['11x14', '16x24', '20x30'],
    paper: 'Fine art cotton rag',
    edition: 'Limited run',
  },
  {
    title: 'Night Canal',
    category: 'Cityscape print',
    description: 'Reflections and depth give this image a more cinematic tone on paper.',
    image: work4Url,
    alt: 'Night canal between tall buildings with reflections on the water',
    price: 'From $110',
    sizes: ['11x14', '16x24', '24x36'],
    paper: 'Archival matte or glossy finish',
    edition: 'Limited run',
  },
]

export const storeHighlights = [
  {
    title: 'Museum-grade output',
    description: 'Color-managed prints with archival materials chosen to keep contrast and tone consistent.',
  },
  {
    title: 'Signed on request',
    description: 'Prints can be signed and numbered when the image is part of a limited run.',
  },
  {
    title: 'Thoughtful packing',
    description: 'Orders are packed for safe delivery, with flat or rolled shipping depending on size.',
  },
]

export const printSteps = [
  'Pick a frame and choose a size',
  'Confirm paper, finish, and shipping',
  'Receive an invoice and production timeline',
]
