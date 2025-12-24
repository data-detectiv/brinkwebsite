import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin, Youtube, Music, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

// Custom icons for platforms not in lucide-react
const SpotifyIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.419.34-.66.719-.54 4.56 1.021 8.52 1.661 11.64 1.92.42.06.72.42.66.84-.06.48-.24.84-.66.84zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.22-2.58-12.061-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.9 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.141c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.78-1.381 4.08-1.26 11.04-1.02 15.24 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const ApplePodcastIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.2c-4.638 0-8.4 3.762-8.4 8.4s3.762 8.4 8.4 8.4 8.4-3.762 8.4-8.4S16.638 3.6 12 3.6zm0 1.2c3.978 0 7.2 3.222 7.2 7.2S15.978 19.2 12 19.2 4.8 15.978 4.8 12 8.022 4.8 12 4.8zm0 1.2c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 1.2c2.651 0 4.8 2.149 4.8 4.8S14.651 15.6 12 15.6 7.2 13.451 7.2 10.8 9.349 6 12 6zm0 1.2c-1.988 0-3.6 1.612-3.6 3.6S10.012 12 12 12s3.6-1.612 3.6-3.6S13.988 7.2 12 7.2z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/brinkwithgodbless/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/BGodbless25", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/br-nk-with-godbless/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@brinkwithGodbless", label: "YouTube" },
    { icon: SpotifyIcon, href: "https://open.spotify.com/show/YOUR_SHOW_ID", label: "Spotify" }, // Replace with actual Spotify link
    { icon: ApplePodcastIcon, href: "https://podcasts.apple.com/podcast/YOUR_PODCAST_ID", label: "Apple Podcast" }, // Replace with actual Apple Podcast link
    { icon: WhatsAppIcon, href: "https://wa.me/YOUR_PHONE_NUMBER", label: "WhatsApp" }, // Replace with actual WhatsApp link
    { icon: TikTokIcon, href: "https://www.tiktok.com/@YOUR_TIKTOK_HANDLE", label: "TikTok" }, // Replace with actual TikTok link
    { icon: Mail, href: "mailto:thebrinkpodcastglobal@gmail.com", label: "Email" },
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
    <footer className={`${isDarkMode ? "bg-[#0F0F0F] text-[#F5F5F5]" : "bg-[#1E3A5F] text-white"} border-t border-[#D4AF37]/30`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
              BR!NK
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}>
              Empowering Growth, Leadership and Purpose in the Next Generation.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`p-2 rounded-full transition-colors hover:text-[#D4AF37] hover:bg-white/10 ${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}
                  aria-label={social.label}
                >
                  {typeof social.icon === 'function' ? (
                    <social.icon />
                  ) : (
                    <social.icon size={20} />
                  )}
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
                  className={`text-sm transition-colors hover:text-[#D4AF37] ${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}
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
            <div className={`text-sm space-y-2 ${isDarkMode ? "text-[#B0B0B0]" : "text-white/80"}`}>
              <p>
                <a href="mailto:thebrinkpodcastglobal@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                thebrinkpodcastglobal@gmail.com
                </a>
              </p>
              <p className="mt-4">
                BR!NK is a registered nonprofit working toward federal 501(c)(3) approval.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${isDarkMode ? "border-[#242424] text-[#808080]" : "border-white/20 text-white/60"} text-center text-sm`}>
          <p>&copy; {new Date().getFullYear()} BR!NK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

