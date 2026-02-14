"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const organizations = [
  {
    period: "Mar 2024 — Sep 2024",
    role: "Leader of Program Pembinaan Mahasiswa Wirausaha",
    org: "Kemendikbudristek",
    description:
      "Spearheading strategic initiatives and community engagement programs. Coordinating with cross-functional teams to drive organizational goals.",
  },
  {
    period: "Jul 2023 — Nov 2023",
    role: "Member of Mobile Dev Program Kreativitas Mahasiswa",
    org: "Kemendikbudristek",
    description:
    "I designed and built ReWash, an innovative Android Studio-based app to help people find nearby laundry services. This project embodies a creative idea to address social needs through the development of efficient mobile technology.",
  },
  {
    period: "Jun 2023 — Nov 2023",
    role: "Leader of Program Penguatan Kapasitas Ormawa",
    org: "Kemendikbudristek",
    description:
      "Spearheading strategic initiatives and community engagement programs. Coordinating with cross-functional teams to drive organizational goals.",
  },
  {
    period: "Jul 2023 — Jul 2024",
    role: "General Treasury",
    org: "Himpunan Mahasiswa Sistem Informasi UDINUS",
    description:
      "As the General Treasurer of HMSISFO Dian Nuswantoro University, I am responsible for managing financial circulation and overseeing budget effectiveness across each of the association's work programs. In addition to focusing on financial management, I also play an active role in creating new funding innovations and am responsible for human resource development within the organization.",
  },
  {
    period: "Aug 2022 — Jul 2023",
    role: "Member of entrepreneurship division",
    org: "Himpunan Mahasiswa Sistem Informasi UDINUS",
    description:
      "Participated in hackathons and tech workshops. Collaborated with peers to As a member of the entrepreneurship division of HMSISFO, I am fully responsible for the management of the Harmless clothing brand, managing the production and marketing processes. During this period, I successfully released two exclusive items: a canvas tote bag and a futsal jersey aimed at Information Systems students at Dian Nuswantoro University. innovative solutions for real-world challenges.",
  },
]

export function Organization() {
  return (
    <section id="organization" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Organizations" title="Community involvement" />

        <div className="relative mt-16 ml-4 border-l border-border/50 pl-8 md:ml-0 md:border-l-0 md:pl-0">
          <div className="flex flex-col gap-12 md:gap-0">
            {organizations.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:flex md:items-start md:gap-16 md:border-b md:border-border/30 md:py-10"
              >
                {/* Timeline dot - mobile only */}
                <div className="absolute -left-[2.55rem] top-1 h-2 w-2 rounded-full bg-accent md:hidden" />

                {/* Period */}
                <div className="mb-2 flex-shrink-0 md:mb-0 md:w-48 md:text-right">
                  <span className="text-xs font-light uppercase tracking-[0.15em] text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                {/* Dot - desktop */}
                <div className="relative hidden flex-shrink-0 md:flex">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-light text-accent">
                    {item.org}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
