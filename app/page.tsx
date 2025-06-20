"use client"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { useActiveSection } from "@/hooks/useActiveSection"
import { scrollToSection } from "@/utils/scroll"

export default function Portfolio() {
  const activeSection = useActiveSection()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}
