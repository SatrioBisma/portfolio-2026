"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "./section-heading"

const experiences = [
  {
    period: "Jul 2020 — Des 2022",
    role: "Supervisor",
    company: "Dirtykicks",
    description:
      "Leading a team of professionals to ensure operational excellence and customer satisfaction. Responsible for strategic planning, performance management, and process optimization to drive measurable results.",
    tags: ["Leadership", "Strategy", "Team Management"],
    image: "/work-supervisor.jpg",
  },
  {
    period: "Feb 2024 — Mar 2024",
    role: "Quality Assurance Internship",
    company: "Diskominfo Kota Semarang",
    description:
      "As a Quality Assurance specialist, I oversee IT governance and risk management for Semarang's government and educational portals. I provide strategic input for IT investments to ensure every system is secure, reliable, and perfectly aligned with project standards and public service goals.",
    tags: ["Accuracy", "Problem Solving", "CRM"],
    image: "/work-qa.jpg",
  },
  {
    period: "Mar 2024 — Jul 2024",
    role: "Fullstack Developer Internship",
    company: "Center of Excellent UDINUS",
    description:
      "As a Full-Stack Developer and System Analyst, I specialize in building end-to-end solutions using Node.js, React, and Express. I manage databases with PostgreSQL, handle VPS deployment, and contribute to IT master planning to ensure every technical solution is perfectly aligned with strategic business goals.",
    tags: ["Frontend", "Backend", "Database Administrator","API"],
    image: "/work-coe.jpg",
  },
  {
    period: "May 2025 — Present",
    role: "Customer Service",
    company: "PT Bank Central Asia Tbk",
    description:
      "Delivered exceptional customer experiences by resolving inquiries efficiently and building lasting client relationships. Recognized for communication skills and consistent achievement of performance targets.",
    tags: ["Communication", "Problem Solving", "CRM"],
    image: "/work-cs.jpg",
  },
]

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" })

  return (
    <div
      ref={ref}
      className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px"
    >
      <div
        className="w-full bg-accent/50 transition-all duration-1000 ease-out"
        style={{ height: isInView ? "100%" : "0%" }}
      />
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Experience" title="Where I've worked" />

        <div className="relative mt-16">
          <TimelineLine />

          {/* Experience items */}
          <div className="flex flex-col gap-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col gap-8 pl-12 md:flex-row md:items-center md:gap-16 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-accent bg-background md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2" />

                {/* Text content */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}
                >
                  <span className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm font-light text-accent">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs font-light text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div
                    className={`relative aspect-square w-full overflow-hidden rounded-xl border border-border/50 ${
                      i % 2 === 0 ? "md:ml-16" : "md:mr-16"
                    }`}
                  >
                    <div className="absolute inset-0 bg-secondary" />
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={`${exp.role} at ${exp.company}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
