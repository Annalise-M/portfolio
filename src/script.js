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
  IoIosGitCompare,
} from "react-icons/io";
import originalZen from "./images/originalZen.png";
import styles from "./App.scss";
import anime from "animejs/lib/anime.es.js";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ExpoScaleEase);
gsap.registerPlugin(CSSPlugin);
gsap.defaults({overwrite: "auto"});

export default function Landing() {
  // Anime.js effects & refs
  const ml7 = React.useRef();
  const letters = React.useRef();
  const textWrapper = React.useRef();

  // gsap refs
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

  // gsap effects
  useEffect(() => {
    gsap.to(".loading-screen", 4, {
      delay: 6.6,
      top: "-110%",
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".logo", 3, {
      delay: 8.4,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".contact", 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".options", 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".bottom-text", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".copyright", 3, {
      delay: 8.9,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(
      ".media ul li",
      2,
      {
        delay: 8.7,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.1
    );

    gsap.from(".menu", 3, {
      delay: 8.8,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".p1", 3, {
      delay: 9,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from(".p2", 3, {
      delay: 9.2,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from("#one", 3, {
      delay: 9.4,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    gsap.from("#two", 3, {
      delay: 9.7,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });
  }, []);

  // gsap timeline effect
  useEffect(() => {
    gsap.timeline(
      ".ringOne",
      4,
      {
        delay: 0.6,
        opacity: 0,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        ease: ExpoScaleEase.easeInOut,
      },
      "-=5"
    );

    gsap.to(
      ".ringOne",
      4,
      {
        delay: 0.6,
        x: 40,
        motionPath: {
          path: "M268.271,134.933 C267.855,90.032 -40.983,89.784 32.019,88.784 107.009,88.784 240.162,129.075 268.405,103.32 301.374,73.195 341.086,74.782 390.086,74.782 477.086,74.782 493.578,117.106 500.578,94.106",
          align: "#path",
          autoRotate: true,
          ease: ExpoScaleEase.easeInOut,
        },
      },
      "-=5"
    );

    gsap.to(
      ".ringTwo",
      4,
      {
        delay: 0.9,
        motionPath: {
          path: "M268.271,134.933 C267.855,90.032 -40.983,89.784 32.019,88.784 107.009,88.784 240.162,129.075 268.405,103.32 301.374,73.195 341.086,74.782 390.086,74.782 477.086,74.782 493.578,117.106 500.578,94.106",
          align: "#path",
          autoRotate: true,
          ease: ExpoScaleEase.easeInOut,
        },
      },
      "-=5"
    );
  }, []);

  // anime.js timeline effect
  useEffect(() => {
    anime.timeline(5, { loop: false }).add({
      targets: ".ml7 .letters",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 1800,
      easing: "easeOutExpo",
      delay: function (el, i) {
        return 9000 + 50 * i;
      },
    });
  });

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
            <IoIosGitCompare className="git-compare" />
            DesignerDev
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
              <span className="text-wrapper" ref={textWrapper}>
                <span className="letters" ref={letters}>
                  Annalise Murphy
                </span>
              </span>
            </h1>

            <section id="tagline" className="p1" ref={p1}>
              Full Stack Software Engineer
              <br /> As an adaptive and flexible full-stack software engineer, I have a passion for teamwork, problem-solving, and pattern mapping. I have experience with many different modern web technologies including React.js, Typescript, Node.js &#38; PostgreSQL, and am always exploring new ways to improve the world through code.
              <br />
              In another life, I used to be a virtual nomad, running an online e-commerce business on my computer from in the world. At some point along the way, I missed contributing to a team and became more curious about how I may someday improve the systems that ran the platforms I'd been working on for so long.
              <br />
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
            &#169; 2023 by Annalise Murphy. All rights reserved.
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
