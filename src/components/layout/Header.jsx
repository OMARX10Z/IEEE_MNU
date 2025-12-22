/**
 * Header Component
 * Main navigation header with responsive mobile menu and theme toggle
 */

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NAV_ITEMS } from '../../constants';

/**
 * Header component with navigation and theme toggle
 * Features:
 * - Responsive mobile menu with slide animation
 * - Smooth scroll behavior
 * - Active link highlighting with animated underline
 * - Theme toggle (light/dark mode) with rotation animation
 * - Sticky header on scroll with glassmorphism effect
 * 
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navRef = useRef(null);
  const navItemRefs = useRef({});

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  /**
   * Check if current route is active
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Update indicator position when route changes
  useLayoutEffect(() => {
    const activeItem = navItemRefs.current[location.pathname];
    const navContainer = navRef.current;
    
    if (activeItem && navContainer) {
      const navRect = navContainer.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      
      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            aria-label="IEEE Home"
          >
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-ieee-blue to-accent-teal rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-ieee-blue/25">
                <span className="text-white font-bold text-lg tracking-tight">IEEE</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-ieee-blue to-accent-teal rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                Student Branch
              </span>
              <span className="text-xs text-ieee-blue dark:text-ieee-blue-light font-medium">
                University Chapter
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div 
              ref={navRef}
              className="relative flex items-center bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1.5 shadow-inner"
            >
              {/* Animated Sliding Indicator */}
              <div
                className="absolute top-1.5 bottom-1.5 bg-gradient-to-r from-ieee-blue to-ieee-blue-dark rounded-full shadow-lg shadow-ieee-blue/30 transition-all duration-300 ease-out"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
              />
              
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  ref={(el) => (navItemRefs.current[item.path] = el)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-ieee-blue dark:hover:text-ieee-blue-light'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className={`transition-transform duration-500 ${theme === 'light' ? 'rotate-0' : 'rotate-180'}`}>
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-ieee-blue/20 to-accent-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation Menu - Slide from right with backdrop (outside nav for proper z-index) */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-[101] bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-ieee-blue to-accent-teal rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">IEEE</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">Menu</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-2">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 group ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-ieee-blue to-ieee-blue-dark text-white shadow-lg shadow-ieee-blue/20'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <span>{item.label}</span>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                isActive(item.path) ? 'text-white' : 'text-gray-400 group-hover:translate-x-1'
              }`} />
            </Link>
          ))}
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Theme</span>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4" />
                  <span className="text-sm font-medium">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4" />
                  <span className="text-sm font-medium">Light</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
