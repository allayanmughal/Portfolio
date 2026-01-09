import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaSun,
  FaMoon,
  FaCode
} from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';  // Fixed import path

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  // Get theme from context
  const { theme, toggleTheme, isDark } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💻' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/contact', label: 'Contact', icon: '📞' }
  ];

  const socialLinks = [
    { 
      url: 'https://github.com/allayanmughal', 
      icon: FaGithub, 
      color: 'hover:text-gray-300',
      darkColor: 'dark:hover:text-gray-300',
      lightColor: 'light:hover:text-gray-700' 
    },
    { 
      url: 'https://www.linkedin.com/in/allayan-mughal-2a4b09299/', 
      icon: FaLinkedin, 
      color: 'hover:text-blue-400',
      darkColor: 'dark:hover:text-blue-400',
      lightColor: 'light:hover:text-blue-600' 
    },
    { 
      url: 'mailto:mughalallayan2@gmail.com', 
      icon: FaEnvelope, 
      color: 'hover:text-red-400',
      darkColor: 'dark:hover:text-red-400',
      lightColor: 'light:hover:text-red-500' 
    }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? isDark
              ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20 border-b border-gray-800/50'
              : 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/50'
            : isDark
              ? 'bg-gray-900/80 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-gray-800/30'
              : 'bg-white/80 backdrop-blur-md shadow-lg shadow-blue-500/5 border-b border-gray-200/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Enhanced Design */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 relative group"
            >
              <Link 
                to="/" 
                className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent relative flex items-center gap-2"
              >
                <FaCode className="text-blue-400" />
                <span>Portfol</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"
                  initial={false}
                />
              </Link>
            </motion.div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setActiveHover(item.path)}
                  onHoverEnd={() => setActiveHover(null)}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 flex items-center space-x-2 ${
                      location.pathname === item.path
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30'
                        : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/80 hover:shadow-lg hover:shadow-blue-500/10'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/80 hover:shadow-lg'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                    
                    {/* Animated Border */}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Hover Effect */}
                  {activeHover === item.path && location.pathname !== item.path && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: isDark ? 180 : 0 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-3 rounded-xl ml-4 transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700 shadow-lg shadow-yellow-500/20'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-lg shadow-gray-400/20'
                }`}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </motion.button>

              {/* Social Links - Desktop */}
              <div className="flex items-center space-x-2 ml-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-gray-700 shadow-lg shadow-blue-500/10 ' + link.darkColor
                        : 'bg-gray-100 backdrop-blur-sm text-gray-600 hover:bg-gray-200 shadow-lg shadow-gray-400/10 ' + link.lightColor
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Theme Toggle for Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700 shadow-lg shadow-yellow-500/20'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-lg shadow-gray-400/20'
                }`}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800/80 backdrop-blur-sm text-gray-400 hover:bg-gray-700 shadow-lg shadow-blue-500/10'
                    : 'bg-gray-100 backdrop-blur-sm text-gray-600 hover:bg-gray-200 shadow-lg shadow-gray-400/10'
                }`}
              >
                {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden backdrop-blur-xl border-t shadow-2xl ${
                isDark
                  ? 'bg-gray-900/95 border-gray-800/50'
                  : 'bg-white/95 border-gray-200/50'
              }`}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                          : isDark
                          ? 'text-gray-300 hover:bg-gray-800/50'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`flex justify-center space-x-4 pt-4 border-t ${
                    isDark ? 'border-gray-800' : 'border-gray-200'
                  }`}
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 shadow-lg shadow-blue-500/10 ' + link.darkColor
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-lg shadow-gray-400/10 ' + link.lightColor
                      }`}
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Background Blur Effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className={`fixed inset-0 backdrop-blur-sm z-40 lg:hidden ${
              isDark ? 'bg-black/40' : 'bg-black/20'
            }`}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;