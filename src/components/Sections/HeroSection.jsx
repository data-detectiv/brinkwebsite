import {
    motion,
    useScroll,
    useTransform
  } from 'framer-motion';
  import {
    ArrowDown,
    Users,
    GraduationCap,
    Heart,
    Target
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import { useTheme } from '../../context/ThemeContext';
  import { containerVariants, itemVariants } from '../../utils/helper';
  import { useRef } from 'react';
  
  const HeroSection = () => {
    const { isDarkMode } = useTheme();
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  
    const textVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    };
  
    const impactStats = [
      { number: "10,000+", label: "Goal: Students by Year 5", icon: Users },
      { number: "10+", label: "Goal: College Chapters", icon: GraduationCap },
      { number: "100+", label: "Goal: Mentors & Leaders", icon: Heart },
      { number: "Annual", label: "BR!NK Leadership Summit", icon: Target },
    ];
  
    return (
      <div className="min-h-screen relative overflow-hidden bg-[#1E3A5F] text-white">
  
        {/* ⭐ YouTube Fullscreen Background - Video with mr Jeff ⭐ */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="absolute inset-0 w-full h-full">
    {/* Replace VIDEO_ID with the actual YouTube video ID featuring mr Jeff */}
    <iframe
      className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"
      src="https://youtube.com/embed/TDnkcjme0lg?autoplay=1&mute=1&controls=0&loop=1&playlist=TDnkcjme0lg&modestbranding=1&showinfo=0&playsinline=1"
      // src="https://www.youtube.com/embed/r0430XuSxUY?autoplay=1&mute=1&controls=0&loop=1&playlist=r0430XuSxUY&modestbranding=1&showinfo=0&playsinline=1"
      title="YouTube background - BR!NK with mr Jeff"
      frameBorder="0"
      allow="autoplay; fullscreen"
    ></iframe>
  </div>

  {/* Dark overlays */}
  <div className="absolute inset-0 bg-[#1E3A5F]/40"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
</div>

  
        {/* HERO CONTENT */}
        <motion.section
          id="home"
          style={{ y: heroY }}
          className="min-h-screen flex items-center justify-center relative px-6 pt-20 z-10"
        >
          <div className="max-w-7xl mx-auto w-full z-10 mt-20">
  
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              <motion.div
                variants={textVariants}
                className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4 font-semibold"
              >
                Empowering Growth, Leadership and Purpose
              </motion.div>
  
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
              >
                <span className="text-white">BR!NK</span>
                <br />
                <span className="text-[#D4AF37] font-bold">Empowering Growth,</span>
                <br />
                <span className="text-white">Leadership and Purpose</span>
                <br />
                <span className="text-white text-3xl md:text-4xl lg:text-5xl font-normal">
                  in the Next Generation
                </span>
              </motion.h1>
  
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
              >
                BR!NK empowers college or high-school students to live with clarity, purpose,
                and leadership. We provide mentorship, skill-based learning, and
                transformational experiences that help individuals discover who they are
                and lead meaningful change.
              </motion.p>
  
              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Link to="/get-involved">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#D4AF37] hover:bg-[#B8941F] text-black px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-semibold shadow-lg"
                  >
                    Join BR!NK
                  </motion.button>
                </Link>
  
                <Link to="/get-involved">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-white hover:border-[#D4AF37] hover:bg-white/10 text-white px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-semibold"
                  >
                    Become a Mentor
                  </motion.button>
                </Link>
  
                <Link to="/donate">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="border-2 border-white hover:border-[#D4AF37] hover:bg-white/10 text-white px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-semibold"
                  >
                    Support the Mission
                  </motion.button>
                </Link>
              </motion.div>
  
              {/* Impact Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              >
                {impactStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                    <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.number}</div>
                    <div className="text-xs uppercase tracking-wider text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
  
          {/* Scroll icon */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <ArrowDown size={24} className="text-white" />
          </motion.div>
  
        </motion.section>
      </div>
    );
  };
  
  export default HeroSection;
  