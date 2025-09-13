"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown, X } from "lucide-react"

const servicesItems = [
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
  { name: "Team Augmentation", href: "/services/team-augmentation" },
]

const solutionsItems = [
  { name: "S/4 HANA RISE – Private & Public Cloud", href: "/solutions/rise-with-sap" },
  { name: "SAP Analytics Cloud (SAC)", href: "/solutions/sap-analytics-cloud" },
  { name: "SAP HCM & SuccessFactors", href: "/solutions/hcm-successfactors" },
  { name: "SAP Fiori", href: "/solutions/sap-fiori" },
]

const productsItems = [
  { name: "CRM", href: "/products/crm" },
  { name: "ERP", href: "/products/erp" },
  { name: "HRMS", href: "/products/hrms" },
  { name: "Dealer Management System", href: "/products/dealer-management-system" },
  { name: "Order Management System (OMS)", href: "/products/order-management-system" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-heading font-bold text-gray-900">
              Infocure
            </div>
            <div className="text-sm text-gray-600 hidden sm:block font-medium">
              Technologies
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-500 transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-500 transition-colors">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {solutionsItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-red-500 transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {productsItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button asChild className="btn-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Services</h4>
                <div className="space-y-2 pl-4">
                  {servicesItems.slice(0, 5).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-600 hover:text-red-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Solutions</h4>
                <div className="space-y-2 pl-4">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-600 hover:text-red-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Products</h4>
                <div className="space-y-2 pl-4">
                  {productsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-sm text-gray-600 hover:text-red-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/about"
                className="block text-sm font-medium text-gray-700 hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium text-gray-700 hover:text-red-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="btn-primary w-full mt-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}