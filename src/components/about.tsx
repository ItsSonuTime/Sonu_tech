import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Lightbulb, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8 mb-16 md:mb-24">
            <div className="inline-block rounded-xl bg-slate-100 px-4 py-2 text-base md:text-lg text-slate-600 font-medium">
              About Me
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
              Who I Am
            </h2>
            <p className="max-w-4xl mx-auto text-xl sm:text-2xl md:text-3xl text-slate-600 leading-relaxed">
            Hi, I'm   <span className="font-semibold text-slate-800">Sonu</span> a passionate and  dedicated <span className="font-semibold text-slate-800">MERN stack developer</span> with expertise
              in building robust web applications. With a strong foundation in{" "}
              <span className="font-semibold text-slate-800">MongoDB, Express.js, React, and Node.js</span>, I create
              scalable and efficient solutions for modern web challenges.
              
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <Card className="border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="">
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*sdJ9XQg9k84CdL0xGwc-sg.png" alt="" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Clean Code</h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  I write clean, maintainable code following best practices and design patterns for scalable
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="">
              <img src="https://www.opensourceforu.com/wp-content/uploads/2019/01/Responsive-Web-Design-main-image.jpg" alt="" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Responsive Design</h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Creating applications that work flawlessly across all devices and screen sizes with modern UI/UX.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm08B9nADU--n70gq34A1jcPEXc5bq7EYEng&s" alt="" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Problem Solver</h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  I enjoy tackling complex problems and finding elegant, efficient solutions using the MERN stack.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="">
                <img src="https://www.shutterstock.com/image-photo/panorama-shot-frontend-developer-team-600nw-2294268357.jpg" alt="" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Team Player</h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Collaborative developer who thrives in team environments and agile development workflows.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg md:text-xl font-semibold h-auto rounded-xl hover:border-slate-400 transition-all duration-300"
            >
              Learn More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
