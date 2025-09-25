"use client"

import { useState } from "react"

const galleryImages = [
  {
    src: "/luxury-car-exterior-detailing-before-after-transfo.jpg",
    alt: "Exterior detailing transformation",
  },
  {
    src: "/car-interior-deep-cleaning-leather-seats-dashboard.jpg",
    alt: "Interior detailing results",
  },
  {
    src: "/ceramic-coating-application-glossy-car-paint-prote.jpg",
    alt: "Ceramic coating application",
  },
  {
    src: "/headlight-restoration-crystal-clear-bright-lights.jpg",
    alt: "Headlight restoration",
  },
  {
    src: "/luxury-vehicle-full-detailing-service-complete-tra.jpg",
    alt: "Full detailing service",
  },
  {
    src: "/mobile-car-wash-equipment-professional-setup.jpg",
    alt: "Mobile detailing setup",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Work Speaks for Itself</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See the incredible transformations we achieve with our professional detailing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-semibold">View Details</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
