import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-xl">Dates Technical Service</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#sectors" className="text-sm font-medium transition-colors hover:text-primary">
            Sectors
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <Button asChild>
          <Link href="#contact">Get a Quote</Link>
        </Button>
      </div>
    </header>
  )
}
