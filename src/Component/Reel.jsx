import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

// 🎨 Premium palette — deep royal blue to sky cyan (same as rest of the site)
const NAVY = "#0a2a88";
const SKY = "#59CDE9";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

// 🎬 6 Handcrafted reel items with curated high-impact thumbnails and creator handles
const REELS = [
  {
    id: 1,
    src: "/Reel1.mp4",
    poster: "/reels/reel-1.jpg",
    title: "Fitness & Transformation",
    tag: "Fitness",
    handle: "fit.niya_",
  },
  {
    id: 2,
    src: "/Reel2.mp4",
    poster: "/reels/reel-2.jpg",
    title: "Haircare & Consultation",
    tag: "Health",
    handle: "dr.himanshu_grover_",
  },
  {
    id: 3,
    src: "/Reel3.mp4",
    poster: "/reels/reel-3.jpg",
    title: "Founder's Story Podcast",
    tag: "Podcast",
    handle: "houseofbinti",
  },
  {
    id: 4,
    src: "/Reel4.mp4",
    poster: "/reels/reel-4.jpg",
    title: "Flipkart Big Billion Days",
    tag: "Commercial",
    handle: "techcodeai",
  },
  {
    id: 5,
    src: "/Reel5.mp4",
    poster: "/reels/reel-5.jpg",
    title: "Industrial & Finance 25,000 CR",
    tag: "Business",
    handle: "growthwithIn",
  },
  {
    id: 6,
    src: "/Reel6.mp4",
    poster: "/reels/reel-6.jpg",
    title: "Apple Tech Review",
    tag: "Tech",
    handle: "unfilteredakshar",
  },
];

function ReelCard({ reel, index, isActive, onTogglePlay }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Sync video play/pause with parent active state
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isActive) {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay interrupted or not allowed:", err);
        });
      }
    } else {
      v.pause();
    }
  }, [isActive]);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration) {
      setProgress((v.currentTime / v.duration) * 100);
    }
  };

  const handleCardClick = () => {
    onTogglePlay(reel.id);
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
      className="group relative flex flex-col"
    >
      {/* 9:16 Reel Container */}
      <div
        className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl
          bg-white/5 border border-[#59CDE9]/15 backdrop-blur-md
          group-hover:border-[#59CDE9]/50
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          group-hover:shadow-[0_0_35px_5px_rgba(89,205,233,0.2)]
          transition-all duration-300 cursor-pointer select-none"
        onClick={handleCardClick}
      >
        {/* corner brackets — viewfinder frame, matches hero */}
        <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#59CDE9]/60 rounded-tl z-20 pointer-events-none" />
        <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#59CDE9]/60 rounded-tr z-20 pointer-events-none" />
        <span className="absolute bottom-2.5 left-2 w-4 h-4 border-b-2 border-l-2 border-[#59CDE9]/60 rounded-bl z-20 pointer-events-none" />
        <span className="absolute bottom-2.5 right-2 w-4 h-4 border-b-2 border-r-2 border-[#59CDE9]/60 rounded-br z-20 pointer-events-none" />

        {/* Video Element */}
        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setProgress(0)}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dynamic shadow gradients for UI clarity */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        {/* 
          Play / Resume Button:
          - Visible ONLY when video is paused/stopped (or when user stops it).
          - Fades out cleanly when clicked to play.
          - Cursor hover while playing does NOT make the button show up.
        */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none z-20
            ${isActive ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}
        >
          <span
            className="flex items-center justify-center w-14 h-14 rounded-full
              bg-gradient-to-r from-[#0a2a88] to-[#59CDE9]
              shadow-[0_0_25px_rgba(89,205,233,0.6)]
              border border-white/20
              group-hover:scale-110 transition-transform duration-200"
          >
            <Play size={22} className="text-white ml-0.5" fill="white" />
          </span>
        </div>

        {/* Top Header: Reel Badge + Tag */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <span
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide
              text-[#59CDE9] bg-[#050B1F]/85 border border-[#59CDE9]/25 backdrop-blur-sm"
          >
            Reel {String(reel.id).padStart(2, "0")}
          </span>
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide
              text-white/80 bg-white/10 border border-white/10 backdrop-blur-sm"
          >
            {reel.tag}
          </span>
        </div>

        {/* Bottom Info Bar: Title + Mute Toggle */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between pointer-events-none">
          <div className="pr-2 max-w-[70%]">
            <p className="text-[12px] font-semibold text-white/90 line-clamp-1 drop-shadow-md">
              {reel.title}
            </p>
          </div>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute reel" : "Mute reel"}
            className="pointer-events-auto w-8 h-8 rounded-full flex items-center justify-center
              bg-[#050B1F]/85 border border-[#59CDE9]/30 text-[#59CDE9]
              hover:bg-[#0a2a88] hover:text-white hover:border-[#59CDE9]
              transition-colors duration-200 cursor-pointer shadow-md"
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>

        {/* Real-time playback progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#0a2a88] via-[#3E6FD9] to-[#59CDE9] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Creator Instagram ID Pill below the reel */}
      <div className="mt-2.5 px-0.5">
        <a
          href={`https://www.instagram.com/${reel.handle}/`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit @${reel.handle} on Instagram`}
          onClick={(e) => e.stopPropagation()}
          className="group/id flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-xl
            bg-white/[0.04] border border-[#59CDE9]/20 backdrop-blur-sm
            hover:border-[#59CDE9]/60 hover:bg-[#59CDE9]/10 transition-all duration-200 shadow-sm"
        >
          <div className="flex items-center gap-1.5 min-w-0">
            <FaInstagram className="text-[#59CDE9] text-[13px] shrink-0 group-hover/id:scale-110 transition-transform" />
            <span className="text-[11.5px] font-medium text-white/85 group-hover/id:text-[#59CDE9] transition-colors truncate">
              @{reel.handle}
            </span>
          </div>
          <ExternalLink size={11} className="text-[#59CDE9]/50 group-hover/id:text-[#59CDE9] shrink-0 transition-colors" />
        </a>
      </div>
    </motion.div>
  );
}

function Reels() {
  const [activeReelId, setActiveReelId] = useState(null);

  const handleTogglePlay = (id) => {
    setActiveReelId((prev) => (prev === id ? null : id));
  };

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
        <span
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.2em] uppercase
          text-[#59CDE9] bg-white/5 backdrop-blur-md border border-[#59CDE9]/25"
        >
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
            <ReelCard
              reel={reel}
              index={i}
              isActive={activeReelId === reel.id}
              onTogglePlay={handleTogglePlay}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reels;