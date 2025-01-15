import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import ProfileImage from './ProfileImage';

const Header = () => {
  // Using a direct image URL from a CDN or hosting service
  const profileImageUrl = "https://drive.google.com/uc?export=download&id=1PKtAMqxwimSqt6pmc0M5evI4rgo4mkOP
";
  
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="flex-1 text-white max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Arun George
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl mb-6 text-gray-300"
        >
          Full Stack Developer & UI/UX Designer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-400 mb-8"
        >
          Crafting digital experiences that merge innovation with functionality
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex space-x-6"
        >
          <a href="https://linkedin.com/in/arun-george-b2b1b1b1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://youtube.com/@arungeorge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Youtube size={24} />
          </a>
          <a href="https://instagram.com/theclockedeye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://github.com/theclockedeye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github size={24} />
          </a>
        </motion.div>
      </div>
      
      <ProfileImage imageUrl={profileImageUrl} alt="Arun George" />
    </motion.header>
  );
};

export default Header;