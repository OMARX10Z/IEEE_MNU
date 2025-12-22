/**
 * Constants and Configuration
 * Central location for all static data used throughout the application
 */

import { Users, BookOpen, Award, Briefcase, Code, Globe, Heart, Zap, Target, Lightbulb } from 'lucide-react';

/**
 * Site Configuration
 */
export const SITE_CONFIG = {
  name: 'IEEE Student Branch',
  description: 'Empowering students through technology and innovation',
  email: 'ieee@university.edu',
  phone: '+1 (555) 123-4567',
  address: 'University Campus, Building A, Room 101',
  socialLinks: {
    facebook: 'https://facebook.com/ieee',
    twitter: 'https://twitter.com/ieee',
    linkedin: 'https://linkedin.com/company/ieee',
    instagram: 'https://instagram.com/ieee',
    github: 'https://github.com/ieee',
  },
};

/**
 * Branch Information
 */
export const BRANCH_INFO = {
  name: 'IEEE Student Branch',
  university: 'University Chapter',
  established: '2015',
  email: 'ieee@university.edu',
  phone: '+1 (555) 123-4567',
  address: 'University Campus, Building A, Room 101',
};

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/ieee',
  twitter: 'https://twitter.com/ieee',
  linkedin: 'https://linkedin.com/company/ieee',
  instagram: 'https://instagram.com/ieee',
  github: 'https://github.com/ieee',
};

/**
 * Navigation Menu Items
 */
export const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/events', label: 'Events' },
  { path: '/projects', label: 'Projects' },
  { path: '/board', label: 'Board' },
  { path: '/committees', label: 'Committees' },
  { path: '/contact', label: 'Contact' },
];

/**
 * Member Statistics for Homepage
 */
export const STATS = [
  { value: '150+', label: 'Active Members' },
  { value: '50+', label: 'Events Organized' },
  { value: '25+', label: 'Projects Completed' },
  { value: '10+', label: 'Industry Partners' },
];

/**
 * Team Members organized by committee
 */
