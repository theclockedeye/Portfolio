import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import ProfileImage from './ProfileImage';
import image from "./profile.png";

const Header = () => {
  // Using a direct image URL from a CDN or hosting service

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
          <a href="https://linkedin.com/in/arungeorge034" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://youtube.com/@clocked-eye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaYoutube size={24} />
          </a>
          <a href="https://instagram.com/__arun.george" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/theclockedeye" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaGithub size={24} />
          </a>
        </motion.div>
      </div>

      <ProfileImage imageUrl={} alt="Arun George" />
    </motion.header>
  );
};

export default Header;
