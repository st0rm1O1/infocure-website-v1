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
    <Card className="h-full corporate-card corporate-card-hover group">
      <CardHeader>
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-4 bg-red-100 group-hover:bg-red-200 transition-all duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-red-500" />
          </div>
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-3 text-sm text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-3 font-bold">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}