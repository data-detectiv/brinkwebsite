import { motion } from "framer-motion";
import { BookOpen, Calendar, User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const Stories = () => {
  const { isDarkMode } = useTheme();

  const blogPosts = [
    {
      category: "Student Highlights",
      title: "How Emotional Intelligence Changes Everything for College Students",
      excerpt: "Discover how developing emotional intelligence transforms not just academic performance, but life outcomes for students.",
      date: "March 15, 2025",
      author: "BR!NK Team"
    },
    {
      category: "Leadership Lessons",
      title: "5 Leadership Skills Every Student Needs in 2025",
      excerpt: "The essential leadership competencies that will set students apart in an ever-changing world.",
      date: "March 10, 2025",
      author: "BR!NK Team"
    },
    {
      category: "Purpose Reflections",
      title: "The Purpose Crisis Among Gen Z — And How We Can Fix It",
      excerpt: "Exploring why so many young people feel directionless and the pathways to finding purpose.",
      date: "March 5, 2025",
      author: "BR!NK Team"
    },
    {
      category: "Behind-the-Scenes",
      title: "Inside the BR!NK Summit: A Day of Transformation",
      excerpt: "A look at what makes our annual summit a life-changing experience for hundreds of students.",
      date: "February 28, 2025",
      author: "BR!NK Team"
    },
    {
      category: "Mentor Insights",
      title: "What I've Learned Mentoring College Students",
      excerpt: "A mentor shares the profound impact of guiding young leaders on their journey to purpose.",
      date: "February 20, 2025",
      author: "BR!NK Mentor"
    },
    {
      category: "Summit Recaps",
      title: "BR!NK Summit 2024: Highlights and Takeaways",
      excerpt: "Relive the powerful moments, inspiring speakers, and transformative experiences from our latest summit.",
      date: "February 15, 2025",
      author: "BR!NK Team"
    }
  ];

  const categories = [
    "All",
    "Student Highlights",
    "Leadership Lessons",
    "Purpose Reflections",
    "Behind-the-Scenes",
    "Mentor Insights",
    "Summit Recaps"
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? "bg-[#2C2C2C] text-white" 
        : "bg-white text-[#2C2C2C]"
    } pt-20`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
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
              Stories & <span className="text-[#D4AF37]">Blog</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
            }`}>
              Insights, stories, and lessons from our community of students, mentors, and leaders.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                  index === 0
                    ? `bg-[#D4AF37] text-[#000000]`
                    : isDarkMode
                    ? "bg-[#1E3A5F] text-white/80 hover:text-[#D4AF37] hover:bg-[#2C2C2C]"
                    : "bg-white text-[#2C2C2C] hover:text-[#1E3A5F] hover:bg-[#D4AF37]/10 border border-[#1E3A5F]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl border-2 flex flex-col cursor-pointer ${
                  isDarkMode 
                    ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                    : "bg-white border-[#1E3A5F]"
                }`}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37]">
                    {post.category}
                  </span>
                </div>
                <h2 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#1E3A5F]"
                }`}>
                  {post.title}
                </h2>
                <p className={`mb-4 flex-grow leading-relaxed ${
                  isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
                }`}>
                  {post.excerpt}
                </p>
                <div className={`flex items-center justify-between text-sm ${
                  isDarkMode ? "text-white/60" : "text-[#808080]"
                }`}>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;



