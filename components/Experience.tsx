import { Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Briefcase className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">My professional journey and career highlights</p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-slate-800 mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg text-slate-600">{exp.company}</CardDescription>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {exp.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>• {responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
