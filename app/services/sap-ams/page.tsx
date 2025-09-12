import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react"

export default function SAPAMSPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">SAP Application Management</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">SAP Application Management Services (AMS)</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive SAP application support and maintenance services to ensure optimal performance, security,
              and continuous improvement of your SAP landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Get AMS Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Why Choose Our SAP AMS?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reduce operational costs by up to 30% while improving system performance and user satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Round-the-clock monitoring and support with guaranteed SLA response times
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Cost Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reduce total cost of ownership through proactive maintenance and optimization
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ensure security patches, compliance requirements, and risk mitigation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Our AMS Service Portfolio</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Corrective Maintenance</h3>
              <ul className="space-y-4">
                {[
                  "Incident management and resolution",
                  "Bug fixes and error corrections",
                  "Performance troubleshooting",
                  "User support and training",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Preventive Maintenance</h3>
              <ul className="space-y-4">
                {[
                  "System health monitoring",
                  "Proactive performance optimization",
                  "Security patch management",
                  "Backup and disaster recovery",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Enhancement Services</h3>
              <ul className="space-y-4">
                {[
                  "Functional enhancements",
                  "Process improvements",
                  "Integration development",
                  "Custom report development",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Advisory Services</h3>
              <ul className="space-y-4">
                {[
                  "Technology roadmap planning",
                  "Best practices consulting",
                  "Upgrade and migration planning",
                  "Change management support",
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
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Ready to Optimize Your SAP Operations?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our certified SAP experts handle your application management while you focus on business growth
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Start Your AMS Journey
          </Button>
        </div>
      </section>
    </div>
  )
}
