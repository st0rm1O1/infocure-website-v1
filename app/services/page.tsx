import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Settings,
  Database,
  Cloud,
  Zap,
  Brain,
  Bot,
  Code,
  Shield,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "SAP Consultation & Advisory",
      description: "Transform your business with expert SAP consulting and strategic advice for digital transformation.",
      icon: Settings,
      href: "/services/sap-consultation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "SAP Implementation",
      description: "Expert SAP implementation that drives digital transformation with proven methodologies.",
      icon: Settings,
      href: "/services/sap-implementation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "SAP HANA Migration",
      description: "Power your future with real-time ERP through seamless SAP HANA migration services.",
      icon: Database,
      href: "/services/sap-hana-migration",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Oracle E-Business Suite",
      description: "Empowering core operations with comprehensive Oracle EBS implementation and support.",
      icon: Database,
      href: "/services/oracle-ebs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Salesforce Solutions",
      description: "Empower businesses with smarter, connected, and scalable CRM solutions.",
      icon: Cloud,
      href: "/services/salesforce",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Digital Transformation",
      description: "Unlock the full power of technology and innovation to future-proof your business.",
      icon: Zap,
      href: "/services/digital-transformation",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Artificial Intelligence",
      description: "Bringing intelligence to business with AI-powered solutions and automation.",
      icon: Brain,
      href: "/services/artificial-intelligence",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Robotic Process Automation",
      description: "Boost efficiency with intelligent process automation and software bots.",
      icon: Bot,
      href: "/services/rpa",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Custom Software Development",
      description: "Building tailored solutions that scale with your business requirements.",
      icon: Code,
      href: "/services/custom-software-development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=600&fit=crop&crop=center"
            alt="Services hero background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tight leading-none">
              Enterprise IT Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              At Infocure Technologies, we deliver enterprise-grade IT services designed to help organizations modernize, scale, and grow with cutting-edge technology solutions.
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
              Explore Services
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Our Service Portfolio
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services covering every aspect of enterprise technology transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="mb-8">
                    <Image
                      src={service.image}
                      alt={`${service.title} illustration`}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-red-100 group-hover:bg-red-200 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="h-8 w-8 text-red-500" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-red-500 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={service.href}>
                    <Button className="w-full bg-gray-900 hover:bg-red-500 text-white group-hover:bg-red-500 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
                Why Choose Our Services
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Built with enterprise-grade expertise, security, and performance in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 bg-red-100 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proven Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Decades of experience with certified consultants and industry-specific knowledge
                </p>
              </div>
              <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 bg-red-100 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Globe className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Delivery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Worldwide presence with local expertise and 24/7 support across time zones
                </p>
              </div>
              <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 bg-red-100 w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Shield className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bank-level security with compliance certifications and robust access controls
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Partner with Infocure Technologies to modernize your enterprise with proven IT services and solutions
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