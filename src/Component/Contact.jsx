import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

// 🎨 Premium palette — deep royal blue to sky cyan
const NAVY = "#0a2a88";
const SKY = "#59CDE9";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500);
    }, 900);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Your Name", icon: User, as: "input" },
    { name: "email", type: "email", placeholder: "Your Email", icon: Mail, as: "input" },
    { name: "message", placeholder: "Tell me about your project", icon: MessageSquare, as: "textarea" },
  ];

  return (
    <section id="contact" className="relative px-6 md:px-16 py-24 overflow-hidden bg-[#050B1F]">

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
        className="flex flex-col items-center mb-12"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
          text-[#59CDE9] bg-white/5 backdrop-blur-md border border-[#59CDE9]/25">
          Get in touch
        </span>
<h2 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0a2a88] via-white to-[#59CDE9] bg-clip-text text-transparent">Let's Create Together</h2>

        <p className="text-center text-white/45 mt-3 max-w-md">
          Got a project, a story to tell, or just want to say hi? Drop a message below.
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#0a2a88] via-[#3E6FD9] to-[#59CDE9]" />
      </motion.div>

      <motion.form
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-5 relative bg-white/5 border border-[#59CDE9]/15
          backdrop-blur-md rounded-2xl p-6 sm:p-8
          shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
      >
        {fields.map((field, i) => {
          const Icon = field.icon;
          return (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.1 }}
              className="relative"
            >
              <Icon
                size={17}
                className="absolute left-4 top-4 text-[#59CDE9]/70 pointer-events-none"
              />
              {field.as === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  rows="5"
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-11 rounded-xl bg-white/5 backdrop-blur-md border border-[#59CDE9]/20
                    text-[#59CDE9] placeholder-white/25 outline-none
                    focus:border-[#59CDE9]/60 focus:shadow-[0_0_15px_2px_rgba(89,205,233,0.2)]
                    transition-all duration-300 resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-11 rounded-xl bg-white/5 backdrop-blur-md border border-[#59CDE9]/20
                    text-[#59CDE9] placeholder-white/25 outline-none
                    focus:border-[#59CDE9]/60 focus:shadow-[0_0_15px_2px_rgba(89,205,233,0.2)]
                    transition-all duration-300"
                />
              )}
            </motion.div>
          );
        })}

        <motion.button
          type="submit"
          disabled={status !== "idle"}
          whileHover={status === "idle" ? { scale: 1.02, y: -1 } : {}}
          whileTap={status === "idle" ? { scale: 0.98 } : {}}
          className="w-full py-3 rounded-xl font-medium cursor-pointer relative overflow-hidden
            bg-[#0a2a88]/20 backdrop-blur-md border border-[#59CDE9]/40 text-[#59CDE9]
            shadow-[0_4px_24px_rgba(10,42,136,0.3)]
            hover:bg-[#0a2a88]/30 hover:border-[#59CDE9]/70
            hover:shadow-[0_4px_32px_rgba(89,205,233,0.4)]
            transition-all duration-300 disabled:cursor-default"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "idle" && (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={16} />
              </motion.span>
            )}
            {status === "sending" && (
              <motion.span
                key="sending"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-[#59CDE9]/40 border-t-[#59CDE9] rounded-full"
                />
                Sending...
              </motion.span>
            )}
            {status === "sent" && (
              <motion.span
                key="sent"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={17} /> Message Sent
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;