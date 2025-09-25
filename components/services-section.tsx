"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Car, Shield, Lightbulb, Droplets } from "lucide-react"

const services = [
  {
    title: "Interior Detailing",
    description: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces with premium products.",
    icon: <Car className="w-8 h-8" />,
    image: "/luxury-car-interior-detailing-cleaning-leather-sea.jpg",
  },
  {
    title: "Exterior Detailing",
    description: "Complete exterior wash, wax, and polish to restore your vehicle's showroom shine.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "/luxury-car-exterior-detailing-washing-polishing.jpg",
  },
  {
    title: "Full Detailing",
    description: "Comprehensive interior and exterior detailing package for the ultimate car care experience.",
    icon: <Droplets className="w-8 h-8" />,
    image: "/complete-car-detailing-service-luxury-vehicle.jpg",
  },
  {
    title: "Headlight Restoration",
    description: "Restore cloudy, yellowed headlights to crystal clear condition for improved visibility.",
    icon: <Lightbulb className="w-8 h-8" />,
    image: "/headlight-restoration-before-after-clear-bright.jpg",
  },
  {
    title: "Ceramic Coating",
    description: "Advanced paint protection with long-lasting ceramic coating for ultimate durability.",
    icon: <Shield className="w-8 h-8" />,
    image: "/ceramic-coating-car-paint-protection-glossy-finish.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Premium Detailing Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional mobile car detailing services designed to keep your vehicle looking its absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">{service.icon}</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
            asChild
          >
            <a href="tel:919-904-6099">Book Your Service Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
