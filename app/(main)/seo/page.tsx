"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, TrendingUp, Target, Zap, CheckCircle, AlertCircle, BarChart3, Users, Eye, ThumbsUp, Clock, Sparkles, Brain, Trophy } from 'lucide-react'

const seoScore = 78
const keywordSuggestions = [
  { keyword: "AI content creation", volume: "12K", difficulty: "Medium", trend: "+15%" },
  { keyword: "YouTube growth tips", volume: "8.5K", difficulty: "High", trend: "+23%" },
  { keyword: "Content creator tools", volume: "6.2K", difficulty: "Low", trend: "+8%" },
  { keyword: "Video optimization", volume: "4.8K", difficulty: "Medium", trend: "+12%" }
]

const competitorKeywords = [
  { channel: "TechReviewer", keyword: "best tech 2024", position: 3, volume: "15K" },
  { channel: "CreatorHub", keyword: "youtube algorithm", position: 1, volume: "22K" },
  { channel: "VideoMaster", keyword: "content strategy", position: 5, volume: "9K" }
]

const trendingTopics = [
  { topic: "AI Tools for Creators", growth: "+245%", difficulty: "Medium", potential: "High" },
  { topic: "Short Form Content", growth: "+189%", difficulty: "High", potential: "Very High" },
  { topic: "Creator Economy", growth: "+156%", difficulty: "Low", potential: "Medium" }
]

export default function SEOPage() {
  const [title, setTitle] = useState("How to Grow Your YouTube Channel with AI Tools")
  const [description, setDescription] = useState("Discover the best AI tools that can help you grow your YouTube channel faster than ever before.")
  const [tags, setTags] = useState("AI tools, YouTube growth, content creation, automation")

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          SEO Optimization Hub
        </h1>
        <p className="text-muted-foreground">
          Optimize your content for maximum discoverability
        </p>
      </motion.div>

      <Tabs defaultValue="optimizer" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="optimizer">Content Optimizer</TabsTrigger>
          <TabsTrigger value="keywords">Keyword Research</TabsTrigger>
          <TabsTrigger value="competitors">Competitor SEO</TabsTrigger>
          <TabsTrigger value="trending">Trending Topics</TabsTrigger>
        </TabsList>

        {/* Content Optimizer Tab */}
        <TabsContent value="optimizer" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Content Details
                </CardTitle>
                <CardDescription>
                  Enter your content details for AI-powered optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Video Title</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your video title..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your video description..."
                    rows={4}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Tags</label>
                  <Input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Enter tags separated by commas..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  <Zap className="w-4 h-4 mr-2" />
                  Optimize with AI
                </Button>
              </CardContent>
            </Card>

            {/* SEO Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  SEO Score
                </CardTitle>
                <CardDescription>
                  Real-time analysis of your content optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{seoScore}/100</div>
                  <Progress value={seoScore} className="w-full" />
                  <p className="text-sm text-muted-foreground mt-2">Good optimization score</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Title length is optimal (62 characters)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Description includes target keywords</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Consider adding more relevant tags</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm">Title could be more engaging</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">AI Suggestions</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Add numbers to your title for better CTR</p>
                    <p>• Include emotional triggers like "Amazing" or "Secret"</p>
                    <p>• Use trending hashtags in your description</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Keyword Research Tab */}
        <TabsContent value="keywords" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Keyword Research
                </CardTitle>
                <CardDescription>
                  Discover high-performing keywords for your niche
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input placeholder="Enter your topic or niche..." className="flex-1" />
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <Brain className="w-4 h-4 mr-2" />
                    Research
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Suggested Keywords</h3>
                  {keywordSuggestions.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{keyword.keyword}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {keyword.volume}/month
                          </span>
                          <Badge variant={keyword.difficulty === 'Low' ? 'secondary' : keyword.difficulty === 'Medium' ? 'default' : 'destructive'}>
                            {keyword.difficulty}
                          </Badge>
                          <span className="text-sm text-green-600 font-medium">{keyword.trend}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Use Keyword
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Competitor SEO Tab */}
        <TabsContent value="competitors" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Competitor SEO Analysis
                </CardTitle>
                <CardDescription>
                  See what keywords your competitors are ranking for
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <Input placeholder="Enter competitor channel URL..." className="flex-1" />
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <Search className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Top Competitor Keywords</h3>
                  {competitorKeywords.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{item.keyword}</h4>
                          <Badge variant="outline">{item.channel}</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">
                            Position #{item.position}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.volume}/month
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Target This
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Trending Topics Tab */}
        <TabsContent value="trending" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Trending Topics for SEO
                </CardTitle>
                <CardDescription>
                  Discover trending topics with high SEO potential
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                    <CardContent className="p-4 text-center">
                      <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
                      <div className="text-2xl font-bold text-green-600">156</div>
                      <div className="text-sm text-muted-foreground">Trending Topics</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800">
                    <CardContent className="p-4 text-center">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                      <div className="text-2xl font-bold text-blue-600">89%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                    <CardContent className="p-4 text-center">
                      <Clock className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <div className="text-2xl font-bold text-purple-600">24h</div>
                      <div className="text-sm text-muted-foreground">Updated</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">High-Potential Topics</h3>
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{topic.topic}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-green-600 font-medium">{topic.growth}</span>
                          <Badge variant={topic.difficulty === 'Low' ? 'secondary' : topic.difficulty === 'Medium' ? 'default' : 'destructive'}>
                            {topic.difficulty}
                          </Badge>
                          <Badge variant={topic.potential === 'High' ? 'default' : topic.potential === 'Very High' ? 'destructive' : 'secondary'}>
                            {topic.potential} Potential
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Create Content
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
