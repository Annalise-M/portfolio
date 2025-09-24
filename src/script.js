import gsap, { Power3 } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
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
import originalZen from "./images/originalZen.png";
import styles from "./App.scss";
import anime from "animejs/lib/anime.es.js";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ExpoScaleEase);
gsap.registerPlugin(CSSPlugin);
// gsap.defaults({overwrite: "auto"});

export default function Landing() {
  // Anime.js effects & refs
  // Refs
  const ml7 = React.useRef();
  const letters = React.useRef();
  const loadingScreen = React.useRef();
  const logo = React.useRef();
  const contact = React.useRef();
  const options = React.useRef();
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

  // GSAP entrance animations
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(loadingScreen.current, {
        duration: 4,
        delay: 6.6,
        top: "-110%",
        ease: ExpoScaleEase.easeInOut,
      })
      .from(logo.current, {
        duration: 3,
        delay: 1.8,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=2.2")
      .from([contact.current, options.current], {
        duration: 3,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: ExpoScaleEase.easeInOut,
      }, "-=2.8")
      .from([bottomText.current, copyright.current], {
        duration: 3,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: ExpoScaleEase.easeInOut,
      }, "-=2.8")
      .from(".media ul li", {
        duration: 2,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: Power3.easeInOut,
      }, "-=2.5")
      .from(menu.current, {
        duration: 3,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=2.5")
      .from(p1.current, {
        duration: 3,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=2.3")
      .from(p2.current, {
        duration: 3,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=2.1")
      .from(one.current, {
        duration: 3,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.9")
      .from(two.current, {
        duration: 3,
        opacity: 0,
        y: 20,
        ease: ExpoScaleEase.easeInOut,
      }, "-=1.6");
  }, []);

  // GSAP ring animations
  useEffect(() => {
    gsap.from(ringOne.current, {
      duration: 4,
      delay: 0.6,
      opacity: 0,
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%",
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.to(ringOne.current, {
      duration: 4,
      delay: 0.6,
      x: 40,
      motionPath: {
        path: "M268.271,134.933 C267.855,90.032 -40.983,89.784 32.019,88.784 107.009,88.784 240.162,129.075 268.405,103.32 301.374,73.195 341.086,74.782 390.086,74.782 477.086,74.782 493.578,117.106 500.578,94.106",
        align: "#path",
        autoRotate: true,
        ease: ExpoScaleEase.easeInOut,
      },
    });

    gsap.to(ringTwo.current, {
      duration: 4,
      delay: 0.9,
      motionPath: {
        path: "M268.271,134.933 C267.855,90.032 -40.983,89.784 32.019,88.784 107.009,88.784 240.162,129.075 268.405,103.32 301.374,73.195 341.086,74.782 390.086,74.782 477.086,74.782 493.578,117.106 500.578,94.106",
        align: "#path",
        autoRotate: true,
        ease: ExpoScaleEase.easeInOut,
      },
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
      duration: 1800,
      easing: "easeOutExpo",
      delay: (el, i) => 9000 + 50 * i,
    });
  }, []);

  return (
    <>
      <section styles={styles}>
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

          <div className="contact" ref={contact}>
            GET IN TOUCH
          </div>
          <div className="menu" ref={menu}>
            <IoIosOptions className="options" ref={options} size={33} />
          </div>
          <div className="header">
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
              <button id="one" ref={one}>
                PROJECTS
              </button>
              <button id="two" ref={two}>
                CURIOUS MINDS INQUIRE HERE
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
                  target="https://github.com/Annalise-M"
                >
                  <IoLogoOctocat className="logo-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bbdragon88/"
                  target="https://www.instagram.com/bbdragon88/"
                >
                  <IoLogoInstagram className="logo-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/annalise-murphy/"
                  target="https://www.linkedin.com/in/annalise-murphy/"
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
