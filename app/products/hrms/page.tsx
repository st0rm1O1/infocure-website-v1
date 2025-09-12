import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Award,
  UserCheck,
  Shield,
} from "lucide-react"
import {
  AnimatedSection,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section"

export default function HRMSPage() {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Complete employee lifecycle management from onboarding to offboarding",
    },
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description: "Automated payroll with tax calculations, deductions, and compliance management",
    },
    {
      icon: Calendar,
      title: "Time & Attendance",
      description: "Advanced time tracking, shift management, and attendance monitoring",
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Goal setting, performance reviews, and continuous feedback systems",
    },
    {
      icon: Award,
      title: "Talent Management",
      description: "Recruitment, training, and career development planning tools",
    },
    {
      icon: UserCheck,
      title: "Employee Self-Service",
      description: "Empower employees with self-service portals for requests and information",
    },
  ]

  const benefits = [
    { metric: "70%", description: "Reduction in HR Administrative Tasks" },
    { metric: "85%", description: "Faster Payroll Processing" },
    { metric: "60%", description: "Improvement in Employee Satisfaction" },
    { metric: "40%", description: "Decrease in Compliance Issues" },
  ]

  const modules = [
    "Core HR",
    "Payroll Management",
    "Time & Attendance",
    "Performance Management",
    "Recruitment",
    "Learning Management",
    "Benefits Administration",
    "Compliance Management",
  ]

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <Badge className="bg-[#ff2226] text-white mb-6 px-4 py-2">HRMS Platform</Badge>
                <h1 className="text-5xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
                  Empower Your Workforce with Intelligent HR Management
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  Transform your HR operations with our comprehensive HRMS platform. From recruitment to retirement,
                  manage every aspect of your human resources with efficiency and insight.
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
                    Book Demo
                  </Button>
                </div>
              </SlideInLeft>
              <SlideInRight delay={0.2}>
                <div className="bg-gradient-to-br from-[#ff2226]/20 to-transparent p-8 rounded-lg">
                  <img
                    src="/modern-hrms-dashboard-with-employee-data-and-perfo.jpg"
                    alt="HRMS Dashboard Interface"
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
                  Transformative HR Results
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Organizations using our HRMS platform experience significant improvements in HR efficiency and
                  employee engagement
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
                  Complete HR Management Suite
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Comprehensive features to manage every aspect of your human resources operations
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

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <h2 className="text-4xl font-bold text-[#191717] mb-6 font-[family-name:var(--font-geist-sans)]">
                  Integrated HR Modules
                </h2>
                <p className="text-lg text-gray-600 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                  Our HRMS platform includes all essential HR modules that work seamlessly together, providing a unified
                  experience for HR professionals and employees alike.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {modules.map((module, index) => (
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                        <span className="font-[family-name:var(--font-inter)]">{module}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <AnimatedSection delay={0.8}>
                  <Button className="mt-8 bg-[#ff2226] hover:bg-[#e01e22] text-white transition-all duration-300 hover:scale-105">
                    Explore All Modules
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </AnimatedSection>
              </SlideInLeft>
              <SlideInRight delay={0.2}>
                <div className="relative">
                  <img
                    src="/hrms-employee-self-service-portal-with-performance.jpg"
                    alt="HRMS Modules"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#191717] mb-4 font-[family-name:var(--font-geist-sans)]">
                  Enhanced Employee Experience
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                  Create a positive workplace culture with tools that empower employees and streamline HR processes
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <StaggerItem>
                <div className="text-center">
                  <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-[#ff2226]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                    Mobile Accessibility
                  </h3>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                    Access HR services anytime, anywhere with our mobile-responsive platform and dedicated apps
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-[#ff2226]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                    Data Security
                  </h3>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                    Enterprise-grade security with encryption, access controls, and compliance with global standards
                  </p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="p-4 bg-[#ff2226]/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-[#ff2226]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191717] mb-3 font-[family-name:var(--font-geist-sans)]">
                    Analytics & Insights
                  </h3>
                  <p className="text-gray-600 font-[family-name:var(--font-inter)]">
                    Make data-driven HR decisions with comprehensive analytics and predictive insights
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#191717] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-geist-sans)] text-balance">
                Ready to Transform Your HR Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-[family-name:var(--font-inter)] leading-relaxed">
                Join thousands of organizations who have modernized their HR processes and improved employee
                satisfaction
              </p>
            </FadeInUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#ff2226] hover:bg-[#e01e22] text-white px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Start Your HRMS Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] px-8 py-3 transition-all duration-300 bg-transparent"
              >
                Speak with HR Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
