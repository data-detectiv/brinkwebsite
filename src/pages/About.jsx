import { motion } from "framer-motion";
import { Target, Eye, TrendingUp, Users, Shield, AlertCircle } from "lucide-react";
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

  const problems = [
    {
      icon: AlertCircle,
      title: "Identity Confusion",
      description: "Unsure who they are in a culture of comparison."
    },
    {
      icon: Target,
      title: "Purpose Deficit",
      description: "School teaches skills, not meaning or mission."
    },
    {
      icon: Users,
      title: "Disconnection",
      description: "Digital connectivity without real relationships."
    },
    {
      icon: TrendingUp,
      title: "Leadership Gap",
      description: "Lacking models and tools for leading with impact."
    }
  ];

  return (
    <div className={`min-h-screen pt-20 relative overflow-hidden transition-colors ${
      isDarkMode 
        ? "bg-[#1E3A5F] text-white" 
        : "bg-white text-[#2C2C2C]"
    }`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        >
          <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
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
              About <span className="text-[#D4AF37]">BR!NK</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className={`p-8 rounded-2xl ${
              isDarkMode 
                ? "bg-[#2C2C2C] text-white border border-[#D4AF37]/30" 
                : "bg-[#1E3A5F] text-white"
            }`}>
              <div className="flex items-start space-x-4 mb-4">
                <Target className="w-8 h-8 text-[#D4AF37]" />
                <h2 className="text-3xl font-semibold">
                  Mission Statement
                </h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed ml-12">
                BR!NK empowers college/high-school students to live with clarity, purpose, and leadership. We provide mentorship, skill-based learning, and transformational experiences that help individuals discover who they are, develop emotional and practical intelligence, and lead meaningful change in their communities and careers.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className={`p-8 rounded-2xl border-2 ${
              isDarkMode 
                ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                : "bg-white border-[#1E3A5F]"
            }`}>
              <div className="flex items-start space-x-4 mb-4">
                <Eye className="w-8 h-8 text-[#1E3A5F]" />
                <h2 className={`text-3xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Vision Statement
                </h2>
              </div>
              <p className={`text-lg leading-relaxed ml-12 ${
                isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
              }`}>
                A generation of purpose-driven college/high-school students who rise above confusion and complacency to build lives—and a world—defined by conviction, character, and confidence.
              </p>
            </div>
          </motion.div>

          {/* The Problem */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-4xl font-semibold text-center mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              The Problem
            </h2>
            <p className={`text-lg text-center mb-8 max-w-3xl mx-auto ${
              isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
            }`}>
              Many college/high-school students today feel lost, unmotivated, and unprepared for real life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-xl border ${
                    isDarkMode 
                      ? "bg-[#2C2C2C] border-[#D4AF37]/30" 
                      : "bg-[#808080]/10 border-[#808080]/30"
                  }`}
                >
                  <problem.icon className={`w-10 h-10 mb-4 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                  }`} />
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-[#1E3A5F]"
                  }`}>
                    {problem.title}
                  </h3>
                  <p className={isDarkMode ? "text-white/80" : "text-[#2C2C2C]"}>
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h2 className={`text-4xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 rounded-xl ${
                    isDarkMode 
                      ? "bg-[#2C2C2C] text-white border border-[#D4AF37]/30" 
                      : "bg-[#1E3A5F] text-white"
                  }`}
                >
                  <value.icon className="w-10 h-10 mb-4 text-[#D4AF37]" />
                  <h3 className="text-xl font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/90">
                    {value.description}
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

export default About;



