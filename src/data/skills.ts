export type Skill = {
    name: string;
    icon: string;
};

export type SkillCategory = {
    title: string;
    items: Skill[];
};

export const skills: SkillCategory[] = [
    {
        title: "Languages",
        items: [
            {
                name: "C++",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            },
            {
                name: "C",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            },
            {
                name: "C#",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
            },
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
                name: "Lua",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
            },
            {
                name: "Java",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
                name: "SQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
                name: "VBA",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualbasic/visualbasic-original.svg",
            },
            {
                name: "Bash",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
            },
            {
                name: "HTML/CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
        ],
    },
    {
        title: "Frameworks",
        items: [
            {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
            {
                name: ".NET Core",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
            },
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Flask",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            },
            {
                name: "Jupyter",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
            },
            {
                name: "Spring Boot",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            },
            {
                name: "REST API",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            },
            {
                name: "SOAP",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
            },
            {
                name: "CRUD",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
            {
                name: "Webservices",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
            },
            {
                name: "Quarkus",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",
            },
            {
                name: "RabbitMQ",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
            },
            {
                name: "JUnit",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg",
            },
            {
                name: "Pytest",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
            },
        ],
    },
    {
        title: "Tools",
        items: [
            {
                name: "Neovim",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg",
            },
            {
                name: "WSL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
            },
            {
                name: "GitHub Actions",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
            },
            {
                name: "JetBrains",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
            },
            {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            },
            {
                name: "Visual Studio",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
            },
        ],
    },
    {
        title: "Practices",
        items: [
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
                name: "Scrum",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
            },
            {
                name: "Jira",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
            },
            {
                name: "Agile",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg",
            },
        ],
    },
];
