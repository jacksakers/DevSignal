/**
 * MainEditor - Center content area with tab system for different views
 * Mimics VS Code's main editor pane with file tabs at the top
 * 
 * @returns {JSX.Element} The main content area with tabs
 */
export const MainEditor = () => {
  const tabs = [
    { id: 'feed', label: 'main.tsx', active: true },
    { id: 'search', label: 'Search Results', active: false }
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

      {/* Editor Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Line Numbers Column (decorative) */}
        <div className="flex gap-4">
          <div className="text-[#858585] font-mono text-sm select-none space-y-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>

          {/* Content Placeholder */}
          <div className="flex-1 font-mono text-sm space-y-2">
            <div className="text-[#c586c0]">import</div>
            <div className="text-[#569cd6]">
              <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">ProjectFeed</span> = () {'=>'} {'{'}
            </div>
            <div className="pl-4 text-[#6a9955]">
              // Content will be loaded here
            </div>
            <div className="pl-4 text-[#c586c0]">return</div>
            <div className="pl-8 text-[#d4d4d4]">{'<'}div{'>'}</div>
            <div className="pl-12 text-[#ce9178]">"Project Feed Placeholder"</div>
            <div className="pl-8 text-[#d4d4d4]">{'<'}/div{'>'}</div>
            <div className="text-[#d4d4d4]">{'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
