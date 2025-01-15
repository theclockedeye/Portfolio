import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Tech = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: 'React', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'C', category: 'language' },
    { name: 'Java', category: 'language' },
  ];

  const platforms = [
    'LeetCode',
    'HackerRank',
    'GitHub',
    'Google Developers',
    'Codewars',
    'Codecrafters',
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical Skills
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">
              Programming Languages & Frameworks
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg font-medium text-cyan-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">
              Coding Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg font-medium text-cyan-400">{platform}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;