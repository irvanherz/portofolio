"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  typewriter?: boolean
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  as: Component = "div",
  typewriter = false,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)

    if (typewriter) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none play none", // Changed to replay on scroll back
        },
      })

      tl.to(textRef.current, {
        duration: text.length * 0.05,
        text: {
          value: text,
          delimiter: "",
        },
        ease: "none",
        delay,
      })
    } else {
      gsap.from(textRef.current, {
        y: 20,
        opacity: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none play none", // Changed to replay on scroll back
        },
      })
    }
  }, [text, delay, duration, typewriter])

  return (
    <Component ref={textRef} className={className}>
      {typewriter ? "" : text}
    </Component>
  )
}

