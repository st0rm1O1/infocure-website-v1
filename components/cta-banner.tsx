import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTABannerProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
  variant?: "default" | "dark"
}

export function CTABanner({ title, description, buttonText, buttonHref, variant = "default" }: CTABannerProps) {
  return (
    <section className={`py-16 ${variant === "dark" ? "bg-secondary text-secondary-foreground" : "bg-muted"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-heading">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            {description}
          </p>
        )}
        <Button
          size="lg"
          asChild
          className="font-heading transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}
