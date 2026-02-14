"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="About" title="Get to know me" />

        <div className="mt-16 flex flex-col items-center gap-16 md:flex-row">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-base font-light leading-relaxed text-muted-foreground">
            I am an Information Systems graduate specializing in digital banking operations and IT governance. With technical expertise in application development and database management, I bring a unique blend of technical skill and operational precision to every project.
            </p>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            My professional journey has focused on optimizing digital banking operations, where I have honed my skills in handling online account opening processes, credit card verification, and resolving provisioning issues. I am deeply committed to ensuring all processes strictly adhere to banking regulatory standards while maintaining a seamless user experience.
            </p>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            I am passionate about the continuous transformation of digital banking and strive to leverage technology to improve process efficiency. I believe in the power of innovation and am eager to contribute my skills to develop impactful solutions that enhance the future of digital financial services.
            </p>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-shrink-0"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-border/50 md:h-80 md:w-80">
              <div className="absolute inset-0 bg-secondary" />
              <Image
                src="/about.jpg"
                alt="About me photo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
