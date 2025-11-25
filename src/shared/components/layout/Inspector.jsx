/**
 * Inspector - Right contextual panel for project details
 * Inspired by JIRA ticket detail view, shows details when a project is selected
 * 
 * @returns {JSX.Element} The inspector panel component
 */
export const Inspector = () => {
  return (
    <div className="w-80 bg-[#252526] border-l border-[#3e3e42] flex flex-col overflow-y-auto">
      {/* Section Header */}
      <div className="px-4 py-3 border-b border-[#3e3e42]">
        <h3 className="text-[#569cd6] font-mono text-sm uppercase tracking-wide">
          INSPECTOR
        </h3>
      </div>

      {/* Content Placeholder */}
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="text-[#6a9955] text-xs font-mono">// Project Details</div>
          <div className="bg-[#1e1e1e] p-3 rounded border border-[#3e3e42]">
            <div className="text-[#dcdcaa] font-mono text-sm">Project_Name</div>
            <div className="text-[#d4d4d4] text-xs mt-1">
              <span className="text-[#569cd6]">Owner:</span> @username
            </div>
          </div>
        </div>

        {/* Action Buttons Placeholder */}
        <div className="space-y-2">
          <button className="w-full bg-[#007acc] hover:bg-[#0062a3] text-white font-mono text-sm py-2 rounded transition-colors">
            git clone
          </button>
          <button className="w-full border border-[#c586c0] text-[#c586c0] hover:bg-[#c586c0] hover:bg-opacity-10 font-mono text-sm py-2 rounded transition-colors">
            Like ★
          </button>
        </div>

        {/* Stats Section */}
        <div className="space-y-2">
          <div className="text-[#6a9955] text-xs font-mono">// Statistics</div>
          <div className="bg-[#1e1e1e] p-3 rounded border border-[#3e3e42] space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#d4d4d4]">Stars:</span>
              <span className="text-[#b5cea8] font-mono">42</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#d4d4d4]">Issues:</span>
              <span className="text-[#b5cea8] font-mono">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#d4d4d4]">Last Updated:</span>
              <span className="text-[#b5cea8] font-mono">2d ago</span>
            </div>
          </div>
        </div>

        {/* Contributors Section */}
        <div className="space-y-2">
          <div className="text-[#6a9955] text-xs font-mono">// Contributors</div>
          <div className="bg-[#1e1e1e] p-3 rounded border border-[#3e3e42]">
            <div className="text-[#d4d4d4] text-xs">
              Contributors list will appear here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
