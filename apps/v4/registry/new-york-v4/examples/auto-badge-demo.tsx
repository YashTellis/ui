import { AutoBadge } from "@/registry/new-york-v4/ui/auto-badge"

export default function AutoBadgeDemo() {
  return (
    <div className="flex items-center space-x-4">
      <AutoBadge>Default</AutoBadge>
      <AutoBadge variant="secondary">Secondary</AutoBadge>
      <AutoBadge variant="outline">Outline</AutoBadge>
      <AutoBadge variant="ghost">Ghost</AutoBadge>
      <AutoBadge size="sm">Small</AutoBadge>
      <AutoBadge size="lg">Large</AutoBadge>
    </div>
  )
}