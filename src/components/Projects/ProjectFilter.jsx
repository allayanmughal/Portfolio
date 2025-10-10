import React from 'react';
import { motion } from 'framer-motion';

const ProjectFilter = ({ technologies, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeFilter === 'all'
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Projects
      </motion.button>
      
      {technologies.map((tech, index) => (
        <motion.button
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(tech)}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeFilter === tech
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tech}
        </motion.button>
      ))}
    </div>
  );
};

// Make sure this line is at the end
export default ProjectFilter;