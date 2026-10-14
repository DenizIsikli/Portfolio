import { FC } from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

type Skill = {
    name: string;
    icon: string;
};

type SkillCategory = {
    title: string;
    items: Skill[];
};

const Skills: FC = () => {
    const categories = skills as SkillCategory[];

    return (
        <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
                        Technical Skills
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="relative rounded-xl border border-border/50 bg-card/50 p-6 shadow-lg transition-shadow duration-200 ease-out hover:shadow-xl"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: (index % 2) * 0.06 }}
                        >
                            <h3 className="text-lg font-semibold mb-6 relative pb-3">
                                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                    {category.title}
                                </span>
                                <motion.div
                                    className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-gradient-to-r from-foreground to-transparent"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                                />
                            </h3>

                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group relative transition-transform duration-200 ease-out hover:scale-110 active:scale-95"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="relative">
                                                {/* Glow */}
                                                <div className="absolute inset-0 rounded-xl bg-foreground/10 blur-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                                                <div className="relative h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-card to-muted/50 border border-border/50 transition-[border-color,box-shadow] duration-200 group-hover:border-foreground/40 group-hover:shadow-lg">
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="max-h-8 max-w-8 transition-transform duration-200 ease-out group-hover:scale-110"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>

                                            <span className="mt-2 text-xs text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
