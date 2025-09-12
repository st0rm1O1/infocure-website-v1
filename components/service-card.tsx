import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features?: string[]
}

export function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border-2 hover:border-primary/20">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-lg font-heading">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}
