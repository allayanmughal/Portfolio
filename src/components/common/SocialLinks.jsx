import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    { icon: <FaGithub />, url: 'https://github.com/aalyan' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/aalyan' },
    { icon: <FaTwitter />, url: 'https://twitter.com/aalyan' },
    { icon: <FaEnvelope />, url: 'mailto:aalyan@example.com' },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((social, index) => (
        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300 transition-colors">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;