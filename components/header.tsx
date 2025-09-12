"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownProps {
  title: string
  items: { name: string; href: string }[]
}

function Dropdown({ title, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-4 py-2 text-sm font-medium font-heading hover:text-primary transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-80 bg-white border shadow-lg z-50">
          <div className="grid grid-cols-1 gap-1 p-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const services = [
  { name: "SAP Consultation & Advisory", href: "/services/sap-consultation" },
  { name: "SAP Implementation", href: "/services/sap-implementation" },
  { name: "SAP HANA Migration", href: "/services/sap-hana-migration" },
  { name: "SAP HANA Upgrade", href: "/services/sap-hana-upgrade" },
  { name: "SAP Integration Services", href: "/services/sap-integration" },
  { name: "SAP Application Management & Support (AMS)", href: "/services/sap-ams" },
  { name: "SAP System Audit & Optimization", href: "/services/sap-audit" },
  { name: "Oracle E-Business Suite (EBS) Services", href: "/services/oracle-ebs" },
  { name: "Oracle Fusion Cloud Applications", href: "/services/oracle-fusion" },
  { name: "Salesforce", href: "/services/salesforce" },
  { name: "Digital Transformation", href: "/services/digital-transformation" },
  { name: "Artificial Intelligence (AI)", href: "/services/artificial-intelligence" },
  { name: "Robotic Process Automation (RPA)", href: "/services/rpa" },
  { name: "Software Development", href: "/services/custom-software-development" },
  { name: "IT Staff Augmentation", href: "/services/team-augmentation" },
]

const solutions = [
  { name: "S/4 HANA RISE – Private & Public Cloud", href: "/solutions/rise-with-sap" },
  { name: "SAP Analytics Cloud (SAC)", href: "/solutions/sap-analytics-cloud" },
  { name: "SAP HCM & SuccessFactors", href: "/solutions/hcm-successfactors" },
  { name: "SAP Fiori", href: "/solutions/sap-fiori" },
]

const products = [
  { name: "CRM", href: "/products/crm" },
  { name: "ERP", href: "/products/erp" },
  { name: "HRMS", href: "/products/hrms" },
  { name: "Dealer Management System", href: "/products/dealer-management-system" },
  { name: "Order Management System (OMS)", href: "/products/order-management-system" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-heading font-bold text-primary">Infocure</div>
            <div className="text-sm text-muted-foreground hidden sm:block font-heading">Technologies</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Dropdown title="Services" items={services} />
            <Dropdown title="Solutions" items={solutions} />
            <Dropdown title="Products" items={products} />
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium font-heading hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium font-heading hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
              <div className="fixed right-0 top-0 h-full w-[300px] bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold font-heading">Navigation</h2>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium font-heading mb-2">Services</h4>
                    <div className="space-y-1">
                      {services.slice(0, 5).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-2 py-1 text-sm hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium font-heading mb-2">Products</h4>
                    <div className="space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block px-2 py-1 text-sm hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link 
                    href="/about" 
                    className="block px-2 py-1 text-sm hover:bg-gray-50 font-heading"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-2 py-1 text-sm hover:bg-gray-50 font-heading"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button asChild className="mt-4 w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}