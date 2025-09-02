import { PurpleButton } from "@/registry/new-york-v4/ui/purple-button"

export default function PurpleButtonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <PurpleButton>Default</PurpleButton>
      <PurpleButton variant="secondary">Secondary</PurpleButton>
      <PurpleButton variant="outline">Outline</PurpleButton>
      <PurpleButton variant="ghost">Ghost</PurpleButton>
      <PurpleButton size="sm">Small</PurpleButton>
      <PurpleButton size="lg">Large</PurpleButton>
    </div>
  )
}