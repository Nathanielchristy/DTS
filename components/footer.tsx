"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "@/components/ui/motion"
import { useInView } from "react-intersection-observer"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer ref={ref} className="w-full border-t py-12 bg-secondary/5 relative overflow-hidden">
      {/* Decorative elements inspired by logo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 0.05, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[86.6px] border-b-primary/20 border-r-[50px] border-r-transparent -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Dates Technical Service Logo" width={40} height={40} className="w-auto h-8" />
            <h3 className="text-lg font-bold">Dates Technical</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Transforming spaces and elevating experiences with bespoke designs that leave a lasting impression.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Signage
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Bespoke Joinery
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Exhibition Stands
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Corporate Branding
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">Sectors</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Exhibitions
              </Link>
            </li>
            <li>
              <Link href="#sectors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Corporate
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold">Contact</h3>
          <ul className="space-y-2">
            <li className="text-sm text-muted-foreground">United Arab Emirates</li>
            <li className="text-sm text-muted-foreground">info@datestechnical.com</li>
            <li className="text-sm text-muted-foreground">+971 50 123 4567</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="container mt-8 pt-8 border-t"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 Dates Technical Service. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
