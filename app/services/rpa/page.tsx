import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Bot, ArrowRight, Clock, DollarSign, Target, Shield, Zap, Settings, BarChart3, Users } from "lucide-react"

export default function RPAPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Robotic Process Automation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Boost efficiency with intelligent process automation. Use software "bots" to automate repetitive tasks,
              reduce errors, and free your team to focus on strategic work.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Automate Your Processes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is RPA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance font-heading">What Is RPA?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center text-pretty leading-relaxed">
              Robotic Process Automation (RPA) uses software "bots" to mimic human actions across applications—like
              clicking, typing, and transferring data. This allows automation even for legacy systems without APIs,
              unlocking efficiency across your enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Why RPA Benefits */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Why RPA Is a Smart Move</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform operations with automation that delivers immediate and measurable benefits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Save Time & Money</CardTitle>
                <CardDescription>
                  Speed up repetitive tasks while reducing labor costs—RPA offers fast return on investment.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Precision at Scale</CardTitle>
                <CardDescription>
                  Bots perform tasks flawlessly every time, significantly cutting down on human error.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">24/7 Reliability</CardTitle>
                <CardDescription>
                  Bots work around the clock without breaks—perfect for uninterrupted workflows.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Unlimited Scalability</CardTitle>
                <CardDescription>
                  Add or reassign bots as your workload grows, with no extra HR requirements.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Better Compliance</CardTitle>
                <CardDescription>
                  Bots follow rules exactly, creating clear logs and reducing process risk.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Free Up Your Team</CardTitle>
                <CardDescription>
                  Automate low-value tasks so employees can focus on strategy and innovation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* RPA Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our RPA Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              End-to-end RPA solutions from strategy to implementation and ongoing management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>RPA Consulting Services</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Strategic guidance with hands-on enterprise RPA implementation experience.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Business requirement analysis</li>
                    <li>• Purpose-driven RPA audit</li>
                    <li>• Process discovery and assessment</li>
                    <li>• Technology stack recommendations</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Bot className="h-5 w-5 text-primary" />
                  <span>Custom RPA Development</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Intelligent, tailor-made bots to optimize repetitive processes.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Custom bot design and development</li>
                    <li>• Intelligent process optimization</li>
                    <li>• Workflow automation</li>
                    <li>• Cloud-based RPA solutions</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>RPA Implementation</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Secure and scalable RPA solutions integrated into your ecosystem.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Workflow orchestration</li>
                    <li>• Rollout validation</li>
                    <li>• Process documentation</li>
                    <li>• Agile implementation approach</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>RPA Support & Management</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Managed services ensuring your RPA environment delivers continuous value.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Continuous monitoring and maintenance</li>
                    <li>• Bot performance optimization</li>
                    <li>• Troubleshooting and upgrades</li>
                    <li>• Governance and compliance support</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Where RPA Delivers Value */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Where RPA Delivers Value</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform operations across departments with intelligent automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Finance & Accounting</h3>
              <p className="text-sm text-muted-foreground">Invoices, AP/AR, loan processing, compliance reports</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">HR & Operations</h3>
              <p className="text-sm text-muted-foreground">Onboarding, payroll, leave processing, employee data</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Supply Chain</h3>
              <p className="text-sm text-muted-foreground">Order processing, inventory checks, vendor management</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Legacy Integration</h3>
              <p className="text-sm text-muted-foreground">Bridge gaps with older systems smoothly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Automate Your Processes?"
        description="Transform efficiency and reduce costs with Infocure's intelligent RPA solutions. From strategy to implementation and support."
        buttonText="Start Your Automation Journey"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
