import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Cloud, Database, Users, TrendingUp, Zap } from "lucide-react"

export default function OracleFusionPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">Oracle Fusion Cloud</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">Oracle Fusion Cloud Applications</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with Oracle's complete suite of cloud applications for ERP, HCM, CX, and SCM with
              our expert implementation and support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Oracle Fusion Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Oracle Fusion Applications Suite</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete cloud-native applications built on a unified platform for seamless integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Database className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Fusion ERP</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Financial Management</li>
                  <li>• Procurement</li>
                  <li>• Project Management</li>
                  <li>• Risk Management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Fusion HCM</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Core HR</li>
                  <li>• Talent Management</li>
                  <li>• Workforce Management</li>
                  <li>• Payroll</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Fusion CX</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sales Cloud</li>
                  <li>• Service Cloud</li>
                  <li>• Marketing Cloud</li>
                  <li>• Commerce Cloud</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Fusion SCM</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Supply Planning</li>
                  <li>• Manufacturing</li>
                  <li>• Logistics</li>
                  <li>• Product Lifecycle</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Our Oracle Fusion Services</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Implementation Services</h3>
              <ul className="space-y-4">
                {[
                  "Cloud readiness assessment",
                  "Application configuration and setup",
                  "Data migration and integration",
                  "User training and change management",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Optimization Services</h3>
              <ul className="space-y-4">
                {[
                  "Performance tuning and optimization",
                  "Business process improvement",
                  "Advanced analytics implementation",
                  "Mobile and social enablement",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Integration Services</h3>
              <ul className="space-y-4">
                {[
                  "Third-party system integration",
                  "API development and management",
                  "Real-time data synchronization",
                  "Hybrid cloud connectivity",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Support Services</h3>
              <ul className="space-y-4">
                {[
                  "24/7 application support",
                  "Proactive monitoring and maintenance",
                  "Security and compliance management",
                  "Continuous improvement consulting",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Why Choose Oracle Fusion?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Cloud className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Cloud-Native</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Built for the cloud with automatic updates, scalability, and security</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Embedded AI and machine learning for intelligent automation</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Database className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Unified Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Single data model across all applications for seamless integration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff2226]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Ready to Transform with Oracle Fusion?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Accelerate your digital transformation with Oracle's complete cloud applications suite
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
