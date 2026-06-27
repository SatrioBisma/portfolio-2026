import { notFound } from "next/navigation"
import { projects, getProjectBySlug } from "@/data/projects"
import { SectionHeading } from "@/components/portfolio/section-heading"
import Image from "next/image"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen px-6 py-28">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <a
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Kembali ke Projects
        </a>

        {/* Hero Image */}
        <div className="relative h-64 w-full overflow-hidden rounded-xl mb-8">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
          <p className="text-lg text-muted-foreground mt-1">{project.subtitle}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="rounded-full border border-border px-3 py-1 text-xs">
              {project.status}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs">
              {project.year}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs">
              {project.role}
            </span>
          </div>
        </div>

        {/* Description */}
        <SectionHeading label="Overview" title="Tentang Project" />
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {project.fullDescription}
        </p>

        {/* Tech Stack */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-border px-3 py-1 text-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Fitur</h2>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature.name} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-muted-foreground">
                  <strong>{feature.name}</strong> - {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Info */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Client</p>
            <p className="font-medium">{project.client}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Team Size</p>
            <p className="font-medium">{project.teamSize}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="font-medium">{project.duration}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">Platform</p>
            <p className="font-medium">{project.platform}</p>
          </div>
        </div>

        {/* Links */}
        {(project.liveDemo || project.github) && (
          <div className="mt-12 flex gap-4">
            {project.liveDemo && project.liveDemo !== "#" && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                Live Demo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-secondary transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  )
}