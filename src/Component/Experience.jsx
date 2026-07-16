import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-24 overflow-hidden bg-[#0B0E14]">

      {/* glow blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#FF7A00]/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00E5FF]/10 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
          text-[#FF9A3C] bg-white/5 backdrop-blur-md border border-[#00E5FF]/25">
          Where I've worked
        </span>
        <h2 className=" text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF9A3C] via-white to-[#00E5FF] bg-clip-text text-transparent">
  Work Experience
</h2>
        <p className="text-center text-white/45 mt-3">
          Professional journey in video editing & motion design
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]" />
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-16 max-w-3xl mx-auto">

        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-4 md:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]"
        />

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative pl-16 md:pl-24"
        >

          {/* Dot */}
          <div className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-[#FF9A3C] to-[#00E5FF]">
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,154,60,0.5)",
                  "0 0 0 8px rgba(255,154,60,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          </div>

          {/* Content */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/5 border border-[#00E5FF]/15 backdrop-blur-md rounded-2xl p-6
            hover:border-[#00E5FF]/45 hover:shadow-[0_0_30px_5px_rgba(0,229,255,0.15)]
            transition-all duration-300"
          >

            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#FF9A3C] to-[#00E5FF] bg-clip-text text-transparent">
                Video Editor & Motion Designer
              </h3>
              <div className="flex items-center gap-2 text-[#00E5FF]">
                <Calendar size={16} />
                <span className="text-sm">2024 - Present</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/45 mt-2">
              <MapPin size={16} />
              <span className="text-sm">Freelance • Remote</span>
            </div>

            <ul className="mt-5 space-y-3">
              {[
                "# Growumedia (Mohali) :- (1-Aug-2025 to 31-Oct-2025)",
                "# Superblizz Banglore (Remote) :- (15-November-2025 to 10-may-26)",
                "Collaborated directly with brands to match their voice",
                "Handled full pipeline from raw footage to final export",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-white/65 text-sm"
                >
                  <CheckCircle className="text-[#FF9A3C] mt-0.5 shrink-0" size={18} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;