import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We deliver high-quality, bespoke solutions tailored to your unique needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Custom Signage</h3>
                <p className="text-muted-foreground">
                  Eye-catching, durable signage solutions designed to make your brand stand out and guide your audience.
                </p>
              </div>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Exhibition signage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Corporate branding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Wayfinding solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Digital displays</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <Link href="#contact">Learn More</Link>
            </Button>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 21h18" />
                  <path d="M9 8h1" />
                  <path d="M9 12h1" />
                  <path d="M9 16h1" />
                  <path d="M14 8h1" />
                  <path d="M14 12h1" />
                  <path d="M14 16h1" />
                  <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Bespoke Joinery</h3>
                <p className="text-muted-foreground">
                  Precision-crafted joinery solutions that combine functionality, durability, and aesthetic appeal.
                </p>
              </div>
            </div>
            <ul className="grid gap-2 py-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Exhibition stands</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Custom furniture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Display units</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Architectural elements</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <Link href="#contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
