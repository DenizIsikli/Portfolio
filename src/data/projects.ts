export type Project = {
    title: string
    bullets: string[]
    links: {
        code: string | null
        demo: string | null
    }
    tags: string[]
}

export const projects: Project[] = [
    {
        title: 'Dotfiles',
        bullets: [
            'Cross-platform dotfiles for Linux, WSL, and Windows with automated setup scripts.',
            'Custom Neovim configuration with plugins, keymaps, and modular setup.',
            'Terminal and shell environment tailored with Zsh and modern tooling.',
            'Tmux integration for efficient terminal workflows.',
        ],
        links: {
            code: 'https://github.com/DenizIsikli/Dotfiles',
            demo: null,
        },
        tags: [
            'Neovim',
            'Zsh',
            'Tmux',
            'Git',
            'Linux',
            'WSL',
            'Automation'
        ],
    },
    {
        title: 'Portfolio',
        bullets: [
            'Personal portfolio website showcasing projects, skills, and experience.',
            'Built with TypeScript and modern frontend tooling.',
            'Responsive design with clean UI and smooth navigation.',
            'Deployed as a live site for public access and professional presence.',
        ],
        links: {
            code: 'https://github.com/DenizIsikli/Portfolio',
            demo: 'https://denizisikli.netlify.app/',
        },
        tags: [
            'TypeScript',
            'Frontend',
            'Portfolio',
            'Web Development'
        ],
    },
    {
        title: 'Codeforces Solutions',
        bullets: [
            'Collection of competitive programming solutions from Codeforces.',
            'Problems solved and implemented in C++.',
            'Covers a range of algorithms and data structures.',
            'Organized by contest and problem for easy reference.',
        ],
        links: {
            code: 'https://github.com/DenizIsikli/Codeforces',
            demo: null,
        },
        tags: [
            'C++',
            'Algorithms',
            'Data Structures',
            'Competitive Programming'
        ],
    },
    {
        title: 'LeetCode C++ Solutions',
        bullets: [
            'Collection of LeetCode problem solutions implemented in C++.',
            'Focus on data structures and algorithms across common patterns.',
            'Problems organized by topic and difficulty for structured practice.',
            'Used for consistent problem-solving and interview preparation.',
        ],
        links: {
            code: 'https://github.com/DenizIsikli/LeetCode-CPP',
            demo: null,
        },
        tags: [
            'C++',
            'Algorithms',
            'Data Structures',
            'Competitive Programming'
        ],
    },
    {
        title: 'Advent of Code',
        bullets: [
            'Solutions to Advent of Code challenges across multiple years.',
            'Focus on algorithmic problem-solving and optimization.',
            'Implemented primarily in C++ with clean and reusable approaches.',
            'Covers a wide range of puzzles and computational techniques.',
        ],
        links: {
            code: 'https://github.com/DenizIsikli/AdventOfCode-AoC',
            demo: null,
        },
        tags: [
            'C++',
            'Algorithms',
            'Problem Solving',
            'Advent of Code'
        ],
    },
    {
        title: 'Discord Bot',
        bullets: [
            'Custom Discord bot integrating multiple third-party APIs.',
            'Includes self-built APIs for extended functionality.',
            'Handles commands, events, and dynamic user interactions.',
            'Designed for scalability and modular feature expansion.',
        ],
        links: {
            code: 'https://github.com/DenizIsikli/DcQueryBot',
            demo: null,
        },
        tags: [
            'Python',
            'Discord Bot API',
            'APIs',
            'Flask'
        ],
    },
]
