export type ExperienceItem = {
  title: string
  company: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: "SWE Student Job - Software Development",
    company: "Artelia, Søborg/Valby",
    period: "2025 - Present",
    bullets: [
      "Worked on a transportation modeling system used to support data-driven decision-making for public infrastructure investments and transit planning.",
      "Developed automation tools using the Bentley SDK and .NET Core to streamline workflows and task execution within ProjectWise environments.",
    ],
  },
  {
    title: "SWE Internship - CAD Software Development",
    company: "Artelia, Søborg",
    period: "2024 - 2025",
    bullets: [
      "Implemented a CAD quality assurance pipeline that streamlines engineer workflows by automating standard compliance checks, significantly reducing turnaround time and increasing reliability of deliverables.",
      "Developed automation tools using the Bentley SDK and .NET Core to streamline workflows and task execution within ProjectWise environments.",
      "Created file crawling system for data extraction and SQL integration.",
    ],
  },
]
