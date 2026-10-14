import { motion } from "framer-motion";
import { useCodingStats } from "../hooks/useCodingStats";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const CodingProfiles = () => {
    const { codeforce, cfLastUpdated, leetcode, lcLastUpdated } = useCodingStats();
    const profiles = [
        {
            name: "Codeforces",
            solved: codeforce,
            updated: cfLastUpdated,
            link: "https://codeforces.com/profile/Berxwedan",
            icon: SiCodeforces,
        },
        {
            name: "LeetCode",
            solved: leetcode?.solved ?? null,
            updated: lcLastUpdated,
            link: "https://leetcode.com/u/DenizIsikli/",
            icon: SiLeetcode,
        },
    ];

    return (
        <section id="coding-profiles" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            <div className="container">
                {/* Title */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Coding Profiles
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
                    {profiles.map((p, idx) => (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.08 }}
                        >
                            <div className="group relative h-full rounded-xl border border-border/50 bg-card/50 p-6 shadow-lg transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">
                                {/* Glow */}
                                <div className="absolute inset-0 rounded-xl bg-foreground/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative z-10">
                                    {/* Top row: title + icon */}
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                                            {p.name}
                                        </h3>

                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${p.name} profile`}
                                            className="p-2 rounded-lg bg-foreground/5 border border-border/50 inline-flex items-center justify-center text-2xl transition-[transform,border-color,background-color] duration-200 ease-out hover:scale-110 hover:border-foreground/40 hover:bg-foreground/10 active:scale-95"
                                        >
                                            <p.icon className="text-2xl" />
                                        </a>
                                    </div>

                                    {/* Stats */}
                                    <p className="mt-4 text-lg">Problems Solved: {p.solved ?? "Loading..."}</p>

                                    {/* Last updated */}
                                    {p.updated && (
                                        <p className="text-sm text-muted-foreground mt-2">Last Updated: {p.updated}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
