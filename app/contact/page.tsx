"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-12 text-gray-900 tracking-tight leading-none">Get in Touch</h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Get in touch and discover how Infocure can accelerate your digital journey. We're here to help you
              transform your business with trusted technology expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-12 text-gray-900 tracking-tight">Direct Contact Information</h2>
              <div className="space-y-8">
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 text-2xl">
                      <Phone className="h-8 w-8 text-red-500" />
                      <span>Phone</span>
                    </CardTitle>
                    <CardDescription>
                      <a href="tel:+919136190148" className="text-xl font-medium hover:text-red-500 transition-colors">
                        +91 91361 90148
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 text-2xl">
                      <Mail className="h-8 w-8 text-red-500" />
                      <span>Email</span>
                    </CardTitle>
                    <CardDescription>
                      <a
                        href="mailto:solutions@infocure.in"
                        className="text-xl font-medium hover:text-red-500 transition-colors"
                      >
                        solutions@infocure.in
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 text-2xl">
                      <MapPin className="h-8 w-8 text-red-500" />
                      <span>India Offices</span>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-2 text-lg">
                        <div>Mumbai</div>
                        <div>Bangalore</div>
                        <div>Delhi NCR</div>
                        <div>Kolkata</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 text-2xl">
                      <Globe className="h-8 w-8 text-red-500" />
                      <span>International Offices</span>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-2 text-lg">
                        <div>Dubai</div>
                        <div>Singapore</div>
                        <div>Germany</div>
                        <div>United Kingdom</div>
                        <div>United States</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Send us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-lg font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-14 text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-lg font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-14 text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-lg font-medium">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-14 text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-lg font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements, challenges, or how we can help you..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="text-lg"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white w-full text-lg py-4 font-medium"
                    >
                      <Send className="mr-3 h-6 w-6" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Office Locations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">Our Global Presence</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With offices across multiple continents, we provide local expertise backed by global delivery
              capabilities.
            </p>
          </div>
          <div className="mb-16">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h-500&fit=crop&crop=center"
              alt="Global presence world map"
              width={1200}
              height={500}
              className="w-full h-auto object-cover mx-auto shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {["Mumbai", "Bangalore", "Delhi NCR", "Kolkata", "Dubai", "Singapore", "Germany", "UK"].map((location) => (
              <div key={location} className="p-6 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <Globe className="h-12 w-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm font-bold text-gray-900">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Schedule a Consultation"
        description="Ready to discuss your project? Our experts are standing by to help you accelerate your digital transformation journey."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}