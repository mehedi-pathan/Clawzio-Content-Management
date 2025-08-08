import { NextRequest, NextResponse } from 'next/server'
import { generateNicheInsights } from '@/lib/gemini-analysis'

export async function POST(request: NextRequest) {
  try {
    const { niche, competitors } = await request.json()

    if (!niche) {
      return NextResponse.json({ error: 'Niche is required' }, { status: 400 })
    }

    const insights = await generateNicheInsights(niche, competitors || [])
    return NextResponse.json({ insights })
  } catch (error) {
    console.error('Niche insights error:', error)
    return NextResponse.json({ error: 'Failed to generate niche insights' }, { status: 500 })
  }
}
