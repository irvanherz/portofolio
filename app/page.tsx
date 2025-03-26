"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { AboutSection } from "./sections/about"
import { AwardsSection } from "./sections/awards"
import { CertificationsSection } from "./sections/certifications"
import { ContactSection } from "./sections/contact"
import { EducationSection } from "./sections/education"
import { ExperienceSection } from "./sections/experience"
import { Footer } from "./sections/footer"
import { Header } from "./sections/header"
import { HobbiesSection } from "./sections/hobbies"
import { ProjectsSection } from "./sections/projects"
import { SkillsSection } from "./sections/skills"

export default function Home() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Initialize animations
    const tl = gsap.timeline()

    // Header animation
    tl.from(".header-content", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Hero section animation
    tl.from(
      ".hero-content",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      "-=0.4",
    )

    // Profile image animation
    tl.from(
      ".profile-image",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.6",
    )

    // Initialize scroll animations
    gsap.utils.toArray(".experience-item").forEach((item:any, i) => {
      gsap.from(item, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none play none", // Changed to replay on scroll back
        },
        delay: i * 0.1,
      })
    })

    // Unified card animations
    gsap.utils.toArray(".card-item").forEach((card:any, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none play none", // Changed to replay on scroll back
        },
        delay: i * 0.1,
      })

      // Add hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          duration: 0.3,
        })
      })
    })

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="font-mono">
      <Header />

      <main className="container mx-auto px-4 py-12 md:px-6 md:py-24 space-y-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <AwardsSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

