    import Portrait from '../assets/Bronny.png'

export type Profile = {
  name: string
  titles: string[]
  bio: string[]
  image: string
  social: {
    email: string
    linkedin: string
    github: string
    x?: string
  }
}

export const profile: Profile = {
  name: "Deniz Isikli",
  titles: [
    "Software Engineering Student",
    "Fullstack Developer",
    "Backend-Focused Developer",
  ],
  bio: [
    "Software Engineering student based in Copenhagen, building efficient and scalable systems.",
    "Experience with C++, .NET, SQL, and automation workflows in real-world engineering projects.",
    "Strong focus on backend development, problem solving, and clean system design.",
  ],
  image: Portrait,
  social: {
    email: "denizisikli7@gmail.com",
    linkedin: "https://www.linkedin.com/in/deniz-isikli/",
    github: "https://github.com/DenizIsikli",
  },
}
