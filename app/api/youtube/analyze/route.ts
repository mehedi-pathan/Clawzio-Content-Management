import { NextRequest, NextResponse } from 'next/server'
import { getChannelAnalytics } from '@/lib/youtube-api'
import { analyzeCompetitorWithGemini } from '@/lib/gemini-analysis'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { channelId, channelName, niche, goals } = body

    // If no channelId provided, try to use channelName or return mock data
    const targetChannelId = channelId || channelName || 'mock_channel'

    console.log('Analyzing channel:', { channelId: targetChannelId, channelName, niche })

    // Get YouTube analytics
    const analytics = await getChannelAnalytics(targetChannelId)
    
    // Get AI analysis if niche and goals are provided
    let aiAnalysis = null
    if (niche && goals && goals.length > 0) {
      try {
        aiAnalysis = await analyzeCompetitorWithGemini(analytics, niche, goals)
      } catch (error) {
        console.error('AI analysis failed:', error)
        // Continue without AI analysis
      }
    }

    return NextResponse.json({ 
      analytics,
      aiAnalysis,
      success: true
    })
  } catch (error) {
    console.error('Channel analysis error:', error)
    
    // Return a structured error response with mock data
    const mockAnalytics = {
      channel: {
        id: 'mock_channel',
        title: 'Sample Channel',
        description: 'Sample channel for demonstration',
        subscriberCount: '1000000',
        videoCount: '500',
        viewCount: '50000000',
        thumbnails: {
          default: { url: '/placeholder.svg?height=88&width=88' },
          medium: { url: '/placeholder.svg?height=240&width=240' },
          high: { url: '/placeholder.svg?height=800&width=800' }
        },
        publishedAt: '2020-01-01T00:00:00Z'
      },
      recentVideos: [],
      topVideos: [],
      averageViews: 100000,
      engagementRate: 5.0,
      uploadFrequency: 'Weekly',
      bestPerformingTags: ['content', 'video', 'tutorial'],
      optimalUploadTimes: ['14:00', '16:00', '18:00'],
      contentCategories: [
        { category: 'Educational', percentage: 50 },
        { category: 'Entertainment', percentage: 30 },
        { category: 'Review', percentage: 20 }
      ]
    }

    return NextResponse.json({ 
      analytics: mockAnalytics,
      aiAnalysis: null,
      success: false,
      error: 'Analysis failed, showing demo data'
    })
  }
}
