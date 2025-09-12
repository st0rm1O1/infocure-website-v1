import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Database, ArrowRight, Zap, BarChart3, Cloud, Shield, Target, TrendingUp, CheckCircle } from "lucide-react"

export default function SAPHANAMigrationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              SAP HANA Migration Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Power Your Future with Real-Time ERP. Migrating to SAP HANA isn't just a technical upgrade—it's a leap
              toward agility, intelligence, and efficiency with Infocure Technologies as your partner.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start Your Migration <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Migrate to SAP HANA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Why Migrate to SAP HANA (S/4HANA)?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform your ERP into a real-time engine that powers growth, innovation, and competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Real-Time Decisions</CardTitle>
                <CardDescription>
                  SAP HANA delivers instant insights, letting you analyze live data—financials, inventory, customer
                  behavior—on the fly.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Embedded Analytics</CardTitle>
                <CardDescription>
                  Built-in analytics and machine learning tools uncover hidden trends, automate processes, and boost
                  efficiency.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Simplified Landscape</CardTitle>
                <CardDescription>
                  Reduced data complexity and simplified architecture mean faster performance, lower storage needs, and
                  easier maintenance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Lower Costs</CardTitle>
                <CardDescription>
                  Optimized performance and reduced infrastructure requirements lead to significant cost savings and
                  improved ROI.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Migration Approach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Our SAP HANA Migration Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Structured methodology ensuring smooth transition with minimal business disruption.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Assessment & Planning</h3>
                <p className="text-muted-foreground">
                  Review existing landscape—hardware, custom code, data volume, and strategic goals. Recommend the best
                  path: Greenfield, Brownfield, or Hybrid migration.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Data Cleansing & Strategy</h3>
                <p className="text-muted-foreground">
                  Clean and archive unnecessary data to reduce footprint and infrastructure cost. Essential for
                  optimizing performance and reducing downtime during migration.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Technical Execution</h3>
                <p className="text-muted-foreground">
                  Using SAP-validated tools like SWPM, DMO, or migration cockpit, we handle technical upgrade or
                  greenfield implementation with compatibility assurance.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Proof of Concept (PoC)</h3>
                <p className="text-muted-foreground">
                  Safe migration trial in sandpit environment for validation, risk mitigation, and early stakeholder
                  alignment before going live.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Testing & Validation</h3>
                <p className="text-muted-foreground">
                  Thorough testing spans functional, performance, and integration scenarios to guarantee seamless
                  transition across enterprise landscape.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Go-Live & Post-Migration Support</h3>
                <p className="text-muted-foreground">
                  Oversee cutover and offer hyper care for post-migration stability. Fine-tune performance, resolve
                  issues, and ensure rapid user adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Routes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Which Migration Route Fits You Best?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the optimal migration strategy based on your business requirements and technical landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Brownfield</span>
                </CardTitle>
                <CardDescription>
                  Upgrade your existing ECC system → S/4HANA. Fast, cost-effective approach that preserves existing
                  customizations and configurations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Greenfield</span>
                </CardTitle>
                <CardDescription>
                  Rebuild from scratch with clean design and best practices. Fresh start with optimized processes and
                  modern architecture.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>Hybrid</span>
                </CardTitle>
                <CardDescription>
                  Combines aspects of both—modernize while preserving valuable legacy elements. Balanced approach for
                  complex environments.
                </CardDescription>
              </CardHeader>
            </Card>
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
              Proven expertise and comprehensive approach ensuring successful SAP HANA migration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Expertise & Trust</h3>
              <p className="text-sm text-muted-foreground">
                SAP-certified consultants with deep cross-industry experience
              </p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Successful SAP deployments and migrations track record</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Best-Practice Framework</h3>
              <p className="text-sm text-muted-foreground">SAP tools, automation, and hands-on validation</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Operational Continuity</h3>
              <p className="text-sm text-muted-foreground">Minimal downtime, maximum performance, complete alignment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Migrate to SAP HANA?"
        description="Transform your ERP into a real-time engine with Infocure's proven SAP HANA migration expertise. Minimize risk, maximize value."
        buttonText="Plan Your Migration"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
