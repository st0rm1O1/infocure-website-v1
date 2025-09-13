import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface CTABannerProps {
  title: string
  description?: string
  buttonText: string
  buttonHref: string
  variant?: "default" | "dark"
}

export function CTABanner({ title, description, buttonText, buttonHref, variant = "dark" }: CTABannerProps) {
  return (
    <section className={`relative py-24 overflow-hidden ${variant === "dark" ? "bg-gray-900 text-white" : "bg-gray-50"}`}>
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&h=600&fit=crop&crop=center"
          alt="CTA background"
          width={1400}
          height={600}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            {description}
          </p>
        )}
        <Button
          asChild
          className={variant === "dark" ? "bg-red-500 hover:bg-red-600 text-white font-medium px-12 py-4 text-lg" : "bg-red-500 hover:bg-red-600 text-white px-12 py-4 text-lg"}
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}