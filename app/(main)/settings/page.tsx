"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Settings, User, Bell, Shield, Palette, Crown, Youtube } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8 max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-full px-4 py-2">
          <Settings className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Account Settings</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-muted-foreground text-lg">
          Customize your Clawzio experience
        </p>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-8">
        {/* Profile Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-xl border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Update your profile information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input placeholder="your@email.com" type="email" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">YouTube Channel URL</label>
                <Input placeholder="https://youtube.com/@yourchannel" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Content Niche</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Tech & Reviews</option>
                  <option>Gaming</option>
                  <option>Lifestyle</option>
                  <option>Education</option>
                  <option>Business</option>
                  <option>Entertainment</option>
                </select>
              </div>
              <Button className="bg-gradient-to-r from-primary to-purple-600">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Trend Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when new trends emerge in your niche</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Competitor Updates</p>
                  <p className="text-sm text-muted-foreground">Notifications when competitors publish new content</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">AI Insights</p>
                  <p className="text-sm text-muted-foreground">Weekly AI-generated insights about your content</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Digest</p>
                  <p className="text-sm text-muted-foreground">Weekly summary of your channel performance</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Subscription Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-xl border-primary/10 bg-gradient-to-r from-primary/5 to-purple-600/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-primary" />
                Current Plan
                <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white">
                  Pro
                </Badge>
              </CardTitle>
              <CardDescription>
                Manage your subscription and billing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Creator Pro Plan</span>
                  <span className="text-2xl font-bold text-primary">$49/month</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Your next billing date is January 15, 2025
                </p>
                <div className="flex gap-2">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="outline">View Billing</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy & Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-xl border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Manage your privacy settings and account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Make Profile Public</p>
                  <p className="text-sm text-muted-foreground">Allow others to see your profile and achievements</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Data Analytics</p>
                  <p className="text-sm text-muted-foreground">Help improve Clawzio by sharing anonymous usage data</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="pt-4 border-t">
                <Button variant="destructive" className="mb-2">
                  Change Password
                </Button>
                <p className="text-sm text-muted-foreground">
                  Last updated 30 days ago
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
