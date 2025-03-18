import Image from "next/image"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

export default function BrochurePage() {
  return (
    <main className="flex-1">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Download Our Product Brochure</h1>
            <p className="text-muted-foreground">
              Our comprehensive product brochure contains detailed information about our complete range of
              rehabilitation products, including specifications, size charts, and usage guidelines.
            </p>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">What's Inside:</h2>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
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
                  <span>Complete product catalog with images</span>
                </li>
                <li className="flex items-center gap-2">
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
                  <span>Detailed product specifications</span>
                </li>
                <li className="flex items-center gap-2">
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
                  <span>Size charts and fitting guides</span>
                </li>
                <li className="flex items-center gap-2">
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
                  <span>Usage and care instructions</span>
                </li>
                <li className="flex items-center gap-2">
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
                  <span>Contact information</span>
                </li>
              </ul>
            </div>
            <Button size="lg" className="gap-1">
              <Download className="h-5 w-5" />
              Download Brochure (PDF, 5.2 MB)
            </Button>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg border">
            <Image src="/placeholder.svg?height=800&width=600" alt="Product Brochure" fill className="object-cover" />
          </div>
        </div>
      </div>
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  )
}

