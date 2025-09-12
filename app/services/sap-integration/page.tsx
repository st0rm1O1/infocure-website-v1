import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Globe, ArrowRight, Zap, Shield, Settings, Target, Database, Cloud, BarChart3 } from "lucide-react"

export default function SAPIntegrationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              SAP Integration Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Connect Your SAP Ecosystem Seamlessly. Expert integration services to connect SAP with third-party
              systems, cloud platforms, and legacy applications for unified business operations.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Integrate Your Systems <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Comprehensive Integration Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From point-to-point integrations to complex enterprise service buses, we connect your SAP landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>API & Web Services Integration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Modern API-based integrations for real-time data exchange and system connectivity.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• REST and SOAP API development</li>
                    <li>• OData services implementation</li>
                    <li>• Real-time data synchronization</li>
                    <li>• API gateway and security</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Data Integration & ETL</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Robust data integration solutions for seamless information flow across systems.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• SAP Data Services implementation</li>
                    <li>• Custom ETL process development</li>
                    <li>• Data quality and validation</li>
                    <li>• Master data management</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>Cloud Integration Platform</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>SAP Cloud Platform Integration for hybrid and cloud-to-cloud connectivity.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• SAP Integration Suite setup</li>
                    <li>• Cloud connector configuration</li>
                    <li>• Hybrid integration scenarios</li>
                    <li>• B2B integration capabilities</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Legacy System Integration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Connect SAP with legacy systems and third-party applications seamlessly.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• RFC and BAPI integration</li>
                    <li>• File-based integration (EDI, CSV, XML)</li>
                    <li>• Database direct connectivity</li>
                    <li>• Middleware solutions</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Benefits of SAP Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Unlock the full potential of your enterprise systems with seamless integration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Real-time Data Flow</h3>
              <p className="text-sm text-muted-foreground">Instant data synchronization across all systems</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Enhanced Security</h3>
              <p className="text-sm text-muted-foreground">Secure data exchange with encryption and authentication</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Process Automation</h3>
              <p className="text-sm text-muted-foreground">Automated workflows across integrated systems</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Better Insights</h3>
              <p className="text-sm text-muted-foreground">Unified reporting and analytics across platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Integrate Your SAP Systems?"
        description="Connect your SAP landscape with our expert integration services. Achieve seamless data flow and unified operations."
        buttonText="Start Integration Project"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
