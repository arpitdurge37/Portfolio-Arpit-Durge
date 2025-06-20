import { GraduationCap } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/data/portfolio"

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <GraduationCap className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-slate-800 mb-2">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg text-slate-600">{edu.institution}</CardDescription>
                  </div>
                  <div className="mt-2 md:mt-0 text-right space-y-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {edu.year}
                    </Badge>
                    <br />
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
