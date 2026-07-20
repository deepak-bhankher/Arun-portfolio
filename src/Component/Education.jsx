import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

// 🎨 Premium palette — deep royal blue to sky cyan (same as rest of the site)
const NAVY = "#0a2a88";
const SKY = "#59CDE9";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const EDUCATION_ITEMS = [
  {
    title: "Education — Senior Secondary School",
    place: "Hisar",
    range: "2022",
  },
  {
    title: "Diploma — Video Editing",
    place: "Maya Academy Of Advanced Creativity, Chandigarh",
    range: "2024 – July 2025",
  },
];

function Education() {
  return (
    <section id="education" className="relative px-6 md:px-16 py-24 overflow-hidden bg-[#050B1F]">

      {/* glow blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#0a2a88]/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#59CDE9]/15 rounded-full blur-3xl -z-10" />

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
          text-[#59CDE9] bg-white/5 backdrop-blur-md border border-[#59CDE9]/25">
          My learning journey
        </span>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-center text-white/45 mt-3">
          Academic background & specialised training
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#0a2a88] via-[#3E6FD9] to-[#59CDE9]" />
      </motion.div>

      {/* Single box, both entries inside */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative mt-16 max-w-2xl mx-auto"
      >
        <div
          className="relative rounded-2xl p-6 md:p-8
            bg-white/5 border border-[#59CDE9]/15 backdrop-blur-md
            hover:border-[#59CDE9]/45 hover:shadow-[0_0_30px_5px_rgba(89,205,233,0.15)]
            transition-all duration-300"
        >
          {EDUCATION_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`relative pl-9 ${
                i !== EDUCATION_ITEMS.length - 1
                  ? "pb-7 mb-7 border-b border-[#59CDE9]/10"
                  : ""
              }`}
            >
              {/* icon badge */}
              <div className="absolute left-0 top-0.5 w-7 h-7 rounded-full flex items-center justify-center
                bg-gradient-to-r from-[#0a2a88] to-[#59CDE9] shrink-0">
                <GraduationCap size={14} className="text-white" />
              </div>

              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold bg-gradient-to-r from-[#0a2a88] to-[#59CDE9] bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[#59CDE9]">
                  <Calendar size={15} />
                  <span className="text-sm">{item.range}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white/45 mt-2">
                <MapPin size={15} />
                <span className="text-sm">{item.place}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;