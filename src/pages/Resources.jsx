import { motion } from "framer-motion";
import { FileText, Download, BookOpen, Brain, Heart, Target } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Resources = () => {
  const { isDarkMode } = useTheme();

  const resources = [
    {
      icon: Target,
      title: "Purpose Blueprint Worksheet",
      description: "A guided worksheet to help you discover your values, strengths, and life direction.",
      category: "Purpose Discovery"
    },
    {
      icon: Brain,
      title: "Leadership Skills Toolkit",
      description: "Practical resources for developing communication, critical thinking, and leadership competencies.",
      category: "Leadership"
    },
    {
      icon: BookOpen,
      title: "College Success Resources",
      description: "Guides and tips for navigating college life, academics, and career preparation.",
      category: "Student Success"
    },
    {
      icon: Heart,
      title: "Mental Wellness & Emotional Intelligence Guides",
      description: "Resources for developing emotional intelligence and maintaining mental wellness.",
      category: "Wellness"
    },
    {
      icon: FileText,
      title: "PDF Downloads from Workshops",
      description: "Access materials and handouts from our workshops and training sessions.",
      category: "Workshop Materials"
    }
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
              Resource <span className="text-[#D4AF37]">Center</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
            }`}>
              Free resources to support your journey of purpose, leadership, and personal growth.
            </p>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl border-2 flex flex-col ${
                  isDarkMode 
                    ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                    : "bg-white border-[#1E3A5F]"
                }`}
              >
                <div className={`p-4 rounded-xl w-fit mb-4 ${
                  isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/10"
                }`}>
                  <resource.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <span className="text-xs uppercase tracking-wider mb-2 text-[#D4AF37]">
                  {resource.category}
                </span>
                <h2 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  {resource.title}
                </h2>
                <p className={`mb-6 flex-grow leading-relaxed ${
                  isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                }`}>
                  {resource.description}
                </p>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center space-x-2 border-2 px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isDarkMode 
                      ? "border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#000000]" 
                      : "border-[#1E3A5F] hover:bg-[#1E3A5F] text-[#1E3A5F] hover:text-white"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;



