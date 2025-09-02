import { Menubar } from "@/registry/new-york-v4/ui/menubar"

export default function MenubarDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Menubar>Default</Menubar>
      <Menubar variant="secondary">Secondary</Menubar>
      <Menubar variant="outline">Outline</Menubar>
      <Menubar variant="ghost">Ghost</Menubar>
      <Menubar size="sm">Small</Menubar>
      <Menubar size="lg">Large</Menubar>
    </div>
  )
}