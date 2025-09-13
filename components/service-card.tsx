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
    <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white group">
      <CardHeader>
        <div className="flex items-center space-x-6 mb-6">
          <div className="p-6 bg-red-100 group-hover:bg-red-200 transition-all duration-300 group-hover:scale-110">
            <Icon className="h-10 w-10 text-red-500" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="text-lg leading-relaxed">{description}</CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-4 text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-4 font-bold text-lg">•</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  )
}