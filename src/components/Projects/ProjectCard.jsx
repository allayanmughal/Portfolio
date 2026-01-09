import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get theme from context
  const { isDark, isLight } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
        isDark
          ? 'backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl'
          : 'bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg'
      }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Glowing Border Effect */}
      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg"></div>
      </div>

      {/* Project Image */}
      <div className={`relative overflow-hidden h-48 rounded-t-3xl ${
        isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
        {project.image ? (
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl">💻</div>
          </div>
        )}
        
        {/* Image Overlay Gradient */}
        <div className={`absolute inset-0 ${
          isDark ? 'bg-gradient-to-t from-gray-900/80 via-transparent to-transparent' : 'bg-gradient-to-t from-gray-900/40 via-transparent to-transparent'
        }`}></div>
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10"
          >
            Featured
          </motion.div>
        )}
        
        {/* GitHub Stats */}
        {project.isGitHub && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 right-4 flex gap-2 z-10"
          >
            {project.stars > 0 && (
              <div className={`backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium ${
                isDark
                  ? 'bg-gray-800/80 text-yellow-300 border border-yellow-500/30'
                  : 'bg-white/90 text-yellow-700 border border-yellow-200'
              }`}>
                <span>⭐</span>
                <span>{project.stars}</span>
              </div>
            )}
            {project.forks > 0 && (
              <div className={`backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-medium ${
                isDark
                  ? 'bg-gray-800/80 text-green-300 border border-green-500/30'
                  : 'bg-white/90 text-green-700 border border-green-200'
              }`}>
                <span>🍴</span>
                <span>{project.forks}</span>
              </div>
            )}
          </motion.div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isHovered 
            ? isDark
              ? 'bg-gradient-to-t from-blue-600/20 via-transparent to-transparent'
              : 'bg-gradient-to-t from-blue-400/20 via-transparent to-transparent'
            : 'bg-transparent'
        }`}></div>
      </div>

      {/* Project Content */}
      <div className="p-6 relative">
        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          isDark 
            ? 'text-white group-hover:text-blue-400' 
            : 'text-gray-900 group-hover:text-blue-600'
        }`}>
          {project.title}
        </h3>
        
        {/* Description */}
        <p className={`text-sm mb-4 leading-relaxed line-clamp-2 transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.slice(0, 4).map((tech, techIndex) => (
            <motion.span 
              key={techIndex}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 + techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border border-blue-800/50 hover:border-blue-500/50'
                  : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 hover:border-blue-300'
              }`}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies?.length > 4 && (
            <span className={`text-xs px-3 py-1.5 rounded-full ${
              isDark
                ? 'bg-gray-800 text-gray-400 border border-gray-700'
                : 'bg-gray-100 text-gray-600 border border-gray-200'
            }`}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 relative z-20">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm flex-1 justify-center transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              {/* Button text with higher z-index */}
              <span className="relative z-20 flex items-center gap-2">
                <span className="text-lg">📁</span>
                <span>Code</span>
              </span>
              
              {/* Hover background with lower z-index */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${
                isDark ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-200 to-gray-300'
              }`}></div>
            </motion.a>
          )}
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative overflow-hidden flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm flex-1 justify-center transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              }`}
            >
              {/* Button text with higher z-index */}
              <span className="relative z-20 flex items-center gap-2">
                <span className="text-lg">🌐</span>
                <span>Live Demo</span>
              </span>
              
              {/* Hover background with lower z-index */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            </motion.a>
          )}
        </div>

        {/* Additional Info */}
        {(project.language || project.updatedAt) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mt-4 pt-4 border-t text-xs flex justify-between items-center ${
              isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-600'
            }`}
          >
            {project.language && (
              <span className={`px-2 py-1 rounded ${
                isDark ? 'bg-gray-800/50' : 'bg-gray-100'
              }`}>
                {project.language}
              </span>
            )}
            {project.updatedAt && (
              <span>Updated {project.updatedAt}</span>
            )}
          </motion.div>
        )}
      </div>

      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden ${
        isDark ? 'opacity-20' : 'opacity-10'
      }`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45 translate-x-16 -translate-y-16"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;