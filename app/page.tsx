import { Header } from "@/components/header"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AboutSection } from "@/components/sections/about-section"
import { SectorsSection } from "@/components/sections/sectors-section"
import { VideoGallery } from "@/components/sections/video-gallery"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <VideoHeroSection />
        <ServicesSection />
        <AboutSection />
        <SectorsSection />
        <TestimonialsSection />
        <VideoGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
