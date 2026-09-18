import React, { useState } from 'react';
import { 
  User, 
  Code2, 
  Briefcase, 
  Menu, 
  X,
  Terminal,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Education', href: '#education', icon: GraduationCap },
  ];

  return (
    <>
      {/* Desktop Sidebar (Activity Bar Style) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-16 bg-vscode-activity border-r border-white/10 z-50 py-4 justify-between">
        <div className="flex flex-col items-center gap-6">
          <a
            href="#info"
            className="p-2 mb-2 group relative"
            aria-label="Info"
          >
            <Terminal className="w-8 h-8 text-vscode-accent" />
            <span className="absolute left-14 top-2 bg-vscode-sidebar text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
              Info
            </span>
          </a>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="p-3 text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-vscode-accent transition-all group relative"
                aria-label={item.name}
              >
                <Icon className="w-6 h-6" />
                {/* Tooltip */}
                <span className="absolute left-14 top-2 bg-vscode-sidebar text-white text-xs px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-6 pb-4">
           <div className="p-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
             <img 
               src={PERSONAL_INFO.logo} 
               alt="Settings" 
               className="w-8 h-8 rounded-full border-2 border-transparent hover:border-vscode-accent transition-colors object-cover"
             />
           </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden fixed w-full z-50 bg-vscode-bg/90 backdrop-blur-md border-b border-white/10">
        <div className="px-4 h-14 flex items-center justify-between">
          <a href="#info" className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-vscode-accent" />
            <span className="font-mono font-bold text-white">Wan-Ting.dev</span>
          </a>
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileOpen && (
          <div className="bg-vscode-sidebar border-b border-white/10 px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block py-2 text-gray-300 hover:text-white font-mono"
              >
                <span className="text-vscode-accent mr-2">#</span>{item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;