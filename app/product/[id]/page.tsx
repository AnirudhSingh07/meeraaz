import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ProductPage = () => {
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
            <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image src="/placeholder.svg?height=600&width=600" alt="Product image" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="aspect-square relative overflow-hidden rounded-lg border cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=150&width=150"
                      alt={`Product thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Midnight Orchid Eau de Parfum</h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-primary text-primary" : "text-neutral-300"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-neutral-500">4.0 (24 reviews)</span>
                </div>
                <p className="text-2xl font-bold">$129.99</p>
              </div>
              <p className="text-neutral-500">
                A captivating blend of exotic orchid, warm amber, and sensual musk. This sophisticated fragrance opens
                with sparkling citrus notes, evolves into a heart of velvety orchid and jasmine, and settles into a rich
                base of amber, vanilla, and musk.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Size</span>
                    <Link href="#" className="text-sm text-neutral-500 hover:text-neutral-700">
                      Size Guide
                    </Link>
                  </div>
                  <Select defaultValue="50ml">
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30ml">30ml - $89.99</SelectItem>
                      <SelectItem value="50ml">50ml - $129.99</SelectItem>
                      <SelectItem value="100ml">100ml - $189.99</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <span className="font-medium">Quantity</span>
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" className="rounded-none">
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="flex-1 text-center">1</span>
                    <Button variant="ghost" size="icon" className="rounded-none">
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
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
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                    <path d="m7.5 4.27 9 5.15" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                    <circle cx="18.5" cy="15.5" r="2.5" />
                    <path d="M20.27 17.27 22 19" />
                  </svg>
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
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
                    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                    <path d="M12 12v9" />
                    <path d="m8 17 4 4 4-4" />
                  </svg>
                  <span>Easy 30-day returns</span>
                </div>
                <div className="flex items-center gap-2">
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
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b rounded-none">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <div className="space-y-4">
                  <p>
                    Midnight Orchid is a captivating fragrance that embodies sophistication and mystery. This exquisite
                    eau de parfum opens with sparkling notes of bergamot and black currant, creating an intriguing first
                    impression that draws you in.
                  </p>
                  <p>
                    At its heart lies the star ingredient - rare black orchid, complemented by jasmine and ylang-ylang,
                    creating a lush floral bouquet that's both elegant and sensual. As the fragrance settles, it reveals
                    a warm base of amber, vanilla, and sandalwood, leaving a lingering trail of luxury that lasts
                    throughout the day.
                  </p>
                  <p>
                    Perfect for evening wear or special occasions, Midnight Orchid makes a statement without
                    overwhelming. Its complex character evolves beautifully on the skin, making each wearing a unique
                    experience.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="details" className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Fragrance Family</h3>
                    <p>Floral Oriental</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Key Notes</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Top: Bergamot, Black Currant, Pink Pepper</li>
                      <li>Heart: Black Orchid, Jasmine, Ylang-Ylang</li>
                      <li>Base: Amber, Vanilla, Sandalwood, Musk</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Size Options</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>30ml / 1.0 fl oz</li>
                      <li>50ml / 1.7 fl oz</li>
                      <li>100ml / 3.4 fl oz</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Ingredients</h3>
                    <p className="text-sm text-neutral-500">
                      Alcohol Denat., Parfum (Fragrance), Aqua (Water), Benzyl Salicylate, Linalool, Limonene, Coumarin,
                      Geraniol, Citronellol, Benzyl Alcohol, Citral, Farnesol, Benzyl Benzoate, Eugenol, Cinnamal,
                      Isoeugenol, CI 17200 (Red 33), CI 60730 (Ext. Violet 2), CI 19140 (Yellow 5).
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Customer Reviews</h3>
                    <Button>Write a Review</Button>
                  </div>
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="border-b pb-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Jane Smith</span>
                              <span className="text-sm text-neutral-500">Verified Purchase</span>
                            </div>
                            <div className="flex mt-1">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${j < 4 ? "fill-primary text-primary" : "text-neutral-300"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-neutral-500">March 15, 2025</span>
                        </div>
                        <h4 className="font-medium mt-2">Elegant and long-lasting</h4>
                        <p className="mt-1 text-neutral-600">
                          I've been wearing this fragrance for a month now and I'm still in love with it. It lasts all
                          day and I always receive compliments. The bottle is also beautiful and looks elegant on my
                          vanity.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border">
                  <Link href="#" className="absolute inset-0 z-10">
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Perfume ${i + 1}`}
                    alt={`Perfume ${i + 1}`}
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Golden Amber</h3>
                    <p className="text-sm text-neutral-500">Woody & Spicy</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium">$79.99</span>
                    </div>
                  </div>
                </div>
              ))}
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

export default ProductPage;