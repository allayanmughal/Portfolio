import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    { icon: <FaGithub />, url: 'https://github.com/allayanmughal' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aalyan-mughal-2a4b09299/' },
    { icon: <FaEnvelope />, url: 'mailto:mughalallayan2@gmail.com' },
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