/**
 * Header - Top navigation bar with search and user profile
 * Inspired by VS Code's command palette and top menu bar
 * 
 * @returns {JSX.Element} The header component
 */
export const Header = () => {
  return (
    <div className="h-12 bg-[#252526] border-b border-[#3e3e42] flex items-center justify-between px-4">
      {/* Search Bar - Command Palette Style */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search (Ctrl+P)..."
            className="w-full bg-[#3c3c3c] text-[#d4d4d4] px-4 py-1.5 rounded border border-[#3e3e42] focus:border-[#007acc] focus:outline-none font-mono text-sm placeholder:text-[#858585]"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858585] text-xs font-mono">
            ⌘P
          </div>
        </div>
      </div>

      {/* Right Section - User Info */}
      <div className="flex items-center gap-4 ml-4">
        {/* Notification Bell (placeholder) */}
        <button className="text-[#d4d4d4] hover:text-white transition-colors">
          <span className="text-lg">🔔</span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 bg-[#3c3c3c] px-3 py-1.5 rounded hover:bg-[#37373d] transition-colors cursor-pointer">
          <span className="text-lg">👤</span>
          <span className="text-[#dcdcaa] font-mono text-sm">@Dev1</span>
        </div>
      </div>
    </div>
  );
};
