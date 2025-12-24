import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import fosterOppong from "/assets/FosterOppong.jpg";
import headshots from "/assets/Headshots09-01-25-29.jpg";
import teutsopDonavane from "/assets/teutsopDonavane.PNG";
import desmondDuodu from "/assets/desmond.JPG";
import oneDog from "/assets/OneDog101-23.jpg";
const Teams = () => {
  const { isDarkMode } = useTheme();

  const teamMembers = [
    {
      role: "Founder & CEO",
      name: "Godbless Pelpuo",
      // title: "Founder of BR!NK, Speaker, Youth Development Leader",
      image: headshots,
      // bio: "Passionate about empowering the next generation to discover their purpose and lead with impact.",
      linkedin: "https://www.linkedin.com/in/godbless-pelpuo-2bb3a819b", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/pelpuogodbless/" // Replace with actual Instagram URL
    },
    {
      role: "Community Manager",
      name: "Desmond Duodu",
      // title: "Oversees program development and implementation",
      image: desmondDuodu,
      // bio: "Dedicated to creating transformational experiences for students.",
      linkedin: "https://www.linkedin.com/in/desmond-yeboah-duodu-87114322b", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/duodudesmondyeboah/" // Replace with actual Instagram URL
    },
    {
      role: "Editor / Media Director",
      name: "Foster Oppong",
      // title: "Builds partnerships and community connections",
      image: fosterOppong,
      // bio: "Connecting students with opportunities and meaningful relationships.",
      linkedin: "https://www.linkedin.com/in/foster-oppong/", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/foster_op/" // Replace with actual Instagram URL
    },
    {
      role: "Creative / Events Coordinator",
      name: "Teutsop Donavane",
      // title: "Manages podcast, social media, and digital content",
      image: teutsopDonavane,
      // bio: "Amplifying the BR!NK message and student stories.",
      linkedin: "https://www.linkedin.com/in/donavane-teutsop-54685034b", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/thisisdon.dx/" // Replace with actual Instagram URL
    },
    // {
    //   role: "Co-founder",
    //   name: "Donavan Adu",
    //   title: "Facilitates mentor-student matching and programs",
    //   image: headshots,
    //   bio: "Ensuring meaningful mentorship relationships that transform lives.",
    //   linkedin: "https://www.linkedin.com/in/donavan-adu", // Replace with actual LinkedIn URL
    //   instagram: "https://www.instagram.com/donavan_adu" // Replace with actual Instagram URL
    // },
    // {
    //   role: "Team Member",
    //   name: "Team Member",
    //   title: "Coordinates BR!NK Summit and operational logistics",
    //   image: oneDog,
    //   bio: "Creating seamless experiences for our community.",
    //   linkedin: null,
    //   instagram: null
    // }
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
            src="/assets/Headshots09-01-25-29.jpg" 
            alt="Our Team" 
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
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 drop-shadow-2xl text-white`}>
              Our <span className="text-[#D4AF37] drop-shadow-lg">Team</span>
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-lg text-white`}>
              Meet the passionate individuals driving BR!NK's mission
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
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Meet Our <span className="text-[#D4AF37]">Leadership</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37] mb-6"></div>
            <p className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-[#F5F5F5]" : "text-[#2C2C2C]"
            }`}>
              Meet the passionate individuals driving BR!NK's mission to empower the next generation.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`p-6 md:p-8 rounded-3xl ${isDarkMode ? "bg-[#1A1A1A] text-[#F5F5F5]" : "bg-[#1E3A5F] text-white"} shadow-xl hover:shadow-2xl transition-all ${
                  isDarkMode ? "border border-[#D4AF37]/30 hover:border-[#D4AF37]" : ""
                }`}
              >
                {/* Profile Image */}
                <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-[#D4AF37] p-1">
                    <div className={`w-full h-full rounded-full overflow-hidden ${isDarkMode ? "bg-[#1A1A1A]" : "bg-[#1E3A5F]"} p-1`}>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-[#D4AF37]/20 flex items-center justify-center rounded-full"><svg class="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isDarkMode ? "text-[#F5F5F5]" : "text-white"}`}>
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm uppercase tracking-widest mb-6 text-[#D4AF37] font-semibold">
                    {member.role}
                  </p>
                  
                  {/* Social Links */}
                  {(member.linkedin || member.instagram) && (
                    <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
                      {member.linkedin && (
                        <motion.a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          className={`p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-all ${isDarkMode ? "text-[#B0B0B0] hover:text-[#F5F5F5]" : "text-white/80 hover:text-white"}`}
                        >
                          <Linkedin size={20} />
                        </motion.a>
                      )}
                      {member.instagram && (
                        <motion.a 
                          href={member.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          className={`p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-all ${isDarkMode ? "text-[#B0B0B0] hover:text-[#F5F5F5]" : "text-white/80 hover:text-white"}`}
                        >
                          <Instagram size={20} />
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 relative overflow-hidden"
          >
            <div className={`p-10 md:p-12 rounded-3xl text-center relative ${
              isDarkMode 
                ? "bg-[#D4AF37] text-[#000000]" 
                : "bg-[#D4AF37] text-[#000000]"
            }`}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                  Join Our Team
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                  Are you passionate about empowering students and transforming lives? We're always looking for dedicated individuals to join our mission.
                </p>
                <motion.a
                  href="/get-involved"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-block ${isDarkMode ? "bg-[#1A1A1A] hover:bg-[#242424]" : "bg-[#1E3A5F] hover:bg-[#2C2C2C]"} text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base`}
                >
                  Get Involved
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;

