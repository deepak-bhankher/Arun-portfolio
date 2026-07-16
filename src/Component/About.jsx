import React from "react";
import { motion } from "framer-motion";
import { Clock, Clapperboard, Globe2, Sparkles } from "lucide-react";

const CARDS = [
  { title: "1.5 Years", sub: "Experience", icon: Clock },
  { title: "150+", sub: "Projects Edited", icon: Clapperboard },
  { title: "Remote", sub: "Worldwide Clients", icon: Globe2 },
  { title: "Open to Work", sub: "Availability", icon: Sparkles },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-16 py-24 overflow-hidden bg-[#0B0E14]"
    >
      {/* glow blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#FF7A00]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center mb-14"
      >
        <span
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
          text-[#FF9A3C] bg-white/5 backdrop-blur-md border border-[#00E5FF]/25"
        >
          Get to know me
        </span>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF9A3C] via-white to-[#00E5FF] bg-clip-text text-transparent">
          About Me
        </h2>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]" />
      </motion.div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* LEFT - TEXT */}
        <div className="flex-1 space-y-5">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg leading-relaxed border-l-4 border-[#00E5FF]/40 pl-5"
          >
            I'm a passionate{" "}
            <span className="font-bold bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF] bg-clip-text text-transparent">
              Video Editor & Motion Designer
            </span>{" "}
            with 1+ years of experience turning raw footage into cinematic,
            high-converting content for brands, creators and businesses.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed border-l-4 border-[#FF9A3C]/40 pl-5"
          >
            I work with{" "}
            <span className="font-bold bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF] bg-clip-text text-transparent">
             I’m a video editor who loves turning raw footage into clean,
            </span>{" "}
     
engaging, and powerful visuals. I edit cinematic videos,
reels, YouTube content, and story-driven projects. My goal
is simple make your ideas look amazing on screen.
          </motion.p>
        </div>

        {/* RIGHT - CARDS */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 border border-[#00E5FF]/15 backdrop-blur-md p-6 rounded-2xl text-center
                  transition-all duration-300
                  hover:border-[#00E5FF]/45 hover:shadow-[0_0_30px_5px_rgba(0,229,255,0.15)]"
              >
                <div
                  className="mx-auto mb-3 w-10 h-10 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-[#FF9A3C]/20 to-[#00E5FF]/20 border border-[#00E5FF]/25
                  group-hover:from-[#FF9A3C]/30 group-hover:to-[#00E5FF]/30 transition-all duration-300"
                >
                  <Icon size={18} className="text-[#FF9A3C]" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF] bg-clip-text text-transparent">
                  {card.title}
                </h3>
                <p className="text-white/55 mt-2">{card.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
