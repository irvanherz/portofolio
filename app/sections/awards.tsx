"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Element } from "react-scroll"

const awardsData = [
  {
    title: "Top 50 Warriors in Code Run Frontend Warriors",
    issuer: "Issued by Algobash · Dec 2022",
    description:
      "Code Run is the largest open programming competition in Indonesia. Open to all Indonesian coding enthusiasts without age, profession, or education restrictions. This competition period was participated by 1600 contestants from various regions in Indonesia.",
  },
  {
    title: "Finalist in National Agrarian Essay Competition",
    issuer: "Issued by National Land College · Jun 2016",
    associatedWith: "Associated with University Of Brawijaya",
    description:
      "The National Agrarian Essay Competition is a contribution from all elements of the nation, especially the youth, particularly students, to respond to problems in achieving harmony in spatial planning in efforts to address agrarian/land issues and land and space utilization problems. This activity serves as a platform to gather various thoughts in the field of agrarian studies from students of various majors across universities in Indonesia.",
  },
]

export function AwardsSection() {
  return (
    <Element name="awards" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="HONORS & AWARDS"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="space-y-6">
          {awardsData.map((item, index) => (
            <AwardItem
              key={index}
              title={item.title}
              issuer={item.issuer}
              associatedWith={item.associatedWith}
              description={item.description}
            />
          ))}
        </div>
      </AnimatedSection>
    </Element>
  )
}

// Award Item Component
function AwardItem({ title, issuer, associatedWith, description }) {
  return (
    <div className="award-item">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-lg font-extrabold">{title}</h3>
        <div className="text-sm text-muted-foreground">{issuer}</div>
      </div>
      {associatedWith && (
        <div className="text-base font-medium">{associatedWith}</div>
      )}
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}
