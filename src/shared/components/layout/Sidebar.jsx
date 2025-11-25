/**
 * Sidebar - Left panel "Explorer" with filters, tags, and recent projects
 * Mimics VS Code's file explorer with collapsible sections
 * 
 * @returns {JSX.Element} The sidebar component with navigation tree
 */
export const Sidebar = () => {
  return (
    <div className="w-64 bg-[#252526] flex flex-col border-r border-[#3e3e42] overflow-y-auto">
      {/* Section Header */}
      <div className="px-4 py-2 text-[#d4d4d4] text-xs uppercase tracking-wide font-mono">
        Explorer
      </div>

      {/* Filters Section */}
      <div className="px-2 py-2">
        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#37373d] rounded cursor-pointer">
          <span className="text-[#d4d4d4]">▶</span>
          <span className="text-[#569cd6] font-mono text-sm">FILTERS</span>
        </div>
        
        {/* Collapsed filter items - placeholder */}
        <div className="pl-6 mt-1 space-y-1">
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            → React
          </div>
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            → Node.js
          </div>
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            → Python
          </div>
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            → Rust
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="px-2 py-2 mt-4">
        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#37373d] rounded cursor-pointer">
          <span className="text-[#d4d4d4]">▶</span>
          <span className="text-[#569cd6] font-mono text-sm">RECENT</span>
        </div>
        
        {/* Collapsed recent items - placeholder */}
        <div className="pl-6 mt-1 space-y-1">
          <div className="text-[#6a9955] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer font-mono">
            # 8392
          </div>
          <div className="text-[#6a9955] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer font-mono">
            # 1102
          </div>
          <div className="text-[#6a9955] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer font-mono">
            # 7745
          </div>
        </div>
      </div>

      {/* Workspace Section */}
      <div className="px-2 py-2 mt-4">
        <div className="flex items-center gap-1 px-2 py-1 hover:bg-[#37373d] rounded cursor-pointer">
          <span className="text-[#d4d4d4]">▶</span>
          <span className="text-[#569cd6] font-mono text-sm">WORKSPACE</span>
        </div>
        
        {/* Workspace categories - placeholder */}
        <div className="pl-6 mt-1 space-y-1">
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            📁 Open Source
          </div>
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            📁 Help Wanted
          </div>
          <div className="text-[#d4d4d4] text-sm py-1 px-2 hover:bg-[#37373d] rounded cursor-pointer">
            📁 Showcase
          </div>
        </div>
      </div>
    </div>
  );
};
