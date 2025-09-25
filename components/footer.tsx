"use client"

import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/shinylogo.png"
                alt="ShinExpress Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-xl font-bold">ShinyXpress</div>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-pretty">
              Premium mobile car detailing services in Hamilton, Ohio. We bring professional-grade car care directly to
              your location.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:919-904-6099" className="hover:text-secondary transition-colors">
                  (919) 904-6099
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@shinexpress-mobile-car-wash.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@shinexpress-mobile-car-wash.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Hamilton, Ohio & Surrounding Areas</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Interior Detailing</li>
              <li>Exterior Detailing</li>
              <li>Full Detailing</li>
              <li>Headlight Restoration</li>
              <li>Ceramic Coating</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 ShinExpress Mobile Car Wash. All rights reserved. |
            <span className="text-warning font-semibold"> Shine Express – Premium Care, Anytime, Anywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
