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
        ? "bg-[#1E3A5F] text-white" 
        : "bg-white text-[#2C2C2C]"
    }`}>
      {/* Top Section Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode ? "bg-[#2C2C2C]" : "bg-[#1E3A5F]"
        }`}>
          <img 
            src="/assets/brink_logo.jpg" 
            alt="About BR!NK" 
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center ${
          isDarkMode ? "bg-[#1E3A5F]/60" : "bg-white/60"
        }`}>
          <h1 className={`text-4xl md:text-6xl font-bold ${
            isDarkMode ? "text-white" : "text-[#1E3A5F]"
          }`}>
            About <span className="text-[#D4AF37]">BR!NK</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

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

          {/* Teams and Board Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h2 className={`text-4xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Our Organization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/teams">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-8 rounded-2xl border-2 cursor-pointer ${
                    isDarkMode 
                      ? "bg-gradient-to-br from-[#2C2C2C] to-[#1E3A5F] border-[#D4AF37] text-white" 
                      : "bg-gradient-to-br from-[#1E3A5F] to-[#2C2C2C] text-white border-[#D4AF37]"
                  }`}
                >
                  <Users className="w-12 h-12 mb-4 text-[#D4AF37]" />
                  <h3 className="text-2xl font-semibold mb-3">Our Team</h3>
                  <p className="text-white/90 leading-relaxed">
                    Meet the passionate individuals driving BR!NK's mission to empower the next generation.
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-4 text-[#D4AF37] font-semibold uppercase tracking-wider text-sm"
                  >
                    Learn More →
                  </motion.div>
                </motion.div>
              </Link>
              <Link to="/board">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-8 rounded-2xl border-2 cursor-pointer ${
                    isDarkMode 
                      ? "bg-gradient-to-br from-[#2C2C2C] to-[#1E3A5F] border-[#D4AF37] text-white" 
                      : "bg-gradient-to-br from-[#1E3A5F] to-[#2C2C2C] text-white border-[#D4AF37]"
                  }`}
                >
                  <Shield className="w-12 h-12 mb-4 text-[#D4AF37]" />
                  <h3 className="text-2xl font-semibold mb-3">Board of Directors</h3>
                  <p className="text-white/90 leading-relaxed">
                    Learn about our leadership and governance structure.
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-4 text-[#D4AF37] font-semibold uppercase tracking-wider text-sm"
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



