import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";

const NAV_ITEMS = ["Home", "About", "Work", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Hero");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollYProgress } = useScroll();
  const progressWidth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 24);

      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 4) {
        setHidden(true);
        setOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      const sections = NAV_ITEMS.map((item) =>
        document.getElementById(item === "Home" ? "Hero" : item.toLowerCase()),
      );
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: hidden ? -110 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          y: { type: "spring", stiffness: 260, damping: 30 },
          opacity: { duration: 0.25 },
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 pt-4"
      >
        <div
          className={`relative max-w-5xl mx-auto rounded-2xl px-5 overflow-hidden
            bg-[#0B0E14]/75 backdrop-blur-xl
            transition-all duration-500 ${
              scrolled
                ? "border border-[#FF7A00]/30 shadow-[0_8px_32px_rgba(255,122,0,0.2)]"
                : "border border-[#00E5FF]/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            }`}
        >
          <div className="flex items-center justify-between h-[62px]">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: -4 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 16 }}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <span
                className="relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-[#0B0E14]"
                style={{
                  background: "linear-gradient(135deg, #FF9A3C, #00E5FF)",
                  boxShadow: "0 0 16px rgba(255,122,0,0.5)",
                }}
              >
                A
                <motion.span
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: "0 0 0 0 rgba(255,154,60,0.6)" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,229,255,0.45)",
                      "0 0 0 6px rgba(0,229,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </span>
              <span className="font-bold text-[17px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF9A3C] via-white to-[#00E5FF]">
                Arun
              </span>
            </motion.div>

            {/* Desktop Links - underline style */}
            <ul className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 list-none m-0 p-0">
              {NAV_ITEMS.map((item, i) => {
                const id = item === "Home" ? "Hero" : item.toLowerCase();
                const isActive = active === id;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                    className="relative list-none"
                  >
                    <motion.a
                      href={`#${id}`}
                      whileTap={{ scale: 0.96 }}
                      className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 block
                        ${isActive ? "text-[#FF9A3C]" : "text-white/55 hover:text-[#00E5FF]"}`}
                    >
                      <span className="relative z-10">{item}</span>

                      {/* Active underline - slides between items */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                          style={{
                            background: "linear-gradient(90deg, #FF9A3C, #00E5FF)",
                            boxShadow: "0 0 8px rgba(255,154,60,0.6)",
                          }}
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}

                      {/* Hover underline - only shows when NOT active */}
                      {!isActive && (
                        <motion.span
                          className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full origin-center scale-x-0 group-hover:scale-x-100"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          style={{
                            background: "linear-gradient(90deg, #FF9A3C55, #00E5FF55)",
                          }}
                        />
                      )}
                    </motion.a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="hidden md:block"
            >
              <a href="/Arun_Resume.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer
                    text-[#0B0E14] border border-black/10
                    bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]
                    hover:shadow-[0_0_22px_rgba(255,154,60,0.5)]
                    transition-shadow duration-300"
                >
                  Hire Me 🎬
                </motion.button>
              </a>
            </motion.div>

            {/* Hamburger */}
            <motion.button
              whileTap={{ scale: 0.87 }}
              onClick={() => setOpen(!open)}
              className="md:hidden cursor-pointer border border-black/10
                p-2 rounded-xl text-[#0B0E14]
                bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]
                shadow-[0_0_14px_rgba(255,154,60,0.4)]
                transition-all duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  {open ? <RxCross1 size={19} /> : <CiMenuFries size={21} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] origin-left"
            style={{
              scaleX: progressWidth,
              width: "100%",
              background: "linear-gradient(90deg, #FF9A3C, #00E5FF)",
            }}
          />
        </div>
      </motion.nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[82px] left-4 right-4 z-40 md:hidden"
          >
            <div
              className="bg-[#0B0E14]/95 backdrop-blur-xl rounded-2xl
              border border-[#00E5FF]/20
              shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,154,60,0.1)]
              overflow-hidden"
            >
              <ul className="flex flex-col list-none px-3 py-3 gap-1">
                {NAV_ITEMS.map((item, i) => {
                  const id = item === "Home" ? "Hero" : item.toLowerCase();
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.22 }}
                      className="list-none"
                    >
                      <motion.a
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl
                          text-sm font-medium transition-all duration-200
                          ${isActive ? "text-[#FF9A3C] bg-black/20" : "text-white/70 hover:bg-black/20 hover:text-[#00E5FF]"}`}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: isActive ? "#FF9A3C" : "#00E5FF" }}
                        />
                        {item}
                      </motion.a>
                    </motion.li>
                  );
                })}

                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.22 }}
                  className="list-none mt-1 pt-3 border-t border-white/10"
                >
                  <a href="/Arun_Resume.pdf" download onClick={() => setOpen(false)}>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex justify-center items-center gap-2
                      py-3 px-6 rounded-xl cursor-pointer
                      text-sm font-semibold text-[#0B0E14] border border-black/10
                      bg-gradient-to-r from-[#FF9A3C] via-[#FFB800] to-[#00E5FF]
                      shadow-[0_0_20px_rgba(255,154,60,0.45)]
                      transition-shadow duration-300"
                    >
                      Hire Me 🎬
                    </motion.button>
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}