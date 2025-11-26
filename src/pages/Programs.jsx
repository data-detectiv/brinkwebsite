import { motion } from "framer-motion";
import { Mic, Users, Compass, Calendar, BookOpen } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Programs = () => {
  const { isDarkMode } = useTheme();

  const solutions = [
    {
      icon: Mic,
      title: "Podcast – BR!NK with Godbless",
      description: "Real conversations with leaders and changemakers translating purpose into action."
    },
    {
      icon: Users,
      title: "Workshops & Webinars",
      description: "Practical sessions on personal growth, leadership, emotional intelligence, and resilience."
    },
    {
      icon: Compass,
      title: "Mentorship Circles",
      description: "Structured mentor–student groups fostering accountability and long-term development."
    },
    {
      icon: Calendar,
      title: "BR!NK Leadership Summit",
      description: "Annual gatherings activating clarity, confidence, and community."
    },
    {
      icon: BookOpen,
      title: "Resource Hub",
      description: "Free digital guides and toolkits for continuous learning."
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
              The BR!NK <span className="text-[#D4AF37]">Solution</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-6"></div>
            <p className={`text-lg mt-6 max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
            }`}>
              A youth-led ecosystem where media, mentorship, and education intersect.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`p-8 rounded-2xl text-white shadow-lg ${
                  isDarkMode 
                    ? "bg-gradient-to-r from-[#2C2C2C] to-[#1E3A5F]" 
                    : "bg-gradient-to-r from-[#1E3A5F] to-[#2C2C2C]"
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-[#D4AF37]/20 border-2 border-[#D4AF37]">
                    <solution.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-3 text-[#D4AF37]">
                      {solution.title}
                    </h2>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why BR!NK Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-2xl bg-[#D4AF37] text-[#000000]"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">Why BR!NK?</h2>
            <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
              Founded by students, for students, BR!NK is a relatable, scalable movement transforming confusion into clarity and potential into purpose.
            </p>
            <p className="text-lg text-center max-w-3xl mx-auto mt-4 leading-relaxed font-semibold">
              Our model grows organically: Podcast → Programs → Chapters → Global Impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Programs;



