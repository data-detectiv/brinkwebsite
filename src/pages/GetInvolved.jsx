import { motion } from "framer-motion";
import { HandHeart, Users, Building2, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const GetInvolved = () => {
  const { isDarkMode } = useTheme();

  const involvementOptions = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Support our workshops, events, or student teams. Make a direct impact on the next generation of leaders.",
      cta: "Learn More",
      link: "/contact"
    },
    {
      icon: Users,
      title: "Become a Mentor",
      description: "Guide a college student toward clarity, confidence, and career alignment. Share your experience and wisdom.",
      cta: "Apply Now",
      link: "/contact"
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description: "Colleges, companies, and organizations collaborate with BR!NK to empower youth and create lasting change.",
      cta: "Partner",
      link: "/contact"
    },
    {
      icon: Calendar,
      title: "Sponsor the BR!NK Summit",
      description: "Support one of the largest purpose-focused student gatherings in the region. Help us create transformational experiences.",
      cta: "Sponsor",
      link: "/donate"
    },
    {
      icon: Mail,
      title: "Join Our Newsletter",
      description: "Stay updated with stories, opportunities, and events. Be the first to know about new programs and initiatives.",
      cta: "Subscribe",
      link: "/contact"
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
              Get <span className="text-[#D4AF37]">Involved</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
            }`}>
              Join us in empowering the next generation. There are many ways to make an impact.
            </p>
          </motion.div>

          {/* Involvement Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-8 rounded-2xl border-2 flex flex-col shadow-lg ${
                  isDarkMode 
                    ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                    : "bg-white border-[#1E3A5F]"
                }`}
              >
                <div className="p-4 rounded-xl w-fit mb-4 bg-[#D4AF37]/20 border-2 border-[#D4AF37]">
                  <option.icon className="w-8 h-8 text-[#1E3A5F]" />
                </div>
                <h2 className={`text-2xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  {option.title}
                </h2>
                <p className={`mb-6 flex-grow leading-relaxed ${
                  isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                }`}>
                  {option.description}
                </p>
                <Link to={option.link}>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                  >
                    {option.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;



