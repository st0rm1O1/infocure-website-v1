import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import {
  AnimatedSection,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section"

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
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <Badge className="bg-[#ff2226] text-white mb-6 px-4 py-2">ERP Solutions</Badge>
                <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
                  Unify Your Business Operations with Intelligent ERP
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  Streamline your entire business ecosystem with our comprehensive ERP platform. From finance to
                  manufacturing, get real-time visibility and control over every aspect of your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3 transition-all duration-300 hover:scale-105"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 transition-all duration-300 bg-transparent"
                  >
                    View Pricing
                  </Button>
                </div>
              </SlideInLeft>
              <SlideInRight delay={0.2}>
                <div className="bg-gradient-to-br from-[#ff2226]/20 to-transparent p-8 rounded-lg">
                  <img
                    src="/modern-erp-dashboard-with-financial-charts-and-inv.jpg"
                    alt="ERP Dashboard Interface"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                  Measurable Business Impact
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Organizations using our ERP solution see significant improvements across key business metrics
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#ff2226] mb-2 font-[family-name:var(--font-geist-sans)]">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-700 font-[family-name:var(--font-inter)]">{benefit.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                  Comprehensive ERP Modules
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Integrated modules that work together to provide complete business management capabilities
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="p-3 bg-[#ff2226]/10 rounded-lg w-fit mb-4 group-hover:bg-[#ff2226]/20 transition-colors duration-300">
                        <module.icon className="h-8 w-8 text-[#ff2226]" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#191717] font-[family-name:var(--font-geist-sans)]">
                        {module.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 font-[family-name:var(--font-inter)]">{module.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <h2 className="text-4xl font-bold text-[#191717] mb-6 font-[family-name:var(--font-geist-sans)]">
                  Built for Every Industry
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  Our ERP solution is designed to meet the unique requirements of various industries, with specialized
                  features and workflows tailored to your business needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                        <span className="font-[family-name:var(--font-inter)]">{industry}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <AnimatedSection delay={0.6}>
                  <Button className="mt-8 bg-[#ff2226] hover:bg-[#e01e22] text-white transition-all duration-300 hover:scale-105">
                    Explore Industry Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AnimatedSection>
              </SlideInLeft>
              <SlideInRight delay={0.2}>
                <div className="relative">
                  <img
                    src="/erp-system-showing-manufacturing-workflow-and-supp.jpg"
                    alt="ERP Industry Solutions"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                  Advanced ERP Capabilities
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Powerful features that drive operational excellence and business growth
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="text-center">
                  <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Settings className="h-8 w-8 text-[#ff2226]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                    Workflow Automation
                  </h3>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                    Automate complex business processes with intelligent workflows and approval chains
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-[#ff2226]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                    Real-time Analytics
                  </h3>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                    Get instant insights with customizable dashboards and advanced reporting capabilities
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-[#ff2226]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                    Multi-location Support
                  </h3>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                    Manage multiple locations, currencies, and compliance requirements from a single platform
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#191717] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
                Transform Your Business Operations Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                Join leading enterprises who have streamlined their operations and accelerated growth with our ERP
                platform
              </p>
            </FadeInUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Schedule Implementation Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 transition-all duration-300 bg-transparent"
              >
                Download ERP Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
