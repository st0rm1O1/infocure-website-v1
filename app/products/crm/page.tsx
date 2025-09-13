import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Users, TrendingUp, Mail, Phone, BarChart3, Target, Calendar, Settings } from "lucide-react"

export default function CRMPage() {
  const features = [
    {
      icon: Users,
      title: "Lead Management",
      description: "Capture, assign, and nurture leads from multiple channels. Automate follow-ups and never miss an opportunity.",
    },
    {
      icon: TrendingUp,
      title: "Opportunity Tracking",
      description: "Visualize your sales pipeline, track deal progress, monitor probability of closure, and forecast revenue accurately.",
    },
    {
      icon: Mail,
      title: "Account & Contact Management",
      description: "Maintain detailed customer records with a complete interaction history. Build stronger customer relationships with a 360° view.",
    },
    {
      icon: BarChart3,
      title: "Quotation Generation",
      description: "Create and manage professional quotations with multi-currency support. Speed up deal closure with accurate pricing.",
    },
    {
      icon: Target,
      title: "Sampling Management",
      description: "Plan, approve, and track product samples across regions or sales teams. Monitor usage and analyze ROI with built-in reports.",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Organize events seamlessly — from planning and participant registration to budget tracking and post-event analysis.",
    },
  ]

  const benefits = [
    { metric: "End-to-End Coverage", description: "Sales, sampling, and events managed in one system" },
    { metric: "Lower TCO", description: "Transparent pricing, no mandatory add-ons" },
    { metric: "Rapid ROI", description: "Faster implementation means value from day one" },
    { metric: "Industry Adaptable", description: "From pharma and FMCG to IT services and manufacturing" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1400&h=600&fit=crop&crop=center"
            alt="CRM hero background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
                  XQ CRM – Simplify Sales, Events, and Sampling
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
                  At Infocure, we believe customer relationship management should be practical, effective, and tailored to your business. XQ CRM was built to give organizations a smarter alternative — a single platform that combines sales management, event execution, and sampling tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                    Request Demo
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
                  >
                    15-Day Free Trial
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=700&h=500&fit=crop&crop=center"
                  alt="CRM Dashboard Interface"
                  width={700}
                  height={500}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes XQ CRM Different */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                What Makes XQ CRM Different?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unlike global CRMs with hidden costs and complexity, XQ CRM delivers practical solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold text-red-500 mb-3">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Comprehensive CRM Modules
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to manage customer relationships and drive sales success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="p-4 bg-red-100 w-fit mb-6 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1400&h=600&fit=crop&crop=center"
            alt="CTA background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Get Started with XQ CRM
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              We make it easy to experience XQ CRM with live demos and hands-on trials
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                Free 30-Minute Demo
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
              >
                15-Day Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}