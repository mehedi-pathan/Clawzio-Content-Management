"use client"

import { motion } from 'framer-motion'
import { Home, Lightbulb, Users, FileText, Search, Settings, Plus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/ideas', icon: Lightbulb, label: 'Ideas' },
  { href: '/competitors', icon: Users, label: 'Compete' },
  { href: '/scripts', icon: FileText, label: 'Scripts' },
  { href: '/seo', icon: Search, label: 'SEO' },
  { href: '/settings', icon: Settings, label: 'Settings' }
]

export function FloatingBottomNav() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-[1rem] flex w-full justify-center item-center "
    >
      <div className="bg-background/90 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl shadow-black/10 px-3 py-3">
        <div className="flex items-center justify-center gap-2">
          {navItems.slice(0, 3).map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-200 min-w-[70px] group",
                  isActive 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}

          {/* Center Action Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mx-3"
          >
            <Button
              size="icon"
              className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Plus className="w-7 h-7 text-white" />
            </Button>
          </motion.div>

          {navItems.slice(3).map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-200 min-w-[70px] group",
                  isActive 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
