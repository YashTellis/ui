import { SimpleButton } from "@/registry/new-york-v4/ui/simple-button"

export default function SimpleButtonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <SimpleButton>Default</SimpleButton>
      <SimpleButton variant="secondary">Secondary</SimpleButton>
      <SimpleButton variant="outline">Outline</SimpleButton>
      <SimpleButton variant="ghost">Ghost</SimpleButton>
      <SimpleButton size="sm">Small</SimpleButton>
      <SimpleButton size="lg">Large</SimpleButton>
    </div>
  )
}