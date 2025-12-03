import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
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
      image: headshots,
      bio: "Passionate about empowering the next generation to discover their purpose and lead with impact.",
      linkedin: "https://www.linkedin.com/in/godbless-pelpuo", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/brinkwithgodbless/" // Replace with actual Instagram URL
    },
    {
      role: "Co-founder",
      name: "Desmond Duodu",
      title: "Oversees program development and implementation",
      image: fosterOppong,
      bio: "Dedicated to creating transformational experiences for students.",
      linkedin: "https://www.linkedin.com/in/desmond-duodu", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/desmond_duodu" // Replace with actual Instagram URL
    },
    {
      role: "Co-founder",
      name: "Foster Oppong",
      title: "Builds partnerships and community connections",
      image: fosterOppong,
      bio: "Connecting students with opportunities and meaningful relationships.",
      linkedin: "https://www.linkedin.com/in/foster-oppong", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/foster_oppong" // Replace with actual Instagram URL
    },
    {
      role: "Co-founder",
      name: "Donavan Adu",
      title: "Manages podcast, social media, and digital content",
      image: fosterOppong,
      bio: "Amplifying the BR!NK message and student stories.",
      linkedin: "https://www.linkedin.com/in/donavan-adu", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/donavan_adu" // Replace with actual Instagram URL
    },
    {
      role: "Co-founder",
      name: "Donavan Adu",
      title: "Facilitates mentor-student matching and programs",
      image: headshots,
      bio: "Ensuring meaningful mentorship relationships that transform lives.",
      linkedin: "https://www.linkedin.com/in/donavan-adu", // Replace with actual LinkedIn URL
      instagram: "https://www.instagram.com/donavan_adu" // Replace with actual Instagram URL
    },
    {
      role: "Team Member",
      name: "Team Member",
      title: "Coordinates BR!NK Summit and operational logistics",
      image: oneDog,
      bio: "Creating seamless experiences for our community.",
      linkedin: null,
      instagram: null
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
            src="/assets/Headshots09-01-25-29.jpg" 
            alt="Our Team" 
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
            Our <span className="text-[#D4AF37]">Team</span>
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
            <p className={`text-lg max-w-2xl mx-auto ${
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
                <p className="text-sm text-center text-white/70 italic mb-4">
                  {member.bio}
                </p>
                {/* Social Links */}
                {(member.linkedin || member.instagram) && (
                  <div className="flex justify-center space-x-4 mt-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-[#D4AF37] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.instagram && (
                      <a 
                        href={member.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-[#D4AF37] transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>
                )}
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

