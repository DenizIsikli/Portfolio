import Portrait from "../assets/Bronny.png";

export type Profile = {
  name: string;
  titles: string[];
  bio: string[];
  image: string;
  social: {
    email: string;
    linkedin: string;
    github: string;
    codeforces: string;
    leetcode: string;
  };
};

export const profile: Profile = {
  name: "Deniz Isikli",
  titles: [
    "Software Engineering Student",
    "Intern at Artelia A/S",
    "DSA Enthusiast",
  ],
  bio: [
    "MSc Computer Science and Engineering student at the Technical University of Denmark.",
    "Intern at Artelia A/S, contributing to software solutions in the construction industry.",
    "DSA enthusiast with a passion for competitive programming and algorithms.",
  ],
  image: Portrait,
  social: {
    email: "denizisikli7@gmail.com",
    linkedin: "https://www.linkedin.com/in/deniz-isikli/",
    github: "https://github.com/DenizIsikli",
    codeforces: "https://codeforces.com/profile/Berxwedan",
    leetcode: "https://leetcode.com/u/DenizIsikli/",
  },
};
