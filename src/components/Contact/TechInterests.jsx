import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const TechInterests = () => {
  const techAreas = [
    {
      icon: CodeBracketIcon,
      title: 'Web Development',
      description: 'React, JavaScript, Modern Frameworks',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile solutions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CpuChipIcon,
      title: 'Emerging Tech',
      description: 'AI, Machine Learning, IoT projects',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Technologies I Love Working With</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techAreas.map((area, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
          >
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${area.color} shadow-lg mb-3`}>
              <area.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{area.title}</h3>
            <p className="text-sm text-gray-600">{area.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Interested in collaborating on projects involving these technologies? Let's talk!
        </p>
      </div>
    </motion.div>
  );
};

export default TechInterests;