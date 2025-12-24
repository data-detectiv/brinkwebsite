import { useState } from "react";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import {
    Sun,
    Moon,
    Menu,
    X,
    ChevronDown
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
// Logo - using public folder path
// Logo should be placed at: public/assets/brink-logo.jpg
const BRINK_LOGO = '/assets/brink_logo.jpg';


const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Analytics", path: "/analytics" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" }
  ];

  const aboutSubItems = [
    { name: "Mission & Vision", path: "/about" },
    { name: "Teams", path: "/teams" },
    { name: "Board", path: "/board" }
  ];

  return <motion.nav 
    style={{ opacity: 1 }}
    className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b shadow-sm transition-colors ${
        isDarkMode 
        ? "bg-[#0F0F0F]/95 border-[#D4AF37]/30" 
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
            {/* Home Link */}
            <Link to="/">
                <motion.button
                    whileHover={{ y: -2 }}
                    className={`text-sm uppercase tracking-wider transition-colors font-medium ${
                        isActive("/")
                            ? "text-[#D4AF37]"
                            : isDarkMode 
                              ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
                              : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                    }`}
                >
                    Home
                </motion.button>
            </Link>

            {/* About Dropdown */}
            <div 
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
                <Link to="/about">
                    <motion.button
                        whileHover={{ y: -2 }}
                        className={`text-sm uppercase tracking-wider transition-colors font-medium flex items-center space-x-1 ${
                            isActive("/about") || isActive("/teams") || isActive("/board")
                                ? "text-[#D4AF37]"
                                : isDarkMode 
                                  ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
                                  : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                        }`}
                    >
                        <span>About</span>
                        <ChevronDown size={14} className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </motion.button>
                </Link>
                <AnimatePresence>
                    {isAboutDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`absolute top-full left-0 mt-2 py-2 rounded-lg shadow-lg border min-w-[180px] ${
                                isDarkMode 
                                    ? "bg-[#1A1A1A] border-[#D4AF37]/30" 
                                    : "bg-white border-[#808080]/30"
                            }`}
                        >
                            {aboutSubItems.map((item) => (
                                <Link key={item.name} to={item.path}>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors font-medium ${
                                            isActive(item.path)
                                                ? "text-[#D4AF37]"
                                                : isDarkMode 
                                                  ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
                                                  : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                                        }`}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {navItems.filter(item => item.name !== "Home").map((item) => (
                <Link key={item.name} to={item.path}>
                    <motion.button
                        whileHover={{ y: -2 }}
                        className={`text-sm uppercase tracking-wider transition-colors font-medium ${
                            isActive(item.path)
                                ? "text-[#D4AF37]"
                                : isDarkMode 
                                  ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
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
                {/* Home Link */}
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <motion.button
                        whileHover={{ x: 5}}
                        className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors font-medium ${
                            isActive("/")
                                ? "text-[#D4AF37]"
                                : isDarkMode 
                                  ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
                                  : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                        }`}
                    >
                        Home
                    </motion.button>
                </Link>

                {/* About with submenu in mobile */}
                <div className="mb-2">
                    <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className={`w-full text-left py-2 text-sm uppercase tracking-wider transition-colors font-medium flex items-center justify-between ${
                            isActive("/about") || isActive("/teams") || isActive("/board")
                                ? "text-[#D4AF37]"
                                : isDarkMode 
                                  ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
                                  : "text-[#2C2C2C] hover:text-[#1E3A5F]"
                        }`}
                    >
                        <span>About</span>
                        <ChevronDown size={14} className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {isAboutDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 mt-2 space-y-1"
                            >
                                {aboutSubItems.map((item) => (
                                    <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                                        <motion.button
                                            whileHover={{ x: 5}}
                                            className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors font-medium ${
                                                isActive(item.path)
                                                    ? "text-[#D4AF37]"
                                                    : isDarkMode 
                                                      ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
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
                </div>
                {navItems.filter(item => item.name !== "Home").map((item) => (
                    <Link key={item.name} to={item.path} onClick={() => setIsMenuOpen(false)}>
                        <motion.button
                            whileHover={{ x: 5}}
                            className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors font-medium ${
                                isActive(item.path)
                                    ? "text-[#D4AF37]"
                                    : isDarkMode 
                                      ? "text-[#B0B0B0] hover:text-[#D4AF37]" 
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

