import React, { useState } from 'react';
import { CtaButton } from './CtaButton.tsx';
import { Menu, X, Sun, Moon, Mic } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface NavbarProps {
  onOpenSubscribe?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSubscribe }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#EAE3D3]/90 dark:bg-[#15101B]/90 border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 md:gap-8">
        
        {/* Zone 1: Brand with microphone icon and wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 text-xl md:text-2xl font-bold tracking-tight text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-[#544799] dark:bg-[#B0A7E7] text-[#EAE3D3] dark:text-[#15101B] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Mic className="w-5 h-5" />
          </div>
          <span className="font-heading font-extrabold tracking-normal">theopenmind.club</span>
        </a>

        {/* Zone 2: Clean single-line nav links with enlarged font */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-base lg:text-lg font-semibold text-[#592828]/85 dark:text-[#EAE3D3]/85 font-heading">
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
            2548 Blueprint
          </a>
          <a
            href="#showcase"
            className="hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            House of Light!
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
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Εναλλαγή σε φωτεινό θέμα' : 'Εναλλαγή σε σκοτεινό θέμα'}
            className="p-3 rounded-xl border border-[#592828]/20 dark:border-[#B0A7E7]/20 text-[#592828] dark:text-[#B0A7E7] hover:text-[#544799] dark:hover:text-[#EAE3D3] bg-[#EAE3D3]/60 dark:bg-[#1F1625]/80 hover:bg-[#EAE3D3] dark:hover:bg-[#251C30] transition-colors cursor-pointer"
            title={theme === 'dark' ? 'Φωτεινό θέμα (Light)' : 'Σκοτεινό θέμα (Dark)'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-[#B0A7E7] transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-[#592828] transition-transform duration-300 hover:-rotate-12" />
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
            className="p-2.5 rounded-lg border border-[#592828]/20 dark:border-[#B0A7E7]/20 text-[#592828] dark:text-[#B0A7E7] bg-[#EAE3D3] dark:bg-[#1F1625]"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-[#B0A7E7]" /> : <Moon className="w-5 h-5 text-[#592828]" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#592828] dark:text-[#EAE3D3] hover:text-[#544799] dark:hover:text-[#B0A7E7] focus:outline-hidden rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#592828]/15 dark:border-[#B0A7E7]/15 bg-[#EAE3D3] dark:bg-[#15101B] px-6 py-6 space-y-4 shadow-xl transition-colors">
          <nav className="flex flex-col space-y-3.5 text-base font-bold text-[#592828] dark:text-[#EAE3D3] font-heading">
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
              2548 Blueprint
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#544799] dark:hover:text-[#B0A7E7] transition-colors"
            >
              House of Light!
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
              className="w-full text-center justify-center"
            />
          </div>
        </div>
      )}
    </header>
  );
};
