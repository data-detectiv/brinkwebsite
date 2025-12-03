import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ArrowRight } from "lucide-react";
import HeroSection from "../components/Sections/HeroSection";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Home = () => {
  const { isDarkMode } = useTheme();

  // Sample blog posts - replace with actual blog data
  const blogPosts = [
    {
      id: 1,
      title: "Discovering Your Purpose: A Student's Journey",
      excerpt: "How one student found clarity and direction through BR!NK's mentorship program.",
      date: "March 15, 2024",
      category: "Student Stories",
      image: "/assets/IMG-20251125-WA0009.jpg",
      link: "/resources"
    },
    {
      id: 2,
      title: "Leadership Skills for the Modern World",
      excerpt: "Essential leadership competencies every college student should develop.",
      date: "March 10, 2024",
      category: "Leadership",
      image: "/assets/IMG-20251125-WA0010.jpg",
      link: "/resources"
    },
    {
      id: 3,
      title: "BR!NK Summit 2024: A Transformational Experience",
      excerpt: "Highlights from our annual summit that brought together 200+ students.",
      date: "March 5, 2024",
      category: "Events",
      image: "/assets/IMG-20251125-WA0024.jpg",
      link: "/events"
    },
    {
      id: 4,
      title: "The Power of Mentorship in Student Development",
      excerpt: "Why mentorship matters and how it transforms lives.",
      date: "February 28, 2024",
      category: "Mentorship",
      image: "/assets/IMG-20251125-WA0011.jpg",
      link: "/get-involved"
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Blogs and Posts Section */}
      <section className={`py-20 transition-colors ${
        isDarkMode 
          ? "bg-[#1E3A5F] text-white" 
          : "bg-white text-[#2C2C2C]"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Latest <span className="text-[#D4AF37]">Blogs & Posts</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-6"></div>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
              }`}>
                Stay updated with our latest stories, insights, and resources.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} to={post.link}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`rounded-2xl overflow-hidden shadow-lg h-full flex flex-col ${
                      isDarkMode 
                        ? "bg-[#2C2C2C] border border-[#D4AF37]/30" 
                        : "bg-white border-2 border-[#1E3A5F]"
                    }`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-[#D4AF37]/20 flex items-center justify-center"><svg class="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                        }}
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span className={`text-xs ${
                          isDarkMode ? "text-white/70" : "text-[#808080]"
                        }`}>
                          {post.date}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                        {post.category}
                      </span>
                      <h3 className={`text-xl font-semibold mb-3 ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>
                        {post.title}
                      </h3>
                      <p className={`text-sm mb-4 flex-grow ${
                        isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                      }`}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-[#D4AF37] font-semibold text-sm">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* View All CTA */}
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Link to="/resources">
                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300"
                >
                  View All Resources
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;



