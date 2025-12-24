import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Heart, Award, Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

// Import images for carousel - using a selection of images
import img1 from "/assets/IMG-20251125-WA0009.jpg";
import img2 from "/assets/IMG-20251125-WA0010.jpg";
import img3 from "/assets/IMG-20251125-WA0011.jpg";
import img4 from "/assets/IMG-20251125-WA0012.jpg";
import img5 from "/assets/IMG-20251125-WA0013.jpg";
import img6 from "/assets/IMG-20251125-WA0014.jpg";
import img7 from "/assets/IMG-20251125-WA0015.jpg";
import img8 from "/assets/IMG-20251125-WA0016.jpg";
import img9 from "/assets/IMG-20251125-WA0017.jpg";
import img10 from "/assets/IMG-20251125-WA0018.jpg";
import img11 from "/assets/IMG-20251125-WA0019.jpg";
import img12 from "/assets/IMG-20251125-WA0020.jpg";
import img13 from "/assets/IMG-20251125-WA0021.jpg";
import img14 from "/assets/IMG-20251125-WA0022.jpg";
import img15 from "/assets/IMG-20251125-WA0023.jpg";

const impactImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

const Impact = () => {
  const { isDarkMode } = useTheme();

  const impactGoals = [
    { number: "10,000+", label: "Students Reached by Year 5", icon: Users, description: "Through digital and in-person programs" },
    { number: "10+", label: "College/High-School Chapters", icon: Target, description: "Mentorship circles launched" },
    { number: "100+", label: "Mentors & Leaders", icon: Heart, description: "Guiding students worldwide" },
    // { number: "Annual", label: "BR!NK Leadership Summit", icon: Award, description: "Leading youth purpose conference" },
  ];

  const studentStories = [
    {
      quote: "BR!NK helped me understand what leadership actually means and how to walk in purpose every day.",
      author: "Student Participant"
    },
    {
      quote: "The mentorship changed my life — I finally have direction in my career and confidence in myself.",
      author: "Mentorship Program Graduate"
    },
    {
      quote: "Before BR!NK, I felt lost. Now I know who I am and what I'm meant to do.",
      author: "Purpose Pathway Workshop Participant"
    }
  ];

  // Use the imported images
  const selectedImages = impactImages;

  return (
    <div className={`min-h-screen pt-20 relative overflow-hidden transition-colors ${
        isDarkMode 
        ? "bg-[#0F0F0F] text-[#F5F5F5]" 
        : "bg-white text-[#2C2C2C]"
    }`}>
      {/* Top Section Banner - With Picture */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/IMG-20251125-WA0009.jpg" 
            alt="Impact" 
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {/* Lighter overlay for clearer image while maintaining text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>
        <div className={`absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-10"
          >
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-2xl text-white`}>
              Impact <span className="text-[#D4AF37] drop-shadow-lg">Goals</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-white`}>
              Measuring our transformational impact on students worldwide
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

          {/* Impact Goals */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Current Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {impactGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-8 rounded-2xl ${isDarkMode ? "bg-[#1A1A1A] text-[#F5F5F5]" : "bg-[#1E3A5F] text-white"} shadow-lg`}
                  >
                    <Icon className="w-12 h-12 mb-4 text-[#D4AF37]" />
                    <div className="text-4xl font-bold mb-2 text-[#D4AF37]">
                      {goal.number}
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      {goal.label}
                    </div>
                    <div className={`text-sm ${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}>
                      {goal.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Impact Goals */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Future Goals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {impactGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-8 rounded-2xl ${isDarkMode ? "bg-[#1A1A1A] text-[#F5F5F5]" : "bg-[#1E3A5F] text-white"} shadow-lg`}
                  >
                    <Icon className="w-12 h-12 mb-4 text-[#D4AF37]" />
                    <div className="text-4xl font-bold mb-2 text-[#D4AF37]">
                      {goal.number}
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      {goal.label}
                    </div>
                    <div className={`text-sm ${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}>
                      {goal.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Gallery with Horizontal Sliding Animation */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Our Impact in Action
            </h2>
            <div className={`rounded-2xl overflow-hidden shadow-2xl ${
              isDarkMode ? "bg-[#2C2C2C]/50" : "bg-white/50"
            }`}>
              <div className="relative overflow-hidden">
                {/* First row - sliding left */}
                <motion.div
                  className="flex gap-2 md:gap-4 p-2 md:p-4"
                  style={{ width: 'max-content' }}
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...selectedImages, ...selectedImages].map((image, index) => (
                    <motion.div
                      key={`row1-${index}`}
                      className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden"
                      whileHover={{ 
                        scale: 1.1, 
                        zIndex: 50,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={image}
                        alt={`Impact ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Second row - sliding right */}
                <motion.div
                  className="flex gap-2 md:gap-4 p-2 md:p-4"
                  style={{ width: 'max-content' }}
                  animate={{
                    x: ['-50%', '0%'],
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...selectedImages, ...selectedImages].map((image, index) => (
                    <motion.div
                      key={`row2-${index}`}
                      className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden"
                      whileHover={{ 
                        scale: 1.1, 
                        zIndex: 50,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={image}
                        alt={`Impact ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Third row - sliding left (faster) */}
                <motion.div
                  className="flex gap-2 md:gap-4 p-2 md:p-4"
                  style={{ width: 'max-content' }}
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...selectedImages, ...selectedImages].map((image, index) => (
                    <motion.div
                      key={`row3-${index}`}
                      className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden"
                      whileHover={{ 
                        scale: 1.1, 
                        zIndex: 50,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img
                        src={image}
                        alt={`Impact ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Student Stories */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Student Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentStories.map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-2xl border-2 shadow-md ${
                    isDarkMode 
                      ? "bg-[#1A1A1A] border-[#D4AF37] text-[#F5F5F5]" 
                      : "bg-white border-[#1E3A5F]"
                  }`}
                >
                  <Lightbulb className="w-8 h-8 mb-4 text-[#D4AF37]" />
                  <p className={`text-lg italic mb-4 leading-relaxed ${
                    isDarkMode ? "text-white" : "text-[#2C2C2C]"
                  }`}>
                    "{story.quote}"
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? "text-white/70" : "text-[#808080]"
                  }`}>
                    — {story.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;



