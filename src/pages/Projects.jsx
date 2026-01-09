import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaStar, 
  FaCodeBranch, 
  FaEye,
  FaFilter,
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDesktop
} from 'react-icons/fa';
import useGitHubRepos from '../hooks/useGitHubRepos';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectFilter from '../components/Projects/ProjectFilter';
import { PROJECTS_DATA } from '../assets/data/projects-data';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { repos, loading, error } = useGitHubRepos('allayanmughal');
  
  // Get theme from context
  const { isDark, isLight } = useTheme();

  // Combine featured project with GitHub repos
  const allProjects = useMemo(() => {
    const featuredProject = PROJECTS_DATA.featured;
    const githubProjects = repos || [];
    
    return [featuredProject, ...githubProjects];
  }, [repos]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    
    return allProjects.filter(project =>
      project.technologies.some(tech =>
        tech.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [allProjects, activeFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      </div>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                My Projects
              </span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A collection of my work showcasing expertise in web development, 
              including the Abbottabad Police website and various GitHub repositories.
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              <div className={`text-center backdrop-blur-sm p-4 rounded-2xl border min-w-[120px] ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/80 border-gray-200/50'
              }`}>
                <div className="text-2xl font-bold text-blue-500">{allProjects.length}</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Projects</div>
              </div>
              <div className={`text-center backdrop-blur-sm p-4 rounded-2xl border min-w-[120px] ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/80 border-gray-200/50'
              }`}>
                <div className="text-2xl font-bold text-purple-500">10+</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</div>
              </div>
              <div className={`text-center backdrop-blur-sm p-4 rounded-2xl border min-w-[120px] ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white/80 border-gray-200/50'
              }`}>
                <div className="text-2xl font-bold text-green-500">100%</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Filter Section with Glass Morphism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-12 ${
              isDark 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white/80 border border-gray-200/50'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                  <FaFilter className="text-blue-500" />
                </div>
                <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Filter Projects</h2>
              </div>
              
              {/* Active Filter Indicator */}
              <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : isDark
                  ? 'bg-gray-800 text-gray-400'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {activeFilter === 'all' ? 'All Projects' : activeFilter}
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : isDark
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                }`}
              >
                <FaCode />
                All Projects
              </button>
              
              {/* Technology Filters */}
              {PROJECTS_DATA.technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech.toLowerCase())}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === tech.toLowerCase()
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : isDark
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                  }`}
                >
                  {tech === 'React' && <FaCode className="text-[#61DAFB]" />}
                  {tech === 'Node.js' && <FaServer className="text-[#339933]" />}
                  {tech === 'MongoDB' && <FaServer className="text-[#47A248]" />}
                  {tech === 'Express' && <FaServer className="text-gray-500" />}
                  {tech === 'Tailwind' && <FaDesktop className="text-[#06B6D4]" />}
                  {tech === 'Mobile' && <FaMobileAlt className="text-blue-500" />}
                  {tech}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center mb-8 ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}
            >
              <div className="inline-flex flex-col items-center gap-4">
                <div className="relative">
                  <div className={`w-16 h-16 border-4 rounded-full ${isDark ? 'border-blue-600/30' : 'border-blue-500/20'}`}></div>
                  <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div>
                  <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Loading projects from GitHub</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Fetching your amazing work...</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`backdrop-blur-xl border rounded-3xl shadow-2xl p-8 text-center mb-8 ${
                isDark
                  ? 'bg-gradient-to-r from-red-900/20 to-pink-900/20 border-red-800/30'
                  : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-300'
              }`}
            >
              <div className="inline-flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div>
                  <p className={`text-lg font-medium ${isDark ? 'text-red-300' : 'text-red-600'}`}>GitHub Connection Error</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{error}</p>
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Showing featured projects only</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id || project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {!loading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center ${
                isDark 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-white/80 border border-gray-200/50'
              }`}
            >
              <div className="inline-flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                  <FaCode className="text-blue-500 text-3xl" />
                </div>
                <div>
                  <p className={`text-xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>No projects found</p>
                  <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    No projects found for{' '}
                    <span className="font-semibold text-blue-500">{activeFilter}</span>
                    . Try another filter!
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
              isDark 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-white/80 border border-gray-200/50'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <FaGithub className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>GitHub Profile</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>@allayanmughal</p>
                  </div>
                </div>
                <a
                  href="https://github.com/allayanmughal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Visit Profile
                </a>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className={`text-center p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/50' 
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{repos?.length || 0}</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Public Repos</div>
                </div>
                <div className={`text-center p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/50' 
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>24/7</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Activity</div>
                </div>
                <div className={`text-center p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/50' 
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>100%</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Open Source</div>
                </div>
                <div className={`text-center p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-gray-800/30 border-gray-700/50' 
                    : 'bg-gray-100 border-gray-300'
                }`}>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Active</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Contributor</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;