"use client"

import Image from "next/image"
import { motion } from "@/components/ui/motion"
import { useInView } from "react-intersection-observer"

export function SectorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectors = [
    {
      title: "Events",
      description: "Temporary structures, signage, and displays that create memorable experiences for event attendees.",
      image: "/event.jpg?height=400&width=600",
    },
    {
      title: "Exhibitions",
      description: "Eye-catching exhibition stands and displays designed to attract attention and showcase your brand.",
      image: "/exibition.jpg?height=400&width=600",
    },
    {
      title: "Corporate",
      description:
        "Professional signage and joinery solutions that enhance your corporate environment and brand identity.",
      image: "/corporate.jpg?height=400&width=600",
    },
  ]

  return (
    <section id="sectors" ref={ref} className="w-full py-20 md:py-32 overflow-hidden relative">
      {/* Decorative elements inspired by logo */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 0.05, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-secondary"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sectors We Serve</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specializing in transforming spaces across various industries.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group relative overflow-hidden rounded-lg border bg-background shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={inView ? { scale: 1 } : { scale: 1.2 }}
                  transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
                  className="h-full w-full"
                >
                  <Image
                    src={sector.image || "/placeholder.svg"}
                    width={600}
                    height={400}
                    alt={`${sector.title} signage and structures`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Triangle accent inspired by logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="absolute top-4 right-4 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25.98px] border-b-primary border-r-[15px] border-r-transparent"
                />
              </div>
              <div className="p-6 relative">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  {sector.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  {sector.description}
                </motion.p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "30%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
