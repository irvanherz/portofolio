"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Element } from "react-scroll"

// Certification data
const certifications = [
  {
    title: "MongoDB Data Modelling",
    issuer: "MongoDB University",
    date: "Mar 2021 - Today",
    credentialId: "bcf17c1e-d7ac-4ed2-85e9-fdc5b0a6f60a",
    link: "https://university.mongodb.com/"
  },
  {
    title: "Alibaba Cloud Certified Developer",
    issuer: "Alibaba Cloud",
    date: "Issued Oct 2023 · Expires Oct 2025",
    credentialId: "ACCD0119700100001591",
    link: "https://www.alibabacloud.com/certification"
  }
]

export function CertificationsSection() {
  return (
    <Element name="certifications" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="CERTIFICATIONS"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              credentialId={cert.credentialId}
              link={cert.link}
            />
          ))}
        </div>
      </AnimatedSection>
    </Element>
  )
}

// Certification Card Component
function CertificationCard({ title, issuer, date, credentialId, link }) {
  return (
    <Card className="card-item overflow-hidden rounded-none border-none">
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">View certification</span>
          </a>
        </div>
        <div className="space-y-1">
          <div className="text-sm text-muted-foreground">Issuer: {issuer}</div>
          <div className="text-sm text-muted-foreground">Date: {date}</div>
          <div className="text-sm text-muted-foreground">Credential ID: {credentialId}</div>
        </div>
      </CardContent>
    </Card>
  )
}
