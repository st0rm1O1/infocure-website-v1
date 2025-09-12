import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Heart,
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  Database,
  Globe,
  Zap,
  CheckCircle,
  Activity,
} from "lucide-react"

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted border-b-4 border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance font-heading">
              Healthcare Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Transforming Healthcare Through Digital Innovation. Improve patient outcomes, enhance operational
              efficiency, and ensure regulatory compliance with our comprehensive healthcare technology solutions.
            </p>
            <Button
              size="lg"
              asChild
              className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Modernize Healthcare <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Healthcare Challenges */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Healthcare Challenges We Address
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Solve critical healthcare challenges with technology-driven solutions that improve care delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Patient Experience</span>
                </CardTitle>
                <CardDescription>
                  Digital patient portals, appointment scheduling, and telemedicine platforms for enhanced patient
                  engagement and satisfaction.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Data Management</span>
                </CardTitle>
                <CardDescription>
                  Electronic health records (EHR), health information exchange (HIE), and secure data analytics
                  platforms.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Regulatory Compliance</span>
                </CardTitle>
                <CardDescription>
                  HIPAA compliance, data security, audit trails, and regulatory reporting solutions for healthcare
                  organizations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Operational Efficiency</span>
                </CardTitle>
                <CardDescription>
                  Workflow automation, resource optimization, and performance analytics to streamline healthcare
                  operations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Clinical Decision Support</span>
                </CardTitle>
                <CardDescription>
                  AI-powered diagnostic tools, clinical guidelines integration, and evidence-based decision support
                  systems.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Interoperability</span>
                </CardTitle>
                <CardDescription>
                  System integration, data exchange standards (HL7, FHIR), and seamless connectivity across healthcare
                  ecosystems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital Health Solutions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Digital Health Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive digital transformation solutions for modern healthcare delivery.
            </p>
          </div>
          <div className="space-y-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>Telemedicine & Remote Care</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Enable remote healthcare delivery with secure, scalable telemedicine platforms.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Video consultation platforms with integrated scheduling</li>
                    <li>• Remote patient monitoring and IoT device integration</li>
                    <li>• Mobile health apps for patient engagement</li>
                    <li>• Secure messaging and care coordination tools</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Electronic Health Records (EHR)</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Comprehensive EHR solutions for complete patient data management and clinical workflows.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Integrated clinical documentation and charting</li>
                    <li>• Medication management and e-prescribing</li>
                    <li>• Clinical decision support and alerts</li>
                    <li>• Interoperability with external systems and HIEs</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>Healthcare Analytics & BI</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Data-driven insights for improved clinical outcomes and operational performance.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Population health management and analytics</li>
                    <li>• Clinical quality metrics and reporting</li>
                    <li>• Financial performance and revenue cycle analytics</li>
                    <li>• Predictive analytics for risk stratification</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-heading">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Healthcare Security & Compliance</span>
                </CardTitle>
                <CardDescription className="space-y-3">
                  <p>Robust security frameworks ensuring HIPAA compliance and data protection.</p>
                  <ul className="space-y-1 text-sm">
                    <li>• HIPAA-compliant infrastructure and applications</li>
                    <li>• Data encryption and access controls</li>
                    <li>• Audit logging and compliance reporting</li>
                    <li>• Incident response and breach prevention</li>
                  </ul>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">
              Healthcare Transformation Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Measurable improvements in patient care, operational efficiency, and clinical outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Heart className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Improved Patient Outcomes</h3>
              <p className="text-sm text-muted-foreground">Better care coordination and clinical decision support</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">40% Efficiency Gain</h3>
              <p className="text-sm text-muted-foreground">Streamlined workflows and automated processes</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">Enhanced Patient Experience</h3>
              <p className="text-sm text-muted-foreground">Digital engagement and convenient access to care</p>
            </div>
            <div className="text-center p-6 bg-muted transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-2 hover:border-primary/20">
              <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2 font-heading">100% Compliance</h3>
              <p className="text-sm text-muted-foreground">HIPAA compliance and regulatory adherence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Success Stories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">Healthcare Success</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proven results across healthcare organizations of all sizes and specialties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Regional Health System</CardTitle>
                <CardDescription>
                  Implemented comprehensive EHR and telemedicine platform, resulting in 45% improvement in patient
                  satisfaction and 30% reduction in administrative costs.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Specialty Clinic Network</CardTitle>
                <CardDescription>
                  Deployed population health management solution, achieving 25% improvement in chronic disease outcomes
                  and 20% reduction in hospital readmissions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-heading">Academic Medical Center</CardTitle>
                <CardDescription>
                  Integrated clinical research platform with EHR, enabling 50% faster patient recruitment and 35%
                  improvement in research data quality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Healthcare Delivery?"
        description="Improve patient outcomes and operational efficiency with Infocure's comprehensive healthcare technology solutions."
        buttonText="Start Your Healthcare Transformation"
        buttonHref="/contact"
        variant="dark"
      />

      <Footer />
    </div>
  )
}
