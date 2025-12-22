import { useEffect, useRef, useState, useCallback, useMemo, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, Crown, Star, Users, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Performance: Configure GSAP for optimal performance
gsap.config({
  force3D: true, // Force GPU acceleration
  nullTargetWarn: false,
});

// Performance: Shared IntersectionObserver options (prevents recreation)
const OBSERVER_OPTIONS = { threshold: 0.1, rootMargin: '50px' };

// Performance: Precomputed animation configs - smoother animations
const CARD_ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
  hover: { scale: 1.03, y: -5, duration: 0.3, ease: 'power2.out' },
  unhover: { scale: 1, y: 0, duration: 0.3, ease: 'power2.out' },
};

const BOARD_MEMBERS = {
  executive: {
    title: 'Executive Board',
    members: [
      {
        id: 'chairman',
        name: 'Mohamed Elgazar',
        role: 'Chairperson',
        committee: 'Executive Board',
        description: 'Leading the IEEE student branch with passion for technology and innovation.',
        image: '/members/chairman/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'chair@ieee.edu',
        tier: 1,
      },
      {
        id: 'vice-chairman',
        name: 'Abdelrahman Elnajar',
        role: 'Vice Chairperson',
        committee: 'Executive Board',
        description: 'Supporting branch activities and coordinating technical workshops.',
        image: '/members/chairman/vice.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'vice-chair@ieee.edu',
        tier: 2,
      },
      {
        id: 'secretary',
        name: 'Retaj Ramy',
        role: 'Secretary',
        committee: 'Executive Board',
        description: 'Managing communications and documentation for the branch.',
        image: '/members/secretary.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'secretary@ieee.edu',
        tier: 2,
      },
      {
        id: 'treasurer',
        name: 'Amr Ashraf',
        role: 'Treasurer',
        committee: 'Executive Board',
        description: 'Handling financial operations and budget management.',
        image: '/members/treasurer.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'treasurer@ieee.edu',
        tier: 2,
      },
    ],
  },
  heads: {
    title: 'Committee Heads',
    members: [
      {
        id: 'marketing-head',
        name: 'Youmna Abdulaziz',
        role: 'Head of Marketing',
        committee: 'Marketing',
        description: 'Leading marketing strategies and brand development.',
        image: '/members/marketing/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'marketing@ieee.edu',
        tier: 3,
      },
      {
        id: 'media-head',
        name: 'Ali Mohamed',
        role: 'Head of Media',
        committee: 'Media',
        description: 'Leading media production and visual content creation.',
        image: '/members/media/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'media@ieee.edu',
        tier: 3,
      },
      {
        id: 'hr-head',
        name: 'Noor Eldeen Ahmed',
        role: 'Head of HR',
        committee: 'Human Resources',
        description: 'Managing member relations and team development.',
        image: '/members/hr/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'hr@ieee.edu',
        tier: 3,
      },
      {
        id: 'pr-head',
        name: 'Ahmed Alsabi',
        role: 'Head of PR',
        committee: 'Public Relations',
        description: 'Building partnerships and managing external relations.',
        image: '/members/pr/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'pr@ieee.edu',
        tier: 3,
      },
      {
        id: 'coaching-head',
        name: 'Yasmeen Ashraf',
        role: 'Head of Coaching',
        committee: 'Coaching',
        description: 'Providing mentorship and skill development programs.',
        image: '/members/coaching/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'coaching@ieee.edu',
        tier: 3,
      },
      {
        id: 'logistics-head',
        name: 'Mohamed Ebrahim',
        role: 'Head of Logistics',
        committee: 'Logistics',
        description: 'Managing event operations and resource coordination.',
        image: '/members/logistics/head.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'logistics@ieee.edu',
        tier: 3,
      },
    ],
  },
  vices: {
    title: 'Vice Heads',
    members: [
      {
        id: 'marketing-vice',
        name: 'Fatma Ahmed',
        role: 'Vice Head of Marketing',
        committee: 'Marketing',
        description: 'Supporting marketing initiatives and content creation.',
        image: '/members/marketing/vice.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'marketing-vice@ieee.edu',
        tier: 4,
      },
      {
        id: 'media-vice-graphic',
        name: 'Ahmed Tarek',
        role: 'Vice Head - Graphic Design',
        committee: 'Media',
        description: 'Creating stunning visual designs and graphics.',
        image: '/members/media/vice-graphic.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'graphics@ieee.edu',
        tier: 4,
      },
      {
        id: 'media-vice-photography',
        name: 'Omar Kamel',
        role: 'Vice Head - Photography',
        committee: 'Media',
        description: 'Capturing memorable moments at IEEE events.',
        image: '/members/media/vice-photography.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'photography@ieee.edu',
        tier: 4,
      },
      {
        id: 'media-vice-video',
        name: 'Omar Rafeek',
        role: 'Vice Head - Video Production',
        committee: 'Media',
        description: 'Producing engaging video content for IEEE.',
        image: '/members/media/vice-video.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'video@ieee.edu',
        tier: 4,
      },
      {
        id: 'hr-vice',
        name: 'Abdulrahman Shafiq',
        role: 'Vice Head of HR',
        committee: 'Human Resources',
        description: 'Supporting recruitment and member engagement.',
        image: '/members/hr/vice.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'hr-vice@ieee.edu',
        tier: 4,
      },
      {
        id: 'pr-vice',
        name: 'Maya Hossam',
        role: 'Vice Head of PR',
        committee: 'Public Relations',
        description: 'Supporting sponsor relations and networking events.',
        image: '/members/pr/vice.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'pr-vice@ieee.edu',
        tier: 4,
      },
      {
        id: 'coaching-vice',
        name: 'Abdulkader Tamer',
        role: 'Vice Head of Coaching',
        committee: 'Coaching',
        description: 'Supporting training workshops and career guidance.',
        image: '/members/coaching/vice.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'coaching-vice@ieee.edu',
        tier: 4,
      },
      {
        id: 'logistics-vice',
        name: 'Khaled Elsayed',
        role: 'Vice Head of Logistics',
        committee: 'Logistics',
        description: 'Supporting venue coordination and equipment handling.',
        image: '/members/logistics/vice.webp',
        linkedin: 'https://linkedin.com/in/',
        email: 'logistics-vice@ieee.edu',
        tier: 4,
      },
    ],
  },
};

