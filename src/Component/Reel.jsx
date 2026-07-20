import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";

// 🎨 Premium palette — deep royal blue to sky cyan (same as rest of the site)
const NAVY = "#0a2a88";
const SKY = "#59CDE9";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

// 👇 Apni reel files yahan daal de. Video + thumbnail dono /public folder me rakhna
//    aur path leading-slash ke saath, jaise: "/reels/reel-1.mp4"
const REELS = [
  { id: 1, src: "/reels/reel-1.mp4", poster: "/reels/reel-1.jpg" },
  { id: 2, src: "/reels/reel-2.mp4", poster: "/reels/reel-2.jpg" },
  { id: 3, src: "/reels/reel-3.mp4", poster: "/reels/reel-3.jpg" },
  { id: 4, src: "/reels/reel-4.mp4", poster: "/reels/reel-4.jpg" },
  { id: 5, src: "/reels/reel-5.mp4", poster: "/reels/reel-5.jpg" },
  { id: 6, src: "/reels/reel-6.mp4", poster: "/reels/reel-6.jpg" },
];

function ReelCard({ reel, index }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play();
      setPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div
        className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl
          bg-white/5 border border-[#59CDE9]/15 backdrop-blur-md
          group-hover:border-[#59CDE9]/50
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          group-hover:shadow-[0_0_35px_5px_rgba(89,205,233,0.2)]
          transition-all duration-300 cursor-pointer"
        onClick={togglePlay}
      >
        {/* corner brackets — viewfinder frame, matches hero */}
        <span className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#59CDE9]/50 rounded-tl-md z-10" />
        <span className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#59CDE9]/50 rounded-tr-md z-10" />
        <span className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#59CDE9]/50 rounded-bl-md z-10" />
        <span className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#59CDE9]/50 rounded-br-md z-10" />

        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          muted={muted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* play / pause button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
            ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
        >
          <span
            className="flex items-center justify-center w-14 h-14 rounded-full
              bg-gradient-to-r from-[#0a2a88] to-[#59CDE9]
              shadow-[0_0_25px_rgba(89,205,233,0.5)]"
          >
            <Play size={22} className="text-white ml-0.5" fill="white" />
          </span>
        </div>

        {/* mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center
            bg-[#050B1F]/80 border border-[#59CDE9]/25 text-[#59CDE9]
            hover:bg-[#050B1F] transition-colors duration-200"
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>

        {/* reel number badge */}
        <span
          className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide
            text-[#59CDE9] bg-[#050B1F]/80 border border-[#59CDE9]/25"
        >
          Reel {String(reel.id).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

function Reels() {
  return (
    <section id="reels" className="relative px-6 md:px-16 py-24 overflow-hidden bg-[#050B1F]">

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
          Recent edits
        </span>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white bg-clip-text text-transparent">
          My Reels
        </h2>
        <p className="text-center text-white/45 mt-3 max-w-md">
          A closer look at footage cut, paced and polished frame by frame
        </p>
        <span className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#0a2a88] via-[#3E6FD9] to-[#59CDE9]" />
      </motion.div>

      {/* Reel grid */}
      <div className="relative mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-7">
        {REELS.map((reel, i) => (
          <div key={reel.id} className="max-w-[240px] w-full mx-auto">
            <ReelCard reel={reel} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reels;