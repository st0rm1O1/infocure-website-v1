import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Database, ArrowRight, Cloud, Settings, TrendingUp, Shield, Globe, CheckCircle, Target } from "lucide-react"

export default function OracleEBSPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Oracle E-Business Suite Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Empowering Core Operations with Oracle EBS. Unlock the full potential of Oracle E-Business Suite with
              comprehensive implementation, upgrade, and support services.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Optimize Your Oracle EBS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Oracle EBS Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading">
              Comprehensive Oracle EBS Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Oracle EBS delivers an integrated suite of enterprise tools—encompassing Financials, Supply Chain, Project
              Management, HCM, CRM, and more. Built on Oracle's robust architecture, it centralizes operations for
              better visibility, faster decisions, and streamlined processes.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              End-to-end Oracle EBS services from implementation to cloud migration and ongoing support.
            </p>
          </div>
          <div className="space-y-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Implementation & Configuration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Tailored Oracle EBS deployments on-premise, cloud, or hybrid environments</li>
                    <li>• Module configuration: Financials, SCM, HCM, CRM, Projects, and more</li>
                    <li>• Seamless data migration—legacy system to Oracle EBS—ensuring business continuity</li>
                    <li>• Change management, training, and adoption support for smooth transitions</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Upgrades & Migration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Version upgrades (e.g., to EBS 12.2.x) including full planning, execution, and testing</li>
                    <li>• Platform migration—from aging infrastructure to modern deployments such as Exadata</li>
                    <li>• Cloud migrations to Oracle Cloud Infrastructure (OCI)</li>
                    <li>• Leveraging EBS Cloud Manager for efficient provisioning and high availability</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Custom Development & Enhancements</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• CEMLI-based extensions—Configuration, Extension, Modification, Localization, Integration</li>
                    <li>• Secure customizations through Oracle Application Framework (OAF)</li>
                    <li>• Application Object Library (AOL) development</li>
                    <li>• Built-in tools ensure custom code remains compatible and upgrade-safe</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Integration & Middleware</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Seamless integration via Oracle AIA, including Process Integration Packs (PIPs)</li>
                    <li>• Direct Integrations (DIs) for streamlined connectivity</li>
                    <li>• Middleware-based integration to connect EBS with other enterprise systems</li>
                    <li>• ERP, CRM, analytics tools, and more integration capabilities</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Support & Managed Services</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li>• Full-lifecycle support—performance tuning, patching, change and release management</li>
                    <li>• Helpdesk assistance and proactive monitoring</li>
                    <li>• Maintenance to minimize downtime and ensure high system availability</li>
                    <li>• Comprehensive lifecycle management—from deployment to upgrades and scaling</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Infocure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Why Choose Infocure for Oracle EBS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven Oracle expertise delivering secure, scalable, and strategically aligned ERP solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">End-to-End Expertise</CardTitle>
                <CardDescription>
                  From implementation to migration to integration, we cover the full EBS spectrum
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Best Practices</CardTitle>
                <CardDescription>
                  We follow Oracle's CEMLI framework for safe, upgrade-friendly enhancements
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Cloud className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Cloud-Ready</CardTitle>
                <CardDescription>
                  Scale to OCI and modernize infrastructure with cloud tools and support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Global Delivery</CardTitle>
                <CardDescription>
                  Hybrid delivery model with Oracle CoE-style expertise and domain-aligned teams
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Quick Snapshot */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Service Areas Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Implementation</h3>
              <p className="text-sm text-muted-foreground">Deploy, configure, migrate data, train teams</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Upgrade & Migration</h3>
              <p className="text-sm text-muted-foreground">Version upgrades, platform moves, cloud migrations</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Database className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Custom Development</h3>
              <p className="text-sm text-muted-foreground">CEMLI-based extensions, OAF personalization</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Integration</h3>
              <p className="text-sm text-muted-foreground">Oracle AIA, third-party system connections</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Support & Management</h3>
              <p className="text-sm text-muted-foreground">Ongoing maintenance, support, tuning, governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Modernize Your Oracle EBS?"
        description="Ensure your Oracle EBS ecosystem is secure, scalable, and aligned with strategic business goals for long-term growth."
        buttonText="Optimize Your EBS Environment"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
