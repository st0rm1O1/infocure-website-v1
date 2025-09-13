import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Cloud,
  BarChart3,
  Users,
  Smartphone,
  Database,
  Globe,
  CheckCircle,
  Settings,
  TrendingUp,
} from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "S/4 HANA RISE – Private & Public Cloud",
      description: "Accelerate your move to an intelligent enterprise with SAP RISE for comprehensive cloud transformation.",
      icon: Cloud,
      href: "/solutions/rise-with-sap",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      features: ["Cloud ERP (SAP S/4HANA Cloud)", "Business Process Intelligence", "Business platform and analytics (BTP)", "Outcome driven services and tools"],
    },
    {
      title: "SAP Analytics Cloud (SAC)",
      description: "Turn data into real-time business insights with SAP's all-in-one cloud analytics platform.",
      icon: BarChart3,
      href: "/solutions/sap-analytics-cloud",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      features: ["Predictive planning", "Extended planning and analysis", "Collaboration", "Scenario planning"],
    },
    {
      title: "SAP HCM & SuccessFactors",
      description: "Modernize HR for today's workforce with comprehensive human capital management solutions.",
      icon: Users,
      href: "/solutions/hcm-successfactors",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop&crop=center",
      features: ["Employee experience management", "Core HR and payroll", "Talent management", "HR analytics and workforce planning"],
    },
    {
      title: "SAP Fiori",
      description: "Deliver modern, role-based user experiences across SAP with intuitive and responsive design.",
      icon: Smartphone,
      href: "/solutions/sap-fiori",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      features: ["Simplified, Role-Based UX", "Consistent Cross-Device Experience", "Faster App Development", "Scalable, Role-Centric Launchpad"],
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
            alt="Solutions hero background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-none">
              Enterprise Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Proven SAP solutions that drive business transformation and operational excellence across industries.
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
              Explore Solutions
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Our Solution Portfolio
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive enterprise solutions designed to address every aspect of your business transformation
            </p>
          </div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-red-100 mr-6">
                      <solution.icon className="h-12 w-12 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={solution.href}>
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                      Learn More
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-none"></div>
                    <Image
                      src={solution.image}
                      alt={`${solution.title} illustration`}
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Discover how our enterprise solutions can drive efficiency, innovation, and growth for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}