"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
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

      <section className="relative py-20 lg:py-32 bg-background border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Get in touch and discover how Infocure can accelerate your digital journey. We're here to help you
              transform your business with trusted technology expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-balance font-heading">Direct Contact Information</h2>
              <div className="space-y-6">
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 font-heading">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>Phone</span>
                    </CardTitle>
                    <CardDescription>
                      <a href="tel:+919136190148" className="text-lg font-medium hover:text-primary transition-colors">
                        +91 91361 90148
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 font-heading">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>Email</span>
                    </CardTitle>
                    <CardDescription>
                      <a
                        href="mailto:solutions@infocure.in"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        solutions@infocure.in
                      </a>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 font-heading">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>India Offices</span>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1 text-sm">
                        <div>Mumbai</div>
                        <div>Bangalore</div>
                        <div>Delhi NCR</div>
                        <div>Kolkata</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 font-heading">
                      <Globe className="h-5 w-5 text-primary" />
                      <span>International Offices</span>
                    </CardTitle>
                    <CardDescription>
                      <div className="space-y-1 text-sm">
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
              <Card className="border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours to discuss your requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-heading">
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
                      <Label htmlFor="email" className="font-heading">
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
                      <Label htmlFor="phone" className="font-heading">
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
                      <Label htmlFor="message" className="font-heading">
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
                      size="lg"
                      className="w-full font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our Global Presence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              With offices across multiple continents, we provide local expertise backed by global delivery
              capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 font-heading">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Mumbai</span>
                </CardTitle>
                <CardDescription>India Headquarters</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 font-heading">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Bangalore</span>
                </CardTitle>
                <CardDescription>Technology Hub</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 font-heading">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Delhi NCR</span>
                </CardTitle>
                <CardDescription>North India Operations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 font-heading">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dubai</span>
                </CardTitle>
                <CardDescription>Middle East Hub</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 font-heading">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Singapore</span>
                </CardTitle>
                <CardDescription>Asia Pacific</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 font-heading">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Germany</span>
                </CardTitle>
                <CardDescription>European Operations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance font-heading">Why Contact Infocure?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Quick Response</h3>
                <p className="text-muted-foreground text-sm">
                  Get a response within 24 hours from our expert consultants who understand your business needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Global Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Leverage our worldwide experience and local market knowledge for your digital transformation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Tailored Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Receive customized recommendations based on your specific industry, challenges, and goals.
                </p>
              </div>
            </div>
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
