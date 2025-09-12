import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Database, Cloud, Brain, Code, Users, Target, Globe, Award, Heart, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative py-20 lg:py-32 bg-background border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Innovation Beyond Digital Transformation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Founded in 2014, Infocure Technologies has grown into a trusted technology partner for organizations
              worldwide, helping businesses navigate complex challenges and build the agility needed to stay ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-balance font-heading">
              The Infocure Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg mb-6">
                Founded in 2014, Infocure Technologies has grown into a trusted technology partner for organizations
                worldwide. Our purpose has always been clear: to help businesses navigate complex challenges, rethink
                the way they operate, and build the agility needed to stay ahead in a fast-changing digital era.
              </p>
              <p className="text-lg mb-6">
                What began as a small team with a vision has evolved into a dynamic technology company with deep
                expertise in enterprise applications, cloud, AI, RPA, and custom software development. Along the way, we
                have stayed true to the values that set us apart—integrity, client commitment, and a relentless focus on
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              At Infocure, we specialize in delivering end-to-end digital solutions that enable businesses to adapt,
              grow, and thrive. From consulting and implementation to integration, support, and optimization, we partner
              with organizations at every stage of their transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>SAP & Oracle</span>
                </CardTitle>
                <CardDescription>
                  Enterprise solutions for intelligent operations and streamlined processes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span>Salesforce</span>
                </CardTitle>
                <CardDescription>Customer-first digital experiences that drive engagement and growth.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>AI & RPA</span>
                </CardTitle>
                <CardDescription>
                  Smarter, faster, and automated business processes powered by intelligence.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Cloud Solutions</span>
                </CardTitle>
                <CardDescription>Scalable, secure, and future-ready platforms for modern enterprises.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Custom Development</span>
                </CardTitle>
                <CardDescription>Tailored applications designed around your unique business needs.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Team Augmentation</span>
                </CardTitle>
                <CardDescription>
                  Scale your technology teams with on-demand expertise and flexible models.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance font-heading">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
              Over the years, we have successfully executed many projects across industries and geographies, empowering
              enterprises, mid-sized companies, and startups alike. With a client-first mindset, we've built lasting
              partnerships that go beyond technology implementation, helping businesses create measurable value and
              long-term growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">10+</div>
                <div className="text-lg font-semibold mb-1 font-heading">Years of Excellence</div>
                <div className="text-sm text-muted-foreground">Delivering mission-critical solutions since 2014</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">500+</div>
                <div className="text-lg font-semibold mb-1 font-heading">Projects Delivered</div>
                <div className="text-sm text-muted-foreground">Across multiple industries and geographies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">8</div>
                <div className="text-lg font-semibold mb-1 font-heading">Global Offices</div>
                <div className="text-sm text-muted-foreground">Serving clients worldwide with local expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance font-heading">Our People</h2>
            <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
              Behind every successful engagement is our team of consultants, engineers, and innovators. With diverse
              experience and domain expertise, they bring passion and precision to every project. We foster a culture of
              collaboration, learning, and accountability, ensuring that our people not only deliver solutions but also
              help clients embrace change with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Expert Consultants</h3>
                <p className="text-muted-foreground text-sm">
                  Certified professionals with deep industry knowledge and technical expertise.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Skilled Engineers</h3>
                <p className="text-muted-foreground text-sm">
                  Technical architects and developers who build robust, scalable solutions.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Innovation Leaders</h3>
                <p className="text-muted-foreground text-sm">
                  Visionaries who drive continuous improvement and embrace emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Why Infocure?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The key differentiators that make us the preferred technology partner for businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Proven Track Record</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                A decade of delivering mission-critical technology solutions with measurable business impact and client
                satisfaction.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Comprehensive Services</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From strategy and development to optimization and support, we provide end-to-end solutions that cover
                your entire technology lifecycle.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Global Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Successful engagements across multiple regions and industries, bringing diverse perspectives and best
                practices to every project.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Innovation-Driven</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We combine business insights with emerging technologies to unlock new possibilities and competitive
                advantages for our clients.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Client-Centric Approach</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every solution is tailored to align with your goals, not just technology standards, ensuring maximum
                value and business alignment.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Results-Focused</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We measure success by your success, focusing on outcomes that drive growth, efficiency, and competitive
                advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance font-heading">Our Mission</h2>
            <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic leading-relaxed">
              "At Infocure Technologies, we believe digital transformation is not the destination, it's the beginning of
              something greater. Our mission is simple: to redefine what's possible for your business with technology
              that empowers, simplifies, and inspires growth."
            </blockquote>
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with Infocure for your digital future"
        description="Ready to transform your business with trusted technology expertise? Let's discuss how we can help you achieve your goals."
        buttonText="Get in Touch"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
