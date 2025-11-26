import { motion } from "framer-motion";
import { Users, Target, TrendingUp, Heart, Award, Lightbulb } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import ImageCarousel from "../components/ImageCarousel";

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
    { number: "Annual", label: "BR!NK Leadership Summit", icon: Award, description: "Leading youth purpose conference" },
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
        ? "bg-[#2C2C2C] text-white" 
        : "bg-white text-[#2C2C2C]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
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
              Impact <span className="text-[#D4AF37]">Goals</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
          </motion.div>

          {/* Impact Goals */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-3xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Our Vision for Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2C2C2C] text-white shadow-lg"
                >
                  <goal.icon className="w-12 h-12 mb-4 text-[#D4AF37]" />
                  <div className="text-4xl font-bold mb-2 text-[#D4AF37]">
                    {goal.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">
                    {goal.label}
                  </div>
                  <div className="text-white/80 text-sm">
                    {goal.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Gallery Carousel */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-3xl font-semibold text-center mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Our Impact in Action
            </h2>
            <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageCarousel images={selectedImages} autoSlideInterval={4000} />
            </div>
          </motion.div>

          {/* Student Stories */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-3xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Student Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studentStories.map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-2xl border-2 shadow-md ${
                    isDarkMode 
                      ? "bg-[#1E3A5F] border-[#D4AF37] text-white" 
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



