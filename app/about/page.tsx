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
  Shield,
  ArrowRight
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-12 text-gray-900 tracking-tight leading-none">
              Innovation Beyond Digital Transformation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Founded in 2014, Infocure Technologies has grown into a trusted technology partner for organizations
              worldwide, helping businesses navigate complex challenges and build the agility needed to stay ahead.
            </p>
          </div>
        </div>
      </section>

      {/* The Infocure Story */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-gray-900 tracking-tight">
                The Infocure Story
              </h2>
              <div className="space-y-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-none"></div>
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=600&fit=crop&crop=center"
                alt="Infocure story illustration"
                width={700}
                height={600}
                className="w-full h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">What We Do</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              At Infocure, we specialize in delivering end-to-end digital solutions that enable businesses to adapt,
              grow, and thrive. From consulting and implementation to integration, support, and optimization, we partner
              with organizations at every stage of their transformation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <Settings className="h-16 w-16 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-4">SAP & Oracle</CardTitle>
                <CardDescription className="text-lg">
                  Enterprise solutions for intelligent operations and streamlined processes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <Cloud className="h-16 w-16 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-4">Salesforce</CardTitle>
                <CardDescription className="text-lg">
                  Customer-first digital experiences that drive engagement and growth.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <Brain className="h-16 w-16 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-4">AI & RPA</CardTitle>
                <CardDescription className="text-lg">
                  Smarter, faster, and automated business processes powered by intelligence.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <Database className="h-16 w-16 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-4">Cloud Solutions</CardTitle>
                <CardDescription className="text-lg">
                  Scalable, secure, and future-ready platforms for modern enterprises.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <Code className="h-16 w-16 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-4">Custom Development</CardTitle>
                <CardDescription className="text-lg">
                  Tailored applications designed around your unique business needs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg group">
              <CardHeader>
                <Users className="h-16 w-16 text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl mb-4">Team Augmentation</CardTitle>
                <CardDescription className="text-lg">
                  Scale your technology teams with on-demand expertise and flexible models.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">Our Impact</h2>
            <div className="mb-16">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&h-500&fit=crop&crop=center"
                alt="Our impact illustration"
                width={1000}
                height={500}
                className="w-full h-auto object-cover mx-auto shadow-2xl"
              />
            </div>
            <p className="text-lg lg:text-xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto">
              Over the years, we have successfully executed many projects across industries and geographies, empowering
              enterprises, mid-sized companies, and startups alike. With a client-first mindset, we've built lasting
              partnerships that go beyond technology implementation, helping businesses create measurable value and
              long-term growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-red-500 mb-4">500+</div>
                <div className="text-xl font-bold mb-3">Projects Delivered</div>
                <div className="text-gray-600">Across multiple industries and geographies</div>
              </div>
              <div className="text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-red-500 mb-4">95%</div>
                <div className="text-xl font-bold mb-3">Client Satisfaction</div>
                <div className="text-gray-600">Long-term partnerships and repeat business</div>
              </div>
              <div className="text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-red-500 mb-4">24/7</div>
                <div className="text-xl font-bold mb-3">Global Support</div>
                <div className="text-gray-600">Round-the-clock service delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">Our People</h2>
            <div className="mb-16">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=500&fit=crop&crop=center"
                alt="Our people illustration"
                width={1000}
                height={500}
                className="w-full h-auto object-cover mx-auto shadow-2xl"
              />
            </div>
            <p className="text-lg lg:text-xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto">
              Behind every successful engagement is our team of consultants, engineers, and innovators. With diverse
              experience and domain expertise, they bring passion and precision to every project. We foster a culture of
              collaboration, learning, and accountability, ensuring that our people not only deliver solutions but also
              help clients embrace change with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-10 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-24 h-24 bg-red-100 flex items-center justify-center mx-auto mb-8 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-12 w-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Consultants</h3>
                <p className="text-gray-600 leading-relaxed">
                  Certified professionals with deep industry knowledge and technical expertise.
                </p>
              </div>
              <div className="text-center p-10 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-24 h-24 bg-red-100 flex items-center justify-center mx-auto mb-8 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Code className="h-12 w-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Skilled Engineers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technical architects and developers who build robust, scalable solutions.
                </p>
              </div>
              <div className="text-center p-10 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-24 h-24 bg-red-100 flex items-center justify-center mx-auto mb-8 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-12 w-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation Leaders</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visionaries who drive continuous improvement and embrace emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Infocure */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 tracking-tight">Why Infocure?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The key differentiators that make us the preferred technology partner for businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-8">
                <Award className="h-20 w-20 text-red-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">
                A decade of delivering mission-critical technology solutions with measurable business impact and client
                satisfaction.
              </p>
            </div>
            <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-8">
                <Settings className="h-20 w-20 text-red-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Comprehensive Services</h3>
              <p className="text-gray-600 leading-relaxed">
                From strategy and development to optimization and support, we provide end-to-end solutions that cover
                your entire technology lifecycle.
              </p>
            </div>
            <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-8">
                <Globe className="h-20 w-20 text-red-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Global Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Successful engagements across multiple regions and industries, bringing diverse perspectives and best
                practices to every project.
              </p>
            </div>
            <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-8">
                <Brain className="h-20 w-20 text-red-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Innovation-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                We combine business insights with emerging technologies to unlock new possibilities and competitive
                advantages for our clients.
              </p>
            </div>
            <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-8">
                <Heart className="h-20 w-20 text-red-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Client-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Every solution is tailored to align with your goals, not just technology standards, ensuring maximum
                value and business alignment.
              </p>
            </div>
            <div className="text-center p-10 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="mb-8">
                <Target className="h-20 w-20 text-red-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Results-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We measure success by your success, focusing on outcomes that drive growth, efficiency, and competitive
                advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&h=600&fit=crop&crop=center"
            alt="Mission background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-16 text-white tracking-tight">Our Mission</h2>
            <blockquote className="text-2xl lg:text-4xl font-medium text-gray-300 italic leading-relaxed">
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