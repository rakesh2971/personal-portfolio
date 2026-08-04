import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import 'react-github-calendar/tooltips.css';
import { GitCommit } from 'lucide-react';

export const GithubActivity = () => {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/[0.02] transition-colors duration-300 w-full">
      <div className="flex items-center gap-3 mb-8">
        <GitCommit size={20} className="text-white" />
        <h3 className="text-lg font-bold text-white">GitHub Contributions</h3>
      </div>
      <div className="flex justify-center w-full overflow-x-auto pt-12 pb-4">
        <div className="min-w-fit">
          <GitHubCalendar 
            username="rakesh2971" 
            colorScheme="dark"
            theme={{
              dark: ['#1f1f22', '#3f3f46', '#71717a', '#a1a1aa', '#e4e4e7']
            }}
            tooltips={{
              activity: {
                text: (activity) => `${activity.count} contributions on ${activity.date}`
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
