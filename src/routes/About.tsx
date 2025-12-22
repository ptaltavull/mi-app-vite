import { useTranslation } from 'react-i18next'

interface TechStackItem {
  name: string
  description: string
  documentation: string
}

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {t('aboutPage.title')}
        </h1>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(
            t('aboutPage.techStack', { returnObjects: true }) as TechStackItem[]
          ).map((tech, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 text-lg font-semibold">{tech.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                {tech.description}
              </p>
              <a
                href={tech.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Ver documentación
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
