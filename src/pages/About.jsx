/**
 * About Page
 * Information about the IEEE student branch, mission, vision, and executive board
 */

import { Target, Eye, History, Users } from 'lucide-react';
import Card, { CardBody } from '../components/common/Card';
import ScrollFloat from '../components/animations/ScrollFloat';
import { EXECUTIVE_BOARD } from '../constants';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

/**
 * About page component
 * Features:
 * - Branch history
 * - Mission and vision
 * - Executive board members
 * - Values and principles
 * 
 * @returns {JSX.Element} About page
 */
const About = () => {
  const boardRef = useStaggerAnimation({
    selector: '.board-member',
    animation: { y: 0, opacity: 1, duration: 0.8 },
    stagger: 0.15,
  });

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-ieee-blue to-accent-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollFloat
              as="h1"
              className="text-4xl md:text-5xl font-bold mb-6"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
            >
              About Us
            </ScrollFloat>
            <ScrollFloat
              as="p"
              className="text-xl text-gray-100"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
            >
              Learn about our history, mission, and the people who make our branch thrive
            </ScrollFloat>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card variant="elevated" className="p-8">
              <Target className="w-12 h-12 text-ieee-blue mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To foster technological innovation and excellence for the benefit of humanity. 
                We strive to provide our members with opportunities to develop technical skills, 
                leadership abilities, and professional networks that will serve them throughout 
                their careers.
              </p>
            </Card>

            <Card variant="elevated" className="p-8">
              <Eye className="w-12 h-12 text-accent-teal mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading student organization that empowers the next generation of 
                engineers and technologists. We envision a community where innovation thrives, 
                knowledge is shared freely, and every member has the opportunity to make a 
                meaningful impact on society.
              </p>
            </Card>
          </div>

          {/* History Section */}
          <Card variant="bordered" className="p-8">
            <div className="flex items-start space-x-4">
              <History className="w-12 h-12 text-accent-orange flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our History
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Founded in 2020, our IEEE Student Branch has grown from a small group of 
                    passionate students to one of the most active technical organizations on campus. 
                    We have organized over 50 events, completed 25+ projects, and helped hundreds 
                    of students advance their technical careers.
                  </p>
                  <p>
                    Our branch has received multiple awards and recognition from IEEE Region and 
                    has established partnerships with leading technology companies. We continue 
                    to expand our programs and reach, always staying true to our core mission of 
                    advancing technology for humanity.
                  </p>
                  <p>
                    Today, we are proud to be a vibrant community of over 150 active members, 
                    representing diverse backgrounds and interests, all united by a passion for 
                    technology and innovation.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace new ideas and encourage creative problem-solving.',
                color: 'text-ieee-blue',
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and knowledge sharing.',
                color: 'text-accent-teal',
              },
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in everything we do.',
                color: 'text-accent-orange',
              },
              {
                title: 'Inclusivity',
                description: 'We welcome and value diverse perspectives and backgrounds.',
                color: 'text-accent-purple',
              },
              {
                title: 'Integrity',
                description: 'We act with honesty, transparency, and ethical responsibility.',
                color: 'text-ieee-blue-dark',
              },
              {
                title: 'Impact',
                description: 'We focus on creating meaningful change in our community.',
                color: 'text-ieee-blue-light',
              },
            ].map((value, index) => (
              <Card key={index} variant="elevated" className="p-6 text-center">
                <div className={`text-4xl font-bold ${value.color} mb-3`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-ieee-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Executive Board
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the dedicated team leading our branch
            </p>
          </div>

          <div ref={boardRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXECUTIVE_BOARD.map((member) => (
              <Card
                key={member.id}
                className="board-member opacity-0 transform translate-y-12"
                variant="elevated"
                hoverable
              >
                <div className="h-64 bg-gradient-to-br from-ieee-blue to-accent-teal rounded-t-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-ieee-blue">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <CardBody className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-ieee-blue dark:text-ieee-blue-light font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-ieee-blue transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-ieee-blue transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
