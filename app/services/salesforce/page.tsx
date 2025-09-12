import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, Settings, Shield, Target, BarChart3, Globe, CheckCircle } from "lucide-react"

export default function SalesforcePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Salesforce Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Empowering Businesses with Smarter, Connected, and Scalable CRM. Transform customer engagement and drive
              growth with tailored Salesforce implementations and integrations.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Transform Your CRM <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Salesforce Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Comprehensive Salesforce Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From implementation to ongoing support, we help you maximize Salesforce ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Salesforce Implementation</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Transform customer management with end-to-end Salesforce implementation services.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Business process assessment and mapping</li>
                    <li>• Salesforce setup, configuration, and deployment</li>
                    <li>• Data migration with minimal downtime</li>
                    <li>• User training and adoption programs</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Salesforce Customization</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Tailor Salesforce to match your workflows and industry processes.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Tailored dashboards and reports</li>
                    <li>• Custom objects, fields, and workflows</li>
                    <li>• Role-based access and security</li>
                    <li>• Automated approval processes</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Salesforce Support</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Ongoing optimization to deliver continuous Salesforce value.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Proactive monitoring and performance tuning</li>
                    <li>• Troubleshooting and bug fixes</li>
                    <li>• Continuous feature updates</li>
                    <li>• 24/7 technical and functional support</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Salesforce Integration</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Connect Salesforce seamlessly with your existing IT landscape.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Integration with ERP systems (SAP, Oracle, MS Dynamics)</li>
                    <li>• APIs and middleware integration</li>
                    <li>• Marketing automation and eCommerce</li>
                    <li>• Data synchronization across platforms</li>
                  </ul>
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
              Why Choose Infocure for Salesforce?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven expertise delivering measurable business outcomes with Salesforce.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">10+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">Salesforce consulting and delivery expertise</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Certified Experts</h3>
              <p className="text-sm text-muted-foreground">Salesforce consultants and developers</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Industry Expertise</h3>
              <p className="text-sm text-muted-foreground">Manufacturing, Retail, Healthcare, BFSI</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Target className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Business Outcomes</h3>
              <p className="text-sm text-muted-foreground">Focus on measurable results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Customer Experience?"
        description="Make Salesforce work for your business with Infocure's proven implementation and customization expertise."
        buttonText="Get Started with Salesforce"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
