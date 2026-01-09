import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
const Footer = () => {
  const navigate = useNavigate();
  
  // Get theme from context
  const { isDark, isLight } = useTheme();

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/allayanmughal', 
      icon: FaGithub, 
      color: 'hover:text-gray-400',
      type: 'external'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/allayanmughal1/', 
      icon: FaInstagram, 
      color: 'hover:text-pink-500',
      type: 'external'
    },
    { 
      name: 'Email', 
      url: 'mailto:mughalallayan2@gmail.com', 
      icon: FaEnvelope, 
      color: 'hover:text-red-400',
      type: 'email'
    },
  ];

  const handleEmailClick = (event, link) => {
    if (link.type === 'email') {
      // Direct to Gmail
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mughalallayan2@gmail.com', '_blank');
    }
  };

  const handleContactNavigation = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-12 ${
        isDark 
          ? 'bg-gradient-to-r from-gray-900 to-blue-900 text-white' 
          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h3 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-3xl font-bold mb-6 bg-clip-text text-transparent ${
            isDark 
              ? 'bg-gradient-to-r from-white to-blue-200' 
              : 'bg-gradient-to-r from-gray-900 to-blue-700'
          }`}
        >
          Let's Build Something Amazing Together!
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-8 mb-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.type === 'external' ? '_blank' : '_self'}
              rel={link.type === 'external' ? 'noopener noreferrer' : ''}
              onClick={(e) => handleEmailClick(e, link)}
              whileHover={{ 
                scale: 1.2,
                y: -5 
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className={`text-2xl transition-colors duration-300 cursor-pointer ${
                isDark ? 'text-white' : 'text-gray-800'
              } ${link.color}`}
              title={link.name}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Page Navigation Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4"
        >
          <motion.button
            onClick={handleContactNavigation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Or Send Me a Message Directly
          </motion.button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`mb-2 mt-6 ${
            isDark ? 'text-blue-200' : 'text-blue-800'
          }`}
        >
          Software Engineering Student • COMSATS University Islamabad, Abbottabad Campus
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`text-sm ${
            isDark ? 'text-blue-300' : 'text-blue-700'
          }`}
        >
          © {new Date().getFullYear()} Aalyan Mughal. Crafted with passion and modern web technologies.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;