const getGradient = (tier) => {
  switch(tier) {
    case 1: return 'from-yellow-400 via-orange-500 to-red-500';
    case 2: return 'from-ieee-blue to-accent-teal';
    case 3: return 'from-purple-500 to-pink-500';
    default: return 'from-cyan-500 to-blue-500';
  }
};

// CLS: Pre-defined image sizes to prevent layout shift
const IMAGE_SIZES = {
  chairman: { classes: 'w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36', width: 144, height: 144 },
  regular: { classes: 'w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28', width: 112, height: 112 },
};

// Memoized MemberCard - No lazy loading, images are preloaded by skeleton
const MemberCard = memo(({ member, index, isChairman }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Memoized event handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Scroll animation
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(card,
      CARD_ANIMATION_CONFIG.initial,
      {
        ...CARD_ANIMATION_CONFIG.animate,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [index]);

  // Hover animation
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, isHovered ? CARD_ANIMATION_CONFIG.hover : CARD_ANIMATION_CONFIG.unhover);
  }, [isHovered]);

  const imageConfig = isChairman ? IMAGE_SIZES.chairman : IMAGE_SIZES.regular;
  const gradient = useMemo(() => getGradient(member.tier), [member.tier]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center cursor-pointer transform-gpu will-change-transform"
      style={{ contain: 'layout style' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Image */}
      <div className="relative group">
        {/* Glow ring on hover */}
        <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${gradient} opacity-0 blur-lg transition-opacity duration-500 ${isHovered ? 'opacity-60' : ''}`} />
        
        {/* Image container - images already preloaded */}
        <div 
          className={`${imageConfig.classes} relative rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl`}
          style={{ aspectRatio: '1/1' }}
        >
          {!imageError ? (
            <img
              src={member.image}
              alt={member.name}
              width={imageConfig.width}
              height={imageConfig.height}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br ${gradient}`}>
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>

        {/* Crown for chairman */}
        {isChairman && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Crown className="w-8 h-8 text-yellow-400 drop-shadow-lg animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        )}

        {/* Sparkle effect on hover */}
        {isHovered && (
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse" />
        )}
      </div>

      {/* Info Card - Below the image with stylish rounded borders */}
      <div className={`mt-3 sm:mt-4 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border-2 transition-all duration-300 ${isHovered ? 'border-ieee-blue dark:border-accent-teal shadow-xl' : 'border-gray-100 dark:border-gray-700'}`}>
        <h3 className={`font-bold text-gray-900 dark:text-white text-center mb-1 ${isChairman ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base'}`}>
          {member.name}
        </h3>
        <p className={`text-xs sm:text-sm font-medium text-center bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
          {member.role}
        </p>
        <div className={`text-[10px] sm:text-xs text-center px-2 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${gradient} text-white font-medium`}>
          {member.committee}
        </div>
        
        {/* Social links on hover */}
        <div className={`flex justify-center gap-2 mt-3 overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-ieee-blue hover:text-white transition-all duration-300"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-ieee-blue hover:text-white transition-all duration-300"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
});
MemberCard.displayName = 'MemberCard';

const HierarchyLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    gsap.fromTo(line,
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: line,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Glowing dot at top */}
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-ieee-blue to-accent-teal shadow-lg shadow-ieee-blue/50 animate-pulse" />
      {/* Line */}
      <div
        ref={lineRef}
        className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-ieee-blue to-accent-teal origin-top"
      />
      {/* Glowing dot at bottom */}
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-teal to-cyan-400 shadow-lg shadow-accent-teal/50 animate-pulse" />
    </div>
  );
};

