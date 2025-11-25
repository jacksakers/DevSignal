import { ActivityBar } from './ActivityBar';
import { Sidebar } from './Sidebar';
import { MainEditor } from './MainEditor';
import { Inspector } from './Inspector';
import { Header } from './Header';

/**
 * Layout - Main application layout wrapper
 * Implements the three-column IDE-style interface inspired by VS Code
 * Structure: Header -> (ActivityBar | Sidebar | MainEditor | Inspector)
 * 
 * @returns {JSX.Element} The complete application layout
 */
export const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Header with Search */}
      <Header />

      {/* Main Content Area - Three Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Far Left: Activity Bar */}
        <ActivityBar />

        {/* Left: Sidebar/Explorer */}
        <Sidebar />

        {/* Center: Main Editor */}
        <MainEditor />

        {/* Right: Inspector Panel */}
        <Inspector />
      </div>
    </div>
  );
};
