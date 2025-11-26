import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import { getSocialStats } from "../utils/socialStats";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [socialStats, setSocialStats] = useState(null);

  useEffect(() => {
    getSocialStats().then(setSocialStats);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:brinkleadership@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/brinkleadership", label: "Instagram", stat: socialStats?.instagram?.followers },
    { icon: Twitter, href: "https://twitter.com/brinkleadership", label: "Twitter", stat: socialStats?.twitter?.followers },
    { icon: Linkedin, href: "https://linkedin.com/company/brinkleadership", label: "LinkedIn", stat: socialStats?.linkedin?.followers },
    { icon: Youtube, href: "https://youtube.com/@brinkleadership", label: "YouTube", stat: socialStats?.youtube?.subscribers },
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
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                      isDarkMode 
                        ? "bg-[#2C2C2C] border-[#D4AF37]/30 text-white" 
                        : "bg-white border-[#808080] text-[#2C2C2C]"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                      isDarkMode 
                        ? "bg-[#2C2C2C] border-[#D4AF37]/30 text-white" 
                        : "bg-white border-[#808080] text-[#2C2C2C]"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
                  }`}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                      isDarkMode 
                        ? "bg-[#2C2C2C] border-[#D4AF37]/30 text-white" 
                        : "bg-white border-[#808080] text-[#2C2C2C]"
                    }`}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1 text-[#1E3A5F]" />
                    <div>
                      <p className={`font-medium ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>Email</p>
                      <a href="mailto:brinkleadership@gmail.com" className={`hover:text-[#D4AF37] transition-colors ${
                        isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                      }`}>
                        brinkleadership@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Stats */}
              <div>
                <h2 className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Connect With Us
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.02 }}
                      className={`p-6 rounded-xl border-2 text-center shadow-md ${
                        isDarkMode 
                          ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                          : "bg-white border-[#1E3A5F]"
                      }`}
                    >
                      <social.icon className={`w-8 h-8 mx-auto mb-2 ${
                        isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                      }`} />
                      <p className={`text-xs uppercase tracking-wider mb-1 ${
                        isDarkMode ? "text-white/60" : "text-[#808080]"
                      }`}>
                        {social.label}
                      </p>
                      <p className={`text-lg font-semibold ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>
                        {social.stat || "—"}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

