"use client"

import { AnimatedText } from "@/components/animated-text"
import { CursorBlink } from "@/components/cursor-blink"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { Element } from "react-scroll"

export function AboutSection() {
  return (
    <Element name="about" className="pt-16 -mt-16">
      <section className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block border px-3 py-1 text-sm rounded-full hero-content">Available for work</div>
          <AnimatedText
            text="Muhammad Irvan Hermawan"
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl hero-content"
            as="h1"
            typewriter={true}
          />
          <div className="flex items-center hero-content justify-center md:justify-start">
            <AnimatedText
              text="Software Engineer"
              className="text-xl text-muted-foreground font-bold"
              as="h2"
              delay={1.2}
              typewriter={true}
            />
            <CursorBlink className="ml-1 mt-1" />
          </div>
          <p className="max-w-[600px] text-muted-foreground hero-content">
            I&apos;m a technology enthusiast with a deep-rooted passion for staying at the forefront of cutting-edge innovations. I specialize in crafting innovative solutions that leverage the latest advancements to power high-performance web applications.
          </p>
          <div className="flex gap-4 hero-content justify-center md:justify-start">
            <Button asChild size="icon" variant="outline" className="card-item">
              <a href="https://github.com/irvanherz" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild size="icon" variant="outline" className="card-item">
              <a href="https://linkedin.com/in/irvan-herz" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button asChild size="icon" variant="outline" className="card-item">
              <a href="mailto:irvan.herz@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="aspect-square overflow-hidden rounded-4xl max-w-[300px] mx-auto profile-image">
          <img src="/photo.jpg" alt="Muhammad Irvan Hermawan" className="object-cover w-full h-full" />
        </div>
      </section>
    </Element>
  )
}
