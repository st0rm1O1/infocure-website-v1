import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Database, ArrowRight, TrendingUp, Shield, Zap, CheckCircle, Target, Settings, BarChart3 } from "lucide-react"

export default function SAPHANAUpgradePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              SAP HANA Upgrade Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Modernize Your SAP Landscape with Expert HANA Upgrades. Seamlessly upgrade to the latest SAP HANA versions
              with minimal downtime and maximum performance gains.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start Your Upgrade <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upgrade Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Comprehensive HANA Upgrade Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From planning to execution, we ensure your SAP HANA upgrade delivers enhanced performance and new
              capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>HANA Version Upgrades</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Upgrade to the latest SAP HANA versions with comprehensive planning and execution.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• HANA 1.0 to HANA 2.0 migration</li>
                    <li>• Latest revision and patch updates</li>
                    <li>• Performance optimization during upgrade</li>
                    <li>• Minimal downtime strategies</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Platform Migration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Migrate HANA to modern infrastructure for enhanced performance and scalability.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Cloud platform migration (AWS, Azure, GCP)</li>
                    <li>• Hardware refresh and optimization</li>
                    <li>• Scale-out to scale-up conversions</li>
                    <li>• Infrastructure modernization</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security & Compliance</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Ensure your upgraded HANA environment meets the latest security standards.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Security patch implementation</li>
                    <li>• Compliance framework updates</li>
                    <li>• Data encryption enhancements</li>
                    <li>• Access control optimization</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Performance Optimization</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Maximize the performance benefits of your HANA upgrade with expert tuning.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Memory and CPU optimization</li>
                    <li>• Query performance tuning</li>
                    <li>• Storage optimization strategies</li>
                    <li>• Monitoring and alerting setup</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Upgrade Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Why Choose Our HANA Upgrade Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven expertise in SAP HANA upgrades with a track record of successful migrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Zero Data Loss</h3>
              <p className="text-sm text-muted-foreground">Guaranteed data integrity throughout the upgrade process</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Minimal Downtime</h3>
              <p className="text-sm text-muted-foreground">Strategic planning to minimize business disruption</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Expert Team</h3>
              <p className="text-sm text-muted-foreground">SAP HANA certified consultants and architects</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Performance Gains</h3>
              <p className="text-sm text-muted-foreground">Measurable improvements in system performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Upgrade Your SAP HANA?"
        description="Modernize your SAP landscape with our expert HANA upgrade services. Minimize risk, maximize performance."
        buttonText="Plan Your Upgrade"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
