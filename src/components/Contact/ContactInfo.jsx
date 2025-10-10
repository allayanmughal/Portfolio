import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'mughalallayan2@gmail.com',
      link: 'mailto:mughalallayan2@gmail.com',
      color: 'from-blue-500 to-blue-600',
      description: 'Send me an email directly for quick responses'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Collaboration',
      content: 'Open for Projects',
      color: 'from-green-500 to-green-600',
      description: 'Let\'s work together on something amazing!'
    },
    {
      icon: ClockIcon,
      title: 'Response Time',
      content: 'Usually within 24 hours',
      color: 'from-purple-500 to-purple-600',
      description: 'I make sure to reply to every message promptly'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
      <p className="text-gray-600 mb-6">
        I'm always excited to work on new projects and collaborate with like-minded people. 
        Whether you have a project in mind or just want to say hello, I'd love to hear from you!
      </p>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r bg-gray-50 hover:shadow-md transition-all duration-300"
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg flex-shrink-0`}>
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600 font-medium">{item.content}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional Content to Fill Space */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
      >
        <h4 className="font-semibold text-gray-800 mb-2">What to Expect</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Detailed project discussions and planning</li>
          <li>• Regular updates and communication</li>
          <li>• Quality work with attention to detail</li>
          <li>• Professional and timely delivery</li>
        </ul>
      </motion.div>
    </div>
  );
};

 export default ContactInfo;