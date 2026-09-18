import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-vscode-activity/50 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <p className="text-gray-500 text-xs font-mono">
          {PERSONAL_INFO.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;