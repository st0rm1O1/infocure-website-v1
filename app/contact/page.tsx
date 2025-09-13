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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-8 text-gray-900">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed">
              Get in touch and discover how Infocure can accelerate your digital journey. We're here to help you
              transform your business with trusted technology expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-10 text-gray-900">Direct Contact Information</h2>
              <div className="space-y-8">
                <Card className="corporate-card corporate-card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 font-heading text-xl">
                      <Phone className="h-6 w-6 text-red-500" />
                      <span>Phone</span>
                    </CardTitle>
                    <CardDescription>
                      <a href="tel:+919136190148" className="text-lg font-medium hover:text-red-500 transition-colors">
                        +91 91361 90148
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="corporate-card corporate-card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 font-heading text-xl">
                      <Mail className="h-6 w-6 text-red-500" />
                      <span>Email</span>
                    </CardTitle>
                    <CardDescription>
                      <a
                        href="mailto:solutions@infocure.in"
                        className="text-lg font-medium hover:text-red-500 transition-colors"
                      >
                        solutions@infocure.in
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="corporate-card corporate-card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 font-heading text-xl">
                      <MapPin className="h-6 w-6 text-red-500" />
                      <span>India Offices</span>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-2 text-base">
                        <div>Mumbai</div>
                        <div>Bangalore</div>
                        <div>Delhi NCR</div>
                        <div>Kolkata</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="corporate-card corporate-card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 font-heading text-xl">
                      <Globe className="h-6 w-6 text-red-500" />
                      <span>International Offices</span>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-2 text-base">
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
              <Card className="corporate-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-heading font-medium">
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
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-heading font-medium">
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
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-heading font-medium">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-heading font-medium">
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
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="btn-primary w-full text-lg py-3"
                    >
                      <Send className="mr-3 h-5 w-5" />
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">Our Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              With offices across multiple continents, we provide local expertise backed by global delivery
              capabilities.
            </p>
          </div>
          <div className="mb-12">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&h=400&fit=crop&crop=center"
              alt="Global presence world map"
              width={1000}
              height={400}
              className="w-full h-auto object-cover mx-auto corporate-shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {["Mumbai", "Bangalore", "Delhi NCR", "Kolkata", "Dubai", "Singapore", "Germany", "UK"].map((location) => (
              <div key={location} className="p-6 bg-gray-50 corporate-card corporate-card-hover">
                <Globe className="h-10 w-10 text-red-500 mx-auto mb-3" />
                <div className="text-sm font-heading font-medium text-gray-900">{location}</div>
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
      />

      <Footer />
    </div>
  )
}