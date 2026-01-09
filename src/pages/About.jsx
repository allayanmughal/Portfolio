import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Award,
  BookOpen,
  Trophy,
  Code,
  Server,
  Database,
  GitBranch,
  Book,
  School,
  GraduationCap
} from 'lucide-react';
import { FaReact, FaJs, FaPython, FaJava, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiFirebase, SiFigma } from 'react-icons/si';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get theme from context
  const { isDark, isLight } = useTheme();

  const skills = [
    { name: 'React', level: 85, category: 'frontend', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', level: 80, category: 'frontend', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'HTML/CSS', level: 90, category: 'frontend', icon: <><FaHtml5 /><FaCss3Alt /></>, colors: ['#E34F26', '#1572B6'] },
    { name: 'Python', level: 75, category: 'backend', icon: <FaPython />, color: '#3776AB' },
    { name: 'Java', level: 70, category: 'backend', icon: <FaJava />, color: '#007396' },
    { name: 'C Programming', level: 65, category: 'backend', icon: <Code size={20} />, color: '#A8B9CC' },
    { name: 'Node.js', level: 60, category: 'backend', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Git/GitHub', level: 85, category: 'tools', icon: <GitBranch size={20} />, color: '#F05032' }
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
      description: 'Comprehensive web development certification covering modern frontend technologies and best practices.',
      icon: <BookOpen size={20} />
    },
    { 
      id: 2,
      name: 'JOHN HOPKINS UNIVERSITY', 
      issuer: 'Coursera', 
      year: '2025',
      image: '/images/certificates/certificate2.jpg',
      skills: ['HTML','CSS','JavaScript'],
      category: 'web-development',
      description: 'Comprehensive web development certification covering modern frontend technologies and best practices.',
      icon: <BookOpen size={20} />
    },
    { 
      id: 3,
      name: 'eDevice-CR', 
      issuer: 'COMSATS UNIVERSITY ISLAMABAD', 
      year: '2025',
      image: '/images/certificates/certificate3.jpg',
      skills: ['HTML','CSS','JavaScript','React'],
      category: 'web-development',
      description: 'Comprehensive web development certification covering modern frontend technologies and best practices.',
      icon: <Award size={20} />
    },
    { 
      id: 4,
      name: 'Web Development Bootcamp', 
      issuer: 'Google Developer Group', 
      year: '2024',
      image: '/images/certificates/certificate4.jpg',
      skills: ['Web Development', 'Frontend', 'HTML', 'CSS', 'JavaScript'],
      category: 'web-development',
      description: 'Completed the comprehensive web development bootcamp organized by Google Developer Group on Campus. Gained hands-on experience in modern web development technologies and best practices.',
      icon: <Award size={20} />
    },
    { 
      id: 5,
      name: 'Want to Build AI Agents?', 
      issuer: 'Google Developer Groups Cloud', 
      year: '2025',
      image: '/images/certificates/certificate5.jpg',
      skills: ['AI Development', 'OpenAI APIs', 'AI Agents', 'Machine Learning'],
      category: 'ai-ml',
      description: 'Participated in an intensive AI workshop focused on developing AI solutions with OpenAI APIs, integrating memory systems, automation for smarter agents, and deploying optimized AI models.',
      icon: <BookOpen size={20} />
    },
    { 
      id: 6,
      name: 'Runner Up - Web Development Competition', 
      issuer: 'VISIO SPARK - COMSATS University', 
      year: '2024',
      images: [
        '/images/achievements/visiospark1.jpg',
        '/images/achievements/visiospark2.jpg',
        '/images/achievements/visiospark3.jpg'
      ],
      skills: ['Web Development', 'Competition', 'Problem Solving', 'Teamwork'],
      category: 'achievement',
      description: 'Secured Runner Up position in the national level competition VISIO SPARK held at COMSATS University Islamabad, Wah Campus. Participated in the web development competition category, showcasing skills in frontend development, responsive design, and creative problem-solving under time constraints.',
      isAchievement: true,
      icon: <Trophy size={20} />,
      achievementDetails: {
        event: 'VISIO SPARK National Competition',
        location: 'COMSATS University Islamabad, Wah Campus',
        position: 'Runner Up',
        category: 'Web Development Competition',
        date: '2024'
      }
    }
  ];

  const categories = ['all', 'web-development', 'ai-ml', 'achievement'];

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  const handleViewFullSize = (imageUrl) => {
    window.open(imageUrl, '_blank', 'noopener,noreferrer');
  };

  const nextImage = () => {
    if (selectedCertificate.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedCertificate.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCertificate.images) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedCertificate.images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedCertificate]);

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

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedCertificate(null);
              setCurrentImageIndex(0);
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden ${
                isDark 
                  ? 'bg-gray-900/95 backdrop-blur-xl border border-gray-800' 
                  : 'bg-white/95 backdrop-blur-xl border border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => {
                    setSelectedCertificate(null);
                    setCurrentImageIndex(0);
                  }}
                  className={`absolute top-4 right-4 z-20 rounded-full p-2 shadow-lg transition-colors ${
                    isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <X size={20} />
                </button>
                
                <div className="grid md:grid-cols-2">
                  <div className="p-6">
                    {selectedCertificate.images ? (
                      <div className="relative">
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                          <img
                            src={selectedCertificate.images[currentImageIndex]}
                            alt={`${selectedCertificate.name} - Image ${currentImageIndex + 1}`}
                            className="w-full h-64 object-cover transition-opacity duration-300"
                          />
                          
                          {selectedCertificate.images.length > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevImage();
                                }}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all"
                              >
                                <ChevronLeft size={20} />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage();
                                }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-all"
                              >
                                <ChevronRight size={20} />
                              </button>
                            </>
                          )}
                          
                          {selectedCertificate.images.length > 1 && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {selectedCertificate.images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    index === currentImageIndex
                                      ? 'bg-white scale-125'
                                      : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                          
                          {selectedCertificate.images.length > 1 && (
                            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-sm">
                              {currentImageIndex + 1} / {selectedCertificate.images.length}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex gap-3 mt-4">
                          <button 
                            onClick={() => handleViewFullSize(selectedCertificate.images[currentImageIndex])}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex-1 justify-center"
                          >
                            <ExternalLink size={16} />
                            View Full Size
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <img
                          src={selectedCertificate.image}
                          alt={selectedCertificate.name}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="flex gap-3 mt-4">
                          <button 
                            onClick={() => handleViewFullSize(selectedCertificate.image)}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex-1 justify-center"
                          >
                            <ExternalLink size={16} />
                            View Full Size
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        isDark ? 'bg-gray-800' : 'bg-gray-100'
                      }`}>
                        {selectedCertificate.icon}
                      </div>
                      <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCertificate.name}
                      </h3>
                    </div>
                    
                    {selectedCertificate.isAchievement && (
                      <div className="mb-3 inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        🏆 Achievement
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark 
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedCertificate.issuer}
                      </span>
                      <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{selectedCertificate.year}</span>
                    </div>
                    
                    {selectedCertificate.achievementDetails && (
                      <div className={`mb-4 p-3 rounded-xl border ${
                        isDark
                          ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-800/30'
                          : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
                      }`}>
                        <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Achievement Details</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Event:</span>
                            <span className="ml-2 font-medium">{selectedCertificate.achievementDetails.event}</span>
                          </div>
                          <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Position:</span>
                            <span className="ml-2 font-medium">{selectedCertificate.achievementDetails.position}</span>
                          </div>
                          <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Category:</span>
                            <span className="ml-2 font-medium">{selectedCertificate.achievementDetails.category}</span>
                          </div>
                          <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>Location:</span>
                            <span className="ml-2 font-medium">{selectedCertificate.achievementDetails.location}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {selectedCertificate.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {selectedCertificate.isAchievement ? 'Skills Demonstrated' : 'Skills Verified'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDark
                                ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 text-green-300 border border-green-800/50'
                                : 'bg-gradient-to-r from-green-100 to-blue-100 text-green-800'
                            }`}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                About Me
              </span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/80 border border-gray-200/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <School size={24} className="text-blue-500" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-xl">C</span>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>COMSATS University Islamabad</h3>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Abbottabad Campus</p>
                      <p className="text-blue-500 font-medium">BS Software Engineering</p>
                      <p className={isDark ? 'text-gray-500' : 'text-gray-500'}>7th Semester - Current</p>
                      <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Expected Graduation: 2026</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certificates & Achievements Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/80 border border-gray-200/50'
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                      <Award size={24} className="text-blue-500" />
                    </div>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Certificates & Achievements</h2>
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {certificates.length} Items
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
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : isDark
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
                      }`}
                    >
                      {category === 'all' ? 'All' : 
                       category === 'ai-ml' ? 'AI/ML' : 
                       category === 'achievement' ? 'Achievements' :
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
                      className={`rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group ${
                        certificate.isAchievement 
                          ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-800/50' 
                          : isDark
                          ? 'bg-gray-900/50 border border-gray-800'
                          : 'bg-gray-100/50 border border-gray-300'
                      }`}
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      <div className="relative overflow-hidden">
                        {certificate.isAchievement ? (
                          <div className="relative">
                            <img
                              src={certificate.images[0]}
                              alt={certificate.name}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded text-xs font-bold">
                              🏆 Achievement
                            </div>
                            {certificate.images.length > 1 && (
                              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                +{certificate.images.length - 1} more
                              </div>
                            )}
                          </div>
                        ) : (
                          <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${
                              isDark ? 'bg-gray-800' : 'bg-gray-100'
                            }`}>
                              {certificate.icon}
                            </div>
                            <h3 className={`font-semibold flex-1 group-hover:text-blue-500 transition-colors ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {certificate.name}
                            </h3>
                          </div>
                          {certificate.isAchievement && (
                            <span className="ml-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-500 text-xs px-2 py-1 rounded border border-purple-800/50">
                              🥈 Runner Up
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-blue-500 text-sm font-medium">
                            {certificate.issuer}
                          </span>
                          <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            {certificate.year}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className={`px-2 py-1 rounded text-xs ${
                                certificate.isAchievement
                                  ? 'bg-gradient-to-r from-green-900/30 to-blue-900/30 text-green-500 border border-green-800/50'
                                  : isDark
                                  ? 'bg-blue-900/30 text-blue-300 border border-blue-800/50'
                                  : 'bg-blue-100 text-blue-800 border border-blue-300'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {certificate.skills.length > 3 && (
                            <span className={`px-2 py-1 rounded text-xs border ${
                              isDark 
                                ? 'bg-gray-800 text-gray-400 border-gray-700' 
                                : 'bg-gray-200 text-gray-600 border-gray-300'
                            }`}>
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
                className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/80 border border-gray-200/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <GraduationCap size={24} className="text-blue-500" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>My Journey</h2>
                </div>
                <div className={`space-y-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                    I also enjoy participating in competitions to challenge myself. Recently, I secured 
                    <span className="font-medium text-purple-500"> Runner Up position</span> in the national level 
                    <span className="font-medium"> VISIO SPARK</span> competition at COMSATS Wah Campus, 
                    which was an incredible learning experience in web development under pressure.
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
                className={`backdrop-blur-xl rounded-3xl shadow-2xl p-8 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10' 
                    : 'bg-white/80 border border-gray-200/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20">
                    <Code size={24} className="text-blue-500" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h2>
                </div>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div 
                            className="flex items-center justify-center w-8 h-8 rounded-lg"
                            style={{ 
                              background: skill.colors 
                                ? `linear-gradient(135deg, ${skill.colors[0]}20, ${skill.colors[1]}20)` 
                                : `${skill.color}20`,
                              color: skill.color
                            }}
                          >
                            {skill.icon}
                          </div>
                          <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                        </div>
                        <span className="text-blue-500 font-medium">{skill.level}%</span>
                      </div>
                      <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Categories */}
                <div className={`mt-8 pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
                  <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills by Category</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`text-center p-4 rounded-xl border ${
                      isDark 
                        ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-800/50' 
                        : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300'
                    }`}>
                      <div className="text-blue-500 font-bold text-lg">
                        {skills.filter(s => s.category === 'frontend').length}
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Frontend</div>
                    </div>
                    <div className={`text-center p-4 rounded-xl border ${
                      isDark 
                        ? 'bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-800/50' 
                        : 'bg-gradient-to-br from-green-50 to-blue-50 border-green-300'
                    }`}>
                      <div className="text-green-500 font-bold text-lg">
                        {skills.filter(s => s.category === 'backend').length}
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Backend</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">At a Glance</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-white">7th</div>
                    <div className="text-blue-200 text-sm">Semester</div>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-blue-200 text-sm">Projects</div>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-white">{skills.length}</div>
                    <div className="text-blue-200 text-sm">Technologies</div>
                  </div>
                  <div className="text-center backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20">
                    <div className="text-2xl font-bold text-white">{certificates.length}</div>
                    <div className="text-blue-200 text-sm">Achievements</div>
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