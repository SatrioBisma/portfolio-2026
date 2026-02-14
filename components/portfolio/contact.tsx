"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import emailjs from "@emailjs/browser"
import { SectionHeading } from "./section-heading"

export function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_mkhsg7p",
        "template_8msd8he",
        form.current,
        "tzZ75NhSktCIzY90L"
      )
      .then(
        (result) => {
          alert("Pesan berhasil dikirim!")
          form.current?.reset()
        },
        (error) => {
          alert("Gagal mengirim pesan: " + error.text)
        }
      )
  }

  return (
    <section id="Contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Get in touch" title="Contact me" />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* SISI KIRI: INFO KONTAK */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Let's build <br /> 
                <span className="text-muted-foreground font-light">something great.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-muted-foreground">
              I am open to project collaborations, job opportunities, or simply discussing digital banking technology.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 border border-border">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-light text-muted-foreground">satriobisma1@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 border border-border">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-light text-muted-foreground">Semarang, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: FORMULIR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative space-y-8 rounded-2xl border border-border/50 bg-card/30 p-8 shadow-sm backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Nama Lengkap</label>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full bg-transparent border-b border-border py-2 text-sm outline-none transition-all focus:border-accent placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Alamat Email</label>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-transparent border-b border-border py-2 text-sm outline-none transition-all focus:border-accent placeholder:text-muted-foreground/30"
                    />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Pesan Anda</label>
                  <textarea
                    name="message"
                    placeholder="Halo, saya ingin mendiskusikan tentang..."
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-2 text-sm outline-none transition-all focus:border-accent resize-none placeholder:text-muted-foreground/30"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90 active:scale-95"
              >
                Kirim Pesan
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}