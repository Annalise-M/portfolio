import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import './Projects.scss';

gsap.registerPlugin(ScrollTrigger);

// Sample project data - you'll replace this with your real projects
const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Built with modern best practices and optimized for performance.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Annalise-M'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'WebSocket-powered chat app with channels, direct messaging, file sharing, and presence indicators. Features end-to-end encryption and message threading.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
    tech: ['TypeScript', 'Socket.io', 'Redis', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Annalise-M'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive analytics dashboard with real-time data streams, customizable widgets, and export capabilities. Processes millions of data points seamlessly.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tech: ['React', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Annalise-M'
  },
  {
    title: 'AI Content Generator',
    description: 'Machine learning-powered content creation tool with natural language processing, template customization, and multi-language support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tech: ['Next.js', 'OpenAI', 'Prisma', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Annalise-M'
  }
];

export default function Projects() {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      gsap.from('.section-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef} id="projects">
      <div className="projects-container">
        <div className="section-header">
          <div className="section-label">[PORTFOLIO]</div>
          <h2 className="section-title" ref={titleRef}>
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of recent work showcasing technical expertise and creative problem-solving
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>

        <div className="more-projects">
          <a
            href="https://github.com/Annalise-M"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn interactive"
          >
            <span>View All Projects</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
