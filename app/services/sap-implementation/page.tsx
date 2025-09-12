import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Settings, ArrowRight, CheckCircle, Users, Target, Zap, BarChart3, Shield, TrendingUp } from "lucide-react"

export default function SAPImplementationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Expert SAP Implementation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Drive Digital Transformation with proven SAP implementation methodologies. We bring refined strategies and
              industry-leading practices from 21+ sectors to deliver successful SAP deployments.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">How We Do It</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our proven three-phase approach ensures successful SAP implementation with minimal disruption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-heading">
                  1
                </div>
                <CardTitle className="font-heading">Strategize</CardTitle>
                <CardDescription>
                  Foster seamless communication and collaboration to gain comprehensive insight into your objectives,
                  ensuring absolute clarity on budget, timelines, and deliverables.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-heading">
                  2
                </div>
                <CardTitle className="font-heading">Execute</CardTitle>
                <CardDescription>
                  Employing our finely tuned implementation methodologies, we configure and deploy software solutions
                  with minimal disruption to your operations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold font-heading">
                  3
                </div>
                <CardTitle className="font-heading">Elevate</CardTitle>
                <CardDescription>
                  Our commitment doesn't end at implementation. We offer continuous support during the transition to
                  live operations, ensuring sustained success.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SAP Implementation Methodology */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              SAP Implementation Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Step-by-step approach ensuring technical precision and business alignment throughout your SAP journey.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Project Preparation – Setting the Stage</h3>
                <p className="text-muted-foreground">
                  Exhaustive evaluation of existing IT infrastructure to ensure it meets SAP's stringent requirements.
                  Technical project managers strategize hardware and software procurement with robust project planning.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Business Blueprint – Technical Architecture</h3>
                <p className="text-muted-foreground">
                  Technical architects work with business analysts to dissect every process from a technical
                  perspective. Define data structures, workflows, and migration strategies aligned with SAP's data
                  model.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Realization – Technical Implementation</h3>
                <p className="text-muted-foreground">
                  Technical consultants delve deep into SAP's customization, configuration, and coding. Craft intricate
                  technical solutions with data transformations, integration interfaces, and rigorous testing.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Final Preparation – Technical Cutover</h3>
                <p className="text-muted-foreground">
                  Meticulous data migration, performance tuning, and technical testing. Data is extracted, adapted, and
                  loaded into SAP with surgical precision while optimizing system performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Go-Live and Support – Technical Vigilance</h3>
                <p className="text-muted-foreground">
                  Technical support teams monitor system performance, addressing glitches swiftly. Post-implementation
                  support includes troubleshooting, user training, and ongoing maintenance for optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infocure's Unique Methodology */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Infocure's Unique SAP Implementation Phases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fine-tuned over 1000+ successful projects across 21+ diverse sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Elevate</span>
                </CardTitle>
                <CardDescription>
                  Prioritize open communication and collaboration to achieve total transparency over budget, timelines,
                  and deliverables. Foster strong partnerships with profound understanding of unique needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Execute</span>
                </CardTitle>
                <CardDescription>
                  Armed with deep grasp of technical intricacies, we configure and install SAP software with surgical
                  precision. Minimize business disruption and mitigate risk throughout the process.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Empower</span>
                </CardTitle>
                <CardDescription>
                  Continue support post-implementation with dedicated teams ensuring smooth technical transition.
                  Address challenges swiftly with necessary guidance and training for flawless operations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading">
              Why Choose Our SAP Implementation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 font-heading">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">1000+ successful implementations</p>
              </div>
              <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 font-heading">Expert Team</h3>
                <p className="text-sm text-muted-foreground">SAP-certified consultants</p>
              </div>
              <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 font-heading">Industry Focus</h3>
                <p className="text-sm text-muted-foreground">21+ sectors experience</p>
              </div>
              <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2 font-heading">Minimal Disruption</h3>
                <p className="text-sm text-muted-foreground">Seamless transitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Implement SAP?"
        description="Transform your business with our proven SAP implementation methodology. From planning to go-live and beyond."
        buttonText="Start Your Implementation"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
