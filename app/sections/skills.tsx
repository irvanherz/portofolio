"use client"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { Element } from "react-scroll"

const skillsData = {
  frontend: {
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Styled Components",
      "Redux",
      "GraphQL",
    ],
    expertise: [
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "React Ecosystem", level: 90 },
      { name: "UI/UX Implementation", level: 85 },
    ],
  },
  backend: {
    skills: [
      "Node.js",
      "C",
      "C++",
      "C#",
      "PHP",
      "Go",
      "x86 Assembly",
      "NestJS",
      "Express",
      "ASP.NET",
      "MySQL",
      "PostgreSQL",
      "MS SQL",
      "DynamoDB",
      "MongoDB",
      "Redis",
      "REST API",
      "GraphQL",
    ],
    expertise: [
      { name: "Node.js Backend", level: 85 },
      { name: ".NET Frameworks", level: 85 },
      { name: "API Development", level: 95 },
    ],
  },
  devops: {
    skills: [
      "Git",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Linux",
    ],
    expertise: [
      { name: "Cloud Services (AWS/Azure)", level: 80 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Containerization", level: 75 },
    ],
  },
  tools: {
    skills: [
      "VS Code",
      "Vim",
      "Nano",
      "Figma",
      "Postman",
      "Jest",
      "Webpack",
      "npm/pnpm/yarn",
    ],
    expertise: [
      { name: "Development Environment", level: 90 },
      { name: "Testing Frameworks", level: 80 },
      { name: "Project Management", level: 85 },
    ],
  },
}

export function SkillsSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
 
  useEffect(() => {
    if (!api) return
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleSetIndex = (i) => {
    if (!api) return
    api.scrollTo(i)
  }
  return (
    <Element name="skills" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="SKILLS"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2">
            {Object.entries(skillsData).map(([category], index) => (
              <CarouselItem key={category} className="pl-2 basis-1/4">
                <button className={cn("block cursor-pointer w-full p-4 border rounded-md text-center font-black capitalize", index === current ? "border-2 border-primary" : "")} onClick={() => handleSetIndex(index)}>
                  {category}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi} 
        >
          <CarouselContent>
            {Object.entries(skillsData).map(([category, data]) => (
              <CarouselItem key={category} >
                <div className="p-4 border rounded-md mt-4 min-h-[200px]">
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="px-2.5 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium">Core Expertise</h3>
                    <div className="space-y-3">
                      {data.expertise.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AnimatedSection>
    </Element>
  )
}
