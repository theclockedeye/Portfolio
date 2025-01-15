import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Octokit } from '@octokit/rest';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit();
      try {
        const response = await octokit.repos.listForUser({
          username: 'theclockedeye', // Your GitHub username
          sort: 'updated',
          per_page: 6,
        });
        setRepos(response.data);
      } catch (error) {
        setError('Unable to fetch repositories at the moment');
        // Fallback data for development
        setRepos([
          {
            id: 1,
            name: 'Portfolio',
            description: 'My personal portfolio website built with React and Tailwind CSS',
            html_url: 'https://github.com/theclockedeye/portfolio',
            stargazers_count: 0
          },
          // Add more fallback repos if needed
        ]);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Featured Projects
          </h2>

          {error && (
            <p className="text-center text-gray-400 mb-8">{error}</p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Github className="text-cyan-400" />
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Star size={16} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                  <p className="text-gray-400 mb-4 h-20 overflow-hidden">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex justify-between items-center">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-2"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects