import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaPaperPlane,
  FaCode,
  FaPalette,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Get theme from context
  const { isDark, isLight } = useTheme();

  // Mouse move effect for cursor gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Animated Background (same as Home page) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px),
                              linear-gradient(90deg, ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            backgroundPosition: 'center center',
          }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${isDark ? 'bg-blue-500/30' : 'bg-blue-400/20'} rounded-full`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Animated Gradient Orbs */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
              : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10'
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark 
              ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10' 
              : 'bg-gradient-to-r from-purple-400/10 to-pink-400/10'
          }`}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Binary Rain Effect - Only in Dark Mode */}
        {isDark && (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400/20 font-mono text-sm"
                initial={{ y: -20, x: Math.random() * window.innerWidth }}
                animate={{ y: window.innerHeight + 20 }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Animated Cursor Gradient */}
      <div 
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at center, ${
            isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'
          } 0%, transparent 70%)`,
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                Get In Touch
              </span>
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Let's collaborate on something amazing! I'm always open to discussing new opportunities and creative projects.
            </p>
            
            {/* Call to Action Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className={`inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full border ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30' 
                  : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300'
              }`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Currently Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* Left Column - Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Info Card */}
              <div className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <FaHandshake className="text-blue-500 text-xl" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                      <FaMapMarkerAlt className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Abbottabad, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                      <FaPhone className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Phone</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                      <FaEnvelope className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>mughalallayan2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Card */}
              <div className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <FaCode className="text-blue-500 text-xl" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect With Me</h2>
                </div>
                
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Let's connect on social platforms and build amazing things together!</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://github.com/allayanmughal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden p-4 rounded-2xl border transition-all duration-300 text-center ${
                      isDark 
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    <div className="relative z-10">
                      <FaGithub className={`text-2xl mb-2 mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>GitHub</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/allayan-mughal-2a4b09299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden p-4 rounded-2xl border transition-all duration-300 text-center ${
                      isDark 
                        ? 'bg-gradient-to-r from-blue-900/30 to-blue-800/30 border-blue-700/50 hover:border-blue-400' 
                        : 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300 hover:border-blue-500'
                    }`}
                  >
                    <div className="relative z-10">
                      <FaLinkedin className={`text-2xl mb-2 mx-auto ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>LinkedIn</span>
                    </div>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-blue-600/30 to-blue-500/30' 
                        : 'bg-gradient-to-r from-blue-200 to-blue-300'
                    }`}></div>
                  </a>
                  
                  <a
                    href="mailto:mughalallayan2@gmail.com"
                    className={`group relative overflow-hidden p-4 rounded-2xl border transition-all duration-300 text-center ${
                      isDark 
                        ? 'bg-gradient-to-r from-red-900/30 to-pink-800/30 border-red-700/50 hover:border-red-400' 
                        : 'bg-gradient-to-r from-red-100 to-pink-200 border-red-300 hover:border-red-500'
                    }`}
                  >
                    <div className="relative z-10">
                      <FaEnvelope className={`text-2xl mb-2 mx-auto ${isDark ? 'text-red-300' : 'text-red-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-red-300' : 'text-red-700'}`}>Email</span>
                    </div>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-red-600/30 to-pink-500/30' 
                        : 'bg-gradient-to-r from-red-200 to-pink-300'
                    }`}></div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <div className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <FaPaperPlane className="text-blue-500 text-xl" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Message</h2>
                </div>
                
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Have a project in mind? Let's discuss and bring your ideas to life!</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border text- placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700 text-white' 
                            : 'bg-gray-100 border-gray-300 text-gray-900'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-xl border text- placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700 text-white' 
                            : 'bg-gray-100 border-gray-300 text-gray-900'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl border text- placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800/50 border-gray-700 text-white' 
                          : 'bg-gray-100 border-gray-300 text-gray-900'
                      }`}
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                    <textarea
                      rows="4"
                      className={`w-full px-4 py-3 rounded-xl border text- placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-800/50 border-gray-700 text-white' 
                          : 'bg-gray-100 border-gray-300 text-gray-900'
                      }`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <FaPaperPlane />
                      Send Message
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
              isDark 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white/80 border border-gray-200/50'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <FaLightbulb className="text-blue-500 text-xl" />
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Tech Interests & Availability</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-800/50' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                      <FaCode className="text-blue-500" />
                    </div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full-stack development with modern frameworks and best practices</p>
                </div>
                
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-800/50' 
                    : 'bg-gradient-to-br from-green-50 to-blue-50 border-green-300'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-600/20 to-blue-600/20">
                      <FaPalette className="text-green-500" />
                    </div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>UI/UX Design</h3>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Creating beautiful, user-friendly interfaces with modern design principles</p>
                </div>
                
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-800/50' 
                    : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20">
                      <FaHandshake className="text-purple-500" />
                    </div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Collaboration</h3>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Open to freelance work, internships, and collaborative projects</p>
                </div>
              </div>
              
              {/* Availability Status */}
              <div className={`mt-8 pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 font-medium">Available for new projects</span>
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Response time: Usually within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map/Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className={`mt-12 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden ${
              isDark 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white/80 border border-gray-200/50'
            }`}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Based in Pakistan</h3>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Located in Abbottabad, I work with clients worldwide to create exceptional digital experiences.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Abbottabad, Khyber Pakhtunkhwa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-500" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>mughalallayan2@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCode className="text-blue-500" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Full-Stack Web Developer</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 flex items-center justify-center ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
                  : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`}>
                <div className="text-center">
                  <div className="text-7xl mb-4">📍</div>
                  <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Remote Work Available</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Working with clients worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;