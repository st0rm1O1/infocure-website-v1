import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import {
  Settings,
  Database,
  Cloud,
  Zap,
  Brain,
  Bot,
  Code,
  Shield,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Building2,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Factory,
  Heart,
  Banknote,
  ShoppingCart,
  GraduationCap,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* 1. Hero Banner */}
      <section className="relative section-padding bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-8 text-gray-900 text-balance">
                Driving innovation with trust and technology.
              </h1>
              <p className="text-xl text-gray-600 mb-10 text-pretty leading-relaxed">
                Since 2014, Infocure Technologies has helped businesses solve complex challenges, rethink how they work,
                and prepare for the future. Guided by a strong ethical foundation and a commitment to measurable impact,
                we partner with organizations to unlock opportunities and create lasting value.
              </p>
              <Button asChild className="btn-primary text-lg px-10 py-4">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=500&fit=crop&crop=center"
                alt="Corporate team collaborating with technology"
                width={700}
                height={500}
                className="w-full h-auto object-cover corporate-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Company Intro */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop&crop=center"
                alt="Enterprise software consulting illustration"
                width={600}
                height={450}
                className="w-full h-auto object-cover corporate-shadow-lg"
              />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-gray-900 text-balance">
                Develop | Implement | Support Mission-Critical Software
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-pretty leading-relaxed">
                At Infocure Technologies, we specialize in SAP and enterprise solutions that power critical business
                functions. Our team designs, implements, and supports systems that streamline operations, reduce risk,
                and enable digital transformation—helping you stay agile and future-ready.
              </p>
              <Button asChild className="btn-secondary">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Core Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900 text-balance">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Enterprise-grade IT services designed to help organizations modernize, scale, and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="SAP Services & Solutions"
              description="End-to-end SAP expertise to power your enterprise."
              icon={Settings}
              features={[
                "Consulting, implementation, and AMS support",
                "S/4HANA migration, upgrades, and integration",
                "Analytics, SuccessFactors, and Fiori solutions",
              ]}
            />
            <ServiceCard
              title="Oracle"
              description="Oracle-certified ERP expertise for growing businesses."
              icon={Database}
              features={[
                "E-Business Suite (EBS) implementation & support",
                "Fusion Cloud applications for smarter operations",
                "Customization, integration, and advisory",
              ]}
            />
            <ServiceCard
              title="Salesforce"
              description="Transform customer engagement with Salesforce."
              icon={Cloud}
              features={[
                "End-to-end implementation & customization",
                "Integration with ERP and third-party apps",
                "Ongoing support and optimization",
              ]}
            />
            <ServiceCard
              title="Digital Transformation"
              description="Reimagine processes for the digital-first era."
              icon={Zap}
              features={[
                "Cloud adoption and modernization strategies",
                "AI, RPA, and analytics-driven innovation",
                "Industry-specific digital solutions",
              ]}
            />
            <ServiceCard
              title="Artificial Intelligence (AI)"
              description="Smarter insights and automation with AI & ML."
              icon={Brain}
              features={[
                "Predictive analytics and forecasting",
                "NLP, computer vision, and automation",
                "Custom AI solutions across industries",
              ]}
            />
            <ServiceCard
              title="Robotic Process Automation (RPA)"
              description="Boost efficiency with intelligent process automation."
              icon={Bot}
              features={[
                "Process discovery and RPA consulting",
                "Custom bot design and deployment",
                "Scalable enterprise automation",
              ]}
            />
            <ServiceCard
              title="Custom Software Development"
              description="Tailored software built around your business goals."
              icon={Code}
              features={[
                "End-to-end design and development",
                "Cloud-native and mobile-first applications",
                "Scalable, secure, and future-ready solutions",
              ]}
            />
            <ServiceCard
              title="Cybersecurity"
              description="Protect your enterprise from evolving threats."
              icon={Shield}
              features={[
                "Network, cloud, and data security",
                "24/7 threat monitoring and SOC services",
                "Compliance and risk management",
              ]}
            />
            <ServiceCard
              title="IT Resource Augmentation"
              description="Scale your team with on-demand experts."
              icon={Users}
              features={[
                "Pre-vetted global talent pool",
                "Flexible engagement models",
                "Faster delivery with lower costs",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. Solutions Spotlight */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900 text-balance">
              Solutions Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Proven SAP solutions that drive business transformation and operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center"
                      alt="SAP RISE illustration"
                      width={100}
                      height={100}
                      className="object-cover corporate-shadow"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading mb-3">
                      S/4HANA Rise – Private & Public Cloud
                    </CardTitle>
                    <CardDescription className="text-base">
                      Accelerate your move to an intelligent enterprise with SAP RISE for comprehensive cloud
                      transformation.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center"
                      alt="SAP Analytics Cloud illustration"
                      width={100}
                      height={100}
                      className="object-cover corporate-shadow"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading mb-3">
                      SAP Analytics Cloud (SAC)
                    </CardTitle>
                    <CardDescription className="text-base">
                      Turn data into real-time business insights with SAP's all-in-one cloud analytics platform.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center"
                      alt="SAP HCM SuccessFactors illustration"
                      width={100}
                      height={100}
                      className="object-cover corporate-shadow"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading mb-3">
                      SAP HCM & SuccessFactors
                    </CardTitle>
                    <CardDescription className="text-base">
                      Modernize HR for today's workforce with comprehensive human capital management solutions.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center"
                      alt="SAP Fiori illustration"
                      width={100}
                      height={100}
                      className="object-cover corporate-shadow"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading mb-3">
                      SAP Fiori
                    </CardTitle>
                    <CardDescription className="text-base">
                      Deliver modern, role-based user experiences across SAP with intuitive and responsive design.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Our Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Build a smarter enterprise with Infocure's suite of products designed for operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop&crop=center"
                    alt="CRM Product illustration"
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover corporate-shadow"
                  />
                </div>
                <CardTitle className="flex items-center space-x-3 font-heading text-xl mb-3">
                  <Users className="h-6 w-6 text-red-500" />
                  <span>CRM</span>
                </CardTitle>
                <CardDescription className="text-base mb-4">Stronger customer relationships, smarter sales.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    360° customer view and insights
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Sales and marketing automation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Seamless ERP integration
                  </li>
                </ul>
                <Button asChild className="btn-outline w-full">
                  <Link href="/products/crm">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center"
                    alt="ERP Product illustration"
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover corporate-shadow"
                  />
                </div>
                <CardTitle className="flex items-center space-x-3 font-heading text-xl mb-3">
                  <Settings className="h-6 w-6 text-red-500" />
                  <span>ERP</span>
                </CardTitle>
                <CardDescription className="text-base mb-4">Comprehensive ERP for SMBs and enterprises.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Finance, HRMS, Payroll, MM, PP, SD
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Cloud and on-premise deployment
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Fully customizable modules
                  </li>
                </ul>
                <Button asChild className="btn-outline w-full">
                  <Link href="/products/erp">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="corporate-card corporate-card-hover">
              <CardHeader>
                <div className="mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center"
                    alt="HRMS Product illustration"
                    width={400}
                    height={250}
                    className="w-full h-40 object-cover corporate-shadow"
                  />
                </div>
                <CardTitle className="flex items-center space-x-3 font-heading text-xl mb-3">
                  <Users className="h-6 w-6 text-red-500" />
                  <span>HRMS</span>
                </CardTitle>
                <CardDescription className="text-base mb-4">Simplify HR operations with next-gen automation.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Payroll and compliance management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Employee self-service portals
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    Performance and workforce analytics
                  </li>
                </ul>
                <Button asChild className="btn-outline w-full">
                  <Link href="/products/hrms">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900 text-balance">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Delivering specialized solutions across diverse industries with deep domain expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center p-8 bg-white corporate-card corporate-card-hover">
              <div className="mb-6">
                <Factory className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900">Manufacturing</h3>
            </div>
            <div className="text-center p-8 bg-white corporate-card corporate-card-hover">
              <div className="mb-6">
                <Banknote className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900">BFSI</h3>
            </div>
            <div className="text-center p-8 bg-white corporate-card corporate-card-hover">
              <div className="mb-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900">Pharma</h3>
            </div>
            <div className="text-center p-8 bg-white corporate-card corporate-card-hover">
              <div className="mb-6">
                <ShoppingCart className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900">Retail</h3>
            </div>
            <div className="text-center p-8 bg-white corporate-card corporate-card-hover">
              <div className="mb-6">
                <Building2 className="h-12 w-12 text-red-500 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold text-gray-900">Public Sector</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Infocure */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">Why Choose Infocure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              The values and capabilities that set us apart as your trusted technology partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="mb-6">
                <Award className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Trust</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Built on integrity and transparency, delivering on our commitments with unwavering reliability.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Target className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep technical knowledge and industry experience across enterprise technologies and business domains.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Zap className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Embracing cutting-edge technologies and methodologies to drive continuous improvement and growth.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="mb-6">
                <Globe className="h-16 w-16 text-red-500 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Global Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Worldwide presence with local expertise, ensuring seamless service delivery across time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              A proven methodology that ensures successful project delivery and long-term value creation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=center"
                  alt="Consult process illustration"
                  width={120}
                  height={120}
                  className="mx-auto corporate-shadow"
                />
              </div>
              <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold transition-all duration-300 hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Consult</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understand your business needs, assess current state, and define transformation roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=120&fit=crop&crop=center"
                  alt="Implement process illustration"
                  width={120}
                  height={120}
                  className="mx-auto corporate-shadow"
                />
              </div>
              <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold transition-all duration-300 hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Implement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deploy solutions with precision, following best practices and minimizing business disruption.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop&crop=center"
                  alt="Support process illustration"
                  width={120}
                  height={120}
                  className="mx-auto corporate-shadow"
                />
              </div>
              <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold transition-all duration-300 hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Provide ongoing maintenance, optimization, and user support for sustained performance.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=120&h=120&fit=crop&crop=center"
                  alt="Scale process illustration"
                  width={120}
                  height={120}
                  className="mx-auto corporate-shadow"
                />
              </div>
              <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center mx-auto mb-6 text-2xl font-heading font-bold transition-all duration-300 hover:scale-110">
                4
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">Scale</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expand capabilities and adapt solutions as your business grows and evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Global Presence */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900 text-balance">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Serving clients worldwide with local expertise and global delivery capabilities.
            </p>
          </div>
          <div className="mb-12">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&h=400&fit=crop&crop=center"
              alt="Global presence world map"
              width={1000}
              height={400}
              className="w-full h-auto object-cover mx-auto corporate-shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {["Mumbai", "Bangalore", "Delhi NCR", "Kolkata", "Dubai", "Singapore", "Germany", "UK"].map((location) => (
              <div key={location} className="p-6 bg-gray-50 corporate-card corporate-card-hover">
                <Globe className="h-10 w-10 text-red-500 mx-auto mb-3" />
                <div className="text-sm font-heading font-medium text-gray-900">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Statistics & Metrics */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Proven Track Record
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
              Numbers that demonstrate our commitment to excellence and client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-red-400 mb-3">10+</div>
              <div className="text-lg font-heading font-semibold mb-2">Years of Excellence</div>
              <div className="text-sm text-gray-400">Delivering mission-critical solutions since 2014</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-red-400 mb-3">1000+</div>
              <div className="text-lg font-heading font-semibold mb-2">Projects Delivered</div>
              <div className="text-sm text-gray-400">Across multiple industries and geographies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-red-400 mb-3">21+</div>
              <div className="text-lg font-heading font-semibold mb-2">Industry Sectors</div>
              <div className="text-sm text-gray-400">Deep domain expertise across verticals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-red-400 mb-3">8</div>
              <div className="text-lg font-heading font-semibold mb-2">Global Offices</div>
              <div className="text-sm text-gray-400">Serving clients worldwide with local expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Compliance & Security */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-gray-900 text-balance">
              Compliance & Security
            </h2>
            <div className="mb-12">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=300&fit=crop&crop=center"
                alt="Compliance and security illustration"
                width={800}
                height={300}
                className="w-full h-auto object-cover mx-auto corporate-shadow-lg"
              />
            </div>
            <p className="text-lg text-gray-600 mb-12 text-pretty leading-relaxed max-w-4xl mx-auto">
              We prioritize risk management and compliance across all our solutions. Our comprehensive approach includes
              24/7 threat monitoring, robust security frameworks, and adherence to global compliance standards. With
              proactive risk assessment and continuous security monitoring, we ensure your business operations remain
              secure, compliant, and resilient against evolving threats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Shield className="h-16 w-16 text-red-500 mx-auto mb-4 transition-all duration-300 hover:scale-110" />
                <h3 className="font-heading font-semibold mb-3 text-gray-900">24/7 Monitoring</h3>
                <p className="text-sm text-gray-600">Continuous threat detection and response</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-red-500 mx-auto mb-4 transition-all duration-300 hover:scale-110" />
                <h3 className="font-heading font-semibold mb-3 text-gray-900">Global Compliance</h3>
                <p className="text-sm text-gray-600">Adherence to international standards</p>
              </div>
              <div className="text-center">
                <Settings className="h-16 w-16 text-red-500 mx-auto mb-4 transition-all duration-300 hover:scale-110" />
                <h3 className="font-heading font-semibold mb-3 text-gray-900">Risk Management</h3>
                <p className="text-sm text-gray-600">Proactive assessment and mitigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Newsletter Subscription Banner */}
      <section className="relative section-padding bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&h=600&fit=crop&crop=center"
            alt="Newsletter background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gray-900">
              Stay Ahead with Industry Insights
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-pretty">
              Get the latest trends, best practices, and expert insights delivered to your inbox. Join thousands of IT leaders who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Final CTA Banner */}
      <section className="relative section-padding bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&h=600&fit=crop&crop=center"
            alt="CTA background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-white text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-pretty">
            Partner with Infocure Technologies to accelerate your digital transformation journey and unlock new
            possibilities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white font-medium px-10 py-4 text-lg">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-secondary">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}