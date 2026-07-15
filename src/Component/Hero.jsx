import React from "react";
import { motion } from "framer-motion";

import { Film, Clapperboard, Scissors } from "lucide-react";



const CHIPS = [
  { icon: Clapperboard, label: "Premiere Pro", className: "-top-5 -left-6 md:-left-10" },
  { icon: Film, label: "After Effects", className: "top-1/2 -right-6 md:-right-10 -translate-y-1/2" },
  { icon: Scissors, label: "DaVinci Resolve", className: "-bottom-5 -left-4 md:-left-8" },
];

function Hero() {
  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-24 md:pt-28 md:pb-12 overflow-hidden bg-[#0B0E14]"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#FF7A00]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-[460px] h-[460px] rounded-full bg-[#00E5FF]/10 blur-[130px]" />

      {/* Oversized background typography */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center select-none z-0 leading-none">
        <motion.span
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="whitespace-nowrap font-extrabold uppercase leading-[0.95] tracking-tight text-[13vw] md:text-[7.5vw]"
          style={{ WebkitTextStroke: "1px rgba(255,154,60,0.14)", color: "transparent" }}
        >
          Video
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          className="whitespace-nowrap font-extrabold uppercase leading-[0.95] tracking-tight text-[13vw] md:text-[7.5vw]"
          style={{ WebkitTextStroke: "1px rgba(0,229,255,0.14)", color: "transparent" }}
        >
          Editor
        </motion.span>
      </div>

      {/* Main split layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] items-center gap-16 md:gap-10">

        {/* LEFT — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
              text-[#FF9A3C] bg-white/5 backdrop-blur-md border border-[#00E5FF]/25"
          >
            Available for projects
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block text-white/90"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block font-serif italic bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-lg"
            >
              Arun
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-base sm:text-lg text-white/50 tracking-wide max-w-md mx-auto md:mx-0"
          >
            Cutting stories that hold attention, frame by frame
          </motion.p>

          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              }}
              className="px-5 py-3 cursor-pointer rounded-xl text-white/90 font-medium
                bg-white/10 backdrop-blur-md border border-white/20
                shadow-[0_4px_24px_rgba(0,229,255,0.12)]
                hover:bg-white/20 hover:border-[#00E5FF]/50 hover:shadow-[0_4px_32px_rgba(0,229,255,0.3)]
                transition-all duration-300"
            >
              Learn More About Me ↓
            </motion.button>

            <a href="/Resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-3 cursor-pointer rounded-xl font-medium
                bg-[#FF9A3C]/15 backdrop-blur-md border border-[#FF9A3C]/40 text-[#FF9A3C]
                shadow-[0_4px_24px_rgba(255,154,60,0.2)]
                hover:bg-[#FF9A3C]/25 hover:border-[#FF9A3C]/70 hover:shadow-[0_4px_32px_rgba(255,154,60,0.4)]
                transition-all duration-300"
              >
                Download CV 📄
              </motion.button>
            </a>
          </motion.div>

        
        </motion.div>

        {/* RIGHT — framed portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="order-1 md:order-2 relative mx-auto md:mx-0 w-fit"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* corner brackets — viewfinder frame */}
            <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#00E5FF]/60 rounded-tl-md" />
            <span className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#00E5FF]/60 rounded-tr-md" />
            <span className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#00E5FF]/60 rounded-bl-md" />
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#00E5FF]/60 rounded-br-md" />

            <div className="p-1.5 rounded-3xl bg-gradient-to-br from-[#FF9A3C]/30 via-[#00E5FF]/20 to-transparent">
              <img
                src="arun.jpeg"
                alt="Arun - Video Editor & Motion Designer"
                className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-[1.25rem] object-cover
                  drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* floating tech chips */}
            {CHIPS.map(({ icon: Icon, label, className }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
                className={`absolute ${className} hidden sm:flex`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl
                    bg-[#0B0E14]/90 backdrop-blur-md border border-[#00E5FF]/25 text-[#FF9A3C]
                    shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
                >
                  <Icon size={16} />
                  <span className="text-xs font-medium whitespace-nowrap">{label}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#00E5FF]/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#00E5FF]/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;