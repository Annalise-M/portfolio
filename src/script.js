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
    window.location.href = 'mailto:your-email@example.com';
  };

  // Footer hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = footerRef.current;

      if (footer) {
        if (scrollY > 100) {
          gsap.to(footer, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: Power3.easeOut
          });
        } else {
          gsap.to(footer, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: Power3.easeOut
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
