/**
 * Committees Page
 * Display branch committees with animated images and descriptions
 * Uses image preloading to prevent animation tearing
 */

import { Users, Target, Megaphone, Camera, GraduationCap, Truck } from 'lucide-react';
import ScrollFloat from '../components/animations/ScrollFloat';
import ScrollReveal from '../components/animations/ScrollReveal';
import PageLoader from '../components/common/PageLoader';
import usePageLoader from '../hooks/usePageLoader';

/**
 * Committee data with images and descriptions
 */
const COMMITTEES = [
  {
    id: 1,
    name: 'Marketing Committee',
    image: '/committees/Marketing.webp',
    icon: Megaphone,
    color: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-500/30',
    description: 'The Marketing Committee is responsible for promoting IEEE events, activities, and initiatives. They create compelling content, manage social media presence, and develop strategies to increase branch visibility and member engagement.',
    responsibilities: ['Social media management', 'Event promotion', 'Brand development', 'Content creation'],
  },
  {
    id: 2,
    name: 'Media Committee',
    image: '/committees/Media.webp',
    icon: Camera,
    color: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/30',
    description: 'The Media Committee captures and preserves the memories of our branch through photography, videography, and graphic design. They document events, create visual content, and maintain our media archives.',
    responsibilities: ['Event photography', 'Video production', 'Graphic design', 'Media archiving'],
  },
  {
    id: 3,
    name: 'HR Committee',
    image: '/committees/HR.webp',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    shadowColor: 'shadow-green-500/30',
    description: 'The Human Resources Committee manages member relations, recruitment, and internal communications. They ensure a positive experience for all members and foster a collaborative environment within the branch.',
    responsibilities: ['Member recruitment', 'Team building', 'Internal communications', 'Conflict resolution'],
  },
  {
    id: 4,
    name: 'PR Committee',
    image: '/committees/PR.webp',
    icon: Target,
    color: 'from-orange-500 to-amber-500',
    shadowColor: 'shadow-orange-500/30',
    description: 'The Public Relations Committee builds and maintains relationships with external organizations, sponsors, and partners. They represent IEEE at external events and manage our public image.',
    responsibilities: ['External partnerships', 'Sponsor relations', 'Public representation', 'Networking events'],
  },
  {
    id: 5,
    name: 'Coaching Committee',
    image: '/committees/Coaching.webp',
    icon: GraduationCap,
    color: 'from-red-500 to-rose-500',
    shadowColor: 'shadow-red-500/30',
    description: 'The Coaching Committee provides mentorship and guidance to members. They organize training sessions, workshops, and one-on-one coaching to help members develop their technical and soft skills.',
    responsibilities: ['Mentorship programs', 'Skill development', 'Training workshops', 'Career guidance'],
  },
  {
    id: 6,
    name: 'Logistics Committee',
    image: '/committees/Logsitics.webp',
    icon: Truck,
    color: 'from-indigo-500 to-violet-500',
    shadowColor: 'shadow-indigo-500/30',
    description: 'The Logistics Committee handles the operational aspects of events and activities. They manage venue bookings, equipment, supplies, and ensure smooth execution of all branch operations.',
    responsibilities: ['Event logistics', 'Resource management', 'Venue coordination', 'Equipment handling'],
  },
];

/**
 * Animated floating shape component
 */
const FloatingShape = ({ className, delay = 0 }) => (
  <div
    className={`absolute rounded-full opacity-20 blur-3xl animate-pulse ${className}`}
    style={{ animationDelay: `${delay}s`, animationDuration: '4s' }}
  />
);

/**
 * Committee card component with animations
 */
const CommitteeSection = ({ committee, index }) => {
  const isEven = index % 2 === 0;
  const Icon = committee.icon;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative shapes */}
      <FloatingShape
        className={`w-96 h-96 bg-gradient-to-r ${committee.color} ${isEven ? '-left-48 top-0' : '-right-48 bottom-0'}`}
        delay={index * 0.5}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
          {/* Image Section with Animation */}
          <div className="w-full lg:w-1/2 relative">
            <ScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
            >
              <div className="relative group">
                {/* Animated glow background */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${committee.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700`}
                />
                
                {/* Floating animation container */}
                <div className="relative animate-float">
                  {/* Image container with border */}
                  <div className={`relative rounded-2xl overflow-hidden ${committee.shadowColor} shadow-2xl`}>
                    {/* Gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${committee.color} p-1 rounded-2xl`}>
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl" />
                    </div>
                    
                    {/* Image */}
                    <img
                      src={committee.image}
                      alt={committee.name}
                      className="relative z-10 w-full h-auto object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${committee.color} rounded-full opacity-60 blur-xl animate-pulse`} />
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${committee.color} rounded-full opacity-40 blur-xl animate-pulse`} style={{ animationDelay: '1s' }} />
              </div>
            </ScrollFloat>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Icon and Title */}
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              animationDuration={1}
              stagger={0.03}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${committee.color} ${committee.shadowColor} shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {committee.name}
                </h2>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={8}
              animationDuration={1}
              stagger={0.02}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {committee.description}
              </p>
            </ScrollReveal>

            {/* Responsibilities */}
            <ScrollFloat
              animationDuration={1}
              ease="power3.out"
              scrollStart="center bottom+=30%"
              scrollEnd="bottom bottom-=20%"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Key Responsibilities:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {committee.responsibilities.map((item, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${committee.color} text-white shadow-md ${committee.shadowColor} transform hover:scale-105 transition-transform duration-300`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFloat>
          </div>
        </div>
      </div>
    </section>
  );
};

// Collect all committee images for preloading
const COMMITTEE_IMAGES = COMMITTEES.map(c => c.image);

/**
 * Committees page component
 */
const Committees = () => {
  const { isLoading } = usePageLoader(COMMITTEE_IMAGES, 300);

  if (isLoading) {
    return <PageLoader title="Loading Committees" color="blue" />;
  }

  return (
    <div className="committees-page relative">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-ieee-blue via-accent-teal to-ieee-blue-dark text-white overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-32 right-1/4 w-8 h-8 border-2 border-white/30 rounded-lg rotate-45 animate-spin-slow" />
          <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/3 left-20 w-4 h-4 bg-accent-orange/40 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium">Meet Our Teams</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our Committees
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Discover the dedicated teams that power our IEEE Student Branch and drive innovation forward
            </p>
          </div>
        </div>

      </section>

      {/* Committees Sections */}
      <div className="bg-white dark:bg-gray-900">
        {COMMITTEES.map((committee, index) => (
          <div
            key={committee.id}
            className={index % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}
          >
            <CommitteeSection committee={committee} index={index} />
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-r from-ieee-blue to-accent-teal overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollFloat
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
            >
              Want to Join a Committee?
            </ScrollFloat>

            <ScrollReveal
              as="p"
              className="text-xl text-gray-100 mb-8"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              animationDuration={1}
              stagger={0.02}
            >
              Be part of our amazing teams and contribute to the IEEE community. 
              We're always looking for passionate individuals to join us!
            </ScrollReveal>

            <ScrollFloat
              animationDuration={1}
              ease="power3.out"
              scrollStart="center bottom+=30%"
              scrollEnd="bottom bottom-=20%"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-ieee-blue font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Apply Now
              </a>
            </ScrollFloat>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(45deg);
          }
          to {
            transform: rotate(405deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Committees;
