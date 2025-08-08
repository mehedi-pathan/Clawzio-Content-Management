"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FloatingNavbar } from '@/components/floating-navbar'
import { Youtube, Brain, TrendingUp, Users, Search, Zap, Target, CheckCircle, Play, ArrowRight, Star, Clock, BarChart3, Rocket, Eye, ThumbsUp, MessageSquare, Award, Sparkles, Crown, Trophy, Flame, Lightbulb, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const heroStats = [
  { number: "50K+", label: "Active Creators", icon: Users },
  { number: "2M+", label: "Videos Analyzed", icon: Eye },
  { number: "340%", label: "Avg Growth", icon: TrendingUp },
  { number: "98%", label: "Success Rate", icon: Trophy }
]

const features = [
  {
    icon: Brain,
    title: "AI Content Generator",
    description: "Generate viral video ideas, scripts, and thumbnails using advanced AI that understands your niche.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Competitor Spy Tool",
    description: "Analyze any YouTube channel and discover their winning strategies, content gaps, and growth secrets.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Trend Discovery Engine",
    description: "Be the first to know about emerging trends in your niche with our AI-powered trend prediction system.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Search,
    title: "SEO Optimizer",
    description: "Optimize your titles, descriptions, and tags for maximum discoverability and organic growth.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description: "Track your performance with detailed analytics and get actionable insights to accelerate growth.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Rocket,
    title: "Channel Optimization",
    description: "Get personalized recommendations to optimize your channel for maximum subscriber growth.",
    gradient: "from-pink-500 to-rose-500"
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech Reviewer",
    content: "Clawzio's competitor analysis helped me identify content gaps that led to my most viral videos. I grew from 50K to 500K subscribers in 8 months!",
    avatar: "/tech-youtuber-woman.png",
    subscribers: "542K",
    growth: "+984%",
    verified: true
  },
  {
    name: "Mike Rodriguez",
    role: "Gaming Creator",
    content: "The AI script generator is incredible. It saves me 10+ hours per week and my engagement rates have doubled since I started using it.",
    avatar: "/gaming-youtuber-man.png",
    subscribers: "1.2M",
    growth: "+156%",
    verified: true
  },
  {
    name: "Emma Thompson",
    role: "Lifestyle Vlogger",
    content: "The trend discovery feature is like having a crystal ball. I'm always first to jump on trending topics in my niche now.",
    avatar: "/lifestyle-youtuber-woman.png",
    subscribers: "780K",
    growth: "+234%",
    verified: true
  }
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for new creators",
    features: [
      "5 AI content ideas per day",
      "Basic competitor analysis",
      "Trend discovery",
      "SEO optimization",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Creator Pro",
    price: "$49",
    period: "/month",
    description: "For serious content creators",
    features: [
      "Unlimited AI content ideas",
      "Advanced competitor analysis",
      "Real-time trend alerts",
      "AI script generator",
      "Priority support",
      "Custom templates"
    ],
    popular: true
  },
  {
    name: "Studio",
    price: "$99",
    period: "/month",
    description: "For teams and agencies",
    features: [
      "Everything in Creator Pro",
      "Team collaboration",
      "White-label reports",
      "API access",
      "Dedicated account manager",
      "Custom integrations"
    ],
    popular: false
  }
]

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Floating Navbar */}
      <FloatingNavbar />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-red-500/5"
        >
          <Youtube className="w-32 h-32" />
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 text-purple-500/5"
        >
          <Brain className="w-40 h-40" />
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-1/4 text-blue-500/5"
        >
          <TrendingUp className="w-24 h-24" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="font-semibold">50,000+ Creators Growing Daily</span>
            <Crown className="w-4 h-4 text-yellow-500" />
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className="block bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Create.
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                Dominate.
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-foreground/90 mb-6">
                The AI-Powered Platform Every YouTuber Needs
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stop guessing what content will go viral. Use AI to discover trending topics, 
                analyze your competition, and create content that actually performs.
                <br />
                <span className="font-semibold text-foreground bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Join the creators who've cracked the YouTube algorithm.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Problem/Solution Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Tired of Research?</div>
                <div className="text-xs text-muted-foreground">Hours spent finding trends</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Losing to Competitors?</div>
                <div className="text-xs text-muted-foreground">They're always one step ahead</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Creator's Block?</div>
                <div className="text-xs text-muted-foreground">Running out of ideas</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="text-lg px-12 py-8 h-auto bg-gradient-to-r from-red-600 via-purple-600 to-pink-500 hover:from-red-700 hover:via-purple-700 hover:to-pink-600 shadow-2xl shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/dashboard">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 group-hover:animate-pulse" />
                  <div className="text-left">
                    <div className="font-bold">Start Growing Today</div>
                    <div className="text-sm opacity-90">Free • No Credit Card</div>
                  </div>
                </div>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-8 h-auto border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-bold">Watch Demo</div>
                  <div className="text-sm text-muted-foreground">See it in action</div>
                </div>
              </div>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary border-primary/30 text-lg px-6 py-2">
              <Zap className="w-5 h-5 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need to
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Dominate YouTube
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI-powered content creation to deep competitor analysis, 
              Clawzio provides all the tools you need to grow your channel faster than ever.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                         style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} 
                    />
                    <CardHeader className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold mb-2">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary border-primary/30 text-lg px-6 py-2">
              <Crown className="w-5 h-5 mr-2" />
              Simple Pricing
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Growth Plan
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start free and scale as you grow. No hidden fees, no surprises—just powerful tools to accelerate your success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'border-primary/50 shadow-2xl shadow-primary/20 bg-gradient-to-br from-background via-primary/5 to-purple-600/5' : 'border-border hover:border-primary/30'} transition-all duration-300`}>
                  <CardHeader className="text-center pb-8 relative">
                    {plan.popular && (
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                    )}
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                    <div className="mb-4">
                      <span className="text-5xl font-black">{plan.price}</span>
                      <span className="text-muted-foreground text-lg">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full py-6 text-lg font-semibold ${plan.popular ? 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl' : 'hover:bg-primary/5'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/dashboard">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4 text-lg">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-500" />
                <span>Available worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-20 bg-muted/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary border-primary/30 text-lg px-6 py-2">
              <Award className="w-5 h-5 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Loved by
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                50,000+ Creators
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how creators around the world are transforming their channels with Clawzio's AI-powered tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-full -mr-10 -mt-10" />
                  <CardContent className="p-6 relative">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                          <Image 
                            src={testimonial.avatar || "/placeholder.svg"} 
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {testimonial.subscribers} subs
                          </Badge>
                          <Badge variant="secondary" className="text-xs text-green-700 bg-green-100">
                            {testimonial.growth} growth
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Trophy className="w-16 h-16 text-yellow-400" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Dominate Your Niche?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 50,000+ creators who are already using AI to grow faster than ever before. 
            Your breakthrough moment is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-12 py-8 font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 group"
              asChild
            >
              <Link href="/dashboard">
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Start Your Free Trial
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
            <p className="text-sm text-white/75">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 bg-gray-900 text-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                  Clawzio
                </span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Empowering content creators with AI-powered tools to discover trends, analyze competitors, and create viral content.
              </p>
              <div className="flex items-center gap-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clawzio. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <p className="text-gray-400 text-sm">
                Developed by <a href="https://mehedipathan.online" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors font-medium">Mehedi Pathan</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
