import gsap, { Power3 } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase } from "gsap/EasePack";
import React, { useEffect } from "react";
import { CSSPlugin } from "gsap/CSSPlugin";
import {
  IoIosOptions,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoOctocat,
  IoIosPlanet,
} from "react-icons/io";
import Navigation from "./components/Navigation";
import originalZen from "./images/originalZen.png";
import styles from "./App.scss";
import anime from "animejs/lib/anime.es.js";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ExpoScaleEase);
gsap.registerPlugin(CSSPlugin);

export default function Landing() {
  // Refs
  const ml7 = React.useRef();
  const letters = React.useRef();
  const loadingScreen = React.useRef();
  const logo = React.useRef();
  const contact = React.useRef();
  const bottomText = React.useRef();
  const copyright = React.useRef();
  const mediaUlLi = React.useRef();
  const menu = React.useRef();
  const p1 = React.useRef();
  const p2 = React.useRef();
  const one = React.useRef();
  const two = React.useRef();
  const ringOne = React.useRef();
  const ringTwo = React.useRef();
  const headerRef = React.useRef();
  const menuRef = React.useRef();

  // Rings follow cursor everywhere with drag effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Calculate position relative to viewport center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = clientX - centerX;
      const offsetY = clientY - centerY;

      if (ringOne.current) {
        gsap.to(ringOne.current, {
          x: offsetX,
          y: offsetY,
          rotation: offsetX * 0.02,
          duration: 0.8,
          ease: Power3.easeOut,
          overwrite: 'auto'
        });
      }

      if (ringTwo.current) {
        gsap.to(ringTwo.current, {
          x: offsetX,
          y: offsetY,
          rotation: -offsetX * 0.015,
          duration: 1.2,
          ease: Power3.easeOut,
          overwrite: 'auto'
        });
      }

      if (headerRef.current) {
        gsap.to(headerRef.current, {
          x: offsetX * 0.05,
          y: offsetY * 0.05,
          duration: 0.8,
          ease: Power3.easeOut,
          overwrite: 'auto'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(loadingScreen.current, {
        duration: 1.5,
        delay: 3,
        top: "-110%",
        ease: ExpoScaleEase.easeInOut,
      })
      .from(logo.current, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=0.8")
      .from([contact.current, menuRef.current], {
        duration: 1.2,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .from([bottomText.current, copyright.current], {
        duration: 1.2,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .from(".media ul li", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: Power3.easeInOut,
      }, "-=1.0")
      .from(p1.current, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=0.9")
      .from(p2.current, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .from(one.current, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .from(two.current, {
        duration: 1.2,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0");
  }, []);

  // GSAP ring entrance animations
  useEffect(() => {
    // Fade in and scale up both rings from center
    gsap.from(ringOne.current, {
      duration: 2,
      delay: 0.5,
      opacity: 0,
      scale: 0.3,
      rotation: -180,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(ringTwo.current, {
      duration: 3,
      delay: 1.2,
      opacity: 0,
      scale: 0.5,
      rotation: 180,
      ease: ExpoScaleEase.easeInOut,
    });

    // Subtle idle floating animation
    gsap.to(ringOne.current, {
      duration: 3,
      y: "+=15",
      rotation: "+=5",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4,
    });

    gsap.to(ringTwo.current, {
      duration: 4,
      y: "-=20",
      rotation: "-=8",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 4.5,
    });
  }, []);

  // Anime.js text animation
  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".ml7 .letters",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 1500,
      easing: "easeOutExpo",
      delay: (el, i) => 4000 + 50 * i,
    });
  }, []);

  // Scroll to projects
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle contact click
  const handleContact = () => {
    window.location.href = 'mailto:your-email@example.com';
  };

  return (
    <>
      <Navigation triggerRef={menuRef} />
      <section className="landing-section" styles={styles} id="home">
        <div className="container">
          <div className="loading-screen" ref={loadingScreen}></div>
          <div className="loader">
            <div className="ringOne ring" ref={ringOne}>
              <img src={originalZen} alt="" />
            </div>
          </div>

          <div className="ringTwo ring" ref={ringTwo}>
            <img src={originalZen} alt="" />
          </div>

          <div className="logo" ref={logo}>
            <IoIosPlanet className="git-compare" />
            Annalise Murphy
          </div>

          <div className="contact interactive" ref={contact} onClick={handleContact}>
            GET IN TOUCH
          </div>
          <div className="menu interactive" ref={menuRef}>
            <IoIosOptions className="options" size={33} />
          </div>
          <div className="header" ref={headerRef}>
            <script>
              const textWrapper = document.querySelector('.ml7 .letters');
              textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "
              <span className="letter">$&</span>");
            </script>

            <h1 className="ml7" id="title" ref={ml7}>
              {/* <span className="text-wrapper" ref={textWrapper}> */}
                <span className="letters" ref={letters}>
                  {/* Welcome */}
                </span>
              {/* </span> */}
            </h1>

            <section id="tagline" className="p1" ref={p1}>
              Software Engineer
              <br /> As an adaptive and flexible full-stack software engineer, I have a passion for teamwork, problem-solving, and pattern mapping. I have experience with many different modern web technologies including React.js, Typescript, Node.js &#38; PostgreSQL, and am always exploring new ways to improve the world through code.
              <br />
              {/* In another life, I used to be a virtual nomad, running an online e-commerce business on my computer from in the world. At some point along the way, I missed contributing to a team and became more curious about how I may someday improve the systems that ran the platforms I'd been working on for so long.
              <br /> */}
              Currently inspired by the latest in 3D animation(s) through programming (GSAP & Three.js).
            </section>

            <br />

            <p id="tagline" className="p2" ref={p2}>
              Have a project? Shooting for the stars and needing some out of
              this world designs? Click below you curious cat!
            </p>

            <div className="buttons">
              <button id="one" ref={one} className="interactive" onClick={scrollToProjects}>
                <span>VIEW PROJECTS</span>
              </button>
              <button id="two" ref={two} className="interactive" onClick={handleContact}>
                <span>GET IN TOUCH</span>
              </button>
            </div>
          </div>

          <div className="bottom-text" ref={bottomText}>
            Coding Goddess Version 01.xx.xx
          </div>
          <div className="copyright" ref={copyright}>
            &#169; 2025 by Annalise Murphy. All rights reserved.
          </div>
          <div className="media" ref={mediaUlLi}>
            <ul>
              <li>
                <a
                  href="https://github.com/Annalise-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive"
                >
                  <IoLogoOctocat className="logo-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bbdragon88/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive"
                >
                  <IoLogoInstagram className="logo-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/annalise-murphy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive"
                >
                  <IoLogoLinkedin className="logo-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <script src="/script/gsap.min.js"></script>
        <script src="anime.min.js"></script>
        <script src="./script.js"></script>
      </section>
    </>
  );
}
