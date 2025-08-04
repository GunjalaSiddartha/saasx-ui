"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Blog from "@/components/blog"
import Footer from "@/components/footer"
import AuthModal from "@/components/auth-modal"
import Background3D from "@/components/3d-background"
import { ThemeProvider } from "@/components/theme-provider"

export default function LandingPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Global 3D Background */}
        <Background3D />

        <Navbar onAuthClick={openAuthModal} />

        <main>
          <Hero onGetStarted={() => openAuthModal("signup")} />
          <Features />
          <Testimonials />
          <Pricing onSelectPlan={() => openAuthModal("signup")} />
          <FAQ />
          <Contact />
          <Blog />
        </main>

        <Footer />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          mode={authMode}
          onSwitchMode={setAuthMode}
        />
      </div>
    </ThemeProvider>
  )
}
