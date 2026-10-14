import { FC } from "react";
import { motion } from "framer-motion";
import { education } from "../data/education";
import DTULogo from "../assets/DTU.png";

const Education: FC = () => {
    return (
        <section id="education" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
                        Education
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={`${edu.degree}-${edu.period}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
                        >
                            <div className="group relative rounded-xl border border-border/50 bg-card/50 p-6 shadow-lg transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-xl bg-foreground/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative z-10 flex items-center gap-5">
                                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border border-border/50 bg-foreground/5 p-2">
                                        <img
                                            src={DTULogo}
                                            alt="DTU logo"
                                            className="max-h-full max-w-full object-contain grayscale opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <div>
                                                <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                            </div>
                                            <span className="self-start sm:self-auto text-xs text-muted-foreground bg-foreground/5 px-3 py-1 rounded-full border border-border/50">
                                                {edu.period}
                                            </span>
                                        </div>

                                        {edu.extra && <p className="mt-3 text-sm text-muted-foreground">{edu.extra}</p>}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
