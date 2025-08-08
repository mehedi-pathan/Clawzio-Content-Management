import { NextRequest, NextResponse } from 'next/server'
import { searchChannels } from '@/lib/youtube-api'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const maxResults = parseInt(searchParams.get('maxResults') || '10')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    const channels = await searchChannels(query, maxResults)
    return NextResponse.json({ channels })
  } catch (error) {
    console.error('YouTube search error:', error)
    return NextResponse.json({ error: 'Failed to search channels' }, { status: 500 })
  }
}
