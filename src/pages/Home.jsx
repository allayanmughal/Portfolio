import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaReact, 
  FaJs, 
  FaJava, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql,
  SiFirebase,
  SiFigma
} from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTech, setCurrentTech] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  // Get theme from context
  const { isDark, isLight } = useTheme();

  const technologies = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Java', icon: <FaJava />, color: '#007396', category: 'Backend' },
    { name: 'C', icon: <FaCode />, color: '#A8B9CC', category: 'Backend' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', category: 'Backend' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', category: 'Frontend' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', category: 'Database' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', category: 'Backend' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', category: 'Tools' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', category: 'Design' }
  ];

  // Filter technologies based on active category
  const filteredTechnologies = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Available categories
  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Design'];

  // Animated cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate technologies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % Math.min(6, technologies.length));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Animated Grid Background */}
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
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-blue-500/30' : 'bg-blue-400/20'}`}
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
            {Array.from({ length: 30 }).map((_, i) => (
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Glass Morphism Effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className={`backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}>
                <div className="relative">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="relative">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-blue-500 font-semibold text-lg mb-4 tracking-wider"
                    >
                      <span className="inline-flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        SOFTWARE ENGINEER
                      </span>
                    </motion.p>
                    
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                        Aalyan Mughal
                      </span>
                    </motion.h1>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-8"
                    >
                      <p className={`text-xl mb-4 leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full-Stack Developer & Software Engineering Student
                      </p>
                      <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className={`text-lg mb-8 leading-relaxed ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Crafting exceptional digital experiences with modern web technologies.
                      Currently pursuing Software Engineering at{' '}
                      <span className="text-blue-500 font-semibold">COMSATS University Islamabad</span>
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                      <Link 
                        to="/projects" 
                        className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
                      >
                        <span className="relative z-10">🚀 Explore My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                      
                      <Link 
                        to="/contact" 
                        className={`group relative overflow-hidden border-2 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center ${
                          isDark 
                            ? 'border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white' 
                            : 'border-gray-300 hover:border-blue-500 text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <span className="relative z-10">💬 Let's Connect</span>
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isDark 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
                            : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                        }`}></div>
                      </Link>
                    </motion.div>

                    {/* Tech Stack Carousel */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="mb-8"
                    >
                      <p className={`mb-4 text-sm uppercase tracking-wider ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}>Featured Technologies</p>
                      <div className="flex items-center space-x-4 overflow-hidden py-2">
                        {technologies.slice(currentTech, currentTech + 6).map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-center space-x-2 backdrop-blur-sm px-4 py-2 rounded-lg border ${
                              isDark 
                                ? 'bg-gray-900/50 border-gray-800' 
                                : 'bg-white/60 border-gray-300'
                            }`}
                          >
                            <div style={{ color: tech.color, fontSize: '1.5rem' }}>
                              {tech.icon}
                            </div>
                            <span className={`font-medium ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Quick Stats - Modern Design */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="grid grid-cols-3 gap-6"
                    >
                      {[
                        { value: '7th', label: 'Semester' },
                        { value: '10+', label: 'Projects' },
                        { value: technologies.length, label: 'Technologies' }
                      ].map((stat, index) => (
                        <div key={index} className={`p-6 rounded-2xl border shadow-lg ${
                          isDark 
                            ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800' 
                            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                        }`}>
                          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            {stat.value}
                          </p>
                          <p className={`text-sm mt-2 ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>{stat.label}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Picture - Modern Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Animated Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-70 blur-xl animate-spin-slow"></div>
                
                {/* Profile Image Container */}
                <div className={`relative p-1 rounded-3xl shadow-2xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
                    : 'bg-gradient-to-br from-white to-gray-100'
                }`}>
                  <motion.img
                    src="/images/portfolio/aalyan-profile.jpg"
                    alt="Aalyan Mughal - Software Engineering Student"
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-inner"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 10 }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Tech Stack
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Core technologies I use to build amazing digital experiences
            </p>
          </motion.div>

          {/* Categories Filter */}
          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-blue-500 shadow-lg'
                    : isDark
                    ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-400 hover:text-white hover:border-blue-500'
                    : 'bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-blue-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tech Grid - 3D Effect */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                
                <div className={`relative backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-2xl h-full border ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800/90 border-gray-800' 
                    : 'bg-gradient-to-br from-white to-gray-50/90 border-gray-300'
                }`}>
                  <div className="flex flex-col items-center justify-center h-full">
                    <div 
                      className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                    <h3 className={`font-semibold transition-colors ${
                      isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {tech.name}
                    </h3>
                    <div className={`mt-2 text-xs uppercase tracking-wider ${
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {tech.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className={`inline-flex items-center gap-3 rounded-full px-6 py-3 border ${
              isDark 
                ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-800/50' 
                : 'bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300/50'
            }`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                Showing {filteredTechnologies.length} of {technologies.length} technologies
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Featured Project
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A showcase of my work on a real-world application
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className={`relative backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border ${
              isDark 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800/90 border-gray-800' 
                : 'bg-gradient-to-br from-white to-gray-50/90 border-gray-300'
            }`}>
              <div className="md:flex">
                <div className="md:w-3/5 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <h3 className={`text-3xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Abbottabad Police Website</h3>
                  <p className={`mb-6 leading-relaxed text-lg ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Official digital platform for the Abbottabad Police Department, featuring 
                    crime reporting systems, citizen services portal, and real-time departmental 
                    updates. Built with modern web technologies to enhance community engagement.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'REST API'].map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${
                          isDark 
                            ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border-blue-800/50' 
                            : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300/50'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://abbottabadpolice.kp.gov.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10">🌐 Live Preview</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    
                    <Link
                      to="/projects"
                      className={`group relative overflow-hidden border-2 font-semibold py-3 px-8 rounded-xl transition-all duration-300 ${
                        isDark 
                          ? 'border-gray-700 text-gray-400 hover:text-white hover:border-blue-500' 
                          : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:border-blue-500'
                      }`}
                    >
                      <span className="relative z-10">📁 View All Projects</span>
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isDark 
                          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
                          : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                      }`}></div>
                    </Link>
                  </div>
                </div>
                
                <div className={`md:w-2/5 p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden ${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50'
                }`}>
                  <div className={`absolute inset-0 ${
                    isDark ? 'bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5' : 'bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20'
                  }`}></div>
                  <div className="relative z-10 text-center">
                    <div className="text-7xl mb-6">👮‍♂️</div>
                    <div className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Government Project</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Official Deployment</div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className={`p-4 rounded-xl border ${
                        isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white/50 border-gray-300'
                      }`}>
                        <div className="text-2xl font-bold text-blue-500">100%</div>
                        <div className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>Uptime</div>
                      </div>
                      <div className={`p-4 rounded-xl border ${
                        isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white/50 border-gray-300'
                      }`}>
                        <div className="text-2xl font-bold text-purple-500">24/7</div>
                        <div className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>Service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${
            isDark ? 'bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20' : 'bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20'
          }`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-xl rounded-3xl p-12 shadow-2xl border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200/50'
            }`}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Let's Build Something{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Amazing
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl mb-8 max-w-2xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Have a project in mind? Let's collaborate and turn your ideas into reality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">💬 Start Conversation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <a
                href="https://github.com/allayanmughal"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden border-2 font-semibold py-4 px-8 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:text-white hover:border-blue-500' 
                    : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:border-blue-500'
                }`}
              >
                <span className="relative z-10">
                  <span className="inline-flex items-center gap-2">
                    <FaGitAlt /> View GitHub
                  </span>
                </span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10' 
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
                }`}></div>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`mt-12 pt-8 border-t ${
                isDark ? 'border-gray-800' : 'border-gray-300'
              }`}
            >
              <p className={`text-sm uppercase tracking-wider mb-4 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>Currently Available For</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Web Development', 'Full-Stack Projects', 'Consultation', 'Freelance Work'].map((type) => (
                  <span 
                    key={type} 
                    className={`px-4 py-2 rounded-full text-sm border ${
                      isDark 
                        ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border-blue-800/50' 
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300/50'
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;