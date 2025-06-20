import type React from "react"
import { Code, Globe, Database, Terminal } from 'lucide-react'
import { skills } from "@/data/portfolio"

const getIcon = (iconValue: string | React.ReactNode) => {
  if (typeof iconValue === "string") {
    // Handle special icon cases
    switch (iconValue) {
      case "globe":
        return <Globe size={24} className="text-blue-600" />
      case "database":
        return <Database size={24} className="text-blue-600" />
      case "terminal":
        return <Terminal size={24} className="text-blue-600" />
      default:
        // Handle URL icons
        return (
          <img src={iconValue || "/placeholder.svg"}
            alt=""
            className="w-6 h-6 object-contain"
            crossOrigin="anonymous"
          />
        )
    }
  }
  return iconValue
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Code className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center space-x-3 bg-white border border-slate-200 rounded-lg px-4 py-3 hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">{getIcon(skill.icon)}</div>
              <span className="text-slate-700 font-medium text-sm group-hover:text-blue-600 transition-colors">
              {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}