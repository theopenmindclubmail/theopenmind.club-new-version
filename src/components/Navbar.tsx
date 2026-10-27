import React, { useState } from 'react';
import { CtaButton } from './CtaButton.tsx';
import { BrandStar } from './BrandStar.tsx';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface NavbarProps {
  onOpenSubscribe?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSubscribe }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#EAE3D3]/85 dark:bg-[#15101B]/85 border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6 md:gap-8">
        
        {/* Zone 1: Brand wordmark with 8-point BrandStar */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <BrandStar size={20} className="text-[#544799] dark:text-[#B0A7E7]" />
          <span className="font-heading tracking-normal font-extrabold">theopenmind.club</span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#592828]/80 dark:text-[#EAE3D3]/80">
          <a
            href="#pillars"
            className="hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Οι Πυλώνες
          </a>
          <a
            href="#gift"
            className="hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Οδηγός 2548
          </a>
          <a
            href="#showcase"
            className="hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Portfolio
          </a>
          <a
            href="#social-proof"
            className="hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Εμπιστοσύνη
          </a>
          <a
            href="#faq"
            className="hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Συχνές Ερωτήσεις
          </a>
        </nav>

        {/* Zone 3: 1 Theme Toggle + 1 Primary CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Εναλλαγή σε φωτεινό θέμα' : 'Εναλλαγή σε σκοτεινό θέμα'}
            className="p-2.5 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/20 text-[#592828] dark:text-[#B0A7E7] hover:text-[#544799] dark:hover:text-[#EAE3D3] bg-[#EAE3D3]/60 dark:bg-[#1F1625]/80 hover:bg-[#EAE3D3] dark:hover:bg-[#251C30] transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Φωτεινό θέμα (Light)' : 'Σκοτεινό θέμα (Dark)'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#B0A7E7] transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#592828] transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <CtaButton
            label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
            onClick={onOpenSubscribe}
          />
        </div>

        {/* Mobile buttons: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Theme toggle"
            className="p-2 rounded-lg border border-[#592828]/20 dark:border-[#B0A7E7]/20 text-[#592828] dark:text-[#B0A7E7] bg-[#EAE3D3] dark:bg-[#1F1625]"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-[#B0A7E7]" /> : <Moon className="w-5 h-5 text-[#592828]" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-[#B0A7E7] focus:outline-hidden rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#EAE3D3] dark:bg-[#15101B] px-6 py-6 space-y-4 shadow-lg transition-colors">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#592828] dark:text-[#EAE3D3]">
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors"
            >
              Οι Πυλώνες
            </a>
            <a
              href="#gift"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors"
            >
              Οδηγός 2548
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#social-proof"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors"
            >
              Εμπιστοσύνη
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors"
            >
              Συχνές Ερωτήσεις
            </a>
          </nav>
          <div className="pt-2">
            <CtaButton
              label="ΕΓΓΡΑΦΗ & ΛΗΨΗ"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenSubscribe) onOpenSubscribe();
              }}
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};
