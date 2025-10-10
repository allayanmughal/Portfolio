import React, { useState, useEffect } from 'react';  // Add React import here

const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        
        // Filter out forked repositories and format the data
        const formattedRepos = data
          .filter(repo => !repo.fork)
          .map(repo => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || 'No description available',
            technologies: repo.language ? [repo.language] : [],
            githubUrl: repo.html_url,
            liveUrl: repo.homepage || '',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updated: repo.updated_at,
            isGitHub: true
          }));
        
        setRepos(formattedRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return { repos, loading, error };
};

export default useGitHubRepos;