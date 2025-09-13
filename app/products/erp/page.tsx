import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Package,
  DollarSign,
  Users,
  Truck,
  Settings,
  Factory,
  Globe,
  Shield,
  Zap,
} from "lucide-react"

export default function ERPPage() {
  const modules = [
    {
      icon: DollarSign,
      title: "Finance & Accounting",
      description: "General ledger, accounts payable/receivable, fixed assets, budgeting, forecasting, and cash flow management",
    },
    {
      icon: Package,
      title: "Materials Management (MM)",
      description: "Procurement management, inventory tracking, warehouse optimization, and supplier performance monitoring",
    },
    {
      icon: Truck,
      title: "Production Planning (PP)",
      description: "End-to-end manufacturing planning, BOM management, shop floor control, and demand forecasting",
    },
    {
      icon: Factory,
      title: "Sales & Distribution (SD)",
      description: "Customer order management, pricing, logistics, delivery tracking, and CRM integration",
    },
    {
      icon: Users,
      title: "HRMS & Payroll",
      description: "Employee lifecycle management, attendance, automated payroll with statutory compliance",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Real-time dashboards, customizable reports, and predictive analytics for smarter decision-making",
    },
  ]

  const benefits = [
    { metric: "Oracle-Certified", description: "Backed by Oracle's proven ERP technology" },
    { metric: "End-to-End Coverage", description: "Finance, HR, Supply Chain, Sales, Payroll" },
    { metric: "Customizable & Scalable", description: "Adapt ERP workflows as your business grows" },
    { metric: "Cost-Effective", description: "Enterprise-level features without enterprise costs" },
  ]

  const industries = ["Manufacturing", "Retail & Distribution", "Professional Services", "Healthcare & Pharma", "Logistics & Supply Chain", "BFSI"]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop&crop=center"
            alt="ERP hero background"
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
                  ERP Solutions for Small and Medium Enterprises
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
                  Oracle-Certified ERP, Customized for Growth and Agility. Unlike rigid, one-size-fits-all systems, our ERP is fully customizable, scalable, and cost-effective—helping SMBs manage every aspect of their operations with enterprise-grade power.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                    Contact Us
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
                  >
                    View Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&crop=center"
                  alt="ERP Dashboard Interface"
                  width={700}
                  height={500}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Key Modules in Our ERP
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive modules that work together to provide complete business management capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="p-4 bg-red-100 w-fit mb-6 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                      <module.icon className="h-10 w-10 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our ERP */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Why Choose Infocure's ERP for SMBs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Enterprise-level ERP features designed specifically for small and medium businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-bold text-red-500 mb-4">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                  Industries We Empower
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Our ERP solution is designed to meet the unique requirements of various industries, with specialized
                  features and workflows tailored to your business needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                  Explore Industry Solutions
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h-500&fit=crop&crop=center"
                  alt="ERP Industry Solutions"
                  width={700}
                  height={500}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=600&fit=crop&crop=center"
            alt="CTA background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Ready to take your SMB to the next level?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Contact Us today to explore how Infocure's customized ERP can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                Contact Us Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}