import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const modal = document.getElementById('search-modal') as HTMLDialogElement;
        if (modal) modal.showModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSearch = () => {
    const modal = document.getElementById('search-modal') as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/archive', label: 'Archive' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-display font-bold tracking-tight hover:text-primary transition-colors duration-200">
            C A N D Y
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={openSearch} className="flex items-center gap-2 px-3 py-1.5 text-sm text-base-content/50 bg-base-200/50 hover:bg-base-200 rounded-lg transition-colors border border-base-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span>Search...</span>
              <kbd className="kbd kbd-sm ml-2 hidden lg:inline-flex border-base-300">⌘K</kbd>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-primary' : 'text-base-content/70 hover:text-base-content'
                }`}>
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={openSearch} className="text-base-content/70 hover:text-base-content" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-base-content/70 hover:text-base-content transition-colors duration-200"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4 border-t border-base-300`}>
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-primary' : 'text-base-content/70 hover:text-primary'
                }`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
