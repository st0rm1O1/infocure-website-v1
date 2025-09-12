import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Zap,
  ArrowRight,
  Cloud,
  Brain,
  BarChart3,
  Settings,
  Target,
  TrendingUp,
  Globe,
  Users,
  Shield,
} from "lucide-react"

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Digital Transformation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Unlock the Full Power of Technology and Innovation. Reshape how your entire business works with
              comprehensive digital transformation strategies and implementation.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Start Your Transformation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Digital Transformation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance font-heading">
              Beyond Digitization
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center text-pretty leading-relaxed">
              Digital transformation isn't just a buzzword—it's about reshaping how your entire business works. At
              Infocure Technologies, we help you understand where you are—whether you're digitizing, digitalizing, or
              ready for full transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Assess Readiness</CardTitle>
                  <CardDescription>
                    Evaluate your current state across strategy, culture, talent, and technology to identify
                    transformation opportunities.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Build Roadmap</CardTitle>
                  <CardDescription>
                    Create a phased roadmap to bring new technology into your operations seamlessly and strategically.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Execute & Scale</CardTitle>
                  <CardDescription>
                    Implement transformation initiatives with measurable outcomes and continuous improvement processes.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Key Transformation Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital transformation across all aspects of your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>Cloud Adoption</span>
                </CardTitle>
                <CardDescription>
                  Modernization strategies for cloud migration, hybrid infrastructure, and cloud-native application
                  development.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>AI & Analytics</span>
                </CardTitle>
                <CardDescription>
                  AI, RPA, and analytics-driven innovation to automate processes and generate actionable business
                  insights.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Customer Experience</span>
                </CardTitle>
                <CardDescription>
                  Digital customer engagement platforms, omnichannel experiences, and personalization strategies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Process Automation</span>
                </CardTitle>
                <CardDescription>
                  Workflow optimization, robotic process automation, and intelligent business process management.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Data & Analytics</span>
                </CardTitle>
                <CardDescription>
                  Data lakes, business intelligence, predictive analytics, and real-time decision-making capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Cybersecurity</span>
                </CardTitle>
                <CardDescription>
                  Security-first transformation with zero-trust architecture, compliance frameworks, and risk
                  management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Industry-Specific Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tailored transformation strategies that address unique industry challenges and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">Industry 4.0, IoT, smart factories</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Financial Services</h3>
              <p className="text-sm text-muted-foreground">Fintech, digital banking, compliance</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Healthcare</h3>
              <p className="text-sm text-muted-foreground">Digital health, telemedicine, data analytics</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Retail</h3>
              <p className="text-sm text-muted-foreground">E-commerce, omnichannel, personalization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Transformation Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Measurable outcomes that drive sustainable business growth and competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Operational Efficiency</CardTitle>
                <CardDescription>
                  Streamlined processes and automated workflows reduce costs and improve productivity
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Enhanced Experience</CardTitle>
                <CardDescription>
                  Better customer and employee experiences through digital touchpoints and self-service
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Data-Driven Decisions</CardTitle>
                <CardDescription>
                  Real-time insights and analytics enable faster, more informed business decisions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Competitive Advantage</CardTitle>
                <CardDescription>
                  Innovation and agility to adapt quickly to market changes and opportunities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Business?"
        description="Reimagine processes for the digital-first era with Infocure's comprehensive transformation strategies and proven implementation expertise."
        buttonText="Begin Your Digital Journey"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
