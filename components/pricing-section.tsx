"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Essential",
    price: "$89",
    description: "Perfect for regular maintenance",
    features: ["Exterior wash & dry", "Interior vacuum", "Window cleaning", "Tire shine", "Basic dashboard wipe"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$149",
    description: "Our most popular package",
    features: [
      "Everything in Essential",
      "Interior deep clean",
      "Leather conditioning",
      "Paint wax application",
      "Wheel & rim detailing",
      "Air freshener",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "$249",
    description: "The ultimate detailing experience",
    features: [
      "Everything in Premium",
      "Ceramic coating application",
      "Headlight restoration",
      "Engine bay cleaning",
      "Paint correction",
      "6-month protection guarantee",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect detailing package for your vehicle. All services include mobile convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "border-accent shadow-lg scale-105 bg-card"
                  : "hover:-translate-y-2 bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mt-2">{plan.price}</div>
                <p className="text-muted-foreground text-pretty">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  asChild
                >
                  <a href="tel:919-904-6099">Book {plan.name}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom quote? We offer specialized services for fleet vehicles and commercial accounts.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:919-904-6099">Get Custom Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
