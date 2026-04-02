import { motion } from "framer-motion";
import { useCodingStats } from "../hooks/useCodingStats";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const CodingProfiles = () => {
  const { codeforce, cfLastUpdated, leetcode, lcLastUpdated } =
    useCodingStats();
  const profiles = [
    {
      name: "Codeforces",
      solved: codeforce,
      updated: cfLastUpdated,
      color: "from-blue-500/10 to-purple-500/10",
      link: "https://codeforces.com/profile/Berxwedan",
      icon: SiCodeforces,
    },
    {
      name: "LeetCode",
      solved: leetcode?.solved ?? null,
      updated: lcLastUpdated,
      color: "from-orange-500/10 to-yellow-500/10",
      link: "https://leetcode.com/u/DenizIsikli/",
      icon: SiLeetcode,
    },
  ];

  return (
    <section
      id="coding-profiles"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Background glow (same style as Projects) */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Coding Profiles
          </h2>
        </motion.div>

        {/* Grid (same as projects) */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {profiles.map((p, idx) => (
            <motion.div
              key={p.name}
              className="group relative rounded-xl border border-border/50 bg-card/50 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${p.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Top row: title + icon */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {p.name}
                  </h3>

                  <motion.div
                    className="text-2xl"
                    animate={{ rotate: [0, 0] }}
                    transition={{
                      duration: 0,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} profile`}
                      className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 border border-border/50 inline-flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <p.icon className={`text-2xl ${p.color}`} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Stats */}
                <p className="mt-4 text-lg">
                  Problems Solved: {p.solved ?? "Loading..."}
                </p>

                {/* Last updated */}
                {p.updated && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Last Updated: {p.updated}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
