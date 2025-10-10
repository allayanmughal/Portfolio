import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Aalyan Mughal
        </h1>
        <div className="text-xl mb-8 text-gray-600">
          <Typewriter
            words={['Software Engineering Student', 'Web Developer', 'Passionate Coder']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          I'm a 7th semester Software Engineering student at COMSATS University Islamabad, Abbottabad Campus. I love building web applications and learning new technologies.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;