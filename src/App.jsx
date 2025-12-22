/**
 * Main App Component
 * Sets up routing and theme provider for the application
 * Uses React.lazy for code-splitting - each page loads only when needed
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout/Layout';
import PageLoader from './components/common/PageLoader';

// Lazy load all pages - only loads when user navigates to them
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Projects = lazy(() => import('./pages/Projects'));
const Team = lazy(() => import('./pages/Team'));
const Board = lazy(() => import('./pages/Board'));
const Committees = lazy(() => import('./pages/Committees'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Main application component
 * Provides routing and theme context to all child components
 * 
 * @returns {JSX.Element} Application root
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader title="Loading..." />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="events" element={<Events />} />
              <Route path="projects" element={<Projects />} />
              <Route path="team" element={<Team />} />
              <Route path="board" element={<Board />} />
              <Route path="committees" element={<Committees />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
