import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Smartphone, Zap, Users, Eye, Palette, Monitor } from "lucide-react"

export default function SAPFioriPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">SAP Fiori</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">SAP Fiori User Experience Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your SAP user experience with modern, intuitive, and role-based applications that work
              seamlessly across all devices and platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Modernize Your UX
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                View Fiori Apps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fiori Design Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Fiori Design Principles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on five core design principles to deliver exceptional user experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Eye className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Role-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personalized apps and content based on user roles and responsibilities</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Consistent experience across desktop, tablet, and mobile devices</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Simple</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Intuitive design that reduces complexity and training requirements</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Palette className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Coherent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Unified design language across all SAP applications</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Adaptive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learns from user behavior to provide personalized experiences</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Monitor className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Delightful</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Engaging interactions that make work more enjoyable and productive</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fiori App Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Fiori Application Portfolio</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-[#ff2226]">Transactional Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Task-oriented applications for daily business operations</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Create Purchase Orders</li>
                  <li>• Manage Sales Orders</li>
                  <li>• Process Invoices</li>
                  <li>• Employee Self-Service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-[#ff2226]">Analytical Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Data visualization and reporting applications</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Financial Performance</li>
                  <li>• Sales Analytics</li>
                  <li>• Inventory Reports</li>
                  <li>• HR Dashboards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-sans text-[#ff2226]">Fact Sheet Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Contextual information and quick reference</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer Information</li>
                  <li>• Product Details</li>
                  <li>• Vendor Profiles</li>
                  <li>• Employee Records</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">
            Our Fiori Implementation Services
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Fiori Strategy & Planning</h3>
              <ul className="space-y-4">
                {[
                  "User experience assessment",
                  "Fiori app catalog analysis",
                  "Technical architecture planning",
                  "Rollout strategy development",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Technical Implementation</h3>
              <ul className="space-y-4">
                {[
                  "Fiori Launchpad configuration",
                  "Gateway and OData service setup",
                  "Security and authorization",
                  "Performance optimization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Custom App Development</h3>
              <ul className="space-y-4">
                {[
                  "UI5 application development",
                  "Custom Fiori apps",
                  "Extension and enhancement",
                  "Integration with third-party systems",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">User Adoption</h3>
              <ul className="space-y-4">
                {[
                  "User training and workshops",
                  "Change management support",
                  "Documentation and guides",
                  "Ongoing support and maintenance",
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Benefits of SAP Fiori</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Increased Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reduce task completion time by up to 30% with intuitive interfaces</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Better User Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Improve user satisfaction and reduce training costs significantly</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Mobile Enablement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Access SAP functionality anytime, anywhere on any device</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff2226]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Ready to Transform Your SAP Experience?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Modernize your SAP interface and boost user productivity with Fiori applications
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Start Your Fiori Journey
          </Button>
        </div>
      </section>
    </div>
  )
}
