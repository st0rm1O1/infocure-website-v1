import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Users, ArrowRight, Clock, DollarSign, Globe, Zap, Target, Settings, Code, Database, Cloud } from "lucide-react"

export default function TeamAugmentationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              IT Staff Augmentation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Boost your team's capacity with skilled experts, faster delivery, zero hiring hassle. Scale capabilities,
              accelerate projects, and adapt to changing business demands with our global talent pool.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Scale Your Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Benefits of IT Staff Augmentation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Gain committed professionals with a product mindset who integrate seamlessly into your workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Faster Recruitment</CardTitle>
                <CardDescription>
                  Skip long hiring cycles and gain instant access to experienced developers and project managers without
                  interviews or payroll hassles.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Lower Development Costs</CardTitle>
                <CardDescription>
                  Reduce expenses tied to full-time hires, infrastructure, and benefits. Remote teams let you build and
                  scale projects without overhead.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Minimal Legal Hassles</CardTitle>
                <CardDescription>
                  We handle payroll, compliance, taxes, and benefits, freeing you from legal complexities and
                  administrative burden.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Global Talent Access</CardTitle>
                <CardDescription>
                  Overcome local hiring limitations with access to skilled professionals across geographies, tailored to
                  your project needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">High Flexibility</CardTitle>
                <CardDescription>
                  Scale your team up or down quickly to match evolving workloads and business demands without long-term
                  commitments.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Full Control & Authority</CardTitle>
                <CardDescription>
                  Maintain complete project ownership—our experts work as an extension of your in-house team while you
                  drive strategy.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Agile Expansion</CardTitle>
                <CardDescription>
                  Test new markets, scale operations, and adapt to business shifts without long-term workforce
                  commitments.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Fresh Ideas & Innovation</CardTitle>
                <CardDescription>
                  Leverage diverse perspectives from our global talent pool to unlock new ideas, optimize processes, and
                  drive innovation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Software Technologies */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Software Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Access certified professionals across 30+ technologies and platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">SAP</CardTitle>
                <CardDescription>
                  S/4HANA, ECC, BW, Fiori, ABAP, Basis, SuccessFactors, Analytics Cloud, and integration specialists.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Database className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Oracle</CardTitle>
                <CardDescription>
                  EBS, Fusion Cloud, PL/SQL, Forms & Reports, OAF, ADF, and Oracle Cloud Infrastructure experts.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Cloud className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Salesforce</CardTitle>
                <CardDescription>
                  Sales Cloud, Service Cloud, Marketing Cloud, Lightning, Apex, Visualforce, and integration
                  specialists.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Microsoft</CardTitle>
                <CardDescription>
                  .NET, Azure, Dynamics 365, Power Platform, SharePoint, and Microsoft Cloud technologies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Technologies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Development & Cloud</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Modern development and cloud infrastructure expertise for scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Code className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">JAVA</h3>
              <p className="text-sm text-muted-foreground">Spring Boot, Microservices, Enterprise Applications</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Front End</h3>
              <p className="text-sm text-muted-foreground">React, Angular, Vue.js, TypeScript, Next.js</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Mobile Apps</h3>
              <p className="text-sm text-muted-foreground">React Native, Flutter, iOS, Android Native</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Cloud & Infrastructure</h3>
              <p className="text-sm text-muted-foreground">AWS, Azure, GCP, DevOps, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Flexible Engagement Models
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose the engagement model that best fits your project requirements and business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Dedicated Teams</span>
                </CardTitle>
                <CardDescription>
                  Full-time dedicated professionals working exclusively on your projects with complete integration into
                  your workflows and processes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Project-Based</span>
                </CardTitle>
                <CardDescription>
                  Skilled teams for specific projects with defined scope, timeline, and deliverables. Perfect for
                  short-term initiatives and specialized requirements.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Hybrid Model</span>
                </CardTitle>
                <CardDescription>
                  Combination of dedicated resources and project-based support, offering maximum flexibility to scale up
                  or down based on changing needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Scale Your Team?"
        description="Access global talent, reduce costs, and accelerate delivery with Infocure's IT staff augmentation services. From strategy to execution."
        buttonText="Build Your Team"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
