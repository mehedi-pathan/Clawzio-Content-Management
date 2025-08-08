"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Brain, TrendingUp, Users, Eye, ThumbsUp, MessageSquare, Clock, Target, Zap, BarChart3, Download, Play, Calendar, Globe, Star, ArrowRight, Lightbulb, Trophy, AlertTriangle } from 'lucide-react'

const popularChannels = [
  "MrBeast", "PewDiePie", "Dude Perfect", "Markiplier", "Emma Chamberlain"
]

const mockAnalysisData = {
  channelInfo: {
    name: "TechReviewer",
    subscribers: "2.3M",
    totalViews: "156M",
    videosCount: "1,247",
    avgViews: "125K",
    engagementRate: "8.2%"
  },
  topVideos: [
    {
      title: "iPhone 15 Pro Max Review - The Truth!",
      views: "2.1M",
      likes: "89K",
      comments: "12K",
      uploadDate: "2 days ago",
      duration: "12:34"
    },
    {
      title: "Best Budget Phones 2024",
      views: "1.8M",
      likes: "76K",
      comments: "8.9K",
      uploadDate: "1 week ago",
      duration: "15:22"
    }
  ],
  contentStrategy: {
    uploadFrequency: "3-4 videos per week",
    bestUploadTime: "2:00 PM EST",
    avgVideoLength: "12:45",
    topCategories: ["Tech Reviews", "Unboxing", "Comparisons"]
  },
  opportunities: [
    {
      type: "Content Gap",
      title: "Foldable Phone Reviews",
      potential: "High",
      description: "Competitor hasn't covered foldable phones in 6 months"
    },
    {
      type: "Trending Topic",
      title: "AI Phone Features",
      potential: "Very High",
      description: "Growing 245% but competitor coverage is limited"
    }
  ]
}

