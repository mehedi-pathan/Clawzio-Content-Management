"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Lightbulb, Sparkles, TrendingUp, Clock, Target, Brain, Wand2, RefreshCw, Copy, Heart, Bookmark } from 'lucide-react'

const niches = ["Tech", "Lifestyle", "Gaming", "Education", "Business", "Entertainment", "Health", "Finance"]

export default function IdeasPage() {
  const [selectedNiche, setSelectedNiche] = useState("All")
  const [isGenerating, setIsGenerating] = useState(false)
  const [contentIdeas, setContentIdeas] = useState([
    {
      title: "10 Morning Routines That Will Change Your Life",
      description: "Share different morning routines and their benefits for productivity and wellness",
      category: "Lifestyle",
      difficulty: "Easy",
      trendScore: 95,
      estimatedViews: "50K-100K",
      tags: ["morning routine", "productivity", "wellness", "habits"]
    },
    {
      title: "AI Tools Every Content Creator Needs in 2024",
      description: "Review the latest AI tools that can help streamline content creation process",
      category: "Tech",
      difficulty: "Medium",
      trendScore: 87,
      estimatedViews: "25K-75K",
      tags: ["AI", "content creation", "tools", "productivity"]
    },
    {
      title: "Why 99% of YouTube Channels Fail (And How to Avoid It)",
      description: "Analyze common mistakes new YouTubers make and provide actionable solutions",
      category: "Education",
      difficulty: "Medium",
      trendScore: 92,
      estimatedViews: "75K-150K",
      tags: ["youtube tips", "creator advice", "growth strategy"]
    }
  ])

  const handleGenerate = async () => {
    setIsGenerating(true)
    
    // Simulate API call with new ideas generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate new ideas based on selected niche
    const newIdeas = generateIdeasForNiche(selectedNiche)
    setContentIdeas(newIdeas)
    
    setIsGenerating(false)
  }

  const generateIdeasForNiche = (niche: string) => {
    const ideaTemplates = {
      "Tech": [
        {
          title: "AI Tools That Will Replace Your Job in 2024",
          description: "Explore the latest AI tools that are revolutionizing different industries and how to adapt",
          category: "Tech",
          difficulty: "Medium",
          trendScore: 94,
          estimatedViews: "100K-200K",
          tags: ["AI", "future of work", "automation", "career advice"]
        },
        {
          title: "Building a $1000 Gaming Setup on a Budget",
          description: "Complete guide to building a powerful gaming setup without breaking the bank",
          category: "Tech",
          difficulty: "Easy",
          trendScore: 88,
          estimatedViews: "75K-150K",
          tags: ["gaming", "budget build", "PC building", "reviews"]
        },
        {
          title: "Why Everyone's Wrong About Foldable Phones",
          description: "Debunking common myths about foldable phones and their real-world usability",
          category: "Tech",
          difficulty: "Medium",
          trendScore: 91,
          estimatedViews: "60K-120K",
          tags: ["foldable phones", "mobile tech", "reviews", "future tech"]
        }
      ],
      "Lifestyle": [
        {
          title: "30-Day Digital Detox Challenge Results",
          description: "Document your journey of disconnecting from social media and technology for 30 days",
          category: "Lifestyle",
          difficulty: "Easy",
          trendScore: 89,
          estimatedViews: "80K-160K",
          tags: ["digital detox", "mental health", "productivity", "wellness"]
        },
        {
          title: "Living in a Tiny House for 6 Months - Honest Review",
          description: "Real experiences, costs, and lessons learned from tiny house living",
          category: "Lifestyle",
          difficulty: "Medium",
          trendScore: 85,
          estimatedViews: "90K-180K",
          tags: ["tiny house", "minimalism", "sustainable living", "real estate"]
        },
        {
          title: "Zero Waste Lifestyle: What Actually Works",
          description: "Practical tips for reducing waste based on real experience, not just theory",
          category: "Lifestyle",
          difficulty: "Easy",
          trendScore: 92,
          estimatedViews: "70K-140K",
          tags: ["zero waste", "sustainability", "eco-friendly", "green living"]
        }
      ],
      "Gaming": [
        {
          title: "Hidden Indie Games That Deserve More Attention",
          description: "Showcase amazing indie games that flew under the radar but are worth playing",
          category: "Gaming",
          difficulty: "Easy",
          trendScore: 87,
          estimatedViews: "50K-100K",
          tags: ["indie games", "hidden gems", "game reviews", "gaming discovery"]
        },
        {
          title: "Pro Gamer Reacts to Beginner Mistakes",
          description: "Professional gamer analyzes and corrects common mistakes made by new players",
          category: "Gaming",
          difficulty: "Medium",
          trendScore: 93,
          estimatedViews: "120K-250K",
          tags: ["pro gaming", "gaming tips", "skill improvement", "reaction"]
        },
        {
          title: "Building the Ultimate Streaming Setup for Under $500",
          description: "Complete guide to creating a professional streaming setup on a tight budget",
          category: "Gaming",
          difficulty: "Medium",
          trendScore: 90,
          estimatedViews: "85K-170K",
          tags: ["streaming", "budget setup", "content creation", "gaming gear"]
        }
      ]
    }
    
    const defaultIdeas = [
      {
        title: "The Psychology Behind Viral Content",
        description: "Analyze what makes content go viral and how to apply these principles to your videos",
        category: "Education",
        difficulty: "Medium",
        trendScore: 86,
        estimatedViews: "40K-80K",
        tags: ["viral content", "psychology", "content strategy", "social media"]
      },
      {
        title: "24 Hours in [Your City] Challenge",
        description: "Explore everything your city has to offer in just 24 hours with a limited budget",
        category: "Travel",
        difficulty: "Easy",
        trendScore: 84,
        estimatedViews: "60K-120K",
        tags: ["travel", "local exploration", "challenge", "budget travel"]
      },
      {
        title: "Learning a New Skill in 30 Days",
        description: "Document your journey learning a completely new skill from scratch in one month",
        category: "Education",
        difficulty: "Medium",
        trendScore: 88,
        estimatedViews: "55K-110K",
        tags: ["skill learning", "personal development", "challenge", "education"]
      }
    ]
    
    return ideaTemplates[niche as keyof typeof ideaTemplates] || defaultIdeas
  }

  return (
    <div className="container mx-auto px-4 py-6 space-y-8 max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full px-4 py-2">
          <Lightbulb className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI Content Ideas</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Never Run Out of Ideas
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Generate viral content ideas powered by AI analysis of trending topics and your niche
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-between"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedNiche === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedNiche("All")}
            className="rounded-full"
          >
            All Niches
          </Button>
          {niches.map((niche) => (
            <Button
              key={niche}
              variant={selectedNiche === niche ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedNiche(niche)}
              className="rounded-full"
            >
              {niche}
            </Button>
          ))}
        </div>
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate New Ideas
            </>
          )}
        </Button>
      </motion.div>

      {/* Content Ideas Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentIdeas.map((idea, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full bg-gradient-to-br from-background via-background to-primary/5 border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {idea.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-bold text-green-600">{idea.trendScore}%</span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{idea.title}</CardTitle>
                <CardDescription className="leading-relaxed">{idea.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Difficulty</p>
                    <Badge variant="outline" className={`text-xs ${
                      idea.difficulty === 'Easy' ? 'border-green-300 text-green-700' :
                      idea.difficulty === 'Medium' ? 'border-yellow-300 text-yellow-700' :
                      'border-red-300 text-red-700'
                    }`}>
                      {idea.difficulty}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Est. Views</p>
                    <p className="font-semibold text-primary">{idea.estimatedViews}</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground mb-2 text-sm">Tags</p>
                  <div className="flex flex-wrap gap-1">
                    {idea.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Script
                  </Button>
                  <Button size="sm" variant="outline">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
