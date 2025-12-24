import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin, Youtube, Music, MessageCircle, Phone, MapPin, Send } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import { getSocialStats } from "../utils/socialStats";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [socialStats, setSocialStats] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  useEffect(() => {
    // Initialize EmailJS
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== "YOUR_PUBLIC_KEY") {
      emailjs.init(publicKey);
    }

    // Fetch social stats
    const fetchStats = async () => {
      setIsLoadingStats(true);
      try {
        const stats = await getSocialStats();
        console.log("Social stats fetched:", stats);
        setSocialStats(stats);
        
        // Log Twitter stats specifically for debugging
        if (stats.twitter) {
          console.log("Twitter stats:", stats.twitter);
        }
      } catch (error) {
        console.error("Error loading social stats:", error);
      } finally {
        setIsLoadingStats(false);
      }
    };
    fetchStats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS service configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is properly configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === "YOUR_SERVICE_ID" || 
          templateId === "YOUR_TEMPLATE_ID" || 
          publicKey === "YOUR_PUBLIC_KEY") {
        throw new Error("EmailJS not configured");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "thebrinkpodcastglobal@gmail.com",
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams);

      if (response.status === 200 || response.text === "OK") {
        setSubmitStatus({ 
          type: "success", 
          message: "Message sent successfully! We'll get back to you soon." 
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      
      // Enhanced fallback: Try mailto link
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:thebrinkpodcastglobal@gmail.com?subject=${subject}&body=${body}`;
      
      // Try to open mailto, but also show error message
      try {
        window.location.href = mailtoLink;
        setSubmitStatus({ 
          type: "info", 
          message: "EmailJS is not configured. Opening your email client to send the message. Please configure EmailJS in your .env file for automatic email delivery." 
        });
      } catch (mailtoError) {
        setSubmitStatus({ 
          type: "error", 
          message: "Unable to send message. Please email us directly at thebrinkpodcastglobal@gmail.com or configure EmailJS in your environment variables." 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom icons for platforms not in lucide-react
  const SpotifyIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.419.34-.66.719-.54 4.56 1.021 8.52 1.661 11.64 1.92.42.06.72.42.66.84-.06.48-.24.84-.66.84zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.22-2.58-12.061-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.9 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.141c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.78-1.381 4.08-1.26 11.04-1.02 15.24 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );

  const ApplePodcastIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.2c-4.638 0-8.4 3.762-8.4 8.4s3.762 8.4 8.4 8.4 8.4-3.762 8.4-8.4S16.638 3.6 12 3.6zm0 1.2c3.978 0 7.2 3.222 7.2 7.2S15.978 19.2 12 19.2 4.8 15.978 4.8 12 8.022 4.8 12 4.8zm0 1.2c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 1.2c2.651 0 4.8 2.149 4.8 4.8S14.651 15.6 12 15.6 7.2 13.451 7.2 10.8 9.349 6 12 6zm0 1.2c-1.988 0-3.6 1.612-3.6 3.6S10.012 12 12 12s3.6-1.612 3.6-3.6S13.988 7.2 12 7.2z"/>
    </svg>
  );

  const TikTokIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/brinkwithgodbless/", label: "Instagram", stat: socialStats?.instagram?.followers },
    { icon: Twitter, href: "https://x.com/BGodbless25", label: "Twitter", stat: socialStats?.twitter?.followers },
    { icon: Linkedin, href: "https://www.linkedin.com/company/br-nk-with-godbless/", label: "LinkedIn", stat: socialStats?.linkedin?.followers },
    { icon: Youtube, href: "https://www.youtube.com/@brinkwithGodbless", label: "YouTube", stat: socialStats?.youtube?.subscribers },
    { icon: SpotifyIcon, href: "https://open.spotify.com/show/YOUR_SHOW_ID", label: "Spotify", stat: socialStats?.spotify?.listeners }, // Replace with actual Spotify link
    { icon: ApplePodcastIcon, href: "https://podcasts.apple.com/podcast/YOUR_PODCAST_ID", label: "Apple Podcast", stat: socialStats?.applePodcast?.subscribers }, // Replace with actual Apple Podcast link
    { icon: WhatsAppIcon, href: "https://wa.me/YOUR_PHONE_NUMBER", label: "WhatsApp", stat: null }, // Replace with actual WhatsApp link
    { icon: TikTokIcon, href: "https://www.tiktok.com/@YOUR_TIKTOK_HANDLE", label: "TikTok", stat: socialStats?.tiktok?.followers }, // Replace with actual TikTok link
  ];

  return (
    <div className={`min-h-screen pt-20 relative overflow-hidden transition-colors ${
        isDarkMode 
        ? "bg-[#0F0F0F] text-[#F5F5F5]" 
        : "bg-white text-[#2C2C2C]"
    }`}>
      {/* Top Section Banner - Contact Focused */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/IMG-20251125-WA0011.jpg" 
            alt="Contact Us" 
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-4 md:mb-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D4AF37]/20 border-4 border-[#D4AF37] backdrop-blur-sm">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37]" />
              </div>
            </motion.div>
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-2xl text-white`}>
              Contact <span className="text-[#D4AF37] drop-shadow-lg">Us</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-white mb-4`}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`flex items-center space-x-2 ${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">thebrinkpodcastglobal@gmail.com</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className={`flex items-center space-x-2 ${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm">Send us a message below</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/10"
                }`}>
                  <Send className={`w-6 h-6 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                  }`} />
                </div>
                <h2 className={`text-2xl font-semibold ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Send us a Message
                </h2>
              </div>
              <p className={`text-sm mb-6 ${
                isDarkMode ? "text-white/70" : "text-[#2C2C2C]"
              }`}>
                Fill out the form below and we'll get back to you within 24-48 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors ${
                      isDarkMode 
                        ? "bg-[#1A1A1A] border-[#D4AF37]/30 text-[#F5F5F5] placeholder-[#B0B0B0] hover:border-[#D4AF37]/50" 
                        : "bg-white border-[#808080] text-[#2C2C2C] placeholder-[#808080] hover:border-[#1E3A5F]"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors ${
                      isDarkMode 
                        ? "bg-[#1A1A1A] border-[#D4AF37]/30 text-[#F5F5F5] placeholder-[#B0B0B0] hover:border-[#D4AF37]/50" 
                        : "bg-white border-[#808080] text-[#2C2C2C] placeholder-[#808080] hover:border-[#1E3A5F]"
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
                  }`}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors ${
                      isDarkMode 
                        ? "bg-[#1A1A1A] border-[#D4AF37]/30 text-[#F5F5F5] placeholder-[#B0B0B0] hover:border-[#D4AF37]/50" 
                        : "bg-white border-[#808080] text-[#2C2C2C] placeholder-[#808080] hover:border-[#1E3A5F]"
                    }`}
                  />
                </div>
                {submitStatus.message && (
                  <div className={`p-4 rounded-lg mb-4 ${
                    submitStatus.type === "success" 
                      ? "bg-green-500/20 text-green-500 border border-green-500/30"
                      : submitStatus.type === "error"
                      ? "bg-red-500/20 text-red-500 border border-red-500/30"
                      : "bg-blue-500/20 text-blue-500 border border-blue-500/30"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-6 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                    <Mail className={`w-6 h-6 mt-1 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                    }`} />
                    <div>
                      <p className={`font-medium ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>Email</p>
                      <a href="mailto:thebrinkpodcastglobal@gmail.com" className={`hover:text-[#D4AF37] transition-colors ${
                        isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
                      }`}>
                        thebrinkpodcastglobal@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Stats - Enhanced Display */}
              <div>
                <h2 className={`text-2xl font-semibold mb-4 md:mb-6 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  Connect With Us
                </h2>
                <p className={`text-sm mb-6 ${
                  isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"
                }`}>
                  Follow us on social media and stay connected with our community
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.02 }}
                      className={`p-4 md:p-6 rounded-xl border-2 text-center shadow-md transition-all ${
                      isDarkMode 
                        ? "bg-[#1A1A1A] border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#F5F5F5]" 
                        : "bg-white border-[#1E3A5F]/30 hover:border-[#1E3A5F]"
                      }`}
                    >
                      {typeof social.icon === 'function' ? (
                        <div className={`mx-auto mb-2 ${
                          isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                        }`}>
                          <social.icon />
                        </div>
                      ) : (
                        <social.icon className={`w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 ${
                          isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                        }`} />
                      )}
                      <p className={`text-xs uppercase tracking-wider mb-1 ${
                        isDarkMode ? "text-[#808080]" : "text-[#808080]"
                      }`}>
                        {social.label}
                      </p>
                      <p className={`text-sm md:text-base font-semibold ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>
                        {isLoadingStats ? (
                          <span className="text-xs animate-pulse">Loading...</span>
                        ) : (
                          social.stat || "—"
                        )}
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

