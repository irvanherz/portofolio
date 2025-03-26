"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Element } from "react-scroll"

const projects = [
  {
    title: "Lomba.asia",
    description: "A comprehensive platform where users could discover and participate in a wide range of contests, competitions, and challenges across various domains.",
    technologies: ["PHP", "MySQL", "UX Design"],
    link: "https://web.archive.org/web/20190408225616/http://lomba.asia/",
  },
  {
    title: "Gatotkaca Support Resistance Trendline",
    description: "A powerful MT5 indicator that simplifies the detection of support, resistance, and trendlines in the world of trading.",
    technologies: ["MQL5", "Trading Strategies"],
    link: "https://www.mql5.com/en/market/product/85204",
  },
  {
    title: "Literasiin",
    description: "A web-based platform designed as a creative haven for writers and readers, inspired by Wattpad.",
    technologies: ["NestJS", "React", "PostgreSQL"],
    link: "https://literasiin.com",
  },
  {
    title: "Sukalibur",
    description: "Trip marketplace that simplifies travel discovery and planning. Built with React, ASP.NET Core, and GraphQL. It leverages pgvector and SBERT for intelligent search and personalized recommendations.",
    technologies: ["React", "ASP.NET Core", "GraphQL", "pgvector", "SBERT"],
    link: "https://github.com/irvanherz/sukalibur",
  },
  {
    title: "use-awaitable-component",
    description: "React hook for awaiting component callback. Simplifies handling asynchronous interactions in React components.",
    technologies: ["React", "TypeScript", "Custom Hooks"],
    link: "https://github.com/irvanherz/use-awaitable-component",
  },
  {
    title: "Gourze",
    description: "A high-performance course marketplace backend written in Go, designed to empower educators and learners by providing a scalable and efficient infrastructure.",
    technologies: ["Go", "Gin", "GORM"],
    link: "https://github.com/irvanherz/gourze",
  },
]

export function ProjectsSection() {
  return (
    <Element name="projects" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="PROJECTS"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </AnimatedSection>
    </Element>
  )
}

// Project Card Component
function ProjectCard({ title, description, technologies, link }) {
  return (
    <Card className="card-item overflow-hidden rounded-none border-none">
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Visit project</span>
          </a>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
