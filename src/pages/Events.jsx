import { motion } from "framer-motion";
import { Calendar, Users, Mic, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import ImageCarousel from "../components/ImageCarousel";

// Import images for events carousel
import img1 from "/assets/IMG-20251125-WA0024.jpg";
import img2 from "/assets/IMG-20251125-WA0025.jpg";
import img3 from "/assets/IMG-20251125-WA0026.jpg";
import img4 from "/assets/IMG-20251125-WA0027.jpg";
import img5 from "/assets/IMG-20251125-WA0028.jpg";
import img6 from "/assets/IMG-20251125-WA0029.jpg";
import img7 from "/assets/IMG-20251125-WA0030.jpg";
import img8 from "/assets/IMG-20251125-WA0031.jpg";
import img9 from "/assets/IMG-20251125-WA0032.jpg";
import img10 from "/assets/IMG-20251125-WA0033.jpg";
import img11 from "/assets/IMG-20251125-WA0034.jpg";
import img12 from "/assets/IMG-20251125-WA0035.jpg";
import img13 from "/assets/IMG-20251125-WA0036.jpg";
import img14 from "/assets/IMG-20251125-WA0037.jpg";
import img15 from "/assets/IMG-20251125-WA0038.jpg";
import img16 from "/assets/IMG-20251125-WA0039.jpg";
import img17 from "/assets/IMG-20251125-WA0040.jpg";
import img18 from "/assets/IMG-20251125-WA0041.jpg";
import img19 from "/assets/IMG-20251125-WA0042.jpg";
import img20 from "/assets/IMG-20251125-WA0043.jpg";

const eventImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

const Events = () => {
  const { isDarkMode } = useTheme();

  const summitFeatures = [
    { icon: Mic, text: "5 inspiring keynote speakers" },
    { icon: Users, text: "Young Leaders Roundtable" },
    { icon: BookOpen, text: "Transformation workshops" },
    { icon: Sparkles, text: "Networking & peer leadership circle" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? "bg-[#2C2C2C] text-white" 
        : "bg-white text-[#2C2C2C]"
    } pt-20`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Events & <span className="text-[#D4AF37]">Summit</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
          </motion.div>

          {/* BR!NK Summit 2025 */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className={`p-12 rounded-2xl ${
              isDarkMode 
                ? "bg-[#1E3A5F] border border-[#D4AF37]/30" 
                : "bg-white border-2 border-[#1E3A5F]"
            }`}>
              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-10 h-10 text-[#D4AF37]" />
                <h2 className={`text-4xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  BR!NK Summit 2025
                </h2>
              </div>
              <p className={`text-xl mb-8 leading-relaxed ${
                isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
              }`}>
                A one-day transformational experience featuring keynote speakers, young leaders' roundtable, breakout sessions, and community-building.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {summitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                    <span className={isDarkMode ? "text-white/90" : "text-[#2C2C2C]"}>{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  Register Now
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Other Events */}
          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-semibold mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Other Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl border-2 ${
                  isDarkMode 
                    ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                    : "bg-white border-[#1E3A5F]"
                }`}
              >
                <Calendar className="w-8 h-8 mb-4 text-[#D4AF37]" />
                <h3 className={`text-2xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Young Leaders Roundtable
                </h3>
                <p className={isDarkMode ? "text-white/80" : "text-[#2C2C2C]"}>
                  Regular gatherings where students share experiences, challenges, and insights with peers and mentors.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className={`p-8 rounded-2xl ${isDarkMode ? "bg-gray-900/50 border border-gray-800" : "bg-white border border-gray-200"}`}
              >
                <BookOpen className="w-8 h-8 mb-4 text-[#D4AF37]" />
                <h3 className={`text-2xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Workshop Series
                </h3>
                <p className={isDarkMode ? "text-white/80" : "text-[#2C2C2C]"}>
                  Monthly workshops covering leadership skills, emotional intelligence, and purpose discovery.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Gallery Carousel */}
          <motion.div variants={itemVariants} className="mt-16">
            <h2 className={`text-3xl font-semibold mb-8 text-center ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Gallery from Previous Events
            </h2>
            <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageCarousel images={eventImages} autoSlideInterval={3500} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;



