import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
}

const ProfileImage = ({ imageUrl, alt }: ProfileImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-12 md:mt-0"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50"></div>
        <img
          src={imageUrl}
          alt={alt}
          className="relative rounded-full w-full h-full object-cover border-4 border-white/10"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;
