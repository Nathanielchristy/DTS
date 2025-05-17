import Image from "next/image"

export function SectorsSection() {
  return (
    <section id="sectors" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sectors We Serve</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specializing in transforming spaces across various industries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <div className="h-60 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Event signage and structures"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Events</h3>
              <p className="mt-2 text-muted-foreground">
                Temporary structures, signage, and displays that create memorable experiences for event attendees.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <div className="h-60 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Exhibition booth and displays"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Exhibitions</h3>
              <p className="mt-2 text-muted-foreground">
                Eye-catching exhibition stands and displays designed to attract attention and showcase your brand.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <div className="h-60 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Corporate office signage and furniture"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Corporate</h3>
              <p className="mt-2 text-muted-foreground">
                Professional signage and joinery solutions that enhance your corporate environment and brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
