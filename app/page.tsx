'use client'

import * as React from 'react'
import Image from 'next/image'
import { ShoppingCart, ArrowRight } from 'lucide-react'

import Navbar from '@/components/ui/navbar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ProductCardProps {
  title: string
  description: string
  price: number
  image: string
}

interface SeasonCollectionProps {
  title: string
  description: string
}

interface NewsletterFormProps {
  onSubmit?: (email: string) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image }) => {
  return (
    <Card className="group overflow-hidden transition-transform hover:-translate-y-1 shadow-lg">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={`${title} perfume`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${price.toFixed(2)}</span>
          <Button variant="outline" size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const SeasonCollection: React.FC<SeasonCollectionProps> = ({ title, description }) => {
  return (
    <Card className="transition-all hover:-translate-y-1 p-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}

const MeerazHomePage: React.FC = () => {
  const products = [
    { title: 'Padmini', description: 'Royal', price: 29.04, image: '/1.png' },
    { title: 'Rajnigandha', description: 'Fresh Blue', price: 22.07, image: '/2.png' },
    { title: 'Khas', description: 'Deep & Mild', price: 23.22, image: '/3.png' },
    { title: 'Oudh', description: 'Sweet & Warm', price: 29.03, image: '/4.png' },
  ]

  const seasonalCollections = [
    { title: 'Spring Bloom', description: 'Light, floral scents for the season of renewal' },
    { title: 'Summer Breeze', description: 'Fresh, citrusy fragrances for warm days' },
    { title: 'Autumn Whisper', description: 'Warm, spicy notes for the fall season' },
    { title: 'Winter Embrace', description: 'Rich, woody scents for cold winter days' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Navbar />
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <span className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                New Collection
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Discover Your Signature Scent
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Explore our curated collection of luxury fragrances. From floral to woody, find the perfect scent that tells your story.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button size="lg">
                  Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/50 text-white"
                >
                  Explore Collections
                </Button>
              </div>
            </div>
            <div className="mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/2.png"
                alt="Luxury perfume bottles"
                width={500}
                height={500}
                className="object-cover h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm">
              Featured
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Best Selling Fragrances
            </h2>
            <p className="max-w-[900px] mx-auto text-neutral-700 md:text-xl">
              Our most popular scents loved by customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="bg-blue-100 hover:bg-blue-200 border-blue-300">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Seasonal Collections */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="mx-auto overflow-hidden rounded-xl">
              <Image
                src="/4.png"
                alt="Seasonal perfume collection"
                width={500}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm">
                Collections
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Seasonal Collections
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seasonalCollections.map((season, index) => (
                  <SeasonCollection key={index} {...season} />
                ))}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Join Us
          </h2>
          <p className="max-w-[600px] mx-auto text-white/90 md:text-xl">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <NewsletterForm onSubmit={(email) => console.log('Subscribed:', email)} />
        </div>
      </section>
    </div>
  )
}


export default MeerazHomePage
