import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingUp, Award, Target, Brain, Zap } from "lucide-react"

export default function HCMSuccessFactorsPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">SAP SuccessFactors</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">SAP SuccessFactors HCM Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your HR processes with the world's leading cloud-based Human Capital Management suite designed
              to engage employees and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Transform HR Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SuccessFactors Modules */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Complete HCM Suite</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive modules covering the entire employee lifecycle from hire to retire
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Employee Central</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Core HR processes</li>
                  <li>• Employee data management</li>
                  <li>• Organizational management</li>
                  <li>• Global compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Target className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Recruiting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Talent acquisition</li>
                  <li>• Candidate management</li>
                  <li>• Interview scheduling</li>
                  <li>• Onboarding workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Performance & Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Goal management</li>
                  <li>• Performance reviews</li>
                  <li>• Continuous feedback</li>
                  <li>• Calibration processes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Award className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Learning management</li>
                  <li>• Course catalogs</li>
                  <li>• Compliance training</li>
                  <li>• Skills development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Brain className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Succession & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Succession planning</li>
                  <li>• Career development</li>
                  <li>• Talent pools</li>
                  <li>• Development plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Salary planning</li>
                  <li>• Variable pay</li>
                  <li>• Stock administration</li>
                  <li>• Compensation statements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Our SuccessFactors Services</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Implementation Services</h3>
              <ul className="space-y-4">
                {[
                  "Business process analysis and design",
                  "System configuration and setup",
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
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Integration Services</h3>
              <ul className="space-y-4">
                {[
                  "SAP ERP integration",
                  "Third-party system connectivity",
                  "Real-time data synchronization",
                  "API development and management",
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
                  "Process improvement consulting",
                  "Advanced feature enablement",
                  "Analytics and reporting setup",
                  "Mobile app configuration",
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
                  "Quarterly release management",
                  "User adoption monitoring",
                  "Continuous improvement programs",
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
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">
            Transform Your HR Operations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Increase Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Streamline HR processes and reduce administrative burden by up to 40%</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Improve Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance employee experience with self-service capabilities and mobile access
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Brain className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Data-Driven Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Make informed HR decisions with advanced analytics and reporting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff2226]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Ready to Transform Your HR?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using SuccessFactors to drive employee engagement and business success
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Start Your HR Transformation
          </Button>
        </div>
      </section>
    </div>
  )
}
