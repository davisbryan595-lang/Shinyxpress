"use client"

import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-warning/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
              Premium Car Care, <span className="text-warning">Anytime</span>,{" "}
              <span className="text-secondary">Anywhere</span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">
              Experience luxury mobile car detailing in Hamilton, Ohio. Professional service that comes to you.
            </p>
          </div>

          <div
            className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:919-904-6099">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (919) 904-6099
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg bg-transparent"
              onClick={() => scrollToSection("services")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="animate-fade-in mt-12" style={{ animationDelay: "0.6s" }}>
            <p className="text-white/80 text-lg">
              ✨ <strong>Shine Express</strong> – Premium Care, Anytime, Anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
