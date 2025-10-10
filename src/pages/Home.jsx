import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-600 font-semibold text-lg mb-4"
              >
                👋 Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Aalyan <span className="text-blue-600">Mughal</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Software Engineering Student at <span className="font-semibold text-blue-600">COMSATS University Islamabad</span>, 
                passionate about creating innovative web solutions and digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link 
                  to="/projects" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  🚀 View My Projects
                </Link>
                
                <Link 
                  to="/contact" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  💬 Get In Touch
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 text-center"
              >
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-blue-600">7th</p>
                  <p className="text-gray-600 text-sm">Semester</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-blue-600">10+</p>
                  <p className="text-gray-600 text-sm">Projects</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-blue-600">5+</p>
                  <p className="text-gray-600 text-sm">Technologies</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <motion.img
                  src="/images/portfolio/aalyan-profile.jpg"
                  alt="Aalyan Mughal - Software Engineering Student"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white relative z-10"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 10 }
                  }}
                />
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      {/* Skills Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced in modern web development technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'JavaScript', 'Python', 'HTML/CSS', 'Java', 'C', 'Node.js', 'Git'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-3xl mb-3">
                  {tech === 'React' && '⚛️'}
                  {tech === 'JavaScript' && '💛'}
                  {tech === 'Python' && '🐍'}
                  {tech === 'HTML/CSS' && '🎨'}
                  {tech === 'Java' && '☕'}
                  {tech === 'C' && '🔧'}
                  {tech === 'Node.js' && '📦'}
                  {tech === 'Git' && '📚'}
                </div>
                <h3 className="font-semibold text-gray-900">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out my work on the official Abbottabad Police website
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="md:flex">
              <div className="md:flex-1 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Abbottabad Police Website</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Official website for Abbottabad Police Department featuring crime reporting, 
                  citizen services, and departmental information. Built with modern web technologies 
                  to serve the community effectively.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['HTML', 'CSS', 'JavaScript', 'PHP'].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://abbottabadpolice.kp.gov.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    🌐 Visit Website
                  </a>
                  <Link
                    to="/projects"
                    className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    📁 All Projects
                  </Link>
                </div>
              </div>
              <div className="md:flex-1 bg-gradient-to-br from-blue-100 to-purple-100 min-h-64 md:min-h-auto flex items-center justify-center">
                <div className="text-6xl">👮‍♂️</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's work together to bring your ideas to life with modern web technologies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              💬 Get In Touch
            </Link>
            <a
              href="https://github.com/allayanmughal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              💻 View GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;