"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { SectionHeading } from "./section-heading"
import {
  ProjectRewash,
  ProjectPeriku,
  ProjectDirtykicks,
  ProjectNusaindah,
  ProjectEasia,
} from "@/components/project"

// Data project untuk filter dan mapping
const projectData = [
  { component: ProjectRewash, id: "rewash", category: "mobile", slug: "rewash" },
  { component: ProjectPeriku, id: "periku", category: "mobile", slug: "periku" },
  { component: ProjectDirtykicks, id: "dirtykicks", category: "web", slug: "dirtykicks" },
  { component: ProjectNusaindah, id: "nusaindah", category: "mobile", slug: "nusaindah" },
  { component: ProjectEasia, id: "easia", category: "web", slug: "e-asia-ghg" },
]

const filters = ["all", "web", "mobile"]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

  // 1. Filter berdasarkan kategori dulu
  const filteredProjects = projectData.filter(
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
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((projectItem) => {
            const { id, slug } = projectItem
            if (id === "rewash") return <ProjectRewash key={id} slug={slug} />
            if (id === "periku") return <ProjectPeriku key={id} slug={slug} />
            if (id === "dirtykicks") return <ProjectDirtykicks key={id} slug={slug} />
            if (id === "nusaindah") return <ProjectNusaindah key={id} slug={slug} />
            if (id === "easia") return <ProjectEasia key={id} slug={slug} />
            return null
          })}
        </div>

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
