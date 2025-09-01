import { ZincButton } from "@/registry/new-york-v4/ui/zinc-button"

export default function ZincButtonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <ZincButton>Default</ZincButton>
      <ZincButton variant="secondary">Secondary</ZincButton>
      <ZincButton variant="outline">Outline</ZincButton>
      <ZincButton variant="ghost">Ghost</ZincButton>
      <ZincButton size="sm">Small</ZincButton>
      <ZincButton size="lg">Large</ZincButton>
    </div>
  )
}