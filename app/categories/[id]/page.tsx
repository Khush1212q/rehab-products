import Link from "next/link"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // In a real application, you would fetch this data from an API or database
  const categories = {
    mobility: {
      title: "Mobility Aids",
      description:
        "Our range of mobility aids are designed to provide support and assistance for individuals with mobility challenges. From walkers and canes to wheelchairs and scooters, our products help users maintain independence and improve quality of life.",
      products: [
        {
          id: 1,
          name: "Premium Walker",
          description: "Adjustable height, foldable design",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 2,
          name: "Lightweight Wheelchair",
          description: "Portable and easy to transport",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 3,
          name: "Quad Cane",
          description: "Extra stability with four-point base",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 4,
          name: "Folding Transport Chair",
          description: "Compact and lightweight design",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 5,
          name: "Rollator Walker",
          description: "With seat and storage basket",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 6,
          name: "Forearm Crutches",
          description: "Adjustable height, ergonomic grip",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    orthopedic: {
      title: "Orthopedic Supports",
      description:
        "Our orthopedic supports provide stability, compression, and pain relief for various body parts. These products are designed to aid in recovery from injuries, surgeries, or manage chronic conditions.",
      products: [
        {
          id: 7,
          name: "Knee Support Brace",
          description: "Provides stability and compression",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 8,
          name: "Ankle Stabilizer",
          description: "Prevents sprains and supports recovery",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 9,
          name: "Wrist Splint",
          description: "Immobilizes and supports the wrist",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 10,
          name: "Back Brace",
          description: "Lumbar support for lower back pain",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 11,
          name: "Cervical Collar",
          description: "Neck support and immobilization",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 12,
          name: "Shoulder Immobilizer",
          description: "Restricts movement for healing",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    "daily-living": {
      title: "Daily Living Aids",
      description:
        "Our daily living aids help individuals maintain independence with everyday activities. These products are designed to assist with dressing, bathing, eating, and other daily tasks.",
      products: [
        {
          id: 13,
          name: "Shower Chair",
          description: "Safe and stable seating for bathing",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 14,
          name: "Toilet Safety Rails",
          description: "Support for sitting and standing",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 15,
          name: "Dressing Aid Kit",
          description: "Tools for independent dressing",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 16,
          name: "Reacher Grabber",
          description: "Extends reach for picking up objects",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 17,
          name: "Bed Rail",
          description: "Support for getting in and out of bed",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 18,
          name: "Adaptive Utensils",
          description: "Ergonomic design for easier eating",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    therapy: {
      title: "Therapy Equipment",
      description:
        "Our therapy equipment is designed to aid in physical rehabilitation and recovery. These products help improve strength, flexibility, and mobility for individuals recovering from injuries or managing chronic conditions.",
      products: [
        {
          id: 19,
          name: "Therapy Ball Set",
          description: "Various sizes for different exercises",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 20,
          name: "Resistance Bands",
          description: "Different resistance levels for strength training",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 21,
          name: "Hand Therapy Kit",
          description: "Tools for improving hand strength and dexterity",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 22,
          name: "Balance Board",
          description: "Improves balance and coordination",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 23,
          name: "TENS Unit",
          description: "Electrical stimulation for pain relief",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 24,
          name: "Hot/Cold Therapy Packs",
          description: "Reusable packs for pain management",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    medical: {
      title: "Medical Supplies",
      description:
        "Our medical supplies include essential items for healthcare and rehabilitation. These products support recovery, wound care, and ongoing medical management.",
      products: [
        {
          id: 25,
          name: "Blood Pressure Monitor",
          description: "Digital display with memory function",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 26,
          name: "Pulse Oximeter",
          description: "Measures oxygen saturation levels",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 27,
          name: "Wound Care Kit",
          description: "Essential supplies for wound management",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 28,
          name: "Compression Stockings",
          description: "Various sizes and compression levels",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 29,
          name: "Pill Organizer",
          description: "Weekly organizer with daily compartments",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 30,
          name: "Digital Thermometer",
          description: "Fast and accurate temperature readings",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
  }

  const category = categories[params.id as keyof typeof categories]

  if (!category) {
    return (
      <div className="container px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <p className="mt-4">The category you're looking for doesn't exist.</p>
        <Link href="/" className="mt-6 inline-block underline">
          Return to home
        </Link>
      </div>
    )
  }

  return (
    <main className="flex-1">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{category.title}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  )
}

