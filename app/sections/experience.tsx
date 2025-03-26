"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { Element } from "react-scroll"

const experienceData = [
  {
    title: "Full-stack Developer",
    company: "PT Erasoft Teknologi Indonesia",
    period: "2023 February - Present",
    description:
      "As a Full Stack Developer, I contributed to the development of MasterOnline, an omnichannel marketplace. My work involved full-stack development using ASP.NET, leveraging AWS services, optimizing performance, and collaborating with cross-functional teams to deliver innovative solutions.",
    technologies: ["ASP.NET", "AWS", "JavaScript", "SQL", "C#"],
  },
  {
    title: "Front-end Developer",
    company: "PT Interskill Digital Edukasi",
    period: "2020 March - 2023 February",
    description:
      "As a Front-End Developer specializing in React at PT Interskill Digital Edukasi, I played a pivotal role in creating and enhancing user-friendly web applications that delivered exceptional user experiences. Key highlights include leveraging React.js expertise, collaborating with UX/UI designers, optimizing code quality, and ensuring responsive design.",
    technologies: ["React", "JavaScript", "Git", "HTML", "CSS"],
  },
]

export function ExperienceSection() {
  return (
    <Element name="experience" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="EXPERIENCE"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </AnimatedSection>
    </Element>
  )
}

// Experience Item Component
function ExperienceItem({ title, company, period, description, technologies }) {
  return (
    <div className="experience-item">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-lg font-extrabold">{title}</h3>
        <div className="text-sm text-muted-foreground">{period}</div>
      </div>
      <div className="text-base font-medium">{company}</div>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
