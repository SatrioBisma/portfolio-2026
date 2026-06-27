import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectEasiaProps {
  slug?: string
}

export function ProjectEasia({ slug }: ProjectEasiaProps) {
  return (
    <motion.a
      key="easia"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      href={`/project/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card transition-all hover:border-border hover:shadow-lg hover:shadow-accent/5"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <Image
          src="/logoEasia.png"
          alt="E-Asia Green House Gases"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            E-Asia Green House Gases
          </h3>
          <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
          A comprehensive web monitoring dashboard that visualizes real-time IoT data to track and analyze air quality and greenhouse gas levels.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "Express.js", "PostgreSql"].map((tag) => (
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
  )
}