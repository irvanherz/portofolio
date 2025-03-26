"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { FileText, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-scroll"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { to: "about", label: "ABOUT" },
    { to: "experience", label: "EXPERIENCE" },
    { to: "projects", label: "PROJECTS" },
    { to: "skills", label: "SKILLS" },
    { to: "education", label: "EDUCATION" },
    { to: "certifications", label: "CERTS" },
    { to: "hobbies", label: "HOBBIES" },
    { to: "contact", label: "CONTACT" },
  ]

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6 header-content">
        <div className="font-bold tracking-tighter">IVN.MY.ID</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80} // Adjust based on header height
              duration={500}
              className="text-sm hover:text-primary transition-colors cursor-pointer"
              activeClass="text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Resume Button - Always visible on mobile */}
          <Button asChild size="icon" variant="outline" className="md:hidden">
            <a href="/resume.pdf" aria-label="Download Resume">
              <FileText className="h-4 w-4" />
            </a>
          </Button>

          <ThemeToggle />

          {/* Desktop Resume Button */}
          <Button variant="outline" size="sm" className="hidden md:flex">
            <a href="/resume.pdf" className="flex items-center gap-2">
              RESUME.PDF
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm py-2 hover:text-primary transition-colors cursor-pointer"
                activeClass="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

