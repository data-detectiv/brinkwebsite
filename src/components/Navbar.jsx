import { useState } from "react";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import {
    Sun,
    Moon,
    Menu,
    X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
// Logo - using public folder path
// Logo should be placed at: public/assets/brink-logo.jpg
const BRINK_LOGO = '/assets/brink-logo.jpg';


const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Teams", path: "/teams" },
    { name: "Board", path: "/board" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" }
  ];

  return <motion.nav 
    style={{ opacity: 1 }}
    className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b shadow-sm transition-colors ${
      isDarkMode 
        ? "bg-[#1E3A5F]/95 border-[#D4AF37]/30" 
        : "bg-white/95 border-[#808080]/30"
    }`}
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
          >
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 rounded-2xl overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl"
              >
                  <img 
                      src={BRINK_LOGO}
                      alt="BR!NK Logo" 
                      className='w-full h-full object-cover'
                  />
              </motion.div>
              <span className={`text-lg ml-1 font-bold ${isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"}`}>BR!NK</span>
          </motion.div>
        </Link>

        {/* desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                    <motion.button
                        whileHover={{ y: -2 }}
                        className={`text-sm uppercase tracking-wider transition-colors font-medium ${
                            isActive(item.path)
                                ? "text-[#D4AF37]"
                                : isDarkMode 
                                  ? "text-white/80 hover:text-[#D4AF37]" 
                                  : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                        }`}
                    >
                        {item.name}
                    </motion.button>
                </Link>
            ))}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? "text-white/80 hover:text-[#D4AF37] hover:bg-white/10" 
                    : "text-[#2C2C2C] hover:text-[#1E3A5F] hover:bg-[#808080]/10"
                }`}
            >
                {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </motion.button>
        </div>

        {/* mobile menu button  */}
        <div className="md:hidden flex items-center space-x-4">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95}}
                onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? "text-white/80 hover:text-[#D4AF37] hover:bg-white/10" 
                    : "text-[#2C2C2C] hover:text-[#1E3A5F] hover:bg-[#808080]/10"
                }`}
            >
                {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode 
                    ? "text-white/80 hover:text-[#D4AF37] hover:bg-white/10" 
                    : "text-[#2C2C2C] hover:text-[#1E3A5F] hover:bg-[#808080]/10"
                }`}
            >
                {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </motion.button>
        </div>
    </div>

    {/* mobile menu  */}
    <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y:0 }}
                exit={{ opacity: 0, y: -20}}
                className={`md:hidden mt-4 p-4 rounded-lg border shadow-lg transition-colors ${
                  isDarkMode 
                    ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                    : "bg-white border-[#808080]/30"
                }`}
            >
                {navItems.map((item) => (
                    <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                        <motion.button
                            whileHover={{ x: 5}}
                            className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors font-medium ${
                                isActive(item.path)
                                    ? "text-[#D4AF37]"
                                    : isDarkMode 
                                      ? "text-white/80 hover:text-[#D4AF37]" 
                                      : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                            }`}
                        >
                            {item.name}
                        </motion.button>
                    </Link>
                ))}
            </motion.div>
        )}
    </AnimatePresence>
  </motion.nav>
}

export default Navbar

