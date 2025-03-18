import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WhatsAppButton from "@/components/whatsapp-button"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real application, you would fetch this data from an API or database
  const product = {
    id: params.id,
    name: "Premium Walker",
    description: "A high-quality walker designed to provide stability and support during rehabilitation.",
    longDescription:
      "The Premium Walker is designed with comfort and stability in mind. Featuring adjustable height settings, ergonomic handles, and a lightweight yet durable aluminum frame, this walker provides exceptional support for individuals recovering from surgery, injury, or those with mobility challenges. The walker folds easily for transport and storage, making it convenient for use both at home and on the go.",
    features: [
      "Adjustable height settings",
      "Ergonomic handles for comfort",
      "Lightweight aluminum frame",
      "Foldable for easy transport",
      "Weight capacity: 300 lbs",
      "Non-slip rubber tips",
    ],
    specifications: [
      { name: "Material", value: "Aluminum" },
      { name: "Weight", value: "5.5 lbs" },
      { name: "Height Range", value: "32-38 inches" },
      { name: "Width", value: "24 inches" },
      { name: "Depth", value: "17 inches" },
      { name: "Weight Capacity", value: "300 lbs" },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Mobility Aids",
  }

  return (
    <main className="flex-1">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={200}
                    height={200}
                    className="aspect-square object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Link
                href={`/categories/${product.category.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-muted-foreground hover:underline"
              >
                {product.category}
              </Link>
              <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
            </div>
            <p className="text-base text-muted-foreground">{product.description}</p>

            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 pt-4">
                <p>{product.longDescription}</p>
              </TabsContent>
              <TabsContent value="features" className="pt-4">
                <ul className="grid gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="rounded-full bg-primary/20 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="pt-4">
                <div className="grid gap-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="grid grid-cols-2 gap-2 border-b py-2">
                      <div className="font-medium">{spec.name}</div>
                      <div>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Size Chart</h3>
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-2 text-left font-medium">Size</th>
                      <th className="p-2 text-left font-medium">Height Range</th>
                      <th className="p-2 text-left font-medium">Weight Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Standard</td>
                      <td className="p-2">5'0" - 6'2"</td>
                      <td className="p-2">300 lbs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Junior</td>
                      <td className="p-2">4'6" - 5'5"</td>
                      <td className="p-2">250 lbs</td>
                    </tr>
                    <tr>
                      <td className="p-2">Bariatric</td>
                      <td className="p-2">5'0" - 6'4"</td>
                      <td className="p-2">500 lbs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg" className="gap-1">
                <Link href="/contact">Contact Us About This Product</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-1">
                <Link href="/brochure">
                  <Download className="h-5 w-5" />
                  Download Brochure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  )
}

