import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Based in the UAE, our team of skilled craftsmen and designers works closely with clients to deliver
                innovative, durable, and functional designs tailored to their unique needs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To help brands stand out, guide audiences, and create memorable environments with precision, creativity,
                and reliability.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#contact">Work With Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Dates Technical Service team working on a custom joinery project"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
