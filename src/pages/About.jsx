import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filter, setFilter] = useState('all');

  const skills = [
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'Java', level: 70, category: 'backend' },
    { name: 'C Programming', level: 65, category: 'backend' },
    { name: 'Node.js', level: 60, category: 'backend' },
    { name: 'Git/GitHub', level: 85, category: 'tools' }
  ];

  const certificates = [
    { 
      id: 1,
      name: 'UNIVERSITY OF MICHIGAN', 
      issuer: 'Coursera', 
      year: '2025',
      image: '/images/certificates/certificate1.jpg',
      skills: ['HTML5'],
      category: 'web-development',
      description: 'Comprehensive web development certification covering modern frontend technologies and best practices.'
    },
    { 
      id: 2,
      name: 'JOHN HOPKINS UNIVERSITY', 
      issuer: 'Coursera', 
      year: '2025',
      image: '/images/certificates/certificate2.jpg',
      skills: ['HTML','CSS','JavaScript'],
      category: 'web-development',
      description: 'Comprehensive web development certification covering modern frontend technologies and best practices.'
    },
    { 
      id: 3,
      name: 'eDevice-CR', 
      issuer: 'COMSATS UNIVERSITY ISLAMABAD (Abbottabad Campus)', 
      year: '2025',
      image: '/images/certificates/certificate3.jpg',
      skills: ['HTML','CSS','JavaScript','React'],
      category: 'web-development',
      description: 'Comprehensive web development certification covering modern frontend technologies and best practices.'
    },
    { 
      id: 4,
      name: 'The Complete Beginner Web Development Bootcamp', 
      issuer: 'Google Developer Group (GDG) - COMSATS Abbottabad', 
      year: '2024',
      image: '/images/certificates/certificate4.jpg',
      skills: ['Web Development', 'Frontend', 'HTML', 'CSS', 'JavaScript'],
      category: 'web-development',
      description: 'Completed the comprehensive web development bootcamp organized by Google Developer Group on Campus. Gained hands-on experience in modern web development technologies and best practices.'
    },
    { 
      id: 5,
      name: 'Want to Build AI Agents?', 
      issuer: 'Google Developer Groups Cloud Islamabad', 
      year: '2025',
      image: '/images/certificates/certificate5.jpg',
      skills: ['AI Development', 'OpenAI APIs', 'AI Agents', 'Machine Learning'],
      category: 'ai-ml',
      description: 'Participated in an intensive AI workshop focused on developing AI solutions with OpenAI APIs, integrating memory systems, automation for smarter agents, and deploying optimized AI models.'
    }
  ];

  const categories = ['all', 'web-development', 'ai-ml'];

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  // Function to handle certificate download
  const handleDownload = (certificate) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = certificate.image;
    
    // Extract filename from image path or use certificate name
    const fileName = `certificate_${certificate.name.replace(/\s+/g, '_')}.jpg`;
    link.download = fileName;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle full-size view
  const handleViewFullSize = (certificate) => {
    // Open image in new tab
    window.open(certificate.image, '_blank', 'noopener,noreferrer');
  };

  // Function to handle download with fetch (alternative method for better reliability)
  const handleDownloadWithFetch = async (certificate) => {
    try {
      const response = await fetch(certificate.image);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `certificate_${certificate.name.replace(/\s+/g, '_')}.jpg`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading certificate:', error);
      // Fallback to simple download method
      handleDownload(certificate);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="grid md:grid-cols-2">
                  <div className="p-6">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.name}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex gap-3 mt-4">
                      <button 
                        onClick={() => handleDownloadWithFetch(selectedCertificate)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Download size={16} />
                        Download
                      </button>
                      <button 
                        onClick={() => handleViewFullSize(selectedCertificate)}
                        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                        View Full Size
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gray-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedCertificate.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedCertificate.issuer}
                      </span>
                      <span className="text-gray-600">{selectedCertificate.year}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Skills Verified</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-600">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Software Engineering Student passionate about creating innovative digital solutions
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Education & Story */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">C</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">COMSATS University Islamabad</h3>
                      <p className="text-gray-600">Abbottabad Campus</p>
                      <p className="text-blue-600 font-medium">BS Software Engineering</p>
                      <p className="text-gray-500">7th Semester - Current</p>
                      <p className="text-gray-600 mt-2">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certificates Section - ENHANCED */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Certificates & Achievements</h2>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {certificates.length} Certificates
                  </span>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        filter === category
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category === 'all' ? 'All' : 
                       category === 'ai-ml' ? 'AI/ML' : 
                       category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </button>
                  ))}
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCertificates.map((certificate, index) => (
                    <motion.div
                      key={certificate.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={certificate.image}
                          alt={certificate.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {certificate.name}
                        </h3>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-blue-600 text-sm font-medium">
                            {certificate.issuer}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {certificate.year}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                          {certificate.skills.length > 3 && (
                            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">
                              +{certificate.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Personal Story Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    As a 7th semester Software Engineering student at COMSATS University Islamabad, 
                    I've developed a strong passion for web development and creating digital experiences 
                    that make a difference.
                  </p>
                  <p>
                    My journey in technology started with curiosity about how websites work, 
                    which evolved into building real-world projects like the Abbottabad Police website. 
                    I believe in writing clean, efficient code and continuously learning new technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, 
                    or learning about the latest trends in web development and AI technologies.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Categories */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Skills by Category</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-blue-600 font-bold text-lg">
                        {skills.filter(s => s.category === 'frontend').length}
                      </div>
                      <div className="text-sm text-gray-600">Frontend</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-green-600 font-bold text-lg">
                        {skills.filter(s => s.category === 'backend').length}
                      </div>
                      <div className="text-sm text-gray-600">Backend</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">At a Glance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">7th</div>
                    <div className="text-blue-200 text-sm">Semester</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-blue-200 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-blue-200 text-sm">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{certificates.length}</div>
                    <div className="text-blue-200 text-sm">Certificates</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;