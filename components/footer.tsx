import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 Dates Technical Service. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
