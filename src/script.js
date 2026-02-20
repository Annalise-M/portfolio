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
  const ringThree = React.useRef();
  const ringFour = React.useRef();
  const ringFive = React.useRef();
  const headerRef = React.useRef();
  const menuRef = React.useRef();
  const footerRef = React.useRef();

  // Initialize rings to centered position
  useEffect(() => {
    gsap.set([ringOne.current, ringTwo.current, ringThree.current, ringFour.current, ringFive.current], {
      x: 0,
      y: 0
    });
  }, []);

  // Rings follow cursor position directly (stacked with different lag)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Get viewport center (where rings are positioned by default)
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate how far to move from center to cursor
      const targetX = clientX - centerX;
      const targetY = clientY - centerY;

      // Ring 1 - Follows cursor most closely (fastest)
      if (ringOne.current) {
        gsap.to(ringOne.current, {
          x: targetX,
          y: targetY,
          duration: 0.3,
          ease: Power3.easeOut
        });
      }

      // Ring 2 - Slightly slower
      if (ringTwo.current) {
        gsap.to(ringTwo.current, {
          x: targetX,
          y: targetY,
          duration: 0.5,
          ease: Power3.easeOut
        });
      }

      // Ring 3 - Medium lag
      if (ringThree.current) {
        gsap.to(ringThree.current, {
          x: targetX,
          y: targetY,
          duration: 0.7,
          ease: Power3.easeOut
        });
      }

      // Ring 4 - More lag
      if (ringFour.current) {
        gsap.to(ringFour.current, {
          x: targetX,
          y: targetY,
          duration: 0.9,
          ease: Power3.easeOut
        });
      }

      // Ring 5 - Most lag (slowest to follow)
      if (ringFive.current) {
        gsap.to(ringFive.current, {
          x: targetX,
          y: targetY,
          duration: 1.1,
          ease: Power3.easeOut
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP entrance animations
  useEffect(() => {
    const timeline = gsap.timeline();

    // Set all elements to hidden initially
    gsap.set([logo.current, contact.current, menuRef.current], { autoAlpha: 0, y: 20 });
    gsap.set([bottomText.current, copyright.current], { autoAlpha: 0, y: 20 });
    gsap.set(".media ul li", { autoAlpha: 0, y: 20 });
    gsap.set([p1.current, p2.current], { autoAlpha: 0, y: 20 });
    gsap.set([one.current, two.current], { autoAlpha: 0, y: 20 });

    timeline
      .to(loadingScreen.current, {
        duration: 1.5,
        delay: 3,
        top: "-110%",
        ease: ExpoScaleEase.easeInOut,
      })
      .to(logo.current, {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        ease: ExpoScaleEase.easeInOut,
      }, "-=0.8")
      .to([contact.current, menuRef.current], {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .to([bottomText.current, copyright.current], {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .to(".media ul li", {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: Power3.easeInOut,
      }, "-=1.0")
      .to(p1.current, {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        ease: ExpoScaleEase.easeInOut,
      }, "-=0.9")
      .to(p2.current, {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .to(one.current, {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0")
      .to(two.current, {
        duration: 1.2,
        autoAlpha: 1,
        y: 0,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.0");
  }, []);

  // GSAP rings entrance animations (staggered from center)
  useEffect(() => {
    // Individual ring scale and fade-ins with stagger
    gsap.from(ringOne.current, {
      duration: 1.8,
      delay: 0.8,
      opacity: 0,
      scale: 0.3,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(ringTwo.current, {
      duration: 1.8,
      delay: 1.0,
      opacity: 0,
      scale: 0.3,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(ringThree.current, {
      duration: 1.8,
      delay: 1.2,
      opacity: 0,
      scale: 0.3,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(ringFour.current, {
      duration: 1.8,
      delay: 1.4,
      opacity: 0,
      scale: 0.3,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(ringFive.current, {
      duration: 1.8,
      delay: 1.6,
      opacity: 0,
      scale: 0.3,
      ease: ExpoScaleEase.easeInOut,
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
    const email = process.env.REACT_APP_CONTACT_EMAIL || 'your-email@example.com';
    window.location.href = `mailto:${email}`;
  };

  // Footer fade on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = footerRef.current;

      if (footer) {
        // Smooth fade: starts fading at 50px, fully hidden by 200px
        const fadeStart = 50;
        const fadeEnd = 200;
        const scrollRange = fadeEnd - fadeStart;

        let opacity = 1;
        let translateY = 0;

        if (scrollY > fadeStart) {
          const fadeProgress = Math.min((scrollY - fadeStart) / scrollRange, 1);
          opacity = 1 - fadeProgress;
          translateY = fadeProgress * 20;
        }

        gsap.to(footer, {
          opacity: opacity,
          y: translateY,
          duration: 0.3,
          ease: Power3.easeOut
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero background reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress (0 at top, 1 at bottom)
      const maxScroll = documentHeight - windowHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      // Reduce dark overlay opacity as you scroll down
      // At top: overlay at full opacity, at bottom: minimal overlay
      const overlayOpacity = 0.3 - (scrollProgress * 0.2); // Goes from 0.3 to 0.1

      // Update CSS custom property
      document.documentElement.style.setProperty('--overlay-opacity', overlayOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation triggerRef={menuRef} />
      <section className="landing-section" styles={styles} id="home">
        <div className="container">
          <div className="loading-screen" ref={loadingScreen}></div>
          <div className="rings-container">
            <div className="ringOne ring" ref={ringOne}>
              <img src={originalZen} alt="" />
            </div>
            <div className="ringTwo ring" ref={ringTwo}>
              <img src={originalZen} alt="" />
            </div>
            <div className="ringThree ring" ref={ringThree}>
              <img src={originalZen} alt="" />
            </div>
            <div className="ringFour ring" ref={ringFour}>
              <img src={originalZen} alt="" />
            </div>
            <div className="ringFive ring" ref={ringFive}>
              <img src={originalZen} alt="" />
            </div>
          </div>

          <div className="logo" ref={logo}>
            <IoIosPlanet className="git-compare" />
            Planet Dev
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
              Welcome!
              <br />
              <br />
              I'm Annalise Murphy, a full-stack engineer specializing in Agentic SDLC. I design and ship end-to-end systems using React, TypeScript, Node.js, and PostgreSQL, with an emphasis on testable APIs, maintainable architecture, and high quality UX. My current work explores AI driven agentic systems and advanced interaction patterns, including 3D and motion rich design interfaces.
            </section>

            <br />

            <p id="tagline" className="p2" ref={p2}>
              Want to work with me? Check out my work & reach out below.
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

          <footer className="landing-footer" ref={footerRef}>
            <div className="bottom-text" ref={bottomText}>
              <span className="version-label">v2.0.0</span>
              <span className="version-divider">|</span>
              <span className="version-name">Cyberpunk Cosmos</span>
            </div>
            <div className="copyright" ref={copyright}>
              &#169; 2026 Annalise Murphy. All rights reserved.
            </div>
          </footer>
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
