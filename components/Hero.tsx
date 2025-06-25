import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin, User } from "lucide-react"
import { personalInfo } from "@/data/portfolio"

export default function Hero() {
  return (
    <section id="about" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <User size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">{personalInfo.name}</h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">{personalInfo.title}</p>
          <div className="text-lg text-slate-600  mx-auto mb-8 space-y-4 text-justify">
            {personalInfo.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/Arpit_Durge_Resume.pdf" download="Arpit_Durge_Resume.pdf">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Button variant="outline" className="bg-white text-slate-700 border-slate-300 hover:bg-slate-50">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href={personalInfo.social.github} className="text-slate-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.social.linkedin} className="text-slate-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
