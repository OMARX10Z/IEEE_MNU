/**
 * Events Page
 * Display upcoming and past events with filtering and registration
 * Uses image preloading to prevent animation tearing
 */

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Card, { CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import DomeGallery from '../components/animations/DomeGallery';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../constants';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import PageLoader from '../components/common/PageLoader';
import usePageLoader from '../hooks/usePageLoader';

// Custom hook to detect screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

// Event images for the DomeGallery - Your IEEE Event Photos
// Add more images by placing them in public/events/ folder and adding entries here
const EVENT_GALLERY_IMAGES = [
  {
    src: '/events/event-1.jpg',
    alt: 'IEEE Event 1'
  },
  {
    src: '/events/event-2.jpg',
    alt: 'IEEE Event 2'
  },
  {
    src: '/events/event-3.jpg',
    alt: 'IEEE Event 3'
  }
];

// Collect all event images for preloading
const ALL_EVENT_IMAGES = EVENT_GALLERY_IMAGES.map(img => img.src);

/**
 * Events page component
 * Features:
 * - Upcoming events with registration
 * - Past events archive
 * - Event filtering by category
 * - Event details and descriptions
 * 
 * @returns {JSX.Element} Events page
 */
const Events = () => {
  const { isLoading } = usePageLoader(ALL_EVENT_IMAGES, 300);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isMobile = useIsMobile();

  const upcomingRef = useStaggerAnimation({
    selector: '.event-card',
    animation: { y: 0, opacity: 1, duration: 0.8 },
    stagger: 0.15,
  });

  // Get unique categories from events
  const categories = ['all', ...new Set(UPCOMING_EVENTS.map(e => e.category))];

  // Filter events by category
  const filteredEvents = selectedCategory === 'all'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(e => e.category === selectedCategory);

  /**
   * Format date for display
   */
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return <PageLoader title="Loading Events" color="purple" />;
  }

  return (
    <div className="events-page">
      {/* Hero Section with Dome Gallery */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
        {/* DomeGallery Background - Full Width with responsive settings */}
        <div className="absolute inset-0 w-full h-full">
          <DomeGallery
            images={EVENT_GALLERY_IMAGES}
            overlayBlurColor="#1a1a2e"
            grayscale={false}
            imageBorderRadius={isMobile ? "10px" : "16px"}
            openedImageBorderRadius={isMobile ? "12px" : "20px"}
            openedImageWidth={isMobile ? "280px" : "500px"}
            openedImageHeight={isMobile ? "220px" : "400px"}
            fit={isMobile ? 1.2 : 0.8}
            minRadius={isMobile ? 250 : 500}
            maxRadius={isMobile ? 600 : 1200}
            segments={isMobile ? 20 : 35}
            padFactor={isMobile ? 0.05 : 0.1}
            dragSensitivity={isMobile ? 15 : 20}
          />
        </div>
        
        {/* Overlay Content with Glassmorphism - Responsive */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
          <div className="text-center w-full max-w-xl">
            {/* Glassmorphism Card for Text - Responsive padding */}
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 shadow-2xl border border-white/10 mx-2 sm:mx-0">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 bg-ieee-blue/80 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                <span className="text-sm sm:text-base md:text-lg font-medium text-white">Discover Our Events</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 text-white">
                Events
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto px-2">
                Join us for workshops, competitions, seminars, and networking events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - Mobile Responsive */}
      <section className="py-6 sm:py-8 md:py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 ${
                activeTab === 'upcoming'
                  ? 'bg-ieee-blue text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 ${
                activeTab === 'past'
                  ? 'bg-ieee-blue text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === 'upcoming' && (
        <section className="py-10 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter - Mobile Responsive */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-ieee-blue text-white'
                      : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Events Grid - Mobile Responsive */}
            <div ref={upcomingRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="event-card"
                  variant="elevated"
                  hoverable
                >
                  <div className="h-48 bg-gradient-to-br from-ieee-blue via-accent-teal to-accent-purple rounded-t-lg"></div>
                  <CardBody>
                    <div className="inline-block px-3 py-1 bg-ieee-blue/10 text-ieee-blue text-xs font-semibold rounded-full mb-3">
                      {event.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        {event.time}
                      </div>
                      <div className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                        {event.location}
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      fullWidth
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Register Now
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No events found in this category
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Past Events */}
      {activeTab === 'past' && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {PAST_EVENTS.map((event) => (
                <Card key={event.id} variant="elevated" hoverable>
                  <div className="h-64 bg-gradient-to-br from-gray-400 to-gray-600 rounded-t-lg"></div>
                  <CardBody>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-ieee-blue dark:text-ieee-blue-light">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Want to Organize an Event?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Have an idea for a workshop, seminar, or competition? We'd love to hear from you!
          </p>
          <Button variant="primary" size="lg">
            Submit Event Proposal
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;
