"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  label: string
  title: string
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="text-xs font-light uppercase tracking-[0.25em] text-accent">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </motion.div>
  )
}
