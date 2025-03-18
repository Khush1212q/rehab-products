import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface CategoryProps {
  category: {
    id: string
    title: string
    description: string
    image: string
  }
}

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <Link href={`/categories/${category.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video relative">
          <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

