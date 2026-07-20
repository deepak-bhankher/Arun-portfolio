import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin } from "lucide-react";

// 🎨 Premium palette — deep royal blue to sky cyan
const NAVY = "#0a2a88";
const SKY = "#59CDE9";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-24 overflow-hidden bg-[#050B1F]">

      {/* glow blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#0a2a88]/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#59CDE9]/15 rounded-full blur-3xl -z-10" />

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
          Where I've worked
        </span>
        <h2 className=" text-center text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent">
  Work Experience
</h2>
        <p className="text-center text-white/45 mt-3">
          Professional journey in video editing & motion design
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#0a2a88] via-[#3E6FD9] to-[#59CDE9]" />
      </motion.div>

      {/* Two experience cards — side by side on desktop, stacked on mobile */}
      <div className="relative mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        {[
          {
            company: "Growumedia",
            location: "Mohali",
            mode: "Onsite",
            range: "1 Aug 2025 – 31 Oct 2025",
            points: [
              "Collaborated directly with brands to match their voice",
              "Edited short-form & long-form content for client campaigns",
            ],
          },
          {
            company: "Superblizz",
            location: "Bangalore",
            mode: "Remote",
            range: "15 Nov 2025 – 10 May 2026",
            points: [
              "Handled full pipeline from raw footage to final export",
              "Delivered consistent, on-brand edits across multiple projects",
            ],
          },
        ].map((job, idx) => (
          <motion.div
            key={job.company}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="relative h-full overflow-hidden rounded-2xl p-6 pl-8
                bg-white/5 border border-[#59CDE9]/15 backdrop-blur-md
                hover:border-[#59CDE9]/45 hover:shadow-[0_0_30px_5px_rgba(89,205,233,0.15)]
                transition-all duration-300"
            >
              {/* left accent bar */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0a2a88] via-[#3E6FD9] to-[#59CDE9]" />

              {/* dot on the accent bar */}
              <div className="absolute -left-2.5 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-[#0a2a88] to-[#59CDE9]">
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(89,205,233,0.5)",
                      "0 0 0 8px rgba(89,205,233,0)",
                    ],
                  }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: idx * 0.3 }}
                />
              </div>

              <h3 className="text-xl font-bold bg-gradient-to-r from-[#0a2a88] to-[#59CDE9] bg-clip-text text-transparent">
                {job.company}
              </h3>
              <p className="text-white/85 text-sm font-medium mt-1">
                Video Editor & Motion Designer
              </p>

              <div className="flex items-center gap-2 text-[#59CDE9] mt-3">
                <Calendar size={16} className="shrink-0" />
                <span className="text-sm">{job.range}</span>
              </div>

              <div className="flex items-center gap-2 text-white/45 mt-2">
                <MapPin size={16} className="shrink-0" />
                <span className="text-sm">{job.mode} • {job.location}</span>
              </div>

              <ul className="mt-5 space-y-3">
                {job.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-white/65 text-sm"
                  >
                    <CheckCircle className="text-[#59CDE9] mt-0.5 shrink-0" size={18} />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;