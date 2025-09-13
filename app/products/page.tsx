import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Users,
  Settings,
  ShoppingCart,
  Truck,
  CheckCircle,
  BarChart3,
  Calendar,
  DollarSign,
  Target,
  Zap,
  Globe,
} from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      title: "XQ CRM",
      subtitle: "Simplify Sales, Events, and Sampling",
      description:
        "A single platform that combines sales management, event execution, and sampling tracking into one intuitive system.",
      href: "/products/crm",
      icon: Users,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&h=300&fit=crop&crop=center",
      features: ["360° customer view", "Sales automation", "Event management", "Sampling tracking"],
      cta: "Request Demo",
    },
    {
      title: "ERP",
      subtitle: "Oracle-Certified ERP for SMBs",
      description:
        "Fully customizable, scalable, and cost-effective ERP helping SMBs manage operations with enterprise-grade power.",
      href: "/products/erp",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      features: ["Finance & Accounting", "Materials Management", "Production Planning", "Sales & Distribution"],
      cta: "Contact Us",
    },
    {
      title: "HRMS",
      subtitle: "Hire to Retire HR Management",
      description:
        "Complete HRMS covering the full employee lifecycle with mobile-first design and AI-powered automation.",
      href: "/products/hrms",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center",
      features: ["Employee Management", "Payroll & Compliance", "Performance Management", "Learning & Development"],
      cta: "Ask for Demo",
    },
    {
      title: "Dealer Management System",
      subtitle: "Streamline Dealer Operations",
      description:
        "Comprehensive DMS for manufacturers, distributors, and wholesalers to manage dealer networks efficiently.",
      href: "/products/dealer-management-system",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      features: ["Dealer-Employee Mapping", "Order Tracking", "Inventory Visibility", "Reports & Analytics"],
      cta: "Schedule Demo",
    },
    {
      title: "Order Management System",
      subtitle: "End-to-End Order Processing",
      description:
        "Simplify and automate every step of order handling from sales to production planning with real-time insights.",
      href: "/products/order-management-system",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&crop=center",
      features: ["Sales Order Management", "Real-Time Inventory", "Demand Planning", "Production Mapping"],
      cta: "Request Demo",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop&crop=center"
            alt="Products hero background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-none">
              Enterprise Products for Modern Business
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business operations with our comprehensive suite of enterprise products. Built for
              scalability, security, and seamless integration across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                Explore Products
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Our Product Portfolio
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive enterprise solutions designed to address every aspect of your business operations
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-red-100 mr-6">
                      <product.icon className="h-12 w-12 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{product.title}</h3>
                      <p className="text-xl text-red-500 font-medium">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={product.href}>
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                      {product.cta}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-none"></div>
                    <Image
                      src={product.image}
                      alt={`${product.title} illustration`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
                Why Choose Our Products
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Built with enterprise-grade security, scalability, and performance in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 bg-red-100 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-level security with advanced encryption, compliance certifications, and robust access controls
                </p>
              </div>
              <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 bg-red-100 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  High Performance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimized for speed and reliability with 99.9% uptime guarantee and lightning-fast response times
                </p>
              </div>
              <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 bg-red-100 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Globe className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Scalability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Scale seamlessly across multiple regions with cloud-native architecture and global deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&h=600&fit=crop&crop=center"
            alt="CTA background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join thousands of enterprises worldwide who trust our products to drive their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}