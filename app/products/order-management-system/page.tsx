import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, Truck, BarChart3, Users, Zap, Shield } from "lucide-react"

export default function OrderManagementSystemPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">Order Management System</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">Comprehensive Order Management System</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline your entire order-to-cash process with our intelligent order management platform that automates
              workflows, reduces errors, and accelerates fulfillment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Request Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Powerful Order Management Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end order processing capabilities designed for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-channel order capture</li>
                  <li>• Automated order validation</li>
                  <li>• Real-time inventory check</li>
                  <li>• Dynamic pricing rules</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Truck className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Fulfillment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Intelligent order routing</li>
                  <li>• Warehouse optimization</li>
                  <li>• Shipping integration</li>
                  <li>• Delivery tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Order performance metrics</li>
                  <li>• Customer analytics</li>
                  <li>• Inventory insights</li>
                  <li>• Revenue reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer profiles</li>
                  <li>• Order history tracking</li>
                  <li>• Preference management</li>
                  <li>• Communication tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Workflow automation</li>
                  <li>• Exception handling</li>
                  <li>• Notification systems</li>
                  <li>• Rule-based processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Data encryption</li>
                  <li>• Access controls</li>
                  <li>• Audit trails</li>
                  <li>• Compliance reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Lifecycle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">
            Complete Order Lifecycle Management
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-[#191717] mb-3 font-sans">Order Capture</h3>
              <p className="text-sm text-gray-600">Multi-channel order entry with validation and pricing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-[#191717] mb-3 font-sans">Order Processing</h3>
              <p className="text-sm text-gray-600">Automated validation, inventory allocation, and routing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-[#191717] mb-3 font-sans">Fulfillment</h3>
              <p className="text-sm text-gray-600">Pick, pack, and ship with warehouse optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-[#191717] mb-3 font-sans">Delivery</h3>
              <p className="text-sm text-gray-600">Real-time tracking and customer notifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-bold text-[#191717] mb-3 font-sans">Post-Sale</h3>
              <p className="text-sm text-gray-600">Returns, exchanges, and customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Business Benefits</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Operational Excellence</h3>
              <ul className="space-y-4">
                {[
                  "Reduce order processing time by 60%",
                  "Minimize order errors and exceptions",
                  "Improve inventory turnover rates",
                  "Enhance customer satisfaction scores",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Business Growth</h3>
              <ul className="space-y-4">
                {[
                  "Scale operations without proportional cost increase",
                  "Support multiple sales channels seamlessly",
                  "Enable faster time-to-market for new products",
                  "Improve cash flow with faster order cycles",
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

      {/* CTA Section */}
      <section className="py-16 bg-[#ff2226]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Transform Your Order Management</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Streamline operations, reduce costs, and delight customers with our comprehensive order management solution
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Schedule Your Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
