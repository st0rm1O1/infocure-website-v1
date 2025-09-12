import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
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
  ShoppingCart,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* 1. Hero Banner - Enhanced with corporate hero image */}
      <section className="relative py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading tracking-tight">
                Driving innovation with trust and technology.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Since 2014, Infocure Technologies has helped businesses solve complex challenges, rethink how they work,
                and prepare for the future. Guided by a strong ethical foundation and a commitment to measurable impact,
                we partner with organizations to unlock opportunities and create lasting value.
              </p>
              <Button
                size="lg"
                asChild
                className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 px-8 py-3"
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop&crop=center"
                alt="Corporate team collaborating with technology"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20 pointer-events-none" />
      </section>

      {/* 2. Quick Company Intro - Enhanced with enterprise software illustration */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading tracking-tight">
                Develop | Implement | Support Mission-Critical Software
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                At Infocure Technologies, we specialize in SAP and enterprise solutions that power critical business
                functions. Our team designs, implements, and supports systems that streamline operations, reduce risk,
                and enable digital transformation—helping you stay agile and future-ready.
              </p>
              <Button
                variant="outline"
                asChild
                className="font-heading transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-background border-2 hover:border-primary/30"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop&crop=center"
                alt="Enterprise software consulting illustration"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Core Services - Enhanced card styling with icons already present */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading tracking-tight">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Enterprise-grade IT services designed to help organizations modernize, scale, and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* 4. Solutions Spotlight - Enhanced with solution images */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading tracking-tight">
              Solutions Spotlight
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven SAP solutions that drive business transformation and operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20 bg-background">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center"
                      alt="SAP RISE illustration"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="flex items-center space-x-2 font-heading">
                      <span>S/4HANA Rise – Private & Public Cloud</span>
                    </CardTitle>
                    <CardDescription>
                      Accelerate your move to an intelligent enterprise with SAP RISE for comprehensive cloud
                      transformation.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20 bg-background">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center"
                      alt="SAP Analytics Cloud illustration"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="flex items-center space-x-2 font-heading">
                      <span>SAP Analytics Cloud (SAC)</span>
                    </CardTitle>
                    <CardDescription>
                      Turn data into real-time business insights with SAP's all-in-one cloud analytics platform.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20 bg-background">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center"
                      alt="SAP HCM SuccessFactors illustration"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="flex items-center space-x-2 font-heading">
                      <span>SAP HCM & SuccessFactors</span>
                    </CardTitle>
                    <CardDescription>
                      Modernize HR for today's workforce with comprehensive human capital management solutions.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20 bg-background">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop&crop=center"
                      alt="SAP Fiori illustration"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="flex items-center space-x-2 font-heading">
                      <span>SAP Fiori</span>
                    </CardTitle>
                    <CardDescription>
                      Deliver modern, role-based user experiences across SAP with intuitive and responsive design.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Our Products - Enhanced with product images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Build a smarter enterprise with Infocure's suite of products designed for operational excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=200&fit=crop&crop=center"
                    alt="CRM Product illustration"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>CRM</span>
                </CardTitle>
                <CardDescription>Stronger customer relationships, smarter sales.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    360° customer view and insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Sales and marketing automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Seamless ERP integration
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center"
                    alt="ERP Product illustration"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Settings className="h-5 w-5 text-primary" />
                  <span>ERP</span>
                </CardTitle>
                <CardDescription>Comprehensive ERP for SMBs and enterprises.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Finance, HRMS, Payroll, MM, PP, SD
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Cloud and on-premise deployment
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Fully customizable modules
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center"
                    alt="HRMS Product illustration"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>HRMS</span>
                </CardTitle>
                <CardDescription>Simplify HR operations with next-gen automation.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Payroll and compliance management
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Employee self-service portals
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Performance and workforce analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&crop=center"
                    alt="Dealer Management System illustration"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Dealer Management System</span>
                </CardTitle>
                <CardDescription>Smarter dealer collaboration and visibility.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Real-time inventory and sales tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Dealer claims and order management
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Performance insights and reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center"
                    alt="Order Management System illustration"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <span>Order Management System</span>
                </CardTitle>
                <CardDescription>Seamless order-to-cash visibility and control.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Order capture, processing, and tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Integrated inventory and fulfillment
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    Faster, error-free deliveries
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve - Enhanced with industry illustrations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Delivering specialized solutions across diverse industries with deep domain expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-background hover:bg-background/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=60&h=60&fit=crop&crop=center"
                  alt="Manufacturing industry"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold font-heading">Manufacturing</h3>
            </div>
            <div className="text-center p-6 bg-background hover:bg-background/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=60&h=60&fit=crop&crop=center"
                  alt="BFSI industry"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold font-heading">BFSI</h3>
            </div>
            <div className="text-center p-6 bg-background hover:bg-background/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=60&h=60&fit=crop&crop=center"
                  alt="Pharmaceutical industry"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold font-heading">Pharma</h3>
            </div>
            <div className="text-center p-6 bg-background hover:bg-background/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=60&h=60&fit=crop&crop=center"
                  alt="Retail industry"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold font-heading">Retail</h3>
            </div>
            <div className="text-center p-6 bg-background hover:bg-background/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=60&h=60&fit=crop&crop=center"
                  alt="Public sector"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold font-heading">Public Sector</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Choose Infocure - Enhanced with value proposition illustrations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Why Choose Infocure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The values and capabilities that set us apart as your trusted technology partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=80&h=80&fit=crop&crop=center"
                  alt="Trust illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Trust</h3>
              <p className="text-muted-foreground text-sm">
                Built on integrity and transparency, delivering on our commitments with unwavering reliability.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center"
                  alt="Expertise illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Deep technical knowledge and industry experience across enterprise technologies and business domains.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop&crop=center"
                  alt="Innovation illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Embracing cutting-edge technologies and methodologies to drive continuous improvement and growth.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=80&h=80&fit=crop&crop=center"
                  alt="Global delivery illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Global Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Worldwide presence with local expertise, ensuring seamless service delivery across time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Approach - Enhanced with timeline icons and process illustrations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures successful project delivery and long-term value creation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=center"
                  alt="Consult process illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold font-heading transition-all duration-300 hover:scale-110">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Consult</h3>
              <p className="text-muted-foreground text-sm">
                Understand your business needs, assess current state, and define transformation roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop&crop=center"
                  alt="Implement process illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold font-heading transition-all duration-300 hover:scale-110">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Implement</h3>
              <p className="text-muted-foreground text-sm">
                Deploy solutions with precision, following best practices and minimizing business disruption.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop&crop=center"
                  alt="Support process illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold font-heading transition-all duration-300 hover:scale-110">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Support</h3>
              <p className="text-muted-foreground text-sm">
                Provide ongoing maintenance, optimization, and user support for sustained performance.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=80&h=80&fit=crop&crop=center"
                  alt="Scale process illustration"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold font-heading transition-all duration-300 hover:scale-110">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">Scale</h3>
              <p className="text-muted-foreground text-sm">
                Expand capabilities and adapt solutions as your business grows and evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Global Presence - Enhanced with world map illustration */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading tracking-tight">
              Global Presence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Serving clients worldwide with local expertise and global delivery capabilities.
            </p>
          </div>
          <div className="mb-8">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=300&fit=crop&crop=center"
              alt="Global presence world map"
              width={800}
              height={300}
              className="w-full h-auto object-cover mx-auto"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Mumbai</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Bangalore</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Delhi NCR</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Kolkata</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Dubai</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Singapore</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">Germany</div>
            </div>
            <div className="p-4 bg-muted transition-all duration-300 hover:bg-muted/80 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-medium font-heading">UK</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Compliance & Security - Enhanced with security illustrations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance font-heading tracking-tight">
              Compliance & Security
            </h2>
            <div className="mb-8">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop&crop=center"
                alt="Compliance and security illustration"
                width={600}
                height={200}
                className="w-full h-auto object-cover mx-auto"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              We prioritize risk management and compliance across all our solutions. Our comprehensive approach includes
              24/7 threat monitoring, robust security frameworks, and adherence to global compliance standards. With
              proactive risk assessment and continuous security monitoring, we ensure your business operations remain
              secure, compliant, and resilient against evolving threats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">24/7 Monitoring</h3>
                <p className="text-sm text-muted-foreground">Continuous threat detection and response</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">Global Compliance</h3>
                <p className="text-sm text-muted-foreground">Adherence to international standards</p>
              </div>
              <div className="text-center">
                <Settings className="h-12 w-12 text-primary mx-auto mb-3 transition-all duration-300 hover:scale-110" />
                <h3 className="font-semibold mb-2 font-heading">Risk Management</h3>
                <p className="text-sm text-muted-foreground">Proactive assessment and mitigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA Banner - Enhanced with background image */}
      <section className="relative py-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=400&fit=crop&crop=center"
            alt="CTA background"
            width={1200}
            height={400}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Partner with Infocure Technologies to accelerate your digital transformation journey and unlock new
            possibilities for growth.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 px-8 py-3"
          >
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 12. Footer */}
      <Footer />
    </div>
  )
}