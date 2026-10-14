import { FC } from "react";
import { experience } from "../data/experience";
import { motion } from "framer-motion";

const Experience: FC = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <motion.div
                        className="absolute left-4 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-foreground via-muted-foreground to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={`${exp.title}-${exp.period}`}
                                className="relative pl-12"
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    className="absolute left-2 top-0 w-4 h-4 bg-foreground rounded-full border-2 border-background shadow-lg"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.06 + 0.1 }}
                                />

                                {/* Card */}
                                <div className="rounded-xl border border-border/50 bg-card/50 p-6 shadow-lg transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                                {exp.title}
                                            </h3>
                                            <p className="text-sm text-primary font-medium">{exp.company}</p>
                                        </div>
                                        <span className="self-start sm:self-auto text-xs text-muted-foreground bg-gradient-to-r from-muted/30 to-muted/50 px-3 py-1 rounded-full border border-border/50">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet, bulletIndex) => (
                                            <li
                                                key={bulletIndex}
                                                className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                                            >
                                                <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
