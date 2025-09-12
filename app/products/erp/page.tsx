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
} from "lucide-react"

export default function ERPPage() {
  const modules = [
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting with real-time insights",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Advanced inventory tracking, optimization, and automated reorder management",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "End-to-end supply chain visibility with vendor management and procurement",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production planning, quality control, and shop floor management systems",
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Integrated HR management with payroll, benefits, and performance tracking",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Advanced analytics, reporting, and predictive insights for strategic decisions",
    },
  ]

  const benefits = [
    { metric: "45%", description: "Reduction in Operational Costs" },
    { metric: "60%", description: "Faster Financial Reporting" },
    { metric: "30%", description: "Improvement in Inventory Turnover" },
    { metric: "50%", description: "Increase in Process Efficiency" },
  ]

  const industries = ["Manufacturing", "Distribution", "Retail", "Healthcare", "Construction", "Professional Services"]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 font-heading text-balance">
                  Unify Your Business Operations with Intelligent ERP
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Streamline your entire business ecosystem with our comprehensive ERP platform. From finance to
                  manufacturing, get real-time visibility and control over every aspect of your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="btn-hover px-8 py-3"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-hover px-8 py-3"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                  alt="ERP Dashboard Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
                Measurable Business Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Organizations using our ERP solution see significant improvements across key business metrics
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 font-heading">
                    {benefit.metric}
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
                Comprehensive ERP Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Integrated modules that work together to provide complete business management capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="border-0 bg-background shadow-lg card-hover group">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <module.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground font-heading">
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6 font-heading">
                  Built for Every Industry
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our ERP solution is designed to meet the unique requirements of various industries, with specialized
                  features and workflows tailored to your business needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 btn-hover">
                  Explore Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
                  alt="ERP Industry Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-heading text-balance">
              Transform Your Business Operations Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join leading enterprises who have streamlined their operations and accelerated growth with our ERP
              platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-hover px-8 py-3"
              >
                Schedule Implementation Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-hover px-8 py-3"
              >
                Download ERP Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}