export default function CompetitorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedNiche, setSelectedNiche] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasResults, setHasResults] = useState(false)
  const [analysisData, setAnalysisData] = useState(null)

  const handleAnalyze = async () => {
    if (!searchQuery.trim()) return
    
    setIsAnalyzing(true)
    
    try {
      // Extract channel ID or name from URL
      const channelInfo = extractChannelInfo(searchQuery)
      
      // Call the YouTube API
      const response = await fetch('/api/youtube/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channelId: channelInfo.id,
          channelName: channelInfo.name,
          niche: selectedNiche,
          goals: ['growth', 'engagement']
        }),
      })
      
      if (response.ok) {
        const data = await response.json()
        setAnalysisData(data)
        setHasResults(true)
      } else {
        // Fallback to mock data if API fails
        setAnalysisData(getMockAnalysisData(searchQuery))
        setHasResults(true)
      }
    } catch (error) {
      console.error('Analysis failed:', error)
      // Use mock data as fallback
      setAnalysisData(getMockAnalysisData(searchQuery))
      setHasResults(true)
    }
    
    setIsAnalyzing(false)
  }

  const extractChannelInfo = (input: string) => {
    // Handle different YouTube URL formats
    const patterns = [
      /youtube\.com\/channel\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/c\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/user\/([a-zA-Z0-9_-]+)/,
      /youtube\.com\/@([a-zA-Z0-9_-]+)/,
      /youtu\.be\/([a-zA-Z0-9_-]+)/
    ]
    
    for (const pattern of patterns) {
      const match = input.match(pattern)
      if (match) {
        return { id: match[1], name: match[1] }
      }
    }
    
    // If no URL pattern matches, treat as channel name
    return { id: null, name: input.trim() }
  }

  const getMockAnalysisData = (query: string) => {
    return {
      channelInfo: {
        name: query.includes('http') ? "Analyzed Channel" : query,
        subscribers: "2.3M",
        totalViews: "156M",
        videosCount: "1,247",
        avgViews: "125K",
        engagementRate: "8.2%"
      },
      topVideos: [
        {
          title: "Latest Viral Video - Amazing Results!",
          views: "2.1M",
          likes: "89K",
          comments: "12K",
          uploadDate: "2 days ago",
          duration: "12:34"
        },
        {
          title: "Best Content Strategy for 2024",
          views: "1.8M",
          likes: "76K",
          comments: "8.9K",
          uploadDate: "1 week ago",
          duration: "15:22"
        }
      ],
      contentStrategy: {
        uploadFrequency: "3-4 videos per week",
        bestUploadTime: "2:00 PM EST",
        avgVideoLength: "12:45",
        topCategories: ["Educational", "Entertainment", "Reviews"]
      },
      opportunities: [
        {
          type: "Content Gap",
          title: `${selectedNiche || 'Niche'} Deep Dive Content`,
          potential: "High",
          description: "Competitor hasn't covered this trending subtopic in depth"
        },
        {
          type: "Trending Topic",
          title: "AI Integration Content",
          potential: "Very High",
          description: "Growing 245% but competitor coverage is limited"
        }
      ]
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Competitor Intelligence
        </h1>
        <p className="text-muted-foreground">
          Analyze any YouTube channel and discover their winning strategies
        </p>
      </motion.div>

      {/* Enhanced Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-purple-500/5 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Start Your Analysis</CardTitle>
                <CardDescription className="text-base">
                  Enter any YouTube channel to get AI-powered insights
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Search Input */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Enter YouTube channel name or URL..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-14 text-lg border-2 border-primary/20 focus:border-primary/40"
                  onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                />
              </div>
              
              {/* Niche Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select value={selectedNiche} onValueChange={setSelectedNiche}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your niche (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  onClick={handleAnalyze}
                  disabled={!searchQuery.trim() || isAnalyzing}
                  className="h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg font-semibold"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      Analyze with AI
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Quick Examples */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-center">Try these popular channels:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularChannels.map((channel) => (
                  <Button
                    key={channel}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(channel)}
                    className="text-xs hover:bg-primary/10 hover:border-primary/30"
                  >
                    {channel}
                  </Button>
                ))}
              </div>
            </div>

            {/* Benefits Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-primary/20">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-muted-foreground">Real Performance Data</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-muted-foreground">AI-Powered Analysis</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Target className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-muted-foreground">Actionable Strategies</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Analysis Results */}
      {hasResults && analysisData && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
              <TabsTrigger value="insights">AI Insights</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="w-5 h-5 text-primary" />
                      Channel Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subscribers</span>
                      <span className="font-semibold">{analysisData?.channelInfo?.subscribers || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Views</span>
                      <span className="font-semibold">{analysisData?.channelInfo?.totalViews || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Videos</span>
                      <span className="font-semibold">{analysisData?.channelInfo?.videosCount || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg Views</span>
                      <span className="font-semibold">{analysisData?.channelInfo?.avgViews || 'N/A'}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      Engagement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500 mb-1">
                        {analysisData?.channelInfo?.engagementRate || '0%'}
                      </div>
                      <p className="text-sm text-muted-foreground">Engagement Rate</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Likes</span>
                        <span className="text-green-600">Above Average</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Comments</span>
                        <span className="text-green-600">High</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="w-5 h-5 text-blue-500" />
                      Upload Pattern
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500 mb-1">3-4</div>
                      <p className="text-sm text-muted-foreground">Videos per week</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Best Time</span>
                        <span className="font-medium">{analysisData?.contentStrategy?.bestUploadTime || '2:00 PM EST'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Avg Length</span>
                        <span className="font-medium">{analysisData?.contentStrategy?.avgVideoLength || '12:45'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    Top Performing Videos
                  </CardTitle>
                  <CardDescription>
                    Analyze their most successful content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {analysisData?.topVideos?.length > 0 ? (
                    analysisData.topVideos.map((video, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium mb-2">{video.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {video.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              {video.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {video.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {video.duration}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">{video.uploadDate}</Badge>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No video data available
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Opportunities Tab */}
            <TabsContent value="opportunities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    Growth Opportunities
                  </CardTitle>
                  <CardDescription>
                    AI-identified opportunities to outperform this competitor
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {analysisData?.opportunities?.length > 0 ? (
                    analysisData.opportunities.map((opportunity, index) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {opportunity.type}
                            </Badge>
                            <Badge variant={opportunity.potential === 'Very High' ? 'destructive' : 'default'}>
                              {opportunity.potential} Potential
                            </Badge>
                          </div>
                          <Trophy className="w-5 h-5 text-yellow-600" />
                        </div>
                        <h4 className="font-semibold mb-1">{opportunity.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                        <Button size="sm" className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          Create Content
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No opportunities identified yet
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI Insights Tab */}
            <TabsContent value="insights" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-purple-500" />
                    AI Strategic Analysis
                  </CardTitle>
                  <CardDescription>
                    Deep AI analysis of competitor strategies and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-green-600">Strengths</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Consistent upload schedule builds audience loyalty</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>High engagement rate indicates strong community</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Optimal video length for their niche</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-red-600">Weaknesses</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Limited coverage of trending subtopics</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Thumbnail design could be more eye-catching</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>Underutilizing YouTube Shorts format</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-600" />
                      AI Recommendation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on creating content around "AI Phone Features" and "Foldable Phone Reviews" - these topics show high search volume but limited competitor coverage. Consider shorter, more frequent uploads to capitalize on trending topics faster.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Performance Metrics
                  </CardTitle>
                  <CardDescription>
                    Detailed performance analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    Performance data will be available after analysis
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Strategy Tab */}
            <TabsContent value="strategy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Content Strategy
                  </CardTitle>
                  <CardDescription>
                    Their content strategy breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Upload Schedule</h4>
                      <p className="text-muted-foreground">{analysisData?.contentStrategy?.uploadFrequency || 'Not available'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Best Upload Time</h4>
                      <p className="text-muted-foreground">{analysisData?.contentStrategy?.bestUploadTime || 'Not available'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Average Video Length</h4>
                      <p className="text-muted-foreground">{analysisData?.contentStrategy?.avgVideoLength || 'Not available'}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Top Categories</h4>
                      <div className="flex flex-wrap gap-1">
                        {analysisData?.contentStrategy?.topCategories?.map((category, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        )) || <span className="text-muted-foreground">Not available</span>}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Export Options */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Export Analysis</h3>
                  <p className="text-sm text-muted-foreground">Download detailed report for your team</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