const SectionTitle = ({ title, subtitle, color, icon: Icon }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    gsap.fromTo(el,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={titleRef} className="text-center mb-8 sm:mb-12">
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-medium mb-4`}>
        <Icon className="w-4 h-4" />
        <span>{subtitle}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
};

// Floating member photos - positioned on left and right sides
const FLOATING_MEMBERS = [
  // Left side
  { id: 'float-1', image: '/members/marketing/head.webp', side: 'left', top: '15%', size: 'lg', delay: 0 },
  { id: 'float-2', image: '/members/media/head.webp', side: 'left', top: '40%', size: 'md', delay: 0.5 },
  { id: 'float-3', image: '/members/hr/head.webp', side: 'left', top: '65%', size: 'lg', delay: 1 },
  // Right side
  { id: 'float-4', image: '/members/pr/head.webp', side: 'right', top: '20%', size: 'md', delay: 0.3 },
  { id: 'float-5', image: '/members/coaching/head.webp', side: 'right', top: '50%', size: 'lg', delay: 0.8 },
  { id: 'float-6', image: '/members/logistics/head.webp', side: 'right', top: '75%', size: 'md', delay: 1.2 },
];

// Size classes defined outside component to prevent recreation (CLS optimization)
const FLOATING_SIZE_CLASSES = {
  lg: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
  md: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20',
  sm: 'w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16',
};

// Floating Photo Component - No lazy loading, images preloaded by skeleton
const FloatingPhoto = memo(({ member, index }) => {
  // Memoized position style
  const positionStyle = useMemo(() => ({
    top: member.top,
    [member.side]: '3%',
    willChange: 'transform',
    transform: 'translateZ(0)',
  }), [member.top, member.side]);

  // Memoized animation style
  const animationStyle = useMemo(() => ({
    ...positionStyle,
    animation: `float-updown ${4 + index * 0.5}s ease-in-out infinite`,
    animationDelay: `${member.delay}s`,
  }), [positionStyle, index, member.delay]);

  return (
    <div
      className={`absolute ${FLOATING_SIZE_CLASSES[member.size]} z-10 hidden sm:block transform-gpu`}
      style={animationStyle}
    >
      {/* Decorative ring */}
      <div className="absolute -inset-2 rounded-full border border-white/20" />
      
      {/* Image container - images already preloaded */}
      <div 
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/60 shadow-xl"
        style={{ aspectRatio: '1/1' }}
      >
        <img
          src={member.image}
          alt=""
          width="96"
          height="96"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
});
FloatingPhoto.displayName = 'FloatingPhoto';

// Collect all images that need to be preloaded
const ALL_PRELOAD_IMAGES = [
  ...FLOATING_MEMBERS.map(m => m.image),
  ...BOARD_MEMBERS.executive.members.map(m => m.image),
  ...BOARD_MEMBERS.heads.members.map(m => m.image),
  ...BOARD_MEMBERS.vices.members.map(m => m.image),
];

// Skeleton Loading Component - Only covers page content, not navbar
const SkeletonLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700">
    <div className="text-center">
      {/* Animated logo/spinner */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-white/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin" />
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-white/60 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <Users className="absolute inset-0 m-auto w-6 h-6 text-white" />
      </div>
      
      {/* Loading text */}
      <h2 className="text-lg font-bold text-white mb-1">Loading Board</h2>
      <p className="text-white/70 text-sm">Preparing your experience...</p>
      
      {/* Skeleton cards preview */}
      <div className="flex justify-center gap-3 mt-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-12 h-12 rounded-full bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  </div>
));
SkeletonLoader.displayName = 'SkeletonLoader';

const Board = () => {
  const heroRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  // Preload all images before showing the page
  useEffect(() => {
    let isMounted = true;
    const totalImages = ALL_PRELOAD_IMAGES.length;
    let loaded = 0;

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loaded++;
          if (isMounted) setLoadedCount(loaded);
          resolve();
        };
        img.onerror = () => {
          loaded++;
          if (isMounted) setLoadedCount(loaded);
          resolve(); // Resolve even on error to not block
        };
        img.src = src;
      });
    };

    // Preload all images in parallel
    Promise.all(ALL_PRELOAD_IMAGES.map(preloadImage)).then(() => {
      if (isMounted) {
        // Small delay for smooth transition
        setTimeout(() => setIsLoading(false), 300);
      }
    });

    return () => { isMounted = false; };
  }, []);

  // Run animations only after loading is complete
  useEffect(() => {
    if (isLoading) return;
    
    const hero = heroRef.current;
    if (!hero) return;

    // Animate hero text
    gsap.fromTo(hero.querySelectorAll('.hero-animate'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    // Animate ellipse lines
    gsap.fromTo(hero.querySelectorAll('.orbit-line'),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );
  }, [isLoading]);

  return (
    <div className="board-page min-h-screen">
      {/* Show skeleton loader inside page while loading */}
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
      {/* Hero Section - Teal/Cyan gradient like image 2 with floating photos like image 1 */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4"
        style={{
          background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 25%, #0284c7 50%, #0369a1 75%, #075985 100%)',
        }}
      >
        {/* Subtle gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-400/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-teal-400/20 to-transparent" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 border-2 border-white/30 rounded rotate-45 hidden sm:block" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/20 rounded-full hidden sm:block" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full hidden sm:block" />

        {/* Floating Photos on Left and Right Sides */}
        {FLOATING_MEMBERS.map((member, i) => (
          <FloatingPhoto key={member.id} member={member} index={i} />
        ))}

        {/* Decorative ellipse rings in center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="orbit-line absolute border border-white/15 rounded-[50%]"
            style={{ width: 'min(70vw, 700px)', height: 'min(35vw, 350px)' }}
          />
          <div 
            className="orbit-line absolute border border-white/20 rounded-[50%]"
            style={{ width: 'min(50vw, 500px)', height: 'min(25vw, 250px)' }}
          />
        </div>

        {/* CSS for optimized animations - GPU accelerated */}
        <style>{`
          @keyframes float-updown {
            0%, 100% { transform: translate3d(0, 0, 0); }
            50% { transform: translate3d(0, -20px, 0); }
          }
          
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .transform-gpu, .animate-pulse, .animate-bounce {
              animation: none !important;
              transition: none !important;
            }
          }
          
          /* Optimize paint for animated elements */
          .orbit-line {
            will-change: opacity, transform;
            contain: layout style paint;
          }
        `}</style>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="hero-animate inline-flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 border border-white/20">
              <Users className="w-4 h-4" />
              <span>Meet Our Teams</span>
            </div>

            {/* Main Title */}
            <h1 className="hero-animate text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Our Executive Board
            </h1>

            {/* Subtitle */}
            <p className="hero-animate text-sm sm:text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
              Discover the dedicated teams that power our IEEE Student Branch and drive innovation forward
            </p>

            {/* CTA Button */}
            <div className="hero-animate">
              <a
                href="#executive"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-white text-teal-600 font-semibold sm:font-bold text-sm sm:text-base rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Explore Team</span>
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
              className="fill-white dark:fill-gray-900"
            />
          </svg>
        </div>
      </section>

      <section id="executive" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Executive Board"
            subtitle="Leadership"
            color="from-yellow-400 to-orange-500"
            icon={Crown}
          />

          <div className="flex flex-col items-center mb-12">
            <MemberCard
              member={BOARD_MEMBERS.executive.members[0]}
              index={0}
              isChairman={true}
            />
            <div className="mt-6">
              <HierarchyLine />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {BOARD_MEMBERS.executive.members.slice(1).map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index + 1}
                isChairman={false}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-8">
        <HierarchyLine />
      </div>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Committee Heads"
            subtitle="Department Leaders"
            color="from-purple-500 to-pink-500"
            icon={Star}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {BOARD_MEMBERS.heads.members.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                isChairman={false}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center py-8 bg-gray-50 dark:bg-gray-800">
        <HierarchyLine />
      </div>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Vice Heads"
            subtitle="Supporting Leaders"
            color="from-cyan-500 to-blue-500"
            icon={Users}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
            {BOARD_MEMBERS.vices.members.map((member, index) => (
              <MemberCard
                key={member.id}
                member={member}
                index={index}
                isChairman={false}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-ieee-blue via-accent-teal to-cyan-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            We are always looking for passionate individuals to join our community and make a difference.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 bg-white text-ieee-blue font-semibold sm:font-bold text-sm sm:text-base rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Get in Touch</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </section>
        </>
      )}
    </div>
  );
};

export default Board;
