"use client"

import { useEffect, useState } from "react"

interface CursorBlinkProps {
  className?: string
}

export function CursorBlink({ className = "" }: CursorBlinkProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`inline-block w-[2px] h-[1em] bg-primary ${visible ? "opacity-100" : "opacity-0"} transition-opacity ${className}`}
    ></span>
  )
}

