import { FloatingBottomNav } from '@/components/floating-bottom-nav'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl" />
      </div>
      
      <main className="pb-24 pt-6 relative z-10">
        {children}
      </main>
      
      <FloatingBottomNav />
    </div>
  )
}
