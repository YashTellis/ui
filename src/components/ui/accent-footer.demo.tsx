import { AccentFooter } from "@/components/ui/accent-footer"

export default function AccentFooterDemo() {
  return (
    <div className="flex flex-col gap-4">
      <AccentFooter>Default AccentFooter</AccentFooter>
      <AccentFooter variant="secondary">Secondary AccentFooter</AccentFooter>
      <AccentFooter variant="outline">Outline AccentFooter</AccentFooter>
      <AccentFooter variant="ghost">Ghost AccentFooter</AccentFooter>
      <AccentFooter size="sm">Small AccentFooter</AccentFooter>
      <AccentFooter size="lg">Large AccentFooter</AccentFooter>
    </div>
  )
}