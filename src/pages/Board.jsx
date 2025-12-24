import { motion } from "framer-motion";
import { User, Award, Briefcase, Users } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Board = () => {
  const { isDarkMode } = useTheme();

  const leadership = [
    {
      role: "Founding Director",
      name: "Godbless Pelpuo",
      title: "Founder of BR!NK, Speaker, Youth Development Leader",
      icon: User
    }
  ];

  const boardMembers = [
    {
      role: "Chairperson",
      name: "Board Member",
      title: "Provides strategic direction and governance",
      icon: Award
    },
    {
      role: "Treasurer",
      name: "Board Member",
      title: "Oversees financial strategy and accountability",
      icon: Briefcase
    },
    {
      role: "Secretary",
      name: "Board Member",
      title: "Keeps organizational records and minutes",
      icon: User
    },
    {
      role: "Program Development Advisor",
      name: "Board Member",
      title: "Provides guidance on curriculum and events",
      icon: Users
    },
    {
      role: "Community Engagement Advisor",
      name: "Board Member",
      title: "Builds partnerships and outreach strategies",
      icon: Users
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
            alt="Board of Directors" 
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
              Board of <span className="text-[#D4AF37] drop-shadow-lg">Directors</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-white`}>
              Our leadership and governance structure
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

          {/* Leadership */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((member, index) => {
                const Icon = member.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-8 rounded-2xl ${isDarkMode ? "bg-[#1A1A1A] text-[#F5F5F5]" : "bg-[#1E3A5F] text-white"} text-center shadow-lg`}
                  >
                    <Icon className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]" />
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm uppercase tracking-wider mb-3 text-[#D4AF37]">
                      {member.role}
                    </p>
                    <p className={`${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}>
                      {member.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Board Members */}
          <motion.div variants={itemVariants}>
            <h2 className={`text-2xl md:text-3xl font-semibold mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => {
                const Icon = member.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`p-8 rounded-2xl border-2 shadow-md ${
                      isDarkMode 
                        ? "bg-[#1A1A1A] border-[#D4AF37] text-[#F5F5F5]" 
                        : "bg-white border-[#1E3A5F]"
                    }`}
                  >
                    <Icon className={`w-12 h-12 mb-4 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                    }`} />
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-[#1E3A5F]"
                    }`}>
                      {member.role}
                    </h3>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"
                    }`}>
                      {member.name}
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? "text-[#808080]" : "text-[#808080]"
                    }`}>
                      {member.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Board;



