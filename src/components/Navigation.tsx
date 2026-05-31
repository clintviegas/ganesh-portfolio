import { Link, useLocation } from 'react-router-dom';
import { Film, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/projects' },
  { name: 'Reels', path: '/reel' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40 pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <Film className="w-6 h-6 text-gold" />
            <span className="text-base sm:text-lg font-medium tracking-wide">Ganesh Khatri</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-black bg-gold px-4 py-2 rounded'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden inline-flex h-11 w-11 -mr-2 items-center justify-center rounded-lg text-white active:scale-95 transition-transform"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-border/40 transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 sm:px-6 py-3 flex flex-col gap-1 bg-background/95 backdrop-blur-md">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active
                    ? 'bg-gold text-black'
                    : 'text-white/85 hover:text-gold hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;