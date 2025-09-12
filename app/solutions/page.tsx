import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Factory,
  Heart,
  Banknote,
  ShoppingCart,
  Truck,
  GraduationCap,
  Zap,
  Target,
  Users,
  BarChart3,
} from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Industry Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Tailored technology solutions designed for your industry's unique challenges. From manufacturing to
              healthcare, we deliver specialized expertise that drives measurable business outcomes.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Deep domain knowledge combined with cutting-edge technology to solve complex industry challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Factory className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">
                  <Link href="/solutions/manufacturing" className="hover:text-primary transition-colors">
                    Manufacturing Solutions
                  </Link>
                </CardTitle>
                <CardDescription>
                  Industry 4.0 transformation with IoT, automation, and smart factory solutions for operational
                  excellence and competitive advantage.
                </CardDescription>
                <Button variant="outline" size="sm" asChild className="mt-4 w-fit bg-transparent">
                  <Link href="/solutions/manufacturing">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">
                  <Link href="/solutions/healthcare" className="hover:text-primary transition-colors">
                    Healthcare Solutions
                  </Link>
                </CardTitle>
                <CardDescription>
                  Digital health platforms, telemedicine, and healthcare analytics to improve patient outcomes and
                  operational efficiency.
                </CardDescription>
                <Button variant="outline" size="sm" asChild className="mt-4 w-fit bg-transparent">
                  <Link href="/solutions/healthcare">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Banknote className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">
                  <Link href="/solutions/financial-services" className="hover:text-primary transition-colors">
                    Financial Services
                  </Link>
                </CardTitle>
                <CardDescription>
                  Fintech innovation, digital banking, risk management, and regulatory compliance solutions for modern
                  financial institutions.
                </CardDescription>
                <Button variant="outline" size="sm" asChild className="mt-4 w-fit bg-transparent">
                  <Link href="/solutions/financial-services">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">
                  <Link href="/solutions/retail-ecommerce" className="hover:text-primary transition-colors">
                    Retail & E-commerce
                  </Link>
                </CardTitle>
                <CardDescription>
                  Omnichannel experiences, inventory management, and customer analytics for modern retail operations.
                </CardDescription>
                <Button variant="outline" size="sm" asChild className="mt-4 w-fit bg-transparent">
                  <Link href="/solutions/retail-ecommerce">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Truck className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">
                  <Link href="/solutions/supply-chain" className="hover:text-primary transition-colors">
                    Supply Chain & Logistics
                  </Link>
                </CardTitle>
                <CardDescription>
                  End-to-end supply chain visibility, warehouse automation, and logistics optimization for efficient
                  operations.
                </CardDescription>
                <Button variant="outline" size="sm" asChild className="mt-4 w-fit bg-transparent">
                  <Link href="/solutions/supply-chain">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">
                  <Link href="/solutions/education" className="hover:text-primary transition-colors">
                    Education & Training
                  </Link>
                </CardTitle>
                <CardDescription>
                  Digital learning platforms, student management systems, and educational analytics for modern
                  institutions.
                </CardDescription>
                <Button variant="outline" size="sm" asChild className="mt-4 w-fit bg-transparent">
                  <Link href="/solutions/education">
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our Solution Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive methodology ensuring successful digital transformation across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Industry Analysis</CardTitle>
                <CardDescription>
                  Deep dive into industry-specific challenges, regulations, and market dynamics to identify
                  opportunities.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Stakeholder Alignment</CardTitle>
                <CardDescription>
                  Collaborate with key stakeholders to ensure solutions align with business objectives and user needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Agile Implementation</CardTitle>
                <CardDescription>
                  Iterative development approach with regular feedback loops and continuous improvement processes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="font-heading">Measurable Outcomes</CardTitle>
                <CardDescription>
                  Define clear KPIs and success metrics to track progress and demonstrate tangible business value.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading">
              Why Choose Infocure Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
              Our industry-focused approach combines deep domain expertise with cutting-edge technology to deliver
              solutions that drive real business transformation. We understand that every industry has unique
              challenges, and we tailor our solutions accordingly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Industry Expertise</h3>
                <p className="text-muted-foreground">
                  15+ years of experience across multiple industries with proven track record of successful
                  implementations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  Leverage latest technologies including AI, IoT, and cloud platforms to create competitive advantages.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Partnership Approach</h3>
                <p className="text-muted-foreground">
                  Long-term partnerships with ongoing support, training, and continuous improvement initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Industry Operations?"
        description="Discover how our industry-specific solutions can drive efficiency, innovation, and growth for your business."
        buttonText="Explore Your Industry Solution"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
