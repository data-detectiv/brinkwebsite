import { motion } from "framer-motion";
import { Mic, Users, Compass, Calendar, BookOpen, ExternalLink, Video, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Programs = () => {
  const { isDarkMode } = useTheme();

  const solutions = [
    {
      icon: Mic,
      title: "Podcast – BR!NK with Godbless",
      description: "Real conversations with leaders and changemakers translating purpose into action.",
      link: "https://www.youtube.com/@BRINKwithGodbless" // Replace with actual podcast link
    },
    {
      icon: Users,
      title: "Workshops & Webinars",
      description: "Practical sessions on personal growth, leadership, emotional intelligence, and resilience.",
      link: "/events"
    },
    {
      icon: Compass,
      title: "Mentorship Circles",
      description: "Structured mentor–student groups fostering accountability and long-term development.",
      link: "/get-involved"
    },
    {
      icon: Calendar,
      title: "BR!NK Leadership Summit",
      description: "Annual gatherings activating clarity, confidence, and community.",
      link: "/events", // This will link to events page where registration is
      isSummit: true
    },
    {
      icon: BookOpen,
      title: "Resource Hub",
      description: "Free digital guides and toolkits for continuous learning.",
      link: "/resources"
    }
  ];

  const previousEvents = [
    {
      title: "BR!NK Summit 2024",
      description: "Our inaugural summit brought together 200+ students for a day of transformation.",
      image: "/assets/IMG-20251125-WA0024.jpg",
      video: "https://www.youtube.com/embed/r0430XuSxUY", // Replace with actual event video
      link: "/events"
    },
    {
      title: "Young Leaders Roundtable",
      description: "Monthly gatherings where students share experiences and insights.",
      image: "/assets/IMG-20251125-WA0025.jpg",
      link: "/events"
    },
    {
      title: "Workshop Series",
      description: "Monthly workshops covering leadership skills and purpose discovery.",
      image: "/assets/IMG-20251125-WA0026.jpg",
      link: "/events"
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
            alt="BR!NK Programs" 
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
            The BR!NK <span className="text-[#D4AF37]">Solution</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
            }`}>
              A youth-led ecosystem where media, mentorship, and education intersect.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="space-y-8">
            {solutions.map((solution, index) => {
              const ContentWrapper = solution.link ? (solution.link.startsWith('http') ? 'a' : Link) : 'div';
              const linkProps = solution.link ? (solution.link.startsWith('http') ? { href: solution.link, target: '_blank', rel: 'noopener noreferrer' } : { to: solution.link }) : {};
              
              return (
                <ContentWrapper key={index} {...linkProps} className="block">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className={`p-8 rounded-2xl text-white shadow-lg cursor-pointer ${
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
                        <div className="flex items-center space-x-2 mb-3">
                          <h2 className="text-2xl font-semibold text-[#D4AF37]">
                            {solution.title}
                          </h2>
                          {solution.link && (
                            <ExternalLink className="w-5 h-5 text-[#D4AF37]" />
                          )}
                          {solution.isSummit && (
                            <span className="text-xs bg-[#D4AF37] text-black px-2 py-1 rounded uppercase font-semibold">
                              Register Now
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-white/90 leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </ContentWrapper>
              );
            })}
          </div>

          {/* Previous Events Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h2 className={`text-4xl font-semibold text-center mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Previous Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {previousEvents.map((event, index) => (
                <Link key={index} to={event.link}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`rounded-2xl overflow-hidden shadow-lg ${
                      isDarkMode 
                        ? "bg-[#2C2C2C] border border-[#D4AF37]/30" 
                        : "bg-white border-2 border-[#1E3A5F]"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      {event.video ? (
                        <iframe
                          className="w-full h-full"
                          src={event.video}
                          title={event.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-[#D4AF37]/20 flex items-center justify-center"><svg class="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                          }}
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>
                        {event.title}
                      </h3>
                      <p className={`text-sm ${
                        isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                      }`}>
                        {event.description}
                      </p>
                      <div className="mt-4 flex items-center text-[#D4AF37] text-sm font-semibold">
                        Learn More →
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

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



