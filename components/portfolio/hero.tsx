"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/satrio_bisma_/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/satriobisma/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/6281222551231", label: "Whatsapp" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 md:flex-row md:justify-between">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 text-center md:text-left"
        >
          <p className="mb-3 text-sm font-light uppercase tracking-[0.2em] text-accent">
            Welcome
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Bridging Technology &
            <br />
            <span className="font-light text-muted-foreground">Digital Banking Operations</span>
          </h1>
          <p className="mt-6 max-w-md text-base font-light leading-relaxed text-muted-foreground md:text-lg">
          An Information Systems professional dedicated to optimizing digital financial services. Experienced in navigating complex banking regulations and technical provisioning to deliver seamless customer experiences.
          </p>

          {/* Social buttons */}
          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"             
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0"
        >
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border/50 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-secondary" />
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border/50 pt-2"
        >
          <div className="h-1.5 w-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
