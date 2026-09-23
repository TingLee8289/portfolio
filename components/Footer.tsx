import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-vscode-activity/50 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        <p className="text-gray-500 text-xs font-mono">
          © {new Date().getFullYear()} {t.personalInfo.name} {t.ui.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
