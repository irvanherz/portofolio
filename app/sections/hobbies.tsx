"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Element } from "react-scroll"
const hobbies = [
  {
    title: "Tech & Coding",
    items: [
      "Working on open-source projects",
      "Building side projects",
      "DIY electronics (Arduino, Raspberry Pi, etc.)",
      "Trying out new programming languages",
    ],
  },
  {
    title: "Other Activities",
    items: [
      "Hiking and camping",
      "Going for jogs and walks",
      "Playing chess with friends",
      "Fishing by the lake",
    ],
  },
]

export function HobbiesSection() {
  return (
    <Element name="hobbies" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="HOBBIES"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} title={hobby.title} items={hobby.items} />
          ))}
        </div>
      </AnimatedSection>
    </Element>
  )
}


interface HobbyCardProps {
  title: string
  items: string[]
}

export function HobbyCard({ title, items }: HobbyCardProps) {
  return (
    <div className="card-item overflow-hidden space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
