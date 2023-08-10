import gsap, { TweenMax, Power3 } from "gsap/gsap-core";
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
import { styles } from "./App.scss";
import anime from "animejs/lib/anime.es.js";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ExpoScaleEase);
gsap.registerPlugin(CSSPlugin);

export default function Landing() {
  // Anime.js effects & refs
  const ml7 = React.createRef();
  const letters = React.createRef();
  const textWrapper = React.createRef();

  // gsap refs
  const loadingScreen = React.createRef();
  const logo = React.createRef();
  const contact = React.createRef();
  const options = React.createRef();
  const bottomText = React.createRef();
  const copyright = React.createRef();
  const mediaUlLi = React.createRef();
  const menu = React.createRef();
  const p1 = React.createRef();
  const p2 = React.createRef();
  const one = React.createRef();
  const two = React.createRef();
  const ringOne = React.createRef();
  const ringTwo = React.createRef();

  // gsap effects
  useEffect(() => {
    TweenMax.to(".loading-screen", 4, {
      delay: 6.6,
      top: "-110%",
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".logo", 3, {
      delay: 8.4,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".contact", 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".options", 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".bottom-text", 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".copyright", 3, {
      delay: 8.9,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.staggerFrom(
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

    TweenMax.from(".menu", 3, {
      delay: 8.8,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".p1", 3, {
      delay: 9,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from(".p2", 3, {
      delay: 9.2,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from("#one", 3, {
      delay: 9.4,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut,
    });

    TweenMax.from("#two", 3, {
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

            <p id="tagline" className="p1" ref={p1}>
              Full Stack Software Engineer
              <br />A full stack software engineer with a passion
              for problem solving and pattern mapping. I have experience with
              many different modern web technologies including React, Node.js
              &#38; PostgreSQL. I love being apart of a goal oriented team where
              my composition skills and attention to detail are valued. I'm an
              idea's person, active listener and clear communicator with superb
              dedication to constantly improving my attention to detail and the
              world through code.
            </p>

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
