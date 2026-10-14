import { FC } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";

type Project = (typeof projects)[number];

const VISIBLE_COUNT = 9;

const button =
    "inline-flex items-center justify-center gap-2 rounded-md border border-border/50 bg-foreground/5 text-foreground transition-[transform,border-color,background-color] duration-200 ease-out hover:scale-105 hover:border-foreground/40 hover:bg-foreground/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const CloseButton: FC = () => (
    <Dialog.Close asChild>
        <button
            className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/50 transition-[transform,background-color] duration-200 ease-out hover:scale-110 hover:bg-muted/50 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close dialog"
        >
            ×
        </button>
    </Dialog.Close>
);

const ProjectLinks: FC<{ project: Project; className?: string }> = ({ project, className = "px-3 py-2 text-sm" }) => (
    <>
        {project.links.code && (
            <a href={project.links.code} className={`${button} ${className}`} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View Code
            </a>
        )}
        {project.links.demo && (
            <a href={project.links.demo} className={`${button} ${className}`} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
            </a>
        )}
    </>
);

const ProjectDetails: FC<{ project: Project; triggerClassName: string }> = ({ project, triggerClassName }) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className={`${button} ${triggerClassName}`} aria-label={`View details for ${project.title}`}>
                Details
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="z-50 fixed inset-0 bg-black/60 backdrop-blur-sm" />
            <Dialog.Content className="z-50 fixed left-1/2 top-1/2 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/50 bg-card/95 p-6 shadow-2xl focus:outline-none">
                <Dialog.Title className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {project.title}
                </Dialog.Title>

                <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {project.bullets.map((b, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut", delay: i * 0.04 }}
                        >
                            {b}
                        </motion.li>
                    ))}
                </ul>

                <div className="mt-6 flex gap-3">
                    <ProjectLinks project={project} />
                </div>

                <CloseButton />
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

const Projects: FC = () => {
    const visible = projects.slice(0, VISIBLE_COUNT);
    const more = projects.slice(VISIBLE_COUNT);

    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            <div className="container">
                {/* Title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Projects
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {visible.map((proj, idx) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: (idx % 3) * 0.06 }}
                        >
                            <div className="group relative flex h-full flex-col rounded-xl border border-border/50 bg-card/50 p-6 shadow-lg transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-xl bg-foreground/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative z-10 flex flex-1 flex-col">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                            {proj.title}
                                        </h3>
                                        <ProjectDetails project={proj} triggerClassName="h-8 px-3 text-xs" />
                                    </div>

                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                        {proj.bullets.slice(0, 2).map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>

                                    {proj.tags && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {proj.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="inline-flex items-center rounded-md border border-border/50 px-2 py-1 text-[11px] text-muted-foreground bg-gradient-to-r from-muted/30 to-muted/50"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex gap-3 mt-auto pt-4">
                                        <ProjectLinks project={proj} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* More projects */}
                {more.length > 0 && (
                    <div className="flex justify-center mt-10">
                        <Dialog.Root>
                            <Dialog.Trigger asChild>
                                <button className={`${button} mt-4 h-10 px-4 text-sm`} aria-label="View more projects">
                                    <FaExternalLinkAlt /> View More Projects
                                </button>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className="z-50 fixed inset-0 bg-black/60 backdrop-blur-sm" />
                                <Dialog.Content className="z-50 fixed left-1/2 top-1/2 w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/50 bg-card/95 p-6 shadow-2xl focus:outline-none">
                                    <Dialog.Title className="text-lg font-semibold text-center">
                                        Additional Projects
                                    </Dialog.Title>

                                    <div className="mt-6 max-h-[65vh] overflow-y-auto p-1">
                                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
                                            {more.map((proj) => (
                                                <div
                                                    key={proj.title}
                                                    className="w-full max-w-sm rounded-lg border border-border/50 p-4 text-center"
                                                >
                                                    <h3 className="text-sm font-semibold">{proj.title}</h3>
                                                    <div className="mt-4 flex gap-2">
                                                        {proj.links.code && (
                                                            <a
                                                                href={proj.links.code}
                                                                className={`${button} h-10 flex-1 px-3 text-sm`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FaGithub /> View Code
                                                            </a>
                                                        )}
                                                        <ProjectDetails
                                                            project={proj}
                                                            triggerClassName="h-10 flex-1 px-3 text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <CloseButton />
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
