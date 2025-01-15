import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Octokit } from '@octokit/rest';
import ProjectCard from './ProjectCard';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit();
      try {
        const response = await octokit.repos.listForUser({
          username: 'theclockedeye',
          sort: 'updated',
          direction: 'desc',
        });
        
        // Filter out forked repositories
        const ownRepos = response.data.filter(repo => !repo.fork);
        setRepos(ownRepos);
      } catch (error) {
        setError('Unable to fetch repositories');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const displayedProjects = showAll ? repos : repos.slice(0, 2);

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

          {isLoading ? (
            <div className="text-center text-gray-400">Loading projects...</div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {displayedProjects.map((repo, index) => (
                  <ProjectCard
                    key={repo.id}
                    project={{
                      id: repo.id,
                      name: repo.name,
                      description: repo.description || 'No description available',
                      technologies: repo.topics || [],
                      imageUrl: `https://images.unsplash.com/photo-${1460925895917 + index}-afdab827c52f?auto=format&fit=crop&w=800&q=80`,
                      demoUrl: repo.homepage,
                      githubUrl: repo.html_url
                    }}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>

              {repos.length > 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="mt-12 text-center"
                >
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-colors"
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                  </button>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;