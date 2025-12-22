/**
 * Footer Component
 * Site footer with links, social media, and contact information
 */

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, ArrowRight, Heart, ExternalLink } from 'lucide-react';
import { BRANCH_INFO, SOCIAL_LINKS, NAV_ITEMS } from '../../constants';

/**
 * Footer component with multiple sections
 * Features:
 * - Quick navigation links with hover animations
 * - Social media links with gradient hover effects
 * - Contact information with icons
 * - Newsletter subscription
 * - Copyright notice with animated heart
 * 
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Social media icon mapping with colors
   */
  const socialIcons = {
    facebook: { icon: Facebook, color: 'hover:bg-[#1877F2]' },
    twitter: { icon: Twitter, color: 'hover:bg-[#1DA1F2]' },
    linkedin: { icon: Linkedin, color: 'hover:bg-[#0A66C2]' },
    instagram: { icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]' },
    github: { icon: Github, color: 'hover:bg-[#333]' },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ieee-blue/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-ieee-blue/3 to-accent-teal/3 rounded-full blur-3xl" />
      </div>

      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ieee-blue/50 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* About Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-ieee-blue to-accent-teal rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-ieee-blue/20">
                  <span className="text-white font-bold text-lg">IEEE</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-ieee-blue to-accent-teal rounded-xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Student Branch
                </span>
                <span className="text-xs text-ieee-blue-light">
                  {BRANCH_INFO.university}
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {BRANCH_INFO.name} - Advancing technology for humanity through innovation, education, and collaboration.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Established {BRANCH_INFO.established}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-ieee-blue to-accent-teal mr-3" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-ieee-blue-light" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-ieee-blue to-accent-teal mr-3" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${BRANCH_INFO.email}`}
                  className="group flex items-start space-x-3 text-sm hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-ieee-blue/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-ieee-blue-light" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-0.5">Email</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {BRANCH_INFO.email}
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRANCH_INFO.phone}`}
                  className="group flex items-start space-x-3 text-sm hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-ieee-blue/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-ieee-blue-light" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-0.5">Phone</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {BRANCH_INFO.phone}
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <div className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-ieee-blue-light" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-0.5">Location</span>
                  <span className="text-gray-300">{BRANCH_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-ieee-blue to-accent-teal mr-3" />
              Stay Connected
            </h3>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates
              </p>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-sm focus:outline-none focus:border-ieee-blue focus:ring-2 focus:ring-ieee-blue/20 transition-all duration-300 pr-12"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-ieee-blue to-accent-teal rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const { icon: Icon, color } = socialIcons[platform] || { icon: ExternalLink, color: 'hover:bg-ieee-blue' };
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white ${color}`}
                      aria-label={`Follow us on ${platform}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500 flex items-center flex-wrap justify-center">
              © {currentYear} {BRANCH_INFO.name}. Made with
              <Heart className="w-4 h-4 mx-1.5 text-red-500 animate-pulse" />
              by IEEE Student Branch
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span>Terms of Service</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-ieee-blue via-accent-teal to-ieee-blue" />
    </footer>
  );
};

export default Footer;
