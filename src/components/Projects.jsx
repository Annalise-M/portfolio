import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import './Projects.scss';
import climatripImg from '../images/climatrip.png';
import pleasantHissImg from '../images/pleasanthiss.png';
import moodMusicImg from '../images/moodmusic.png';
import covidRoadImg from '../images/covidroad2020.png';

gsap.registerPlugin(ScrollTrigger);

// Projects Built
const builtProjects = [
  {
    title: 'ClimaTrip',
    description: 'Magazine-style Progressive Web App for weather-driven travel planning. Compare weather across multiple destinations with a customizable widget dashboard, offline support for up to 3 locations, and seamless booking integrations. Features drag-and-drop widgets, 7-day forecasts, and GSAP-powered animations.',
    image: climatripImg,
    tech: ['React', 'TypeScript', 'SCSS', 'GSAP', 'PWA', 'Vite'],
    liveUrl: 'https://climatrip.com/',
    githubUrl: 'https://github.com/Annalise-M/Agentic_SDLC'
  },
  {
    title: 'Pleasant Hiss',
    description: 'Promotional landing page for Twitch streamer, cosplayer, model, and DJ. Features interactive follower animations, subscribe modal, and responsive design with social media integration. Built with vanilla JavaScript for optimal performance.',
    image: pleasantHissImg,
    tech: ['JavaScript', 'CSS', 'HTML'],
    liveUrl: 'https://pleasanthiss.com/',
    githubUrl: 'https://github.com/Annalise-M/PleasantHiss'
  },
  {
    title: 'Digital Menu - Backend API',
    description: 'RESTful backend API for restaurant menu management with secure admin-only access. Built with test-driven development featuring comprehensive CRUD routes, PostgreSQL database integration, and real-time synchronization for menu updates.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Jest'],
    liveUrl: null,
    githubUrl: 'https://github.com/Annalise-M/Menu-Model'
  },
  {
    title: 'Portfolio v2.0 - Cyberpunk Cosmos',
    description: 'Interactive portfolio featuring scroll-reactive cosmic backgrounds, animated star fields with parallax effects, and 3D visual animations. Built with modern web technologies and GSAP for smooth, performant animations.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
    tech: ['React', 'GSAP', 'Anime.js', 'Three.js', 'SCSS'],
    liveUrl: 'https://annalisemurphy.netlify.app/',
    githubUrl: 'https://github.com/Annalise-M/portfolio'
  }
];

// Projects I've Contributed To
const contributedProjects = [
  {
    title: 'Mood Music',
    description: 'Collaborative mood-based music discovery application that recommends songs based on user\'s emotional state. Features responsive design and seamless API integration for personalized music experiences.',
    image: moodMusicImg,
    tech: ['React', 'Node.js', 'JavaScript', 'Netlify'],
    liveUrl: 'https://mood-music.netlify.app',
    githubUrl: 'https://github.com/Silver-Surfers/Mood-Music-Fe'
  },
  {
    title: 'CovidRoad2020',
    description: 'Team-built educational game reimagining the classic Oregon Trail through a pandemic lens. Combines historical gameplay mechanics with modern educational content about public health and decision-making.',
    image: covidRoadImg,
    tech: ['JavaScript', 'HTML', 'CSS', 'Canvas API'],
    liveUrl: 'https://covid-road.netlify.app/',
    githubUrl: 'https://github.com/KOVindicators/CovidRoad2020'
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
            A showcase of independent builds and collaborative contributions
          </p>
        </div>

        {/* Projects I've Built */}
        <div className="project-category">
          <h3 className="category-title">
            <span className="category-icon">📐</span>
            Projects Built
          </h3>
          <div className="projects-grid">
            {builtProjects.map((project, index) => (
              <ProjectCard
                key={`built-${index}`}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Projects I've Contributed To */}
        <div className="project-category">
          <h3 className="category-title">
            <span className="category-icon">🤝</span>
            Team Contributions
          </h3>
          <div className="projects-grid">
            {contributedProjects.map((project, index) => (
              <ProjectCard
                key={`contributed-${index}`}
                {...project}
                index={index + builtProjects.length}
              />
            ))}
          </div>
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

        <footer className="projects-footer">
          <div className="footer-content">
            <div className="footer-left">
              <span className="version-badge">v2.0.0 | Cyberpunk Cosmos</span>
            </div>
            <div className="footer-right">
              <span>© 2026 Annalise Murphy. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
