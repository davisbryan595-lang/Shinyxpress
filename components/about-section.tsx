"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, Award } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-secondary" />,
    title: "Premium Quality",
    description: "We use only the finest products and techniques to ensure exceptional results every time.",
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Convenient Service",
    description: "Mobile service that comes to your location - home, office, or anywhere in Hamilton, Ohio.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-warning" />,
    title: "Local Expertise",
    description: "Proudly serving Hamilton, Ohio and surrounding areas with personalized, professional care.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Trusted Professionals",
    description: "Experienced detailing specialists committed to exceeding your expectations.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Why Choose ShinExpress?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              At Shinyxpress Mobile Car Wash, we believe your vehicle deserves the finest care. Our mobile detailing
              service brings professional-grade results directly to you, combining convenience with uncompromising
              quality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              From our base in Hamilton, Ohio, we serve the surrounding areas with a commitment to excellence that has
              made us the trusted choice for discerning car owners who demand the best.
            </p>
          </div>

          <div className="relative">
            <img
              src="/professional-car-detailing-team-working-on-luxury-.jpg"
              alt="Professional car detailing service"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">5+ Years</div>
              <div className="text-sm">Experience</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
