import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Factory,
  ArrowRight,
  Cog,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Target,
  Settings,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react"

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Manufacturing Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform Your Manufacturing Operations with Industry 4.0. Smart factories, IoT integration, and
              data-driven insights to optimize production, reduce costs, and accelerate time-to-market.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Modernize Manufacturing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Manufacturing Challenges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Manufacturing Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Address critical manufacturing pain points with technology-driven solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Production Visibility</span>
                </CardTitle>
                <CardDescription>
                  Real-time monitoring and analytics across production lines to identify bottlenecks and optimize
                  throughput.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Quality Control</span>
                </CardTitle>
                <CardDescription>
                  Automated quality assurance systems with AI-powered defect detection and predictive quality analytics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cog className="h-5 w-5 text-primary" />
                  <span>Equipment Maintenance</span>
                </CardTitle>
                <CardDescription>
                  Predictive maintenance solutions using IoT sensors and machine learning to prevent costly downtime.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Supply Chain Integration</span>
                </CardTitle>
                <CardDescription>
                  End-to-end supply chain visibility with supplier integration and demand forecasting capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Workforce Management</span>
                </CardTitle>
                <CardDescription>
                  Digital workforce solutions including skills tracking, training management, and productivity
                  analytics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Regulatory Compliance</span>
                </CardTitle>
                <CardDescription>
                  Automated compliance tracking and reporting for industry standards and regulatory requirements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry 4.0 Solutions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Industry 4.0 Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital transformation solutions for modern manufacturing operations.
            </p>
          </div>
          <div className="space-y-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Factory className="h-5 w-5 text-primary" />
                  <span>Smart Factory Implementation</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Transform traditional manufacturing into intelligent, connected operations.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• IoT sensor networks for real-time equipment monitoring</li>
                    <li>• Digital twin technology for virtual production optimization</li>
                    <li>• Automated production scheduling and resource allocation</li>
                    <li>• Integration with ERP and MES systems</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Manufacturing Analytics & BI</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Data-driven insights for operational excellence and strategic decision making.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Real-time production dashboards and KPI monitoring</li>
                    <li>• Predictive analytics for demand forecasting</li>
                    <li>• Quality analytics and defect pattern analysis</li>
                    <li>• Cost optimization and profitability analysis</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Process Automation & Robotics</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Intelligent automation solutions to enhance productivity and reduce manual intervention.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Robotic process automation for repetitive tasks</li>
                    <li>• Collaborative robotics (cobots) integration</li>
                    <li>• Automated material handling systems</li>
                    <li>• Vision-guided robotics for quality inspection</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Enterprise Integration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Seamless integration across manufacturing and business systems.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• ERP integration (SAP, Oracle, Microsoft Dynamics)</li>
                    <li>• MES and SCADA system connectivity</li>
                    <li>• PLM and CAD system integration</li>
                    <li>• Supply chain and logistics platform integration</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Manufacturing Transformation Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Measurable outcomes that drive competitive advantage and operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">30% Efficiency Gain</h3>
              <p className="text-sm text-muted-foreground">Improved production throughput and resource utilization</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">50% Quality Improvement</h3>
              <p className="text-sm text-muted-foreground">Reduced defects and enhanced product quality</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Cog className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">25% Downtime Reduction</h3>
              <p className="text-sm text-muted-foreground">Predictive maintenance and proactive issue resolution</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Real-time Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Complete operational transparency and data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Manufacturing Success</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven results across diverse manufacturing environments and industry verticals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Automotive Manufacturing</CardTitle>
                <CardDescription>
                  Implemented smart factory solutions for a leading automotive manufacturer, resulting in 35% production
                  efficiency improvement and 40% reduction in quality defects.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Electronics Assembly</CardTitle>
                <CardDescription>
                  Deployed IoT-enabled production monitoring and predictive maintenance, achieving 28% downtime
                  reduction and 20% cost savings in maintenance operations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Food & Beverage</CardTitle>
                <CardDescription>
                  Integrated quality management and traceability systems, ensuring 100% compliance with food safety
                  regulations and improving batch tracking efficiency by 45%.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Manufacturing Operations?"
        description="Embrace Industry 4.0 with Infocure's comprehensive manufacturing solutions. From smart factories to predictive analytics."
        buttonText="Start Your Manufacturing Transformation"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
