import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Settings,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Database,
  Cloud,
  Shield,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react"

export default function SAPConsultationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              SAP Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform Your Business with Expert SAP Consulting. We help corporations, institutions, and government
              organizations unlock the full potential of SAP with strategic advice, application development, and
              next-generation solutions.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance font-heading">
              Why Choose Our SAP Consulting?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Transformation Done with Ease</h3>
                    <p className="text-muted-foreground">
                      As a certified SAP Silver Partner, we help businesses of all sizes and industries buy, build,
                      implement, support, and run SAP solutions tailored to their unique requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Speed and Efficiency</h3>
                    <p className="text-muted-foreground">
                      Our predefined industry-standard frameworks, best practices, and proven processes help you
                      fast-track your SAP implementation while minimizing risks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Certified SAP Experts</h3>
                    <p className="text-muted-foreground">
                      Our team of SAP-certified consultants brings more than 10+ years of industry experience,
                      understanding your business challenges from the inside out.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">Global Delivery Model</h3>
                    <p className="text-muted-foreground">
                      With a global team trained in SAP S/4HANA, we focus on maximizing both business and IT benefits
                      with dedicated ERP teams worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Services Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our SAP Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive SAP solutions to power your digital transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>SAP Implementation</span>
                </CardTitle>
                <CardDescription>
                  End-to-end implementation for SAP Business Suite and SAP S/4HANA with proven methodologies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Audit & Finance</span>
                </CardTitle>
                <CardDescription>
                  Pre- and post-implementation SAP system audits to ensure optimal performance and compliance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Upgrade & Migration</span>
                </CardTitle>
                <CardDescription>
                  Smooth version upgrades and data migrations to keep your SAP environment current and secure.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Offshore Support</span>
                </CardTitle>
                <CardDescription>
                  Application maintenance, support, and custom development with global delivery capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>SAP Analytics</span>
                </CardTitle>
                <CardDescription>
                  Data cleansing, error identification, and data optimization strategies for better insights.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>SAP BTP & Fiori</span>
                </CardTitle>
                <CardDescription>
                  Enable transport of applications and interface artifacts between SAP BTP accounts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive ERP Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading">
              Comprehensive ERP Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              We help clients achieve intelligent enterprise operations with SAP technology that provides real-time
              visibility, improves decision-making, and drives sustainable growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6">
                <Database className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">ERP & Finance</h3>
                <p className="text-sm text-muted-foreground">Optimization and integration</p>
              </div>
              <div className="text-center p-6">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">Business Analytics</h3>
                <p className="text-sm text-muted-foreground">Data-driven insights</p>
              </div>
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">HCM Enhancement</h3>
                <p className="text-sm text-muted-foreground">Human capital management</p>
              </div>
              <div className="text-center p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">Supply Chain</h3>
                <p className="text-sm text-muted-foreground">Digital efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Infocure */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Why Choose Infocure Technologies?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              More than just an SAP partner—we are your trusted advisor for digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Decades of Experience</h3>
              <p className="text-sm text-muted-foreground">Combined experience in enterprise systems integration</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Industry Knowledge</h3>
              <p className="text-sm text-muted-foreground">Deep industry-specific knowledge and proven methodologies</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Centers of Excellence</h3>
              <p className="text-sm text-muted-foreground">Specialized SAP solutions and preconfigured accelerators</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Intelligent Enterprises</h3>
              <p className="text-sm text-muted-foreground">Focus on SAP S/4HANA Cloud and ERP for SMBs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform with SAP?"
        description="Partner with Infocure Technologies to unlock the full potential of SAP for your enterprise. From strategy to implementation and beyond."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
