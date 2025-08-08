"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, Eye, ThumbsUp, MessageSquare, Users, Search, Brain, Zap, Target, Clock, Star, Crown, Flame, Rocket, BarChart3, Play, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

const quickStats = [
  { label: "Channel Views", value: "125.4K", change: "+23%", icon: Eye, color: "text-blue-500" },
  { label: "Engagement", value: "8.2%", change: "+12%", icon: ThumbsUp, color: "text-green-500" },
  { label: "Subscribers", value: "+1,247", change: "+45%", icon: Users, color: "text-purple-500" },
  { label: "Watch Time", value: "2.1M min", change: "+34%", icon: Clock, color: "text-orange-500" }
]

const trendingTopics = [
  { 
    title: "AI Tools for Content Creation", 
    growth: "+245%", 
    category: "Tech",
    difficulty: "Easy",
    competition: "Medium"
  },
  { 
    title: "Sustainable Living Tips", 
    growth: "+189%", 
    category: "Lifestyle",
    difficulty: "Easy",
    competition: "Low"
  },
  { 
    title: "Mobile Photography Hacks", 
    growth: "+156%", 
    category: "Photography",
    difficulty: "Medium",
    competition: "High"
  }
]

const recentInsights = [
  {
    type: "Competitor Alert",
    message: "MrBeast uploaded a new video with 500K views in 2 hours",
    time: "5 min ago",
    priority: "high"
  },
  {
    type: "Trend Discovery",
    message: "\"Morning Routines\" is trending up 340% this week",
    time: "12 min ago",
    priority: "medium"
  },
  {
    type: "Content Suggestion",
    message: "Your audience engages 2x more with tutorial content",
    time: "1 hour ago",
    priority: "low"
  }
]

const achievements = [
  { title: "First Viral Video", description: "Video reached 100K+ views", icon: Flame, unlocked: true },
  { title: "Consistency Master", description: "Posted for 30 days straight", icon: Calendar, unlocked: true },
  { title: "Engagement King", description: "Achieved 10%+ engagement rate", icon: Crown, unlocked: false },
  { title: "Growth Rocket", description: "Gained 10K subscribers in a month", icon: Rocket, unlocked: false }
]

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8 max-w-7xl">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full px-4 py-2">
          <Crown className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Creator Dashboard</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Welcome Back, Creator!
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Track your growth, discover trends, and create content that dominates your niche
        </p>
      </motion.div>

      {/* Quick Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-background via-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-3xl font-black mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Main Dashboard Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Clawzio Picks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 via-purple-600/10 to-blue-600/10 border-primary/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      🎯 Clawzio AI Picks
                    </CardTitle>
                    <CardDescription>
                      Personalized opportunities powered by AI
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Hot Trend Alert */}
                <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-orange-800 dark:text-orange-400">🔥 Viral Opportunity</h3>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                    "10-Minute Morning Routines" is trending with 340% growth this week! Perfect timing for your niche.
                  </p>
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Create Content Now
                  </Button>
                </div>
                
                {/* Enhanced Competitor Analysis CTA */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-10 -mt-10" />
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-800 dark:text-blue-400 mb-1">
                        🕵️ Competitor Intelligence
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-300">
                        Most requested feature
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10">
                    Search any YouTube channel and get AI-powered insights, content strategies, and growth opportunities. 
                    See exactly what's working for them and adapt their winning strategies!
                  </p>
                  <div className="flex items-center gap-2 mb-4 text-xs relative z-10">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <Eye className="w-3 h-3 mr-1" />
                      Real Data
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      <Brain className="w-3 h-3 mr-1" />
                      AI Analysis
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      <Target className="w-3 h-3 mr-1" />
                      Actionable
                    </Badge>
                  </div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative z-10" asChild>
                    <Link href="/competitors">
                      <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Analyze Competitors Now
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-2"
                      >
                        →
                      </motion.div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Trending Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="shadow-xl border-primary/10 hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">🚀 Trending Now</CardTitle>
                      <CardDescription>Hot topics in your niche</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    View All →
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-muted/30 to-primary/5 rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-sm">{topic.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {topic.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {topic.difficulty}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {topic.competition} competition
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600 mb-1">{topic.growth}</div>
                      <div className="text-xs text-muted-foreground">growth</div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Recent Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="shadow-xl border-primary/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">💡 AI Insights</CardTitle>
                    <CardDescription>Real-time notifications</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`p-3 rounded-lg border-l-4 ${
                      insight.priority === 'high' ? 'bg-red-50 border-red-500 dark:bg-red-900/20' :
                      insight.priority === 'medium' ? 'bg-yellow-50 border-yellow-500 dark:bg-yellow-900/20' :
                      'bg-blue-50 border-blue-500 dark:bg-blue-900/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-primary mb-1">{insight.type}</p>
                        <p className="text-sm text-foreground leading-tight">{insight.message}</p>
                      </div>
                      <span className="text-xs text-muted-foreground ml-2">{insight.time}</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="shadow-xl border-primary/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">🏆 Achievements</CardTitle>
                    <CardDescription>Your creator journey</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className={`p-3 rounded-lg border ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800' 
                          : 'bg-muted/30 border-muted-foreground/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-6 h-6 ${achievement.unlocked ? 'text-green-600' : 'text-muted-foreground'}`} />
                        <div className="flex-1">
                          <p className={`font-semibold text-sm ${achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {achievement.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.unlocked && (
                          <Badge className="bg-green-100 text-green-700 text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Unlocked
                          </Badge>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="shadow-xl border-primary/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">📈 Growth Goals</CardTitle>
                    <CardDescription>This month's progress</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Subscriber Goal</span>
                    <span className="font-semibold">1,247 / 2,000</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Content Created</span>
                    <span className="font-semibold">8 / 12 videos</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Engagement Rate</span>
                    <span className="font-semibold">8.2% / 10%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Button 
          className="h-20 flex-col gap-2 bg-gradient-to-r from-red-500/10 to-purple-500/10 hover:from-red-500/20 hover:to-purple-500/20 border border-red-500/20 hover:border-red-500/30 transition-all duration-300 group" 
          variant="outline"
          asChild
        >
          <Link href="/ideas">
            <Brain className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">New Ideas</span>
          </Link>
        </Button>
        <Button 
          className="h-20 flex-col gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group" 
          variant="outline"
          asChild
        >
          <Link href="/scripts">
            <MessageSquare className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Write Script</span>
          </Link>
        </Button>
        <Button 
          className="h-20 flex-col gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 border border-green-500/20 hover:border-green-500/30 transition-all duration-300 group" 
          variant="outline"
          asChild
        >
          <Link href="/seo">
            <Search className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">SEO Tools</span>
          </Link>
        </Button>
        <Button 
          className="h-20 flex-col gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group" 
          variant="outline"
          asChild
        >
          <Link href="/competitors">
            <Users className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Analyze</span>
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
