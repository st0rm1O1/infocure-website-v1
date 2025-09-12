import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Users, TrendingUp, Mail, Phone, BarChart3, Target } from "lucide-react"
import {
  AnimatedSection,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section"

export default function CRMPage() {
  const features = [
    {
      icon: Users,
      title: "Lead Management",
      description: "Capture, qualify, and nurture leads through automated workflows and intelligent scoring",
    },
    {
      icon: TrendingUp,
      title: "Sales Pipeline",
      description: "Visual pipeline management with forecasting and deal progression tracking",
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description: "Automated email campaigns, drip sequences, and personalized customer journeys",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time dashboards and comprehensive reports for data-driven decision making",
    },
    {
      icon: Phone,
      title: "Communication Hub",
      description: "Integrated calling, messaging, and video conferencing capabilities",
    },
    {
      icon: Target,
      title: "Customer Segmentation",
      description: "Advanced segmentation tools for targeted marketing and personalized experiences",
    },
  ]

  const benefits = [
    { metric: "40%", description: "Increase in Sales Productivity" },
    { metric: "60%", description: "Faster Lead Response Time" },
    { metric: "35%", description: "Higher Conversion Rates" },
    { metric: "50%", description: "Reduction in Sales Cycle" },
  ]

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <Badge className="bg-[#ff2226] text-white mb-6 px-4 py-2">CRM Solutions</Badge>
                <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
                  Transform Customer Relationships into Revenue Growth
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  Our comprehensive CRM platform empowers your sales team with intelligent automation, deep customer
                  insights, and seamless workflow management to accelerate revenue growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3 transition-all duration-300 hover:scale-105"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 transition-all duration-300 bg-transparent"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </SlideInLeft>
              <SlideInRight delay={0.2}>
                <div className="bg-gradient-to-br from-[#ff2226]/20 to-transparent p-8 rounded-lg">
                  <img
                    src="/modern-crm-dashboard.png"
                    alt="CRM Dashboard Interface"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                  Proven Results That Drive Growth
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  See measurable improvements in your sales performance with our CRM solution
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#ff2226] mb-2 font-[family-name:var(--font-geist-sans)]">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-700 font-[family-name:var(--font-inter)]">{benefit.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                  Comprehensive CRM Features
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Everything you need to manage customer relationships and drive sales success
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <CardHeader>
                      <div className="p-3 bg-[#ff2226]/10 rounded-lg w-fit mb-4 group-hover:bg-[#ff2226]/20 transition-colors duration-300">
                        <feature.icon className="h-8 w-8 text-[#ff2226]" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#191717] font-[family-name:var(--font-geist-sans)]">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 font-[family-name:var(--font-inter)]">{feature.description}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <h2 className="text-4xl font-bold text-[#191717] mb-6 font-[family-name:var(--font-geist-sans)]">
                  Seamless Integrations
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  Connect your CRM with existing tools and systems for a unified business ecosystem. Our platform
                  integrates with over 500+ applications including email platforms, accounting software, and marketing
                  automation tools.
                </p>
                <div className="space-y-4">
                  <AnimatedSection delay={0.1}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff2226]" />
                      <span className="font-[family-name:var(--font-inter)]">Email Marketing Platforms</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.2}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff2226]" />
                      <span className="font-[family-name:var(--font-inter)]">Accounting & ERP Systems</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.3}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff2226]" />
                      <span className="font-[family-name:var(--font-inter)]">Communication Tools</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={0.4}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff2226]" />
                      <span className="font-[family-name:var(--font-inter)]">Social Media Platforms</span>
                    </div>
                  </AnimatedSection>
                </div>
              </SlideInLeft>
              <SlideInRight delay={0.2}>
                <div className="relative">
                  <img
                    src="/crm-integration-dashboard-with-multiple-app-connec.jpg"
                    alt="CRM Integrations"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-[#191717] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
                Ready to Accelerate Your Sales Growth?
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                Join thousands of sales teams who have transformed their customer relationships with our CRM platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3 transition-all duration-300 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 transition-all duration-300 bg-transparent"
                >
                  Talk to Sales Expert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
