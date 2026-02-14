"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Plus, Minus } from "lucide-react" // Tambah icon untuk tombol
import Image from "next/image"
import { SectionHeading } from "./section-heading"

const projects = [
  {
    title: "Rewash",
    description: "A mobile-first laundry service locator and booking platform designed to connect users with nearby laundry providers seamlessly.",
    image: "/logoRewash.png",
    link: "#",
    tags: ["Java", "Android Studio"],
    category: "mobile",
  },
  {
    title: "Periku",
    description: "An integrated IoT mobile dashboard developed to provide real-time monitoring and data insights for precision agriculture management.",
    image: "/logoPeriku.png",
    link: "#",
    tags: ["Java", "Express.js"],
    category: "mobile",
  },
  {
    title: "Dirtykicks",
    description: "A specialized web-based ordering system tailored for Dirtykicks shoe cleaning services to streamline customer transactions and requests.",
    image: "/logoDirty.png",
    link: "#",
    tags: ["html", "css"],
    category: "web",
  },
  {
    title: "Nusa Indah App",
    description: "A digital marketplace platform that bridges workshops and spare parts sales to facilitate buyers' transactions.",
    image: "/logonusaindah.png",
    link: "#",
    tags: ["Java", "php"],
    category: "mobile",
  },
  {
    title: "E-Asia Green House Gases",
    description: "A comprehensive web monitoring dashboard that visualizes real-time IoT data to track and analyze air quality and greenhouse gas levels.",
    image: "/logoEasia.png",
    link: "#",
    tags: ["React", "Express.js", "PostgreSql"],
    category: "web",
  },
]

const filters = ["all", "web", "mobile"]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showAll, setShowAll] = useState(false) // State untuk Show More

  // 1. Filter berdasarkan kategori dulu
  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  )

  // 2. Tentukan berapa banyak yang tampil (3 jika tidak showAll)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Projects" title="Selected work" />

        {/* Filter Buttons */}
        <div className="mt-10 flex justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter)
                  setShowAll(false) // Reset ke limit 3 saat ganti filter
                }}
                className={`relative px-6 py-2 text-sm transition-all duration-300 capitalize outline-none
                  ${isActive 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground font-light"
                  }`}
              >
                <span className="relative z-10">{filter}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full border border-border bg-secondary/50 shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.a
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-border hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-secondary" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs font-light text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Less Button */}
        {filteredProjects.length > 3 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-light text-muted-foreground transition-all hover:border-accent hover:text-accent"
            >
              {showAll ? (
                <>
                  <Minus className="h-4 w-4" /> Show Less
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" /> Show More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
