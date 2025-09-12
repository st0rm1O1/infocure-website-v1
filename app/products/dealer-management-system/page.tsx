import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Car, BarChart3, Settings, Shield, Zap } from "lucide-react"

export default function DealerManagementSystemPage() {
  const features = [
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive customer database with purchase history, preferences, and communication tracking",
    },
    {
      icon: Car,
      title: "Inventory Management",
      description: "Real-time vehicle inventory tracking with automated alerts and procurement management",
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Advanced reporting and analytics for sales performance, trends, and forecasting",
    },
    {
      icon: Settings,
      title: "Service Management",
      description: "Complete service scheduling, work order management, and parts inventory tracking",
    },
    {
      icon: Shield,
      title: "Finance & Insurance",
      description: "Integrated F&I tools for loan processing, insurance products, and compliance management",
    },
    {
      icon: Zap,
      title: "Digital Retailing",
      description: "Online sales platform with virtual showroom and digital transaction capabilities",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6 px-4 py-2">Dealer Management System</Badge>
            <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
              Complete Automotive Dealer Management Solution
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed max-w-3xl mx-auto">
              Streamline your dealership operations with our comprehensive DMS platform. From inventory management to
              customer relations, handle every aspect of your automotive business efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 bg-transparent"
              >
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                Comprehensive DMS Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                Everything you need to run a successful automotive dealership in one integrated platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardHeader>
                    <div className="p-3 bg-[#ff2226]/10 rounded-lg w-fit mb-4 group-hover:bg-[#ff2226]/20 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-[#ff2226]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#191717] font-[family-name:var(--font-geist-sans)]">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 font-[family-name:var(--font-inter)]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                Why Choose Our DMS?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                Built specifically for automotive dealers with industry-specific workflows and compliance features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#ff2226] mb-2 font-[family-name:var(--font-geist-sans)]">
                  40%
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-inter)]">Increase in Sales Efficiency</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#ff2226] mb-2 font-[family-name:var(--font-geist-sans)]">
                  60%
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-inter)]">Faster Transaction Processing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#ff2226] mb-2 font-[family-name:var(--font-geist-sans)]">
                  25%
                </div>
                <p className="text-gray-700 font-[family-name:var(--font-inter)]">Reduction in Administrative Tasks</p>
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
              Transform Your Dealership Operations
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
              Join hundreds of successful dealerships using our DMS to streamline operations and boost profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3">
                Schedule Demo
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
