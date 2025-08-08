"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Youtube, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navItems = [
{ href: '#features', label: 'Features' },
{ href: '#pricing', label: 'Pricing' },
{ href: '#testimonials', label: 'Reviews' },
{ href: '#about', label: 'About' }
]

export function FloatingNavbar() {
const [isScrolled, setIsScrolled] = useState(false)
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

return (
  <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-4 right-4 lg:left-[calc(50vw-372px)] md:translate md:right-auto z-50 transition-all duration-500",
        "px-4 md:px-6 py-3 rounded-2xl border backdrop-blur-xl",
        "w-auto md:min-w-[600px] md:max-w-4xl",
        isScrolled 
          ? "bg-background/80 border-border/50 shadow-2xl shadow-black/10" 
          : "bg-background/60 border-white/20 shadow-lg"
      )}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <Youtube className="w-4 h-4 text-white" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-2 h-2 text-white p-0.5" />
            </motion.div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Clawzio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/50 transition-all duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-sm" asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 text-sm px-4"
            asChild
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="fixed top-20 left-4 right-4 z-40 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t pt-4 mt-2">
              <Button className="w-full" asChild>
                <Link href="/dashboard">Sign In</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Mobile Menu Backdrop */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </AnimatePresence>
  </>
)
}
