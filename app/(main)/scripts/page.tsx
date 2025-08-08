"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { FileText, Wand2, Copy, Download, Play, Clock, Target, Sparkles } from 'lucide-react'

export default function ScriptsPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedScript, setGeneratedScript] = useState("")

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setGeneratedScript(`# Hook (First 15 seconds)
What if I told you that 99% of YouTube channels fail because of one simple mistake? Stay tuned because I'm about to reveal the secret that successful YouTubers use to guarantee viral content.

# Introduction (30 seconds)
Hey creators! Welcome back to my channel. If you're new here, I help content creators grow their YouTube channels using proven strategies. Today, we're diving deep into the biggest mistakes that kill YouTube channels and exactly how to avoid them.

# Main Content Points

## Point 1: Poor Content Strategy
Most creators upload randomly without understanding their audience. Here's what you need to do instead...

## Point 2: Inconsistent Branding
Your thumbnails, titles, and content need to work together. Let me show you...

## Point 3: Ignoring Analytics
Data is your best friend. Here's how to read your analytics...

# Call to Action
If this helped you, smash that like button and subscribe for more YouTube growth tips. What's your biggest YouTube challenge? Let me know in the comments below!

# Outro
Thanks for watching, and I'll see you in the next one!`)
      setIsGenerating(false)
    }, 3000)
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
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI Script Generator</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Create Engaging Scripts
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Generate compelling video scripts with hooks, structure, and calls-to-action that keep viewers engaged
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-xl border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-primary" />
                Script Generator
              </CardTitle>
              <CardDescription>
                Describe your video idea and let AI create a compelling script
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Video Topic</label>
                <Input
                  placeholder="e.g., 10 Morning Routines That Changed My Life"
                  className="mb-4"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Video Description</label>
                <Textarea
                  placeholder="Describe your video content, target audience, and key messages you want to convey..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Video Length</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Short (1-3 min)</option>
                    <option>Medium (5-10 min)</option>
                    <option>Long (10+ min)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Tone</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Casual & Friendly</option>
                    <option>Professional</option>
                    <option>Energetic</option>
                    <option>Educational</option>
                  </select>
                </div>
              </div>
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                    Generating Script...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Generate Script
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Output Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl border-primary/10 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Generated Script
                  </CardTitle>
                  <CardDescription>
                    Your AI-generated video script
                  </CardDescription>
                </div>
                {generatedScript && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {generatedScript ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Est. 8-10 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      High engagement
                    </div>
                  </div>
                  <Textarea
                    value={generatedScript}
                    onChange={(e) => setGeneratedScript(e.target.value)}
                    rows={20}
                    className="font-mono text-sm resize-none"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-center">
                  <div className="space-y-4">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto" />
                    <div>
                      <p className="text-lg font-medium text-muted-foreground">No script generated yet</p>
                      <p className="text-sm text-muted-foreground">Fill in the details and click generate to create your script</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
