import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold">Essence</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4 underline">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Collections
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="flex items-center gap-1">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm">Cart (0)</span>
            </Link>
            <Button variant="outline" size="icon" className="rounded-full md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
                  <Input placeholder="Search fragrances..." className="pr-8" />
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
                    className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-1" />
                    <Label htmlFor="category-1">Eau de Parfum</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-2" />
                    <Label htmlFor="category-2">Eau de Toilette</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-3" />
                    <Label htmlFor="category-3">Cologne</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="category-4" />
                    <Label htmlFor="category-4">Body Spray</Label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Scent Family</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scent-1" />
                    <Label htmlFor="scent-1">Floral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scent-2" />
                    <Label htmlFor="scent-2">Woody</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scent-3" />
                    <Label htmlFor="scent-3">Oriental</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scent-4" />
                    <Label htmlFor="scent-4">Fresh</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scent-5" />
                    <Label htmlFor="scent-5">Citrus</Label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-price">Min</Label>
                    <Input id="min-price" placeholder="$0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-price">Max</Label>
                    <Input id="max-price" placeholder="$500" />
                  </div>
                </div>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </div>
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">All Fragrances</h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-500">Sort by:</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="best-selling">Best Selling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={`/placeholder.svg?height=400&width=400&text=Perfume ${i + 1}`}
                        alt={`Perfume ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg">Midnight Orchid</h3>
                      <p className="text-sm text-neutral-500">Floral & Woody</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="font-medium">${(59 + i * 10).toFixed(2)}</span>
                        <Button size="sm" variant="outline">
                          <ShoppingBag className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
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
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-neutral-100">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <span className="sr-only">Next</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-neutral-100">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-500 hover:text-neutral-700">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-neutral-500">© 2025 Essence. All rights reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-500 hover:text-neutral-700">
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
              <Link href="#" className="text-neutral-500 hover:text-neutral-700">
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
              <Link href="#" className="text-neutral-500 hover:text-neutral-700">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-neutral-700">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
