/**
 * Layout Component
 * Main layout wrapper with header and footer
 */

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that wraps all pages
 * Provides consistent header and footer across the application
 * 
 * @returns {JSX.Element} Layout component
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
