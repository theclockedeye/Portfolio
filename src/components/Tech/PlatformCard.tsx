import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PlatformCardProps {
  name: string;
  url: string;
  logo: React.ReactNode;
  delay: number;
}

const PlatformCard = ({ name, url, logo, delay }: PlatformCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-800 rounded-lg p-6 flex items-center justify-between hover:bg-gray-700 transition-colors group"
    >
      <div className="flex items-center space-x-3">
        <span className="text-cyan-400">{logo}</span>
        <span className="text-lg font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
          {name}
        </span>
      </div>
      <ExternalLink size={16} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
    </motion.a>
  );
};

export default PlatformCard;