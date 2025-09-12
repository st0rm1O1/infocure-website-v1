import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/sap-consultation"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  SAP Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/oracle-ebs"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Oracle Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/salesforce"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Salesforce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/artificial-intelligence"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rpa"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  RPA
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-software-development"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/solutions/rise-with-sap"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  S/4 HANA RISE
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sap-analytics-cloud"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  SAP Analytics Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hcm-successfactors"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  SAP HCM & SuccessFactors
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sap-fiori"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  SAP Fiori
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products/crm"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/products/erp"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hrms"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  HRMS
                </Link>
              </li>
              <li>
                <Link
                  href="/products/dealer-management-system"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Dealer Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products/order-management-system"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Order Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="text-xs text-muted-foreground leading-relaxed mb-4">
            <strong>Disclaimer:</strong> All product names, logos, and brands mentioned on this website are the property
            of their respective owners. SAP, SAP S/4HANA, SAP Fiori, SAP SuccessFactors, and other SAP-related marks are
            trademarks or registered trademarks of SAP SE or its affiliates in Germany and other countries. Oracle,
            Oracle E-Business Suite (EBS), and Oracle Fusion Cloud are trademarks or registered trademarks of Oracle
            Corporation and/or its affiliates. Salesforce and the Salesforce logo are trademarks of Salesforce.com, Inc.
            and are used here for reference purposes only. Any other trademarks, service marks, and trade names used on
            this website remain the property of their respective owners. Infocure Technologies is an independent IT
            services and consulting company. We are not directly affiliated with or endorsed by SAP, Oracle, Salesforce,
            or any other product owner mentioned. References are made purely for informational and descriptive purposes.
          </div>
          <div className="text-sm font-heading">
            © 2025 Infocure Technologies. All Rights Reserved. Driving Innovation Beyond Digital Transformation.
          </div>
        </div>
      </div>
    </footer>
  )
}
