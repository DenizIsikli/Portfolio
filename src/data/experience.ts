export type ExperienceItem = {
  title: string
  company: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: "SWE Student Job - CAD Software Development",
    company: "Artelia, Søborg",
    period: "2025 - Present",
    bullets: [
      "Develop .NET applications, automate workflows, and integrate SQL-based solutions.",
      "Work with Bentley SDK and batch processing to improve engineering project efficiency.",
    ],
  },
  {
    title: "SWE Internship - CAD Software Development",
    company: "Artelia, Søborg",
    period: "2024 - 2025",
    bullets: [
      "Built automated QA system for DGN files using Bentley SDK and batch processing.",
      "Developed .NET Core DLLs to automate tasks in ProjectWise.",
      "Created file crawling system for data extraction and SQL integration.",
    ],
  },
]
