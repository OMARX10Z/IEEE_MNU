/**
 * Projects Page
 * Showcase branch projects, achievements, and technical work
 */

import { Code, Award, Github, ExternalLink } from 'lucide-react';
import Card, { CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import ScrollFloat from '../components/animations/ScrollFloat';
import { PROJECTS } from '../constants';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

/**
 * Projects page component
 * Features:
 * - Project showcase with details
 * - Technology tags
 * - GitHub links
 * - Awards and achievements
 * 
 * @returns {JSX.Element} Projects page
 */
const Projects = () => {
  const projectsRef = useStaggerAnimation({
    selector: '.project-card',
    animation: { y: 0, opacity: 1, duration: 0.8 },
    stagger: 0.15,
  });

  /**
   * Get status badge color
   */
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-purple to-ieee-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Code className="w-16 h-16 mx-auto mb-6" />
            <ScrollFloat
              as="h1"
              className="text-4xl md:text-5xl font-bold mb-6"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
            >
              Projects & Achievements
            </ScrollFloat>
            <ScrollFloat
              as="p"
              className="text-xl text-gray-100"
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
            >
              Explore our innovative projects and technical accomplishments
            </ScrollFloat>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Card
                key={project.id}
                className="project-card"
                variant="elevated"
                hoverable
              >
                <div className="h-64 bg-gradient-to-br from-ieee-blue via-accent-teal to-accent-purple rounded-t-lg flex items-center justify-center">
                  <Code className="w-24 h-24 text-white opacity-50" />
                </div>
                <CardBody>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Award Badge */}
                  {project.award && (
                    <div className="flex items-center space-x-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mb-4">
                      <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                      <span className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                        {project.award}
                      </span>
                    </div>
                  )}

                  {/* Links */}
                  {project.githubLink && (
                    <div className="flex space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<Github className="w-4 h-4" />}
                        className="flex-1"
                      >
                        View Code
                      </Button>
                      <Button
                        variant="primary"
                        size="sm"
                        rightIcon={<ExternalLink className="w-4 h-4" />}
                        className="flex-1"
                      >
                        Learn More
                      </Button>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-ieee-blue mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognition and awards we've earned for our technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Best Student Branch Award',
                year: '2023',
                organization: 'IEEE Region 1',
                description: 'Recognized for outstanding contributions and activities',
              },
              {
                title: 'Innovation Challenge Winner',
                year: '2023',
                organization: 'National Hackathon',
                description: 'First place in IoT innovation category',
              },
              {
                title: 'Community Impact Award',
                year: '2022',
                organization: 'University Recognition',
                description: 'For exceptional community service and outreach',
              },
            ].map((achievement, index) => (
              <Card key={index} variant="elevated" className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-ieee-blue dark:text-ieee-blue-light font-medium mb-2">
                  {achievement.organization}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {achievement.year}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Have a Project Idea?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our team and work on exciting technical projects with mentorship and resources
          </p>
          <Button variant="primary" size="lg">
            Propose a Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
