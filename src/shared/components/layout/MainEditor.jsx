/**
 * MainEditor - Center content area with tab system for different views
 * Displays project cards in a JIRA-style backlog format
 * 
 * @returns {JSX.Element} The main content area with project cards
 */
export const MainEditor = () => {
  const tabs = [
    { id: 'feed', label: 'Project Feed', active: true },
    { id: 'search', label: 'Search Results', active: false }
  ];

  // Placeholder project data
  const projects = [
    { 
      id: 'DEV-8392', 
      title: 'TweetClone', 
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'A Twitter clone with real-time updates',
      status: 'Help Wanted',
      difficulty: 'Beginner',
      stars: 42,
      issues: 12
    },
    { 
      id: 'DEV-1102', 
      title: 'CodeSnippetManager', 
      tech: ['TypeScript', 'Express', 'PostgreSQL'],
      description: 'Organize and share code snippets with syntax highlighting',
      status: 'Showcase',
      difficulty: 'Intermediate',
      stars: 156,
      issues: 8
    },
    { 
      id: 'DEV-7745', 
      title: 'DevTaskBoard', 
      tech: ['Vue.js', 'Firebase'],
      description: 'Kanban board for developer task management',
      status: 'Help Wanted',
      difficulty: 'Beginner',
      stars: 89,
      issues: 23
    }
  ];

  return (
    <div className="flex-1 bg-[#1e1e1e] flex flex-col overflow-hidden">
      {/* Tab Bar */}
      <div className="bg-[#252526] border-b border-[#3e3e42] flex items-center">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`px-4 py-2 font-mono text-sm cursor-pointer border-r border-[#3e3e42] ${
              tab.active 
                ? 'bg-[#1e1e1e] text-[#dcdcaa]' 
                : 'text-[#d4d4d4] hover:bg-[#37373d]'
            }`}
          >
            {tab.label}
            {tab.active && <span className="ml-2 text-[#6a9955]">●</span>}
          </div>
        ))}
      </div>

      {/* Project Cards - JIRA Backlog Style */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-3 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#252526] border border-[#3e3e42] rounded p-4 cursor-pointer transition-all duration-200 hover:border-[#007acc] hover:shadow-lg hover:shadow-[#007acc]/20 group"
            >
              {/* Card Header - Always Visible */}
              <div className="flex items-start gap-4">
                {/* Project ID */}
                <div className="text-[#6a9955] font-mono text-xs mt-1">
                  {project.id}
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  {/* Title and Status */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#dcdcaa] font-mono text-lg">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                        project.status === 'Help Wanted' 
                          ? 'bg-[#c586c0] bg-opacity-20 text-[#c586c0]'
                          : 'bg-[#569cd6] bg-opacity-20 text-[#569cd6]'
                      }`}>
                        {project.status}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#6a9955] bg-opacity-20 text-[#6a9955]">
                        {project.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex gap-2 mb-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 bg-[#3c3c3c] text-[#ce9178] rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description - Basic */}
                  <p className="text-[#d4d4d4] text-sm mb-2">
                    {project.description}
                  </p>

                  {/* Quick Stats - Always Visible */}
                  <div className="flex items-center gap-4 text-xs text-[#858585]">
                    <span className="flex items-center gap-1">
                      <span className="text-[#b5cea8]">★</span> {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#b5cea8]">●</span> {project.issues} issues
                    </span>
                  </div>

                  {/* Expanded Content - Only on Hover */}
                  <div className="mt-4 pt-4 border-t border-[#3e3e42] hidden group-hover:block">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Additional Info */}
                      <div className="space-y-2">
                        <div className="text-[#6a9955] text-xs font-mono">// Project Details</div>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span className="text-[#858585]">Last Updated:</span>
                            <span className="text-[#b5cea8] font-mono">2d ago</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#858585]">Contributors:</span>
                            <span className="text-[#b5cea8] font-mono">8</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#858585]">License:</span>
                            <span className="text-[#d4d4d4] font-mono">MIT</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="space-y-2">
                        <div className="text-[#6a9955] text-xs font-mono">// Quick Actions</div>
                        <div className="space-y-2">
                          <button className="w-full bg-[#007acc] hover:bg-[#0062a3] text-white text-sm py-1.5 rounded font-mono transition-colors">
                            View Details →
                          </button>
                          <button className="w-full border border-[#c586c0] text-[#c586c0] hover:bg-[#c586c0] hover:bg-opacity-10 text-sm py-1.5 rounded font-mono transition-colors">
                            ★ Like
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End of Feed Indicator */}
          <div className="text-center py-8 text-[#6a9955] font-mono text-sm">
            // End of current feed
          </div>
        </div>
      </div>
    </div>
  );
};
