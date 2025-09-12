import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart3, Brain, Database, TrendingUp, Zap, Users } from "lucide-react"

export default function SAPAnalyticsCloudPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">SAP Analytics Cloud</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">SAP Analytics Cloud Solutions</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with intelligent analytics, planning, and predictive insights in one unified cloud
              platform powered by machine learning and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Start Analytics Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                View Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Unified Analytics Platform</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Business intelligence, planning, and predictive analytics in one comprehensive solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Business Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Interactive dashboards</li>
                  <li>• Self-service analytics</li>
                  <li>• Mobile reporting</li>
                  <li>• Real-time insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Enterprise Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Financial planning</li>
                  <li>• Workforce planning</li>
                  <li>• Sales planning</li>
                  <li>• Scenario modeling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Brain className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Machine learning models</li>
                  <li>• Predictive forecasting</li>
                  <li>• Smart insights</li>
                  <li>• Automated recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">
            Our SAC Implementation Services
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Analytics Implementation</h3>
              <ul className="space-y-4">
                {[
                  "Data source connectivity and modeling",
                  "Dashboard and story development",
                  "KPI and metric definition",
                  "User access and security setup",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Planning Implementation</h3>
              <ul className="space-y-4">
                {[
                  "Planning model design and setup",
                  "Budget and forecast processes",
                  "Allocation and calculation logic",
                  "Workflow and approval processes",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Data Integration</h3>
              <ul className="space-y-4">
                {[
                  "SAP and non-SAP data integration",
                  "Real-time and batch data loading",
                  "Data quality and validation",
                  "Master data management",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ff2226] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#191717] mb-6 font-sans">Advanced Analytics</h3>
              <ul className="space-y-4">
                {[
                  "Predictive model development",
                  "Machine learning implementation",
                  "Smart discovery configuration",
                  "Augmented analytics setup",
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

      {/* Use Cases */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Key Use Cases</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Database className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-lg font-sans">Financial Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">P&L analysis, variance reporting, and financial consolidation</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Users className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-lg font-sans">Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Sales performance, pipeline analysis, and territory management</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-lg font-sans">Supply Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Inventory optimization, demand planning, and supplier analytics</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-lg font-sans">HR Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Workforce planning, talent analytics, and employee insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff2226]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Unlock the Power of Your Data</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform decision-making with intelligent analytics and planning capabilities
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Start Your Analytics Transformation
          </Button>
        </div>
      </section>
    </div>
  )
}
