import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Download, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rehabilitation Products",
  description: "Quality rehabilitation products for your recovery journey",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center px-4 sm:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <span className="text-xl font-bold">RehabProducts</span>
                </Link>
                <nav className="ml-auto hidden gap-6 md:flex">
                  <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                    About
                  </Link>
                  <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
                    Products
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                  </Link>
                </nav>
                <div className="ml-auto md:ml-4">
                  <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                    <Link href="/brochure">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Link>
                  </Button>
                </div>
                <Button variant="outline" size="icon" className="ml-2 md:hidden">
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
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </div>
            </header>
            {children}
            <footer className="w-full border-t bg-muted py-12 md:py-16 lg:py-20">
              <div className="container grid gap-8 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">RehabProducts</h3>
                  <p className="text-sm text-muted-foreground">
                    Quality rehabilitation products for your recovery journey.
                  </p>
                  <div className="flex gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/" className="text-muted-foreground hover:text-foreground">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-muted-foreground hover:text-foreground">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="text-muted-foreground hover:text-foreground">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Categories</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/categories/mobility" className="text-muted-foreground hover:text-foreground">
                        Mobility Aids
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/orthopedic" className="text-muted-foreground hover:text-foreground">
                        Orthopedic Supports
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/daily-living" className="text-muted-foreground hover:text-foreground">
                        Daily Living Aids
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/therapy" className="text-muted-foreground hover:text-foreground">
                        Therapy Equipment
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/medical" className="text-muted-foreground hover:text-foreground">
                        Medical Supplies
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Us</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        123 Rehabilitation Street, Medical District, City, Country
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">+1 (123) 456-7890</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">info@rehabproducts.com</span>
                    </li>
                  </ul>
                  <Button asChild variant="outline" size="sm" className="gap-1">
                    <Link href="/brochure">
                      <Download className="h-4 w-4" />
                      Download Brochure
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="container mt-8 border-t pt-8 px-4 md:px-6">
                <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} RehabProducts. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'