"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/images/shinylogo.png" alt="ShinExpress Logo" width={50} height={50} className="rounded-full" />
            <div className="hidden md:block text-xl font-bold text-primary">ShinExpress</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-secondary transition-colors"
            >
              Contact
            </button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <a href="tel:919-904-6099">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-effect rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-secondary transition-colors"
              >
                Contact
              </button>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full" asChild>
                <a href="tel:919-904-6099">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
