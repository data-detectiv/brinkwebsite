import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/brinkleadership", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/brinkleadership", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/brinkleadership", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@brinkleadership", label: "YouTube" },
    { icon: Mail, href: "mailto:brinkleadership@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Teams", path: "/teams" },
    { name: "Board", path: "/board" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Donate", path: "/donate" },
    { name: "Stories", path: "/stories" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#1E3A5F] text-white border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
              BR!NK
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Empowering Growth, Leadership and Purpose in the Next Generation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2 rounded-full transition-colors text-white/80 hover:text-[#D4AF37] hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#D4AF37]">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm transition-colors text-white/80 hover:text-[#D4AF37]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#D4AF37]">
              Contact
            </h4>
            <div className="text-sm space-y-2 text-white/80">
              <p>
                <a href="mailto:brinkleadership@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                  brinkleadership@gmail.com
                </a>
              </p>
              <p className="mt-4">
                BR!NK is a registered nonprofit working toward federal 501(c)(3) approval.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} BR!NK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

