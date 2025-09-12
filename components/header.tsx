"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-heading font-bold text-primary">Infocure</div>
            <div className="text-sm text-muted-foreground hidden sm:block font-heading">Technologies</div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {services.map((service) => (
                      <NavigationMenuLink key={service.name} asChild>
                        <Link
                          href={service.href}
                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:shadow-md hover:-translate-y-0.5"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {solutions.map((solution) => (
                      <NavigationMenuLink key={solution.name} asChild>
                        <Link
                          href={solution.href}
                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:shadow-md hover:-translate-y-0.5"
                        >
                          <div className="text-sm font-medium leading-none">{solution.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-3 p-4">
                    {products.map((product) => (
                      <NavigationMenuLink key={product.name} asChild>
                        <Link
                          href={product.href}
                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:shadow-md hover:-translate-y-0.5"
                        >
                          <div className="text-sm font-medium leading-none">{product.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center bg-background px-4 py-2 text-sm font-medium font-heading transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center bg-background px-4 py-2 text-sm font-medium font-heading transition-all duration-300 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex">
            <Button asChild className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="space-y-4">
              <Link href="/about" className="block py-2 text-sm font-medium font-heading">
                About
              </Link>
              <Link href="/contact" className="block py-2 text-sm font-medium font-heading">
                Contact
              </Link>
              <Button asChild className="w-full font-heading">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
