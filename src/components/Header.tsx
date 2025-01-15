import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 flex flex-col md:flex-row items-center justify-center px-4 md:px-20 bg-gradient-to-br from-gray-900 to-gray-800"
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
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12 md:mt-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
            alt="Profile" 
            className="relative rounded-full w-full h-full object-cover border-4 border-white/10"
          />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;