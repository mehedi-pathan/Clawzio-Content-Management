"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Sparkles, Wand2, Image, Video, Mic, Type, Palette, Crown, Lock, Zap, Brain, Camera, Music, FileText, Hash, Target, TrendingUp, Clock, Download, Share, Copy } from 'lucide-react'

const aiTools = [
  {
    id: 'thumbnail-generator',
    name: 'AI Thumbnail Generator',
    description: 'Create eye-catching thumbnails that boost click-through rates',
    icon: Image,
    category: 'Visual',
    premium: false,
    features: ['Custom text overlay', 'Face detection', 'A/B testing suggestions'],
    usage: '12/50 this month'
  },
  {
    id: 'title-optimizer',
    name: 'Title Optimizer Pro',
    description: 'Generate viral titles using AI and trending patterns',
    icon: Type,
    category: 'Content',
    premium: false,
    features: ['Viral pattern analysis', 'Emotion scoring', 'Length optimization'],
    usage: '8/25 this month'
  },
  {
    id: 'script-writer',
    name: 'AI Script Writer',
    description: 'Generate complete video scripts with hooks and CTAs',
    icon: FileText,
    category: 'Content',
    premium: true,
    features: ['Multiple formats', 'Tone adjustment', 'Research integration'],
    usage: 'Premium required'
  },
  {
    id: 'voice-cloner',
    name: 'Voice Cloning Studio',
    description: 'Clone your voice for consistent narration',
    icon: Mic,
    category: 'Audio',
    premium: true,
    features: ['Voice training', 'Multiple languages', 'Emotion control'],
    usage: 'Premium required'
  },
  {
    id: 'trend-predictor',
    name: 'Trend Predictor AI',
    description: 'Predict trending topics before they go viral',
    icon: TrendingUp,
    category: 'Analytics',
    premium: true,
    features: ['7-day predictions', 'Niche-specific trends', 'Confidence scoring'],
    usage: 'Premium required'
  },
  {
    id: 'hashtag-generator',
    name: 'Smart Hashtag Generator',
    description: 'Generate optimized hashtags for maximum reach',
    icon: Hash,
    category: 'SEO',
    premium: false,
    features: ['Trending hashtags', 'Competition analysis', 'Performance tracking'],
    usage: '15/30 this month'
  },
  {
    id: 'color-palette',
    name: 'Brand Color AI',
    description: 'Generate cohesive color palettes for your brand',
    icon: Palette,
    category: 'Visual',
    premium: true,
    features: ['Psychology-based colors', 'Accessibility check', 'Export formats'],
    usage: 'Premium required'
  },
  {
    id: 'music-generator',
    name: 'AI Music Composer',
    description: 'Create royalty-free background music',
    icon: Music,
    category: 'Audio',
    premium: true,
    features: ['Multiple genres', 'Mood matching', 'Loop creation'],
    usage: 'Premium required'
  }
]

const premiumPlans = [
  {
    name: 'Creator Pro',
    price: '$19',
    period: 'month',
    features: [
      'Unlimited AI generations',
      'Advanced analytics',
      'Priority support',
      'Custom templates',
      'API access'
    ],
    popular: false
  },
  {
    name: 'Studio Elite',
    price: '$49',
    period: 'month',
    features: [
      'Everything in Creator Pro',
      'Voice cloning',
      'Advanced trend prediction',
      'White-label options',
      'Team collaboration',
      'Custom AI training'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    features: [
      'Everything in Studio Elite',
      'Unlimited team members',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom AI models'
    ],
    popular: false
  }
]

export default function AIToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [inputPrompt, setInputPrompt] = useState('')

  const handleGenerate = async (toolId: string) => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(`Generated content for ${toolId} based on: "${inputPrompt}"`)
      setIsGenerating(false)
    }, 2000)
  }

  const freeTools = aiTools.filter(tool => !tool.premium)
  const premiumTools = aiTools.filter(tool => tool.premium)

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          AI Tools Studio
        </h1>
        <p className="text-muted-foreground">
          Supercharge your content creation with AI-powered tools
        </p>
      </motion.div>

      <Tabs defaultValue="tools" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tools">AI Tools</TabsTrigger>
          <TabsTrigger value="premium">Premium Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-6 mt-6">
          {/* Free Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold">Free Tools</h2>
              <Badge variant="secondary">Available Now</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Card key={tool.id} className="cursor-pointer hover:shadow-lg transition-all duration-200">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Icon className="w-8 h-8 text-primary" />
                        <Badge variant="outline">{tool.category}</Badge>
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground">
                          {tool.usage}
                        </div>
                        <div className="space-y-1">
                          {tool.features.map((feature, index) => (
                            <div key={index} className="text-xs text-muted-foreground flex items-center gap-1">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button 
                          className="w-full" 
                          onClick={() => setSelectedTool(tool.id)}
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          Use Tool
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Premium Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-5 h-5 text-yellow-600" />
              <h2 className="text-xl font-semibold">Premium Tools</h2>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">Pro Only</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {premiumTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Card key={tool.id} className="relative overflow-hidden border-2 border-gradient-to-r from-yellow-500/20 to-orange-500/20">
                    <div className="absolute top-2 right-2">
                      <Crown className="w-4 h-4 text-yellow-600" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Icon className="w-8 h-8 text-primary opacity-60" />
                        <Badge variant="outline">{tool.category}</Badge>
                      </div>
                      <CardTitle className="text-lg opacity-60">{tool.name}</CardTitle>
                      <CardDescription className="opacity-60">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground">
                          {tool.usage}
                        </div>
                        <div className="space-y-1">
                          {tool.features.map((feature, index) => (
                            <div key={index} className="text-xs text-muted-foreground flex items-center gap-1 opacity-60">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full" variant="outline" disabled>
                          <Lock className="w-4 h-4 mr-2" />
                          Upgrade Required
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Tool Interface */}
          {selectedTool && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedTool(null)}
            >
              <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      {aiTools.find(t => t.id === selectedTool)?.name}
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedTool(null)}>
                      ×
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Input Prompt</label>
                    <Textarea
                      placeholder="Describe what you want to generate..."
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => handleGenerate(selectedTool)}
                    disabled={isGenerating || !inputPrompt}
                    className="w-full"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate
                      </>
                    )}
                  </Button>

                  {generatedContent && (
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Generated Result</label>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm">{generatedContent}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Share className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </TabsContent>

        <TabsContent value="premium" className="space-y-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl font-bold">Unlock Premium AI Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take your content creation to the next level with advanced AI tools, unlimited generations, and exclusive features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {premiumPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-sm font-normal text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-purple-600' : ''}`}>
                    {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-4"
          >
            <div className="p-6 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2">🎉 Limited Time Offer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get 50% off your first 3 months with any premium plan. Use code: <code className="bg-muted px-2 py-1 rounded">CLAWZIO50</code>
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Offer expires in 7 days</span>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
