export type Project = {
  title: string;
  bullets: string[];
  links: {
    code: string | null;
    demo: string | null;
  };
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Dotfiles",
    bullets: [
      "Cross-platform dotfiles for Linux, WSL, and Windows with automated setup scripts.",
      "Custom Neovim configuration with plugins, keymaps, and modular setup.",
      "Terminal and shell environment tailored with Zsh and modern tooling.",
      "Tmux integration for efficient terminal workflows.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/Dotfiles",
      demo: null,
    },
    tags: ["Neovim", "Zsh", "Tmux", "Git", "Linux", "WSL", "Automation"],
  },
  {
    title: "Portfolio",
    bullets: [
      "Personal portfolio website showcasing projects, skills, and experience.",
      "Built with TypeScript and modern frontend tooling.",
      "Responsive design with clean UI and smooth navigation.",
      "Deployed as a live site for public access and professional presence.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/Portfolio",
      demo: null,
    },
    tags: ["TypeScript", "Frontend", "Portfolio", "Web Development"],
  },
  {
    title: "Codeforces Solutions",
    bullets: [
      "Collection of competitive programming solutions from Codeforces.",
      "Problems solved and implemented in C++.",
      "Organized by rating, contest and upsolved contest problems for structured practice.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/Codeforces",
      demo: null,
    },
    tags: ["C++", "Algorithms", "Data Structures", "Competitive Programming"],
  },
  {
    title: "LeetCode C++ Solutions",
    bullets: [
      "Collection of LeetCode problem solutions implemented in C++.",
      "Problems solved and implemented in C++.",
      "Contains over 1000+ solutions across various difficulty levels and topics.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/LeetCode-CPP",
      demo: null,
    },
    tags: ["C++", "Algorithms", "Data Structures", "Competitive Programming"],
  },
  {
    title: "Advent of Code",
    bullets: [
      "Solutions to Advent of Code challenges across multiple years.",
      "Focus on algorithmic problem-solving and optimization.",
      "Implemented primarily in C++ with clean and reusable approaches.",
      "Covers a wide range of puzzles and computational techniques.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/AdventOfCode-AoC",
      demo: null,
    },
    tags: ["C++", "Algorithms", "Problem Solving", "Advent of Code"],
  },
  {
    title: "Discord Bot",
    bullets: [
      "Custom Discord bot integrating multiple third-party APIs.",
      "Includes self-built APIs for extended functionality.",
      "Handles commands, events, and dynamic user interactions.",
      "Designed for scalability and modular feature expansion.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/DcQueryBot",
      demo: null,
    },
    tags: ["Python", "Discord Bot API", "APIs", "Flask"],
  },
  {
    title: "02244 - Logic For Security",
    bullets: [
      "Course project for 02244 - Logic For Security at DTU.",
      "Designed and implemented my own protocol with OFMC tool.",
      "Focused on security properties and formal verification.",
      "Analyzed protocol design and potential vulnerabilities.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/02244-LogicForSecurity",
      demo: null,
    },
    tags: ["OFMC", "Protocol Design", "Formal Verification", "Security"],
  },
  {
    title: "02269 - Curriculum optimization PM",
    bullets: [
      "Course project for 02269 - Process Mining at DTU.",
      "Analyzed curriculum data to identify and explore patterns in student progression.",
      "Performed data processing, process discovery, performance analysis, and conformance checking.",
      "Provided insights and recommendations for curriculum optimization based on the analysis.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/02269-CurriculumOptimizationPM",
      demo: null,
    },
    tags: [
      "Process Mining",
      "Data Analysis",
      "Curriculum Optimization",
      "Python",
      "ProM",
      "PM4Py",
      "Disco",
    ],
  },
  {
    title: "02162 - Software Engineering 2",
    bullets: [
      "Course project for 02162 - Software Engineering 2 at DTU.",
      "Developed a fullstack application for Roborally.",
      "Used React for the frontend and Spring Boot for the backend.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/02162-SoftwareEngineering",
      demo: null,
    },
    tags: [
      "React",
      "Spring Boot",
      "Fullstack Development",
      "Software Engineering",
    ],
  },
  {
    title: "Lindenmayer System",
    bullets: [
      "Implemented a Lindenmayer System (L-System) in C++ and SDL2.",
      "Used for procedural generation of fractal patterns and plant-like structures.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/LindenmayerSystem/blob/main/LindenmayerSystem.cpp",
      demo: null,
    },
    tags: ["C++", "SDL2", "Lindenmayer System", "Procedural Generation"],
  },
  {
    title: "Brians Brain",
    bullets: [
      "Implemented Brian's Brain cellular automaton in C++ and SDL2.",
      "Simulates a simple model of excitable media with three states: on, off, and dying.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/BriansBrain",
      demo: null,
    },
    tags: ["C++", "SDL2", "Cellular Automaton", "Brian's Brain"],
  },
  {
    title: "Random Walk",
    bullets: [
      "Implemented a random walk simulation in C++ and SDL2.",
      "Visualizes the path of a random walker in a 2D grid environment.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/RandomWalk",
      demo: null,
    },
    tags: ["C++", "SDL2", "Random Walk", "Simulation"],
  },
  {
    title: "LeetCode Python Solutions",
    bullets: [
      "Collection of LeetCode problem solutions implemented in Python.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/LeetCode-Python",
      demo: null,
    },
    tags: [
      "Python",
      "Algorithms",
      "Data Structures",
      "Competitive Programming",
    ],
  },
  {
    title: "LeetCode Typescript Solutions",
    bullets: [
      "Collection of LeetCode problem solutions implemented in TypeScript.",
    ],
    links: {
      code: "https://github.com/DenizIsikli/LeetCode-JsTs",
      demo: null,
    },
    tags: [
      "TypeScript",
      "Algorithms",
      "Data Structures",
      "Competitive Programming",
    ],
  },
  {
    title: "LeetCode SQL Solutions",
    bullets: ["Collection of LeetCode problem solutions implemented in SQL."],
    links: {
      code: "https://github.com/DenizIsikli/LeetCode-Sql",
      demo: null,
    },
    tags: ["SQL", "Database", "Competitive Programming"],
  },
];
