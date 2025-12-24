import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Eye, 
  Share2,
  Youtube,
  Instagram,
  Twitter,
  Linkedin,
  BarChart3,
  Activity,
  Target,
  Award
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import { getSocialStats } from "../utils/socialStats";

const Analytics = () => {
  const { isDarkMode } = useTheme();
  const [socialStats, setSocialStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const stats = await getSocialStats();
        setSocialStats(stats);
      } catch (error) {
        console.error("Error loading analytics:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Impact metrics - these would ideally come from a backend
  const impactMetrics = [
    {
      icon: Users,
      label: "Students Reached",
      value: "2,500+",
      change: "+15%",
      trend: "up",
      description: "Total students engaged across all programs"
    },
    {
      icon: Heart,
      label: "Active Mentors",
      value: "85+",
      change: "+8%",
      trend: "up",
      description: "Mentors actively supporting students"
    },
    {
      icon: Target,
      label: "Programs Running",
      value: "12",
      change: "+2",
      trend: "up",
      description: "Active programs and initiatives"
    },
    {
      icon: Award,
      label: "Success Rate",
      value: "94%",
      change: "+3%",
      trend: "up",
      description: "Students reporting positive outcomes"
    }
  ];

  // Engagement metrics
  const engagementMetrics = [
    {
      platform: "YouTube",
      icon: Youtube,
      subscribers: socialStats?.youtube?.subscribers || "—",
      views: socialStats?.youtube?.views || "125K",
      videos: socialStats?.youtube?.videos || "48",
      engagement: "4.2%",
      color: "#FF0000"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      followers: socialStats?.instagram?.followers || "—",
      posts: socialStats?.instagram?.posts || "156",
      engagement: "6.8%",
      color: "#E4405F"
    },
    {
      platform: "Twitter",
      icon: Twitter,
      followers: socialStats?.twitter?.followers || "—",
      tweets: socialStats?.twitter?.tweets || "342",
      engagement: "3.5%",
      color: "#1DA1F2"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      followers: socialStats?.linkedin?.followers || "—",
      engagement: "5.1%",
      color: "#0077B5"
    }
  ];

  // Growth trends (mock data - would come from backend)
  const growthData = [
    { month: "Jan", students: 1800, mentors: 70 },
    { month: "Feb", students: 1950, mentors: 72 },
    { month: "Mar", students: 2100, mentors: 75 },
    { month: "Apr", students: 2250, mentors: 78 },
    { month: "May", students: 2400, mentors: 82 },
    { month: "Jun", students: 2500, mentors: 85 }
  ];

  return (
    <div className={`min-h-screen pt-20 relative overflow-hidden transition-colors ${
        isDarkMode 
        ? "bg-[#0F0F0F] text-[#F5F5F5]" 
        : "bg-white text-[#2C2C2C]"
    }`}>
      {/* Top Section Banner - With Picture */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Impact Analytics - Data Visualization Dashboard" 
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            onError={(e) => {
              // Fallback to local image if online image fails to load
              e.target.src = "/assets/IMG-20251125-WA0012.jpg";
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
            <BarChart3 className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-[#D4AF37] drop-shadow-lg`} />
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-2xl text-white`}>
              Impact <span className="text-[#D4AF37] drop-shadow-lg">Analytics</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-white`}>
              Tracking our growth, engagement, and transformational impact
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Impact Metrics */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Our Impact Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 md:p-8 rounded-2xl shadow-lg ${
                    isDarkMode 
                      ? "bg-[#1A1A1A] border border-[#D4AF37]/30" 
                      : "bg-[#1E3A5F] text-white"
                  }`}
                >
                  <metric.icon className="w-8 h-8 md:w-10 md:h-10 mb-4 text-[#D4AF37]" />
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                      {metric.value}
                    </div>
                    <div className={`text-sm font-semibold flex items-center ${
                      metric.trend === "up" ? "text-green-400" : "text-red-400"
                    }`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {metric.change}
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-semibold mb-2">
                    {metric.label}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? "text-[#B0B0B0]" : "text-white/80"
                  }`}>
                    {metric.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media Analytics */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Social Media Engagement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {engagementMetrics.map((platform, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-6 md:p-8 rounded-2xl border-2 shadow-lg ${
                    isDarkMode 
                      ? "bg-[#1A1A1A] border-[#D4AF37]/30 text-[#F5F5F5]" 
                      : "bg-white border-[#1E3A5F]"
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <platform.icon 
                      className="w-10 h-10 md:w-12 md:h-12 mr-4" 
                      style={{ color: platform.color }}
                    />
                    <h3 className={`text-2xl md:text-3xl font-semibold ${
                      isDarkMode ? "text-white" : "text-[#1E3A5F]"
                    }`}>
                      {platform.platform}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {platform.followers && (
                      <div>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${
                          isDarkMode ? "text-[#808080]" : "text-[#808080]"
                        }`}>
                          Followers
                        </div>
                        <div className={`text-2xl md:text-3xl font-bold ${
                          isDarkMode ? "text-white" : "text-[#1E3A5F]"
                        }`}>
                          {isLoading ? (
                            <span className="text-sm">Loading...</span>
                          ) : (
                            platform.followers
                          )}
                        </div>
                      </div>
                    )}
                    {platform.subscribers && (
                      <div>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${
                          isDarkMode ? "text-[#808080]" : "text-[#808080]"
                        }`}>
                          Subscribers
                        </div>
                        <div className={`text-2xl md:text-3xl font-bold ${
                          isDarkMode ? "text-white" : "text-[#1E3A5F]"
                        }`}>
                          {isLoading ? (
                            <span className="text-sm">Loading...</span>
                          ) : (
                            platform.subscribers
                          )}
                        </div>
                      </div>
                    )}
                    {platform.views && (
                      <div>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${
                          isDarkMode ? "text-[#808080]" : "text-[#808080]"
                        }`}>
                          Total Views
                        </div>
                        <div className={`text-2xl md:text-3xl font-bold ${
                          isDarkMode ? "text-white" : "text-[#1E3A5F]"
                        }`}>
                          {platform.views}
                        </div>
                      </div>
                    )}
                    {platform.posts && (
                      <div>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${
                          isDarkMode ? "text-[#808080]" : "text-[#808080]"
                        }`}>
                          Posts
                        </div>
                        <div className={`text-2xl md:text-3xl font-bold ${
                          isDarkMode ? "text-white" : "text-[#1E3A5F]"
                        }`}>
                          {platform.posts}
                        </div>
                      </div>
                    )}
                    {platform.videos && (
                      <div>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${
                          isDarkMode ? "text-[#808080]" : "text-[#808080]"
                        }`}>
                          Videos
                        </div>
                        <div className={`text-2xl md:text-3xl font-bold ${
                          isDarkMode ? "text-white" : "text-[#1E3A5F]"
                        }`}>
                          {platform.videos}
                        </div>
                      </div>
                    )}
                    <div>
                      <div className={`text-xs uppercase tracking-wider mb-1 ${
                        isDarkMode ? "text-[#808080]" : "text-[#808080]"
                      }`}>
                        Engagement
                      </div>
                      <div className={`text-2xl md:text-3xl font-bold text-[#D4AF37]`}>
                        {platform.engagement}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Growth Trends */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Growth Trends
            </h2>
            <div className={`p-6 md:p-8 rounded-2xl border-2 ${
              isDarkMode 
                ? "bg-[#2C2C2C] border-[#D4AF37]/30" 
                : "bg-white border-[#1E3A5F]"
            }`}>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
                {growthData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-sm md:text-base font-semibold mb-4 ${
                      isDarkMode ? "text-[#F5F5F5]" : "text-[#1E3A5F]"
                    }`}>
                      {data.month}
                    </div>
                    <div className={`space-y-2 ${
                      isDarkMode ? "text-white" : "text-[#2C2C2C]"
                    }`}>
                      <div>
                        <div className="text-xs text-[#808080] mb-1">Students</div>
                        <div className="text-lg md:text-xl font-bold text-[#D4AF37]">
                          {data.students}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-[#808080] mb-1">Mentors</div>
                        <div className="text-lg md:text-xl font-bold text-[#1E3A5F]">
                          {data.mentors}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants}>
            <h2 className={`text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 md:p-8 rounded-2xl border-2 ${
                  isDarkMode 
                    ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                    : "bg-[#1E3A5F] text-white border-[#D4AF37]"
                }`}
              >
                <Activity className="w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Program Reach</h3>
                <p className={`${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
                  Our programs have reached students across 15+ countries, creating a global network of purpose-driven leaders.
                </p>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 md:p-8 rounded-2xl border-2 ${
                  isDarkMode 
                    ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                    : "bg-[#1E3A5F] text-white border-[#D4AF37]"
                }`}
              >
                <MessageCircle className="w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Community Engagement</h3>
                <p className={`${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
                  Over 50,000+ hours of mentorship provided, with 94% of students reporting increased clarity and confidence.
                </p>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 md:p-8 rounded-2xl border-2 ${
                  isDarkMode 
                    ? "bg-[#2C2C2C] border-[#D4AF37] text-white" 
                    : "bg-[#1E3A5F] text-white border-[#D4AF37]"
                }`}
              >
                <Share2 className="w-10 h-10 md:w-12 md:h-12 mb-4 text-[#D4AF37]" />
                <h3 className="text-xl md:text-2xl font-semibold mb-3">Digital Impact</h3>
                <p className={`${isDarkMode ? "text-[#F5F5F5]" : "text-white/90"}`}>
                  Our content has been viewed over 500K+ times, inspiring students worldwide to discover their purpose.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;