export const TEAM_MEMBERS = {
  chairman: {
    name: 'Executive Board',
    members: [
      {
        id: 'chairman-head',
        name: 'Mohamed Elgazar',
        position: 'Chairperson',
        image: '/members/chairman/head.webp',
        bio: 'Leading the IEEE student branch with passion for technology and innovation.',
        linkedin: 'https://linkedin.com/in/',
        email: 'chair@ieee.edu',
      },
      {
        id: 'chairman-vice',
        name: 'Abdelrahman Elnajar',
        position: 'Vice Chairperson',
        image: '/members/chairman/vice.webp',
        bio: 'Supporting branch activities and coordinating technical workshops.',
        linkedin: 'https://linkedin.com/in/',
        email: 'vice-chair@ieee.edu',
      },
      {
        id: 'secretary',
        name: 'Retaj Ramy',
        position: 'Secretary',
        image: '/members/secretary.webp',
        bio: 'Managing communications and documentation for the branch.',
        linkedin: 'https://linkedin.com/in/',
        email: 'secretary@ieee.edu',
      },
      {
        id: 'treasurer',
        name: 'Amr Ashraf',
        position: 'Treasurer',
        image: '/members/treasurer.webp',
        bio: 'Handling financial operations and budget management.',
        linkedin: 'https://linkedin.com/in/',
        email: 'treasurer@ieee.edu',
      },
    ],
  },
  marketing: {
    name: 'Marketing',
    members: [
      {
        id: 'marketing-head',
        name: 'Youmna Abdulaziz',
        position: 'Head of Marketing',
        image: '/members/marketing/head.webp',
        bio: 'Leading marketing strategies and brand development.',
        linkedin: 'https://linkedin.com/in/',
        email: 'marketing@ieee.edu',
      },
      {
        id: 'marketing-vice',
        name: 'Fatma Ahmed',
        position: 'Vice Head of Marketing',
        image: '/members/marketing/vice.webp',
        bio: 'Supporting marketing initiatives and content creation.',
        linkedin: 'https://linkedin.com/in/',
        email: 'marketing-vice@ieee.edu',
      },
    ],
  },
  media: {
    name: 'Media',
    members: [
      {
        id: 'media-head',
        name: 'Ali Mohamed',
        position: 'Head of Media',
        image: '/members/media/head.webp',
        bio: 'Leading media production and visual content creation.',
        linkedin: 'https://linkedin.com/in/',
        email: 'media@ieee.edu',
      },
      {
        id: 'media-vice-graphic',
        name: 'Ahmed Tarek',
        position: 'Vice Head - Graphic Design',
        image: '/members/media/vice-graphic.webp',
        bio: 'Creating stunning visual designs and graphics.',
        linkedin: 'https://linkedin.com/in/',
        email: 'graphics@ieee.edu',
      },
      {
        id: 'media-vice-photography',
        name: 'Omar Kamel',
        position: 'Vice Head - Photography',
        image: '/members/media/vice-photography.webp',
        bio: 'Capturing memorable moments at IEEE events.',
        linkedin: 'https://linkedin.com/in/',
        email: 'photography@ieee.edu',
      },
      {
        id: 'media-vice-video',
        name: 'Omar Rafeek',
        position: 'Vice Head - Video Production',
        image: '/members/media/vice-video.webp',
        bio: 'Producing engaging video content for IEEE.',
        linkedin: 'https://linkedin.com/in/',
        email: 'video@ieee.edu',
      },
    ],
  },
  hr: {
    name: 'Human Resources',
    members: [
      {
        id: 'hr-head',
        name: 'Noor Eldeen Ahmed',
        position: 'Head of HR',
        image: '/members/hr/head.webp',
        bio: 'Managing member relations and team development.',
        linkedin: 'https://linkedin.com/in/',
        email: 'hr@ieee.edu',
      },
      {
        id: 'hr-vice',
        name: 'Abdulrahman Shafiq',
        position: 'Vice Head of HR',
        image: '/members/hr/vice.webp',
        bio: 'Supporting recruitment and member engagement.',
        linkedin: 'https://linkedin.com/in/',
        email: 'hr-vice@ieee.edu',
      },
    ],
  },
  pr: {
    name: 'Public Relations',
    members: [
      {
        id: 'pr-head',
        name: 'Ahmed Alsabi',
        position: 'Head of PR',
        image: '/members/pr/head.webp',
        bio: 'Building partnerships and managing external relations.',
        linkedin: 'https://linkedin.com/in/',
        email: 'pr@ieee.edu',
      },
      {
        id: 'pr-vice',
        name: 'Maya Hossam',
        position: 'Vice Head of PR',
        image: '/members/pr/vice.webp',
        bio: 'Supporting sponsor relations and networking events.',
        linkedin: 'https://linkedin.com/in/',
        email: 'pr-vice@ieee.edu',
      },
    ],
  },
  coaching: {
    name: 'Coaching',
    members: [
      {
        id: 'coaching-head',
        name: 'Yasmeen Ashraf',
        position: 'Head of Coaching',
        image: '/members/coaching/head.webp',
        bio: 'Providing mentorship and skill development programs.',
        linkedin: 'https://linkedin.com/in/',
        email: 'coaching@ieee.edu',
      },
      {
        id: 'coaching-vice',
        name: 'Abdulkader Tamer',
        position: 'Vice Head of Coaching',
        image: '/members/coaching/vice.webp',
        bio: 'Supporting training workshops and career guidance.',
        linkedin: 'https://linkedin.com/in/',
        email: 'coaching-vice@ieee.edu',
      },
    ],
  },
  logistics: {
    name: 'Logistics',
    members: [
      {
        id: 'logistics-head',
        name: 'Mohamed Ebrahim',
        position: 'Head of Logistics',
        image: '/members/logistics/head.webp',
        bio: 'Managing event operations and resource coordination.',
        linkedin: 'https://linkedin.com/in/',
        email: 'logistics@ieee.edu',
      },
      {
        id: 'logistics-vice',
        name: 'Khaled Elsayed',
        position: 'Vice Head of Logistics',
        image: '/members/logistics/vice.webp',
        bio: 'Supporting venue coordination and equipment handling.',
        linkedin: 'https://linkedin.com/in/',
        email: 'logistics-vice@ieee.edu',
      },
    ],
  },
};

/**
 * Member Benefits for Team Page
 */
export const MEMBER_BENEFITS = [
  {
    icon: Lightbulb,
    title: 'Innovation & Learning',
    description: 'Access to cutting-edge workshops, seminars, and hands-on projects that keep you at the forefront of technology.',
  },
  {
    icon: Users,
    title: 'Networking Opportunities',
    description: 'Connect with industry professionals, alumni, and fellow students who share your passion for technology.',
  },
  {
    icon: Award,
    title: 'Professional Development',
    description: 'Build leadership skills, gain certifications, and enhance your resume with real-world experience.',
  },
  {
    icon: Target,
    title: 'Career Guidance',
    description: 'Get mentorship from experienced professionals and access exclusive internship and job opportunities.',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'Participate in outreach programs and use technology to make a positive difference in your community.',
  },
  {
    icon: Zap,
    title: 'Exclusive Resources',
    description: 'Access IEEE digital library, technical publications, and member-only discounts on conferences and events.',
  },
];

/**
 * Upcoming Events for Homepage
 */
export const UPCOMING_EVENTS = [
  {
    id: 1,
    title: 'Tech Talk: AI in Healthcare',
    date: '2024-02-15',
    time: '6:00 PM',
    location: 'Engineering Building, Room 301',
    description: 'Join us for an insightful discussion on the latest AI applications in healthcare.',
    image: '/events/ai-healthcare.jpg',
    category: 'Tech Talk',
  },
  {
    id: 2,
    title: 'Workshop: Web Development Bootcamp',
    date: '2024-02-20',
    time: '2:00 PM',
    location: 'Computer Lab A',
    description: 'A hands-on workshop covering modern web development technologies.',
    image: '/events/web-dev.jpg',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Hackathon 2024',
    date: '2024-03-01',
    time: '9:00 AM',
    location: 'Innovation Center',
    description: '24-hour coding competition with amazing prizes and networking opportunities.',
    image: '/events/hackathon.jpg',
    category: 'Competition',
  },
];

