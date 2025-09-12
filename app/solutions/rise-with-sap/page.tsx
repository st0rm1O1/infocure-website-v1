import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Cloud, ArrowRight, Zap, Shield, Settings, Target, TrendingUp, BarChart3, Globe } from "lucide-react"

export default function RiseWithSAPPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              RISE with SAP Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transform to S/4HANA Cloud with RISE with SAP. A comprehensive solution that combines SAP S/4HANA Cloud
              with tools, services, and support for your digital transformation journey.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start Your RISE Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is RISE with SAP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading">What is RISE with SAP?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              RISE with SAP is a comprehensive offering that provides everything you need to move to the cloud and
              transform your business. It includes SAP S/4HANA Cloud, business process intelligence, and tools to help
              you innovate and grow.
            </p>
          </div>
        </div>
      </section>

      {/* RISE Components */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Complete RISE with SAP Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need for a successful cloud transformation in one comprehensive offering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>SAP S/4HANA Cloud</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>The intelligent ERP suite designed for the digital economy.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Private cloud or public cloud options</li>
                    <li>• Built-in AI and machine learning</li>
                    <li>• Real-time analytics and reporting</li>
                    <li>• Mobile-first user experience</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Business Process Intelligence</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Gain insights into your business processes with advanced analytics.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Process mining and optimization</li>
                    <li>• Performance monitoring</li>
                    <li>• Predictive analytics</li>
                    <li>• Continuous improvement insights</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Tools & Services</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Comprehensive tools and services to support your transformation.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• SAP Business Technology Platform</li>
                    <li>• Integration and extension tools</li>
                    <li>• Data migration services</li>
                    <li>• Change management support</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Managed Services</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Ongoing support and management for your cloud environment.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 24/7 system monitoring</li>
                    <li>• Automatic updates and patches</li>
                    <li>• Security and compliance management</li>
                    <li>• Performance optimization</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Why Choose RISE with SAP?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Accelerate your digital transformation with a proven, comprehensive approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Faster Implementation</h3>
              <p className="text-sm text-muted-foreground">Pre-configured solutions accelerate deployment</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Reduced Risk</h3>
              <p className="text-sm text-muted-foreground">Proven methodologies minimize implementation risks</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Continuous Innovation</h3>
              <p className="text-sm text-muted-foreground">Regular updates with latest features and capabilities</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Global Scalability</h3>
              <p className="text-sm text-muted-foreground">Scale across regions with consistent performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to RISE with SAP?"
        description="Transform your business with RISE with SAP. Get everything you need for a successful cloud transformation in one comprehensive package."
        buttonText="Start Your Transformation"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
