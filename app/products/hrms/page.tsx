import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
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
  Brain,
  Smartphone,
} from "lucide-react"

export default function HRMSPage() {
  const modules = [
    {
      icon: Users,
      title: "Employee Database Management",
      description: "Centralized employee records, career movement tracking, rights-based self-service with maker-checker validation.",
    },
    {
      icon: UserCheck,
      title: "Recruitment & Onboarding",
      description: "Manpower planning, resume bank, candidate screening, digital offer letters, and automated onboarding workflows.",
    },
    {
      icon: Clock,
      title: "Attendance & Leave Management",
      description: "Biometric integration, geo-fencing, automated leave workflows, and real-time approval alerts.",
    },
    {
      icon: DollarSign,
      title: "Payroll & Compliance",
      description: "Multi-company payroll, automated salary processing, compliance with PF, ESIC, PT, TDS, and gratuity.",
    },
    {
      icon: TrendingUp,
      title: "Performance & Talent Management",
      description: "Goal alignment, continuous feedback, configurable appraisal cycles, and succession planning.",
    },
    {
      icon: Award,
      title: "Learning & Development",
      description: "Training scheduler, course catalogue, feedback collection, and integrated training with PMS.",
    },
  ]

  const benefits = [
    { metric: "5,000+", description: "Employees engaged across geographies" },
    { metric: "60 to 15", description: "Days reduction in settlement cycle" },
    { metric: "2.4 to 3.9", description: "Improvement in satisfaction scores" },
    { metric: "5 to 1", description: "HR systems consolidated into unified HRMS" },
  ]

  const features = [
    "End-to-end HR automation for the entire hire to retire cycle",
    "Quick to deploy and easy to use",
    "Scalable and modular for organizations of any size",
    "Multi-lingual, multi-currency, and ERP-integrated",
    "Statutory compliance made simple (PF, ESIC, PT, TDS, gratuity, wages)",
    "Over 500 ready reports and dashboards for real-time decision-making",
    "Mobile app and chatbots for modern workforce needs",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=600&fit=crop&crop=center"
            alt="HRMS hero background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
                  Human Resource Management System (HRMS)
                </h1>
                <h2 className="text-2xl lg:text-3xl text-red-400 mb-8 font-medium">
                  Hire to Retire HR Management
                </h2>
                <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed">
                  Infocure HRMS is a complete Human Resource Management System that covers the full employee lifecycle from hire to retire. With mobile-first design, built-in analytics, and AI-powered automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                    Ask for Demo
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-none"></div>
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500&fit=crop&crop=center"
                  alt="HRMS Dashboard Interface"
                  width={700}
                  height={500}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Infocure HRMS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Why Choose Infocure HRMS?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete digital HR transformation platform designed for modern workforce needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core HRMS Modules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Core HRMS Modules
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive modules covering every aspect of human resource management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <CardHeader>
                    <div className="p-4 bg-red-100 w-fit mb-6 group-hover:bg-red-200 group-hover:scale-110 transition-all duration-300">
                      <module.icon className="h-10 w-10 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Success */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Infocure HRMS Success Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A leading financial services company digitized its HR with Infocure HRMS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-8 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold text-red-500 mb-4">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                Advanced HRMS Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cutting-edge technology features that set our HRMS apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <Brain className="h-16 w-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">AI & Machine Learning</h3>
                <p className="text-gray-600">Smart recruitment and unbiased performance insights</p>
              </div>
              <div className="text-center p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <Users className="h-16 w-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Chatbots</h3>
                <p className="text-gray-600">Virtual HR assistant for employee queries</p>
              </div>
              <div className="text-center p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <Settings className="h-16 w-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">RPA</h3>
                <p className="text-gray-600">Automates repetitive HR tasks</p>
              </div>
              <div className="text-center p-8 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <Smartphone className="h-16 w-16 text-red-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Mobile HRMS App</h3>
                <p className="text-gray-600">Leave, attendance, payslips, and approvals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=600&fit=crop&crop=center"
            alt="CTA background"
            width={1400}
            height={600}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
              Transform Your HR Operations
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Infocure HRMS is more than just HR software, it is a complete digital HR transformation platform
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 text-lg">
                Ask for Demo
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}