/**
 * Projects Showcase
 */
export const PROJECTS = [
  {
    id: 1,
    title: 'Smart Campus IoT System',
    description: 'An IoT-based system for monitoring and optimizing campus resources.',
    image: '/projects/iot-campus.jpg',
    technologies: ['Arduino', 'Python', 'MQTT', 'React'],
    status: 'Completed',
    github: 'https://github.com/ieee/smart-campus',
  },
  {
    id: 2,
    title: 'AI Study Assistant',
    description: 'An AI-powered chatbot to help students with their studies.',
    image: '/projects/ai-assistant.jpg',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    status: 'In Progress',
    github: 'https://github.com/ieee/ai-assistant',
  },
  {
    id: 3,
    title: 'Renewable Energy Dashboard',
    description: 'Real-time monitoring dashboard for campus solar panels.',
    image: '/projects/energy-dashboard.jpg',
    technologies: ['Node.js', 'MongoDB', 'D3.js', 'Vue'],
    status: 'Completed',
    github: 'https://github.com/ieee/energy-dashboard',
  },
];

/**
 * Testimonials
 */
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Former President',
    image: '/testimonials/sarah.jpg',
    quote: 'IEEE transformed my university experience. The skills and connections I gained here launched my career in tech.',
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'Alumni, Software Engineer at Google',
    image: '/testimonials/ahmed.jpg',
    quote: 'The projects and workshops at IEEE gave me practical experience that set me apart in job interviews.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Current Member',
    image: '/testimonials/emily.jpg',
    quote: 'Being part of IEEE has connected me with amazing mentors and opened doors I never knew existed.',
  },
];

/**
 * FAQ Items
 */
export const FAQ_ITEMS = [
  {
    question: 'How can I join IEEE?',
    answer: 'You can join by filling out our membership form on the website or visiting us during our recruitment events. Membership is open to all students interested in technology and engineering.',
  },
  {
    question: 'What are the membership fees?',
    answer: 'Student membership is $32 per year, which includes access to IEEE digital library, discounts on conferences, and all local chapter events.',
  },
  {
    question: 'Do I need to be an engineering student to join?',
    answer: 'No! IEEE welcomes students from all disciplines who are interested in technology, innovation, and professional development.',
  },
  {
    question: 'What kind of events does IEEE organize?',
    answer: 'We organize technical workshops, hackathons, networking events, industry visits, guest lectures, and social gatherings throughout the year.',
  },
  {
    question: 'Can I participate in projects as a beginner?',
    answer: 'Absolutely! We have projects for all skill levels and provide mentorship to help you learn and grow.',
  },
];

/**
 * Past Events
 */
export const PAST_EVENTS = [
  {
    id: 1,
    title: 'Annual Tech Summit 2023',
    date: '2023-11-15',
    description: 'A full-day conference featuring industry speakers and networking opportunities.',
    image: '/events/tech-summit.jpg',
    category: 'Conference',
    attendees: 200,
  },
  {
    id: 2,
    title: 'Arduino Workshop Series',
    date: '2023-10-20',
    description: 'Hands-on workshop series covering Arduino basics to advanced projects.',
    image: '/events/arduino-workshop.jpg',
    category: 'Workshop',
    attendees: 45,
  },
  {
    id: 3,
    title: 'Career Fair 2023',
    date: '2023-09-25',
    description: 'Connect with top tech companies and explore internship opportunities.',
    image: '/events/career-fair.jpg',
    category: 'Networking',
    attendees: 150,
  },
  {
    id: 4,
    title: 'Python Bootcamp',
    date: '2023-08-10',
    description: 'Intensive Python programming bootcamp for beginners.',
    image: '/events/python-bootcamp.jpg',
    category: 'Workshop',
    attendees: 60,
  },
];

/**
 * Executive Board for About Page
 */
export const EXECUTIVE_BOARD = [
  {
    id: 'chairman',
    name: 'Mohamed Elgazar',
    role: 'Chairperson',
    image: '/members/chairman/head.webp',
    bio: 'Leading the IEEE student branch with passion for technology and innovation.',
  },
  {
    id: 'vice-chairman',
    name: 'Abdelrahman Elnajar',
    role: 'Vice Chairperson',
    image: '/members/chairman/vice.webp',
    bio: 'Supporting branch activities and coordinating technical workshops.',
  },
  {
    id: 'secretary',
    name: 'Retaj Ramy',
    role: 'Secretary',
    image: '/members/secretary.webp',
    bio: 'Managing communications and documentation for the branch.',
  },
  {
    id: 'treasurer',
    name: 'Amr Ashraf',
    role: 'Treasurer',
    image: '/members/treasurer.webp',
    bio: 'Handling financial operations and budget management.',
  },
];