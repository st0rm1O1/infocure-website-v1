import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Brain, ArrowRight, BarChart3, Eye, Bot, Shield, Zap, Target, TrendingUp, Settings, Globe } from "lucide-react"

export default function ArtificialIntelligencePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Artificial Intelligence Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Bringing Intelligence to Business. Transform operations with AI-powered tools that boost efficiency,
              provide actionable insights, and deliver competitive advantages through intelligent automation.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why AI Matters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Why AI Matters for Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              AI transforms how businesses operate, delivering measurable value across all functions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Efficiency & Automation</CardTitle>
                <CardDescription>
                  AI-powered tools boost operational efficiency, trimming costs while accelerating workflows.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Scalability & Growth</CardTitle>
                <CardDescription>
                  Flexible AI solutions adapt as your business evolves—without breaking the system.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Competitive Edge</CardTitle>
                <CardDescription>
                  AI enables personalized experiences and insightful decisions, keeping you ahead.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Actionable Insights</CardTitle>
                <CardDescription>
                  Predictive analytics and data-driven forecasting enable smarter, faster decisions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              AI Services That Drive Real Business Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform operations, reveal insights, and unlock growth opportunities with our comprehensive AI
              solutions.
            </p>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-heading">
                    <Brain className="h-5 w-5 text-primary" />
                    <span>AI Strategy & Consultation</span>
                  </CardTitle>
                  <CardDescription>
                    Leverage NLP, machine learning, and data science to identify AI opportunities and build tailored
                    innovation frameworks for your enterprise.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-heading">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>AI-Enhanced Data Management</span>
                  </CardTitle>
                  <CardDescription>
                    Transform data lakes and build automated warehouses using AI-powered retrieval and NLP to elevate
                    analytics accuracy and performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-heading">
                    <Settings className="h-5 w-5 text-primary" />
                    <span>Custom AI Development</span>
                  </CardTitle>
                  <CardDescription>
                    From proof-of-concept to full-scale deployment, we build and integrate intelligent features
                    including predictive analytics and computer vision.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-heading">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>AI for Risk & Compliance</span>
                  </CardTitle>
                  <CardDescription>
                    Implement AI-driven compliance frameworks to prevent regulatory risks, protect sensitive data, and
                    maintain transparency.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-heading">
                    <Bot className="h-5 w-5 text-primary" />
                    <span>Process Redesign & Automation</span>
                  </CardTitle>
                  <CardDescription>
                    Use AI to uncover inefficiencies and redesign workflows focused on data-driven KPIs for quality,
                    satisfaction, and value delivery.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-heading">
                    <Eye className="h-5 w-5 text-primary" />
                    <span>MLOps & Model Governance</span>
                  </CardTitle>
                  <CardDescription>
                    Ensure reliable delivery with version control, infrastructure management, security protocols, and
                    model lifecycle governance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Applications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              AI Applications Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tailored AI solutions that address specific industry challenges and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Predictive Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Forecasting and trend analysis for better business planning
              </p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Eye className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Computer Vision</h3>
              <p className="text-sm text-muted-foreground">Image recognition and visual data processing solutions</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Brain className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Natural Language Processing</h3>
              <p className="text-sm text-muted-foreground">Text analysis, chatbots, and language understanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Infocure Stands Out */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Why Infocure Stands Out</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Purpose-driven AI solutions that prioritize ethics, transparency, and measurable business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Tailored AI Solutions</CardTitle>
                <CardDescription>We align AI with your solution architecture—not the other way around.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Ethical by Design</CardTitle>
                <CardDescription>
                  We prioritize transparency, security, and responsible AI use in every solution.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Global Maturity</CardTitle>
                <CardDescription>
                  Our distributed delivery model supports evolving demands across geographies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform with AI?"
        description="Unlock efficiency, intelligence, and growth with Infocure's AI solutions. From strategy to implementation, we're your trusted AI partner."
        buttonText="Start Your AI Journey"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
