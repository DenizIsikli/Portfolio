export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  extra?: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc Computer Science and Engineering",
    institution: "Technical University of Denmark",
    period: "2024 - Present",
  },
  {
    degree: "Bachelor of Engineering, Software Technology",
    institution: "Technical University of Denmark",
    period: "2021 - 2024",
  },
];
