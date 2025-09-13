import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/sap-consultation"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  SAP Consultation & Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sap-implementation"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  SAP Implementation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/oracle-ebs"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Oracle E-Business Suite
                </Link>
              </li>
              <li>
                <Link
                  href="/services/salesforce"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Salesforce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/artificial-intelligence"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rpa"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  RPA
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/solutions/rise-with-sap"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  S/4 HANA RISE
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sap-analytics-cloud"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  SAP Analytics Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hcm-successfactors"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  SAP HCM & SuccessFactors
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sap-fiori"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  SAP Fiori
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products/crm"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/products/erp"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hrms"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  HRMS
                </Link>
              </li>
              <li>
                <Link
                  href="/products/dealer-management-system"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Dealer Management System
                </Link>
              </li>
              <li>
                <Link
                  href="/products/order-management-system"
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Order Management System
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-xs text-gray-400 leading-relaxed mb-6">
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
          <div className="text-sm font-heading text-white">
            © 2025 Infocure Technologies. All Rights Reserved. Driving Innovation Beyond Digital Transformation.
          </div>
        </div>
      </div>
    </footer>
  )
}