import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Programming website",
      description:
        "I am currently learning web development with a focus on building modern, responsive, and user-friendly websites and applications. My journey includes mastering the fundamentals of HTML, CSS, and JavaScript, and gradually moving into more advanced topics like React, Node.js, and full-stack development.",
      tags: ["HTML", "CSS", "Javascript", "React", ],
      image: "https://media.licdn.com/dms/image/v2/D5612AQE8CnLA3JYugQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721169884883?e=2147483647&v=beta&t=xbqKctcyC6Ewq7tAfl2sDZBChDtiZpOValLkP_n_4PQ",
    },
    {
      title: "Weather App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      tags: ["HTML", "CSS", "Javascript", "React", ],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png",
    },
    {
      title: "Online chat Application",
      description: "A secure healthcare portal for patient management with appointment scheduling and medical records.",
      tags: ["HTML", "CSS", "Javascript", "React"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWWJp-4WF9-BXE09YUtqEdfXrOoBlkf8kzg&s",
    },
    {
      title: "Gaming web for client",
      description: "A property listing platform with advanced search, filtering, and user authentication.",
      tags: ["HTML", "CSS", "Javascript", "React",],
      image: "https://themewagon.com/wp-content/uploads/2020/07/Beko-1.png",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-600">Projects</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">My Recent Work</h2>
            <p className="max-w-[900px] text-slate-600 text-base sm:text-lg md:text-xl/relaxed mx-auto">
              Here are some of the projects I've worked on that showcase my skills and expertise.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="gap-1 border-slate-300 text-slate-700 hover:bg-slate-50">
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
