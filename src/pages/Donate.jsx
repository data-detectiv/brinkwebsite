import { motion } from "framer-motion";
import { Heart, DollarSign, GraduationCap, BookOpen, Users, Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Donate = () => {
  const { isDarkMode } = useTheme();

  const donationUses = [
    { icon: GraduationCap, text: "Student scholarships" },
    { icon: BookOpen, text: "Workshop materials & curriculum" },
    { icon: Calendar, text: "Event costs (BR!NK Summit, roundtables, etc.)" },
    { icon: Users, text: "Mentor development" },
    { icon: Heart, text: "Student-led community projects" }
  ];

  const waysToGive = [
    { type: "One-time donation", description: "Make a single contribution to support BR!NK's mission" },
    { type: "Monthly support", description: "Become a sustaining partner with recurring donations" },
    { type: "Corporate sponsorship", description: "Partner with BR!NK as a corporate sponsor" },
    { type: "In-kind contributions", description: "Donate services, materials, or resources" },
    { type: "Scholarship fund contributions", description: "Directly support student access to programs" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
        isDarkMode 
        ? "bg-[#0F0F0F] text-[#F5F5F5]" 
        : "bg-white text-[#2C2C2C]"
    } pt-20`}>
      {/* Top Section Banner - With Picture */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/IMG-20251125-WA0014.jpg" 
            alt="Donate & Support" 
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
              Donate & <span className="text-[#D4AF37] drop-shadow-lg">Support</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-white`}>
              Your contribution transforms lives and empowers the next generation
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

          {/* Why Give */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className={`p-8 rounded-2xl ${
              isDarkMode 
                ? "bg-[#1A1A1A] border border-[#D4AF37]/30" 
                : "bg-white border-2 border-[#1E3A5F]"
            }`}>
              <div className="flex items-start space-x-4 mb-4">
                <Heart className="w-8 h-8 text-[#D4AF37]" />
                <h2 className={`text-2xl md:text-3xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Why Give to BR!NK?
                </h2>
              </div>
              <p className={`text-base md:text-lg leading-relaxed ml-12 ${
                isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
              }`}>
                Your support transforms lives. Every contribution helps students access mentorship, leadership training, emotional intelligence development, and transformational experiences.
              </p>
            </div>
          </motion.div>

          {/* Where Your Money Goes */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Where Your Money Goes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {donationUses.map((use, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className={`p-6 rounded-xl border-2 flex items-center space-x-4 ${
                    isDarkMode 
                      ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                      : "bg-white border-[#1E3A5F]"
                  }`}
                >
                  <use.icon className="w-6 h-6 text-[#D4AF37]" />
                  <span className={isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"}>{use.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ways to Give */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Ways to Give
            </h2>
            <div className="space-y-4">
              {waysToGive.map((way, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className={`p-6 rounded-xl border-2 ${
                    isDarkMode 
                      ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                      : "bg-white border-[#1E3A5F]"
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? "text-white" : "text-[#1E3A5F]"
                  }`}>
                    {way.type}
                  </h3>
                  <p className={isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"}>
                    {way.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tax Information */}
          <motion.div variants={itemVariants} className={`p-8 rounded-2xl ${
            isDarkMode 
              ? "bg-[#D4AF37]/20 border border-[#D4AF37]/30" 
              : "bg-[#D4AF37]/10 border border-[#D4AF37]"
          }`}>
            <div className="flex items-start space-x-4">
              <DollarSign className="w-8 h-8 text-[#D4AF37]" />
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Tax Information
                </h3>
                <p className={isDarkMode ? "text-white/90" : "text-[#2C2C2C]"}>
                  BR!NK is a registered nonprofit working toward federal 501(c)(3) approval. All donations will be tax-deductible upon approval.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="mailto:brinkleadership@gmail.com?subject=Donation Inquiry"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300"
            >
              Contact Us to Donate
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donate;



