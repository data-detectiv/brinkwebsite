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
              Board of <span className="text-[#D4AF37]">Directors</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
          </motion.div>

          {/* Leadership */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-3xl font-semibold mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2C2C2C] text-white text-center shadow-lg"
                >
                  <member.icon className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]" />
                  <h3 className="text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm uppercase tracking-wider mb-3 text-[#D4AF37]">
                    {member.role}
                  </p>
                  <p className="text-white/80">
                    {member.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Board Members */}
          <motion.div variants={itemVariants}>
            <h2 className={`text-3xl font-semibold mb-8 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-8 rounded-2xl border-2 shadow-md ${
                    isDarkMode 
                      ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                      : "bg-white border-[#1E3A5F]"
                  }`}
                >
                  <member.icon className={`w-12 h-12 mb-4 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                  }`} />
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-[#1E3A5F]"
                  }`}>
                    {member.role}
                  </h3>
                  <p className={`text-sm mb-3 ${
                    isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                  }`}>
                    {member.name}
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? "text-white/60" : "text-[#808080]"
                  }`}>
                    {member.title}
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

export default Board;



