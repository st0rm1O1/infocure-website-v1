import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, AlertTriangle, TrendingUp, Shield } from "lucide-react"

export default function SAPAuditPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-[#191717] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ff2226] text-white mb-6">SAP System Audit</Badge>
            <h1 className="text-5xl font-bold mb-6 font-sans">Comprehensive SAP System Audit Services</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Identify security vulnerabilities, compliance gaps, and optimization opportunities in your SAP landscape
              with our thorough audit methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ff2226] hover:bg-[#e01e22] text-white">
                Schedule Audit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#191717] bg-transparent"
              >
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#191717] mb-4 font-sans">Our SAP Audit Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation across security, compliance, performance, and governance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Security Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• User access review</li>
                  <li>• Authorization analysis</li>
                  <li>• Segregation of duties</li>
                  <li>• Security configuration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Compliance Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SOX compliance check</li>
                  <li>• GDPR data protection</li>
                  <li>• Industry regulations</li>
                  <li>• Internal controls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Performance Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System performance</li>
                  <li>• Database optimization</li>
                  <li>• Custom code review</li>
                  <li>• Process efficiency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Search className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Technical Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System architecture</li>
                  <li>• Integration points</li>
                  <li>• Backup strategies</li>
                  <li>• Disaster recovery</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vulnerability scanning</li>
                  <li>• Risk prioritization</li>
                  <li>• Mitigation strategies</li>
                  <li>• Business impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <FileText className="h-12 w-12 text-[#ff2226] mb-4" />
                <CardTitle className="text-xl font-sans">Governance Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Change management</li>
                  <li>• Documentation review</li>
                  <li>• Process adherence</li>
                  <li>• Best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#191717] mb-12 font-sans">Our Audit Methodology</h2>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3 font-sans">Planning</h3>
              <p className="text-gray-600">Define scope, objectives, and audit criteria based on your requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3 font-sans">Assessment</h3>
              <p className="text-gray-600">Conduct thorough system analysis using automated tools and manual review</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3 font-sans">Analysis</h3>
              <p className="text-gray-600">Analyze findings, identify risks, and prioritize recommendations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#ff2226] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-[#191717] mb-3 font-sans">Reporting</h3>
              <p className="text-gray-600">Deliver comprehensive report with actionable recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff2226]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">Secure Your SAP Investment</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Identify and address security gaps before they become costly problems
          </p>
          <Button size="lg" className="bg-white text-[#ff2226] hover:bg-gray-100">
            Request Audit Proposal
          </Button>
        </div>
      </section>
    </div>
  )
}
