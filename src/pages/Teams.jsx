import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";
import fosterOppong from "/assets/FosterOppong.jpg";
import headshots from "/assets/Headshots09-01-25-29.jpg";
import oneDog from "/assets/OneDog101-23.jpg";

const Teams = () => {
  const { isDarkMode } = useTheme();

  const teamMembers = [
    {
      role: "Founder & Executive Director",
      name: "Godbless Pelpuo",
      title: "Founder of BR!NK, Speaker, Youth Development Leader",
      image: fosterOppong,
      bio: "Passionate about empowering the next generation to discover their purpose and lead with impact."
    },
    {
      role: "Team Member",
      name: "Team Member",
      title: "Oversees program development and implementation",
      image: headshots,
      bio: "Dedicated to creating transformational experiences for students."
    },
    {
      role: "Team Member",
      name: "Team Member",
      title: "Builds partnerships and community connections",
      image: oneDog,
      bio: "Connecting students with opportunities and meaningful relationships."
    },
    {
      role: "Team Member",
      name: "Team Member",
      title: "Manages podcast, social media, and digital content",
      image: fosterOppong,
      bio: "Amplifying the BR!NK message and student stories."
    },
    {
      role: "Team Member",
      name: "Team Member",
      title: "Facilitates mentor-student matching and programs",
      image: headshots,
      bio: "Ensuring meaningful mentorship relationships that transform lives."
    },
    {
      role: "Team Member",
      name: "Team Member",
      title: "Coordinates BR!NK Summit and operational logistics",
      image: oneDog,
      bio: "Creating seamless experiences for our community."
    }
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
              Our <span className="text-[#D4AF37]">Team</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
            }`}>
              Meet the passionate individuals driving BR!NK's mission to empower the next generation.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2C2C2C] text-white shadow-lg"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-[#D4AF37]/20 flex items-center justify-center"><svg class="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-wider mb-3 text-center text-[#D4AF37]">
                  {member.role}
                </p>
                <p className="text-sm mb-3 text-center text-white/80">
                  {member.title}
                </p>
                <p className="text-sm text-center text-white/70 italic">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 rounded-2xl bg-[#D4AF37] text-[#000000] text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Are you passionate about empowering students and transforming lives? We're always looking for dedicated individuals to join our mission.
            </p>
            <motion.a
              href="/get-involved"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-[#1E3A5F] text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Get Involved
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;

