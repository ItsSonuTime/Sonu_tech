import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["Angular", "React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT Authentication"],
    },
    {
      category: "Database",
      items: ["MongoDB", "Mongoose ODM", "SQL", "Redis", "Database Design"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Heroku", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-slate-200 px-3 py-1 text-sm text-slate-700">Skills</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Technical Expertise
            </h2>
            <p className="max-w-[900px] text-slate-600 text-base sm:text-lg md:text-xl/relaxed mx-auto">
              My technical toolkit includes a wide range of technologies focused on the MEAN stack and beyond.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-slate-900">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block rounded-lg bg-slate-800 px-4 py-2 text-base font-medium text-white">
            MEAN Stack Specialist
          </div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            With deep expertise in MongoDB, Express.js, Angular, and Node.js, I build full-stack applications that are
            scalable, performant, and maintainable.
          </p>
        </div>
      </div>
    </section>
  )
}
