import React, { useEffect, useState } from 'react';
import { Star, GitFork } from 'lucide-react';

export const ProjectGithubStats = ({ repo }: { repo?: string }) => {
  const [stats, setStats] = useState<{ stars: number; forks: number } | null>(null);
  
  useEffect(() => {
    if (!repo) return;
    
    const fetchRepoStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setStats({
            stars: data.stargazers_count,
            forks: data.forks_count
          });
        }
      } catch (error) {
        console.error("Failed to fetch github stats", error);
      }
    };
    
    fetchRepoStats();
  }, [repo]);

  if (!stats) return null;

  return (
    <div className="flex items-center gap-4 mt-4 text-xs font-mono text-gray-500">
      <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
        <Star size={14} className={stats.stars > 0 ? "text-yellow-500" : ""} />
        <span>{stats.stars}</span>
      </div>
      <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
        <GitFork size={14} />
        <span>{stats.forks}</span>
      </div>
    </div>
  );
};
