import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Code,
  ArrowRight,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  Target,
  Settings,
  Globe,
  TrendingUp,
} from "lucide-react"

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Custom Software Development
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Building Tailored Solutions That Scale. Create software that fits your unique needs, processes, and
              long-term goals with our comprehensive development expertise.
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

      {/* Why Custom Software */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Why Opt for Custom Software?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Custom software isn't just a tool—it's a tailored solution that drives competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">Perfect Alignment</h3>
                  <p className="text-muted-foreground">
                    Aligns perfectly with your operations, fueling efficiency and productivity by streamlining
                    workflows, not forcing them to adapt.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">Grows With You</h3>
                  <p className="text-muted-foreground">
                    Offers adaptability to scale, add features, or expand functionality as your business evolves and
                    requirements change.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">Enhanced Security</h3>
                  <p className="text-muted-foreground">
                    Boosts security and integration, reducing vulnerabilities and blending seamlessly with existing
                    systems and tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">Competitive Edge</h3>
                  <p className="text-muted-foreground">
                    Drives competitive advantage, enabling unique experiences instead of duplicating what others offer
                    in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our Development Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive software development across multiple domains and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Custom Applications</span>
                </CardTitle>
                <CardDescription>
                  Business tools, portals, and automation platforms tailored to your specific requirements and
                  workflows.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Web Applications</span>
                </CardTitle>
                <CardDescription>
                  Responsive, scalable web-based solutions for CRMs, portals, dashboards, and business management
                  systems.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>Enterprise Applications</span>
                </CardTitle>
                <CardDescription>
                  ERP, CRM, and supply chain solutions built or modernized for scale and enterprise-grade performance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>Mobile Applications</span>
                </CardTitle>
                <CardDescription>
                  iOS/Android apps with real-time features, offline capabilities, and seamless user experiences.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>Cloud-Native Platforms</span>
                </CardTitle>
                <CardDescription>
                  High-performance web services and SaaS platforms hosted in the cloud for maximum scalability.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Legacy Modernization</span>
                </CardTitle>
                <CardDescription>
                  Revitalizing old systems into modern, efficient frameworks with improved performance and security.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Structured approach ensuring quality, transparency, and successful project delivery.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  We understand your vision, document requirements, and define key goals with detailed project roadmaps
                  and technical specifications.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Design & Prototyping</h3>
                <p className="text-muted-foreground">
                  Visual mockups and wireframes help refine UX and align expectations early, ensuring the final product
                  meets your vision.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Development</h3>
                <p className="text-muted-foreground">
                  We build both front-end and back-end using modern frameworks and modular design for scalability and
                  maintainability.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Testing & Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Functional, performance, security, and UAT testing ensure a reliable experience across all platforms
                  and use cases.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Deployment & Integration</h3>
                <p className="text-muted-foreground">
                  We launch the solution, integrate it smoothly with your existing systems, and train users for
                  successful adoption.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold font-heading">
                6
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Ongoing Maintenance & Scaling</h3>
                <p className="text-muted-foreground">
                  Post-launch support, updates, feature expansion, and performance monitoring keep solutions
                  future-proof and optimized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Advanced Technology Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Leveraging cutting-edge technologies to build robust, scalable, and future-ready solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Code className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Modern Frameworks</h3>
              <p className="text-sm text-muted-foreground">React, Angular, Vue.js, Node.js</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Cloud Platforms</h3>
              <p className="text-sm text-muted-foreground">AWS, Azure, Google Cloud</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Database className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Databases</h3>
              <p className="text-sm text-muted-foreground">SQL, NoSQL, MongoDB, PostgreSQL</p>
            </div>
            <div className="text-center p-6 bg-background transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Mobile Tech</h3>
              <p className="text-sm text-muted-foreground">React Native, Flutter, iOS, Android</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Build Your Custom Solution?"
        description="Transform your business with tailored software that grows with you. From concept to deployment and beyond."
        buttonText="Start Your Development"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
