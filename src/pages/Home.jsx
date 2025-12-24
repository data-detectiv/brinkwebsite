import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, ArrowRight, Target, Users, Heart, TrendingUp, CheckCircle, Quote, Star } from "lucide-react";
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

  const coreValues = [
    {
      icon: Target,
      title: "Purpose",
      description: "Guiding students to uncover their identity, passion, and calling."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Encouraging disciplined, consistent self-development across all areas of life."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Equipping students to lead through service, vision, and impact."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Fostering supportive networks where mentorship and collaboration thrive."
    }
  ];

  const testimonials = [
    {
      quote: "BR!NK helped me understand what leadership actually means and how to walk in purpose every day. The mentorship changed my life.",
      author: "Sarah M.",
      role: "Student Participant",
      rating: 5
    },
    {
      quote: "The mentorship program gave me direction in my career and confidence in myself. I finally know who I am and what I'm meant to do.",
      author: "James K.",
      role: "Mentorship Program Graduate",
      rating: 5
    },
    {
      quote: "Before BR!NK, I felt lost. Now I have clarity, purpose, and a community that supports my growth. This organization truly transforms lives.",
      author: "Maria L.",
      role: "Purpose Pathway Workshop Participant",
      rating: 5
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Mission & Values Section */}
      <section className={`py-16 md:py-20 lg:py-24 transition-colors ${
        isDarkMode 
          ? "bg-[#2C2C2C] text-white" 
          : "bg-white text-[#2C2C2C]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Our <span className="text-[#D4AF37]">Mission</span>
              </h2>
              <p className={`text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
                isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
              }`}>
                BR!NK empowers college and high-school students to live with clarity, purpose, and leadership. 
                We provide mentorship, skill-based learning, and transformational experiences that help individuals 
                discover who they are and lead meaningful change.
              </p>
            </motion.div>
          </motion.div>

          {/* Core Values Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 md:p-8 rounded-2xl transition-all ${
                  isDarkMode 
                    ? "bg-[#1A1A1A] border border-[#D4AF37]/30 hover:border-[#D4AF37]" 
                    : "bg-white border-2 border-[#1E3A5F]/20 hover:border-[#1E3A5F] shadow-lg hover:shadow-xl"
                }`}
              >
                <value.icon className={`w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]`} />
                <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  {value.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${
                  isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className={`py-16 md:py-20 lg:py-24 transition-colors ${
        isDarkMode 
          ? "bg-[#1E3A5F] text-white" 
          : "bg-white text-[#2C2C2C]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Our <span className="text-[#D4AF37]">Programs</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-4 md:mb-6"></div>
              <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
              }`}>
                Discover transformational experiences designed to empower the next generation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                { title: "Mentorship Circles", desc: "Structured mentor-student groups fostering accountability", link: "/get-involved" },
                { title: "BR!NK Leadership Summit", desc: "Annual gatherings activating clarity, confidence, and community", link: "/events" },
                { title: "Workshops & Webinars", desc: "Practical sessions on personal growth and leadership", link: "/programs" },
                { title: "Podcast", desc: "Real conversations with leaders translating purpose into action", link: "/programs" },
                { title: "Resource Hub", desc: "Free digital guides and toolkits for continuous learning", link: "/resources" },
                { title: "Community Events", desc: "Regular gatherings connecting students and mentors", link: "/events" }
              ].map((program, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 md:p-8 rounded-2xl border-2 transition-all ${
                    isDarkMode 
                      ? "bg-[#2C2C2C] border-[#D4AF37]/30 hover:border-[#D4AF37]" 
                      : "bg-white border-[#1E3A5F]/30 hover:border-[#1E3A5F] shadow-md hover:shadow-lg"
                  }`}
                >
                  <CheckCircle className={`w-8 h-8 mb-4 text-[#D4AF37]`} />
                  <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${
                    isDarkMode ? "text-white" : "text-[#1E3A5F]"
                  }`}>
                    {program.title}
                  </h3>
                  <p className={`text-sm md:text-base mb-4 ${
                    isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"
                  }`}>
                    {program.desc}
                  </p>
                  <Link to={program.link}>
                    <span className={`text-sm font-semibold text-[#D4AF37] hover:underline flex items-center gap-2`}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <Link to="/programs">
                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg"
                >
                  Explore All Programs
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-16 md:py-20 lg:py-24 transition-colors ${
        isDarkMode 
          ? "bg-[#2C2C2C] text-white" 
          : "bg-white text-[#2C2C2C]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Student <span className="text-[#D4AF37]">Stories</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-4 md:mb-6"></div>
              <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
              }`}>
                Hear from students whose lives have been transformed through BR!NK
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`p-6 md:p-8 rounded-2xl ${
                    isDarkMode 
                      ? "bg-[#1A1A1A] border border-[#D4AF37]/30" 
                      : "bg-white border-2 border-[#1E3A5F]/20 shadow-lg"
                  }`}
                >
                  <Quote className={`w-8 h-8 mb-4 text-[#D4AF37]`} />
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className={`text-base md:text-lg italic mb-6 leading-relaxed ${
                    isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
                  }`}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-[#1E3A5F]"
                    }`}>
                      {testimonial.author}
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? "text-[#808080]" : "text-[#808080]"
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 md:py-20 lg:py-24 transition-colors ${
        isDarkMode 
          ? "bg-[#0F0F0F] text-[#F5F5F5]" 
          : "bg-[#1E3A5F] text-white"
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Ready to Make an <span className="text-[#D4AF37]">Impact?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className={`text-base md:text-lg mb-8 max-w-2xl mx-auto ${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
              Join us in empowering the next generation. Whether you're a student seeking purpose, 
              a mentor ready to guide, or a supporter wanting to make a difference—your journey starts here.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                >
                  Get Involved
                </motion.button>
              </Link>
              <Link to="/donate">
                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300 w-full sm:w-auto"
                >
                  Support Our Mission
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Blogs and Posts Section */}
      <section className={`py-12 md:py-16 lg:py-20 transition-colors ${
        isDarkMode 
          ? "bg-[#1E3A5F] text-white" 
          : "bg-white text-[#2C2C2C]"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 ${
                isDarkMode ? "text-white" : "text-[#1E3A5F]"
              }`}>
                Latest <span className="text-[#D4AF37]">Blogs & Posts</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-4 md:mb-6"></div>
              <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
              }`}>
                Stay updated with our latest stories, insights, and resources.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                    <div className="relative h-40 sm:h-48 overflow-hidden">
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
                    <div className="p-4 sm:p-6 flex-grow flex flex-col">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span className={`text-xs ${
                          isDarkMode ? "text-[#808080]" : "text-[#808080]"
                        }`}>
                          {post.date}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                        {post.category}
                      </span>
                      <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${
                        isDarkMode ? "text-white" : "text-[#1E3A5F]"
                      }`}>
                        {post.title}
                      </h3>
                      <p className={`text-xs sm:text-sm mb-4 flex-grow ${
                        isDarkMode ? "text-[#B0B0B0]" : "text-[#2C2C2C]"
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



