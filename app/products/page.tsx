import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, BarChart3, Calendar, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      title: "CRM Solutions",
      description:
        "Comprehensive Customer Relationship Management platform to drive sales growth and customer satisfaction.",
      href: "/products/crm",
      icon: Users,
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Marketing Automation"],
      category: "Sales & Marketing",
    },
    {
      title: "ERP Systems",
      description: "Integrated Enterprise Resource Planning solutions to streamline operations and boost efficiency.",
      href: "/products/erp",
      icon: BarChart3,
      features: ["Financial Management", "Supply Chain", "Manufacturing", "Reporting & Analytics"],
      category: "Operations",
    },
    {
      title: "HRMS Platform",
      description:
        "Complete Human Resource Management System to optimize workforce management and employee experience.",
      href: "/products/hrms",
      icon: Calendar,
      features: ["Payroll Management", "Performance Tracking", "Recruitment", "Employee Self-Service"],
      category: "Human Resources",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6 px-4 py-2">Enterprise Products</Badge>
            <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
              Powerful Enterprise Solutions for Modern Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed max-w-3xl mx-auto">
              Transform your business operations with our comprehensive suite of enterprise products. Built for
              scalability, security, and seamless integration across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
              Comprehensive enterprise solutions designed to address every aspect of your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#ff2226]/10 rounded-lg">
                      <product.icon className="h-8 w-8 text-[#ff2226]" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#191717] font-[family-name:var(--font-geist-sans)]">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-[family-name:var(--font-inter)]">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#ff2226] flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-[family-name:var(--font-inter)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={product.href}>
                    <Button className="w-full bg-[#191717] hover:bg-[#ff2226] text-white group-hover:bg-[#ff2226] transition-colors">
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                Why Choose Our Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                Built with enterprise-grade security, scalability, and performance in mind
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#ff2226]" />
                </div>
                <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                  Bank-level security with advanced encryption, compliance certifications, and robust access controls
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-[#ff2226]" />
                </div>
                <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                  High Performance
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                  Optimized for speed and reliability with 99.9% uptime guarantee and lightning-fast response times
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-[#ff2226]" />
                </div>
                <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                  Global Scalability
                </h3>
                <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                  Scale seamlessly across multiple regions with cloud-native architecture and global deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#191717] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
              Join thousands of enterprises worldwide who trust our products to drive their digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
