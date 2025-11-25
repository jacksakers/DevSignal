/**
 * ActivityBar - Far left vertical navigation bar inspired by VS Code
 * Displays primary navigation icons in a narrow column
 * 
 * @returns {JSX.Element} The activity bar with navigation icons
 */
export const ActivityBar = () => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'contributions', label: 'My Contributions', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  return (
    <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          className="w-10 h-10 flex items-center justify-center hover:bg-[#3e3e42] rounded transition-colors relative group"
          aria-label={item.label}
        >
          <span className="text-xl">{item.icon}</span>
          {/* Active indicator - border-left in original design */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white hidden group-hover:block"></div>
          
          {/* Tooltip */}
          <span className="absolute left-14 bg-[#252526] text-[#d4d4d4] px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};
