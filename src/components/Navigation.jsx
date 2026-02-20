import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { IoClose } from 'react-icons/io5';
import './Navigation.scss';
import { REACTAPPEMAIL } from '../constants';


export default function Navigation({ triggerRef }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.to('.nav-menu', {
        x: 0,
        duration: 0.6,
        ease: 'power3.out'
      });

      gsap.from('.nav-item', {
        x: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.2,
        ease: 'power3.out'
      });
    } else {
      gsap.to('.nav-menu', {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in'
      });
    }
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Attach click handler to trigger element
  useEffect(() => {
    const trigger = triggerRef?.current;
    if (trigger) {
      const handleClick = () => setIsOpen(true);
      trigger.addEventListener('click', handleClick);
      return () => trigger.removeEventListener('click', handleClick);
    }
  }, [triggerRef]);

  return (
    <>
      {isOpen && (
        <div className="nav-backdrop" onClick={() => setIsOpen(false)}></div>
      )}

      <nav className="nav-menu">
        <button className="nav-close interactive" onClick={() => setIsOpen(false)}>
          <IoClose size={32} />
        </button>

        <div className="nav-content">
          <div className="nav-header">
            <span className="nav-label">[NAVIGATION]</span>
            <h2>Menu</h2>
          </div>

          <ul className="nav-list">
            <li className="nav-item">
              <button onClick={() => scrollToSection('home')} className="interactive">
                <span className="item-number">01</span>
                <span className="item-text">Home</span>
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('projects')} className="interactive">
                <span className="item-number">02</span>
                <span className="item-text">Projects</span>
              </button>
            </li>
            <li className="nav-item">
              <a href="https://github.com/Annalise-M" target="_blank" rel="noopener noreferrer" className="interactive">
                <span className="item-number">03</span>
                <span className="item-text">GitHub</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/annalise-murphy/" target="_blank" rel="noopener noreferrer" className="interactive">
                <span className="item-number">04</span>
                <span className="item-text">LinkedIn</span>
              </a>
            </li>
            <li className="nav-item">
              <a href={REACTAPPEMAIL} className="interactive">
                <span className="item-number">05</span>
                <span className="item-text">Contact</span>
              </a>
            </li>
          </ul>

          <div className="nav-footer">
            <p className="nav-status">
              <span className="status-indicator"></span>
              Available for work
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
