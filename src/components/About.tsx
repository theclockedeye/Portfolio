import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Smartphone, Palette } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fields = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern technologies',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Creating cross-platform mobile applications with native-like experience',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with modern aesthetics',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </h2>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Computer Science graduate with a passion for creating innovative digital solutions.
            Specialized in full-stack development with a keen eye for design and user experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {fields.map((field, index) => (
              <motion.div
                key={field.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="text-cyan-400 mb-4">{field.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{field.title}</h3>
                <p className="text-gray-400">{field.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;