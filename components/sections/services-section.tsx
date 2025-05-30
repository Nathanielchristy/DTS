"use client"

import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" ref={ref} className="w-full py-20 md:py-32 overflow-hidden relative">
      {/* Simplified geometric shape */}
      <div className="absolute -left-20 top-1/4 w-0 h-0 border-l-[100px] border-l-transparent border-b-[173.2px] border-b-secondary/5 border-r-[100px] border-r-transparent -rotate-45"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We deliver high-quality, bespoke solutions tailored to your unique needs.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
          >
            {/* Decorative triangle - static instead of animated */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rotate-45"></div>

            <div className="space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-7 w-7 text-primary"
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
              {["Exhibition signage", "Corporate branding", "Wayfinding solutions", "Digital displays"].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
            <div>
              <Button
                variant="outline"
                className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="#contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
          >
            {/* Decorative triangle - static instead of animated */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rotate-45"></div>

            <div className="space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-7 w-7 text-primary"
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
              {["Exhibition stands", "Custom furniture", "Display units", "Architectural elements"].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
            <div>
              <Button
                variant="outline"
                className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="#contact">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
