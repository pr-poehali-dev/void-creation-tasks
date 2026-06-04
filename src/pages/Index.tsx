import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Services } from "@/components/Services"
import { Directions } from "@/components/Directions"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Directions />
      <Contact />
      <Footer />
    </main>
  )
}