import { motion } from "framer-motion";
import { Target, Eye, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const About = () => {
  const { isDarkMode } = useTheme();

  const coreValues = [
    {
      icon: Target,
      title: "Purpose",
      description: "Guiding college/high-school students to uncover their identity, passion, and calling."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Encouraging disciplined, consistent self-development across personal, academic, and professional life."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Equipping college/high-school students to lead through service, vision, and impact."
    },
    {
      icon: Users,
      title: "Community",
      description: "Fostering supportive, intergenerational networks where mentorship and collaboration thrive."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Operating with transparency, accountability, and authenticity in every program and partnership."
    }
  ];


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
            src="/assets/Headshots09-01-25-29.jpg" 
            alt="About BR!NK" 
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
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-2xl ${
              isDarkMode ? "text-white" : "text-white"
            }`}>
              About <span className="text-[#D4AF37] drop-shadow-lg">BR!NK</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg ${
              isDarkMode ? "text-white" : "text-white"
            }`}>
              Empowering the next generation to lead with clarity, purpose, and impact
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

          {/* Mission & Vision Section - Modern Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Mission */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative overflow-hidden"
            >
              <div className={`p-8 md:p-10 rounded-3xl shadow-2xl relative ${
                isDarkMode 
                  ? "bg-[#1A1A1A] border border-[#D4AF37]/40" 
                  : "bg-[#1E3A5F] text-white"
              }`}>
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl ${
                      isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/20"
                    }`}>
                      <Target className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      Our Mission
                    </h2>
                  </div>
                  <p className={`text-sm md:text-base lg:text-lg leading-relaxed font-light ${isDarkMode ? "text-[#F5F5F5]" : "text-white/95"}`}>
                    BR!NK empowers college/high-school students to live with clarity, purpose, and leadership. We provide mentorship, skill-based learning, and transformational experiences that help individuals discover who they are, develop emotional and practical intelligence, and lead meaningful change in their communities and careers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative overflow-hidden"
            >
              <div className={`p-8 md:p-10 rounded-3xl shadow-2xl relative ${
                isDarkMode 
                  ? "bg-[#1A1A1A] border border-[#D4AF37]/40" 
                  : "bg-[#2C2C2C] text-white"
              }`}>
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -ml-16 -mt-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full -mr-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl ${
                      isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/20"
                    }`}>
                      <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      Our Vision
                    </h2>
                  </div>
                  <p className={`text-sm md:text-base lg:text-lg leading-relaxed font-light ${isDarkMode ? "text-[#F5F5F5]" : "text-white/95"}`}>
                    A generation of purpose-driven college/high-school students who rise above confusion and complacency to build lives—and a world—defined by conviction, character, and confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Our <span className="text-[#D4AF37]">Core Values</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-6"></div>
              <p className={`text-base md:text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"
              }`}>
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`p-6 md:p-8 rounded-2xl shadow-lg transition-all ${
                    isDarkMode 
                      ? "bg-[#1A1A1A] text-[#F5F5F5] border border-[#D4AF37]/30 hover:border-[#D4AF37]" 
                      : "bg-[#1E3A5F] text-white shadow-xl hover:shadow-2xl"
                  }`}
                >
                  <div className={`p-4 rounded-xl w-fit mb-6 ${
                    isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/20"
                  }`}>
                    <value.icon className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Teams and Board Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Our <span className="text-[#D4AF37]">Organization</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Link to="/teams">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-8 md:p-10 rounded-3xl border-2 cursor-pointer shadow-xl hover:shadow-2xl transition-all ${
                    isDarkMode 
                      ? "bg-[#1A1A1A] border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#F5F5F5]" 
                      : "bg-[#1E3A5F] text-white border-[#D4AF37] hover:border-[#D4AF37]"
                  }`}
                >
                  <div className={`p-4 rounded-2xl w-fit mb-6 ${
                    isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/20"
                  }`}>
                    <Users className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Our Team</h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 ${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
                    Meet the passionate individuals driving BR!NK's mission to empower the next generation.
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[#D4AF37] font-semibold uppercase tracking-wider text-sm"
                  >
                    Learn More →
                  </motion.div>
                </motion.div>
              </Link>
              <Link to="/board">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-8 md:p-10 rounded-3xl border-2 cursor-pointer shadow-xl hover:shadow-2xl transition-all ${
                    isDarkMode 
                      ? "bg-[#1E3A5F] border-[#D4AF37]/40 hover:border-[#D4AF37] text-white" 
                      : "bg-[#2C2C2C] text-white border-[#D4AF37] hover:border-[#D4AF37]"
                  }`}
                >
                  <div className={`p-4 rounded-2xl w-fit mb-6 ${
                    isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/20"
                  }`}>
                    <Shield className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Board of Directors</h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 ${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
                    Learn about our leadership and governance structure.
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[#D4AF37] font-semibold uppercase tracking-wider text-sm"
                  >
                    Learn More →
                  </motion.div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;



