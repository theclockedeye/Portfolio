import { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

export const useGithubRepos = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit();
      try {
        const response = await octokit.repos.listForUser({
          username: 'theclockedeye',
          sort: 'updated',
          per_page: 6,
        });
        setRepos(response.data);
      } catch (error) {
        setError('Unable to fetch repositories at the moment');
        setRepos([
          {
            id: 1,
            name: 'Portfolio',
            description: 'My personal portfolio website built with React and Tailwind CSS',
            html_url: 'https://github.com/theclockedeye/portfolio',
            stargazers_count: 0
          },
        ]);
      }
    };

    fetchRepos();
  }, []);

  return { repos, error };
};