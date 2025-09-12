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
} from "lucide-react"

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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 font-heading text-balance">
                  Empower Your Workforce with Intelligent HR Management
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your HR operations with our comprehensive HRMS platform. From recruitment to retirement,
                  manage every aspect of your human resources with efficiency and insight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="btn-hover px-8 py-3"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-hover px-8 py-3"
                  >
                    Book Demo
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center"
                  alt="HRMS Dashboard Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
                Transformative HR Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Organizations using our HRMS platform experience significant improvements in HR efficiency and
                employee engagement
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 font-heading">
                    {benefit.metric}
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
                Complete HR Management Suite
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features to manage every aspect of your human resources operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-background shadow-lg card-hover group">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground font-heading">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 font-heading text-balance">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of organizations who have modernized their HR processes and improved employee
              satisfaction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-hover px-8 py-3"
              >
                Start Your HRMS Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-hover px-8 py-3"
              >
                Speak with HR Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}