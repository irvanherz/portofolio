"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Element } from "react-scroll"

const educationData = [
  {
    degree: "Fullstack JavaScript",
    institution: "Pijar Camp (formerly Arkademy)",
    period: "2019 - 2020",
    description: "Completed an intensive program focused on fullstack JavaScript development, covering both frontend and backend technologies. Gained hands-on experience in building scalable web applications using modern frameworks and tools.",
  },
  {
    degree: "Bachelor of Fisheries Science",
    institution: "Brawijaya University",
    period: "2013 - 2019",
    description: "My academic focus centered around fish processing and products, where I gained in-depth insights into the techniques, technologies, and best practices for transforming raw fish into high-quality and value-added products. This specialization allowed me to explore various aspects of fish processing, from quality control to product development.",
  },
  {
    degree: "Senior High School",
    institution: "SMAN 1 Ponggok",
    period: "2010 - 2013",
    description: "During my time at SMAN 1 Ponggok, I had the privilege of receiving a well-rounded education that laid the foundation for my personal and academic growth. This institution provided an enriching environment where I not only excelled academically but also developed essential life skills and values.",
  },
]

export function EducationSection() {
  return (
    <Element name="education" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="EDUCATIONS"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>
    </Element>
  )
}

// Education Item Component
function EducationItem({ degree, institution, period, description }) {
  return (
    <div className="experience-item">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-lg font-extrabold">{degree}</h3>
        <div className="text-sm text-muted-foreground">{period}</div>
      </div>
      <div className="text-base font-medium">{institution}</div>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}
