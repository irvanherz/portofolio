"use client"

import { AnimatedSection } from "@/components/animated-section";
import { AnimatedText } from "@/components/animated-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Element } from "react-scroll";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. ${message}`;
    const whatsappUrl = `https://wa.me/6285156818651?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Element name="contact" className="pt-16 -mt-16">
      <AnimatedSection className="space-y-8">
        <AnimatedText
          text="CONTACT"
          className="text-3xl font-black tracking-tighter pb-2"
          as="h2"
          typewriter={true}
        />
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2 transition-all hover:border-primary">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Get in touch</h3>
              <p className="text-muted-foreground">
                I&apos;m currently available for freelance work and full-time positions. If you have a project that needs
                some creative coding, let&apos;s talk!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:irvan.herz@gmail.com" className="hover:text-primary transition-colors">
                    irvan.herz@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a
                    href="https://wa.me/6285156818651"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +6285156818651
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a
                    href="https://linkedin.com/in/irvan-herz"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/irvan-herz
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a
                    href="https://github.com/irvanherz"
                    className="hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/irvanherz
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <div className="text-xl font-bold">Let&apos;s work together</div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </Element>
  );
}