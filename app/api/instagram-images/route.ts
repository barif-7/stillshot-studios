import { NextResponse } from 'next/server'
import { instagramImageUrls } from '../../../data/instagram/selected-images'

export async function GET() {
  return NextResponse.json(instagramImageUrls)
}
