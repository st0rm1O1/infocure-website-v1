import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Users, TrendingUp, Mail, Phone, BarChart3, Target } from "lucide-react"

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
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6 font-heading text-balance">
                  Transform Customer Relationships into Revenue Growth
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our comprehensive CRM platform empowers your sales team with intelligent automation, deep customer
                  insights, and seamless workflow management to accelerate revenue growth.
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
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-transparent p-8">
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&crop=center"
                  alt="CRM Dashboard Interface"
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
                Proven Results That Drive Growth
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See measurable improvements in your sales performance with our CRM solution
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
                Comprehensive CRM Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage customer relationships and drive sales success
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
              Ready to Accelerate Your Sales Growth?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of sales teams who have transformed their customer relationships with our CRM platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-hover px-8 py-3"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="btn-hover px-8 py-3"
              >
                Talk to Sales Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}