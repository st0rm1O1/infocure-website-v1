import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Settings, 
  Database, 
  Cloud, 
  Brain, 
  Code, 
  Users, 
  Target, 
  Globe, 
  Award, 
  Heart, 
  Zap,
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container-custom relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-8 text-gray-900 text-balance">
              Innovation Beyond Digital Transformation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed">
              Founded in 2014, Infocure Technologies has grown into a trusted technology partner for organizations
              worldwide, helping businesses navigate complex challenges and build the agility needed to stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* The Infocure Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-heading font-bold mb-8 text-gray-900 text-balance">
                The Infocure Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014, Infocure Technologies has grown into a trusted technology partner for organizations
                  worldwide. Our purpose has always been clear: to help businesses navigate complex challenges, rethink
                  the way they operate, and build the agility needed to stay ahead in a fast-changing digital era.
                </p>
                <p>
                  What began as a small team with a vision has evolved into a dynamic technology company with deep
                  expertise in enterprise applications, cloud, AI, RPA, and custom software development. Along the way, we
                  have stayed true to the values that set us apart—integrity, client commitment, and a relentless focus on
                  results.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop&crop=center"
                alt="Infocure story illustration"
                width={600}
                height={500}
                className="w-full h-auto object-cover corporate-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty">
              At Infocure, we specialize in delivering end-to-end digital solutions that enable businesses to adapt,
              grow, and thrive. From consulting and implementation to integration, support, and optimization, we partner
              with organizations at every stage of their transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <Settings className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-heading text-xl mb-3">SAP & Oracle</CardTitle>
                <CardDescription className="text-base">
                  Enterprise solutions for intelligent operations and streamlined processes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <Cloud className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-heading text-xl mb-3">Salesforce</CardTitle>
                <CardDescription className="text-base">
                  Customer-first digital experiences that drive engagement and growth.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <Brain className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-heading text-xl mb-3">AI & RPA</CardTitle>
                <CardDescription className="text-base">
                  Smarter, faster, and automated business processes powered by intelligence.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <Database className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-heading text-xl mb-3">Cloud Solutions</CardTitle>
                <CardDescription className="text-base">
                  Scalable, secure, and future-ready platforms for modern enterprises.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <Code className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-heading text-xl mb-3">Custom Development</CardTitle>
                <CardDescription className="text-base">
                  Tailored applications designed around your unique business needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="font-heading text-xl mb-3">Team Augmentation</CardTitle>
                <CardDescription className="text-base">
                  Scale your technology teams with on-demand expertise and flexible models.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-gray-900">Our Impact</h2>
            <div className="mb-12">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&crop=center"
                alt="Our impact illustration"
                width={800}
                height={400}
                className="w-full h-auto object-cover mx-auto corporate-shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-600 mb-12 text-pretty leading-relaxed">
              Over the years, we have successfully executed many projects across industries and geographies, empowering
              enterprises, mid-sized companies, and startups alike. With a client-first mindset, we've built lasting
              partnerships that go beyond technology implementation, helping businesses create measurable value and
              long-term growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-red-500 mb-3">500+</div>
                <div className="text-lg font-heading font-semibold mb-2">Projects Delivered</div>
                <div className="text-sm text-gray-600">Across multiple industries and geographies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-red-500 mb-3">95%</div>
                <div className="text-lg font-heading font-semibold mb-2">Client Satisfaction</div>
                <div className="text-sm text-gray-600">Long-term partnerships and repeat business</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-red-500 mb-3">24/7</div>
                <div className="text-lg font-heading font-semibold mb-2">Global Support</div>
                <div className="text-sm text-gray-600">Round-the-clock service delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-gray-900">Our People</h2>
            <div className="mb-12">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&crop=center"
                alt="Our people illustration"
                width={800}
                height={400}
                className="w-full h-auto object-cover mx-auto corporate-shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-600 mb-12 text-pretty leading-relaxed">
              Behind every successful engagement is our team of consultants, engineers, and innovators. With diverse
              experience and domain expertise, they bring passion and precision to every project. We foster a culture of
              collaboration, learning, and accountability, ensuring that our people not only deliver solutions but also
              help clients embrace change with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-red-100 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-red-200 hover:scale-110">
                  <Users className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Expert Consultants</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Certified professionals with deep industry knowledge and technical expertise.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-red-100 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-red-200 hover:scale-110">
                  <Code className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Skilled Engineers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technical architects and developers who build robust, scalable solutions.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-red-100 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:bg-red-200 hover:scale-110">
                  <Zap className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Innovation Leaders</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionaries who drive continuous improvement and embrace emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Infocure */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">Why Infocure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              The key differentiators that make us the preferred technology partner for businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="mb-6">
                <Award className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A decade of delivering mission-critical technology solutions with measurable business impact and client
                satisfaction.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Settings className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Comprehensive Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From strategy and development to optimization and support, we provide end-to-end solutions that cover
                your entire technology lifecycle.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Globe className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Global Experience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Successful engagements across multiple regions and industries, bringing diverse perspectives and best
                practices to every project.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Brain className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Innovation-Driven</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We combine business insights with emerging technologies to unlock new possibilities and competitive
                advantages for our clients.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Heart className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Client-Centric Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every solution is tailored to align with your goals, not just technology standards, ensuring maximum
                value and business alignment.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Target className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Results-Focused</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We measure success by your success, focusing on outcomes that drive growth, efficiency, and competitive
                advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-12 text-white">Our Mission</h2>
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-300 italic leading-relaxed">
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
      />

      <Footer />
    </div>
  )
}