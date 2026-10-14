import { FC } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { ReactTyped } from "react-typed";
import Portrait from "../assets/Bronny.png";
import { profile } from "../data/profile";
import { motion } from "framer-motion";

const socials = [
    { href: `mailto:${profile.social.email}`, label: "Email", icon: FaEnvelope, external: false },
    { href: profile.social.linkedin, label: "LinkedIn", icon: FaLinkedin, external: true },
    { href: profile.social.github, label: "GitHub", icon: FaGithub, external: true },
    { href: profile.social.codeforces, label: "Codeforces", icon: SiCodeforces, external: true },
    { href: profile.social.leetcode, label: "LeetCode", icon: SiLeetcode, external: true },
];

const About: FC = () => {
    return (
        <section id="about" className="container py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl px-4 mx-auto">
                {/* Text */}
                <motion.div
                    className="w-full max-w-xl mx-auto md:mx-0"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                        <ReactTyped
                            strings={profile.titles}
                            typeSpeed={50}
                            backSpeed={50}
                            backDelay={2000}
                            loop
                            className="typed-text bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                        />
                    </h3>
                    {profile.bio.map((p, i) => (
                        <p key={i} className="mt-3 text-muted-foreground text-lg leading-relaxed">
                            {p}
                        </p>
                    ))}
                </motion.div>

                {/* Portrait and socials */}
                <motion.div
                    className="w-full flex flex-col items-center gap-4"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.06 }}
                >
                    <div className="relative group">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-foreground rounded-lg blur-lg opacity-10 transition-opacity duration-300 group-hover:opacity-20" />

                        <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border/50 bg-card/50 shadow-lg transition-shadow duration-200 group-hover:shadow-xl">
                            <img
                                src={profile.image || Portrait}
                                alt="Bobby"
                                className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xl">
                        {socials.map(({ href, label, icon: Icon, external }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                className="p-2 rounded-lg bg-foreground/5 border border-border/50 transition-[transform,border-color,background-color] duration-200 ease-out hover:scale-110 hover:border-foreground/40 hover:bg-foreground/10 active:scale-95"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
