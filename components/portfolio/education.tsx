"use client"

import { motion } from "framer-motion"
import { Globe, FileText, Rocket, Users, Milestone } from "lucide-react"
import { SectionHeading } from "./section-heading"

const highLights = [
  {
    icon: Globe,
    title: "International Research Collaboration",
    subtitle: "E-Asia Programme",
    description: "Contributed to a multilateral research initiative across Asian countries focused on Greenhouse Gas (GHG) mitigation and environmental sustainability.",
    accent: "border-blue-500/20 bg-blue-500/5"
  },
  {
    icon: FileText,
    title: "Published Researcher",
    subtitle: "Sinta 3 Indexed Journal",
    description: "Successfully authored and published a scientific journal focused on Information Systems, recognized under the Sinta 3 national accreditation.",
    accent: "border-emerald-500/20 bg-emerald-500/5"
  }
]

const leaderships = [
  {
    icon: Rocket,
    title: "Government Program Leader",
    description: "Appointed as Team Leader for multiple Ministry of Education (Kemdikbud) initiatives, driving digital innovation projects."
  },
  {
    icon: Users,
    title: "Organizational Leadership",
    description: "Held strategic executive roles in campus organizations, managing large-scale operations and human resources."
  }
]

export function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Education & Achievements" title="Universitas Dian Nuswantoro" />
        
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Kolom Kiri & Tengah: Prestasi Utama (Lebih Besar) */}
          <div className="lg:col-span-2 grid gap-6">
            {highLights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border p-8 transition-all hover:shadow-2xl ${item.accent}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background border border-border/50 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-accent/80">{item.subtitle}</span>
                    <h3 className="mt-1 text-2xl font-bold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-base font-light leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Kolom Kanan: Leadership & Org (Stack Vertikal) */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/50 bg-card/30 p-8 flex-1">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-tighter text-muted-foreground mb-8">
                <Milestone className="h-4 w-4" /> Leadership Journey
              </h4>
              <div className="space-y-10">
                {leaderships.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 1, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l border-border/50"
                  >
                    <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-accent" />
                    <h5 className="text-lg font-semibold text-foreground">{item.title}</h5>
                    <p className="mt-2 text-sm font-light text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Box Kecil IPK */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
              <p className="text-sm font-light text-muted-foreground">Final GPA</p>
              <p className="text-3xl font-bold text-foreground">3.79 / 4.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}