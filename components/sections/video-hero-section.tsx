"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { VideoPlayer } from "@/components/ui/video-player"
import { videos } from "@/config/videos"
import { motion, useScroll, useTransform } from "framer-motion"

export function VideoHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Parallax Effect */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <VideoPlayer
          src={videos.hero.src}
          poster={videos.hero.poster}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full"
          overlayColor="bg-secondary/60"
          showControls={false}
        />
      </motion.div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Large triangle */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: isLoaded ? 0.15 : 0, scale: isLoaded ? 1 : 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
          className="absolute -top-20 -right-20 w-96 h-96"
        >
          <div className="w-full h-full border-[40px] border-primary/20 rounded-3xl transform rotate-45"></div>
        </motion.div>

        {/* Floating triangles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, x: -50 + i * 30 }}
            animate={{
              opacity: isLoaded ? 0.3 : 0,
              y: isLoaded ? 0 : 100,
              x: isLoaded ? -20 + i * 40 : -50 + i * 30,
            }}
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: i * 0.5,
            }}
            className="absolute bottom-40 left-1/4"
          >
            <div
              className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25.98px] border-b-primary border-r-[15px] border-r-transparent"
              style={{ opacity: 0.5 - i * 0.08 }}
            ></div>
          </motion.div>
        ))}

        {/* Circle elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isLoaded ? 0.2 : 0, scale: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-1/4 left-1/5 w-32 h-32 rounded-full border-4 border-primary/30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isLoaded ? 0.15 : 0, scale: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-1/4 right-1/5 w-24 h-24 rounded-full bg-primary/10"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center items-start px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block mb-4 py-1 px-3 bg-primary/20 backdrop-blur-sm rounded-full"
          >
            <span className="text-white font-medium">Crafting Excellence Since 2010</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              className="block"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Custom Signage &
            </motion.span>
            <motion.span
              className="block text-primary relative"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Joinery Solutions
              <motion.div
                className="absolute -bottom-3 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 1.2, delay: 1.3 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-[700px] text-xl md:text-2xl text-gray-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Transforming spaces and elevating experiences with bespoke designs that leave a lasting impression across
            the UAE.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-20 sm:mb-0" // Added bottom margin on mobile
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              <Link href="#contact">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Moved to bottom center with better positioning */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => {
              const servicesSection = document.getElementById("services")
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            >
              <ChevronDown className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
