"use client"

import type React from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
}

export function AnimatedSection({ children, className = "", delay = 0, stagger = 0.1 }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const childElements = childrenRef.current?.children

    if (section && childElements && childElements.length > 0) {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none play none", // Changed to replay on scroll back
        },
      })

      gsap.from(childElements, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger,
        delay: delay + 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none play none", // Changed to replay on scroll back
        },
      })
    }
  }, [delay, stagger])

  return (
    <div ref={sectionRef} className={className}>
      <div ref={childrenRef}>{children}</div>
    </div>
  )
}

