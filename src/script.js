import gsap, { 
  TweenMax,
  Power3,
  TimelineMax 
} from 'gsap/gsap-core';
import { ExpoScaleEase } from 'gsap/EasePack';
import React, { useEffect } from 'react';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { 
  IoIosOptions,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoOctocat,
  IoIosGitCompare
} from "react-icons/io";
import originalZen from './images/originalZen.png';
import{ styles }from './App.scss';

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ExpoScaleEase);

export default function Loader() {

  const loadingScreen = React.forwardRef();
  const logo = React.forwardRef();
  const contact = React.forwardRef();
  const options = React.forwardRef();
  const bottomText = React.forwardRef();
  const copyright = React.forwardRef();
  const mediaUlLi = React.forwardRef();
  const menu = React.forwardRef();
  const p1 = React.forwardRef();
  const p2 = React.forwardRef();
  const one = React.forwardRef();
  const two = React.forwardRef();
  const ringOne = React.forwardRef();
  const ringTwo = React.forwardRef();


  useEffect(() => {
    TweenMax.to('.loading-screen', 4, {
      delay: 6.6,
      top: "-110%",
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.logo', 3, {
      delay: 8.4,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.contact', 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.options', 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.bottom-text', 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.copyright', 3, {
      delay: 8.9,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.staggerFrom('.media ul li', 2, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
    }, 0.1);

    TweenMax.from('.menu', 3, {
      delay: 8.8,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.p1', 3, {
      delay: 9,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('.p2', 3, {
      delay: 9.2,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });

    TweenMax.from('#one', 3, {
      delay: 9.4,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });
  
    TweenMax.from('#two', 3, {
      delay: 9.7,
      opacity: 0,
      y: 20,
      ease: ExpoScaleEase.easeInOut
    });
    
    // const tl = gsap.timeline();

    // tl.from('.ringOne', 4, {
    //   delay: 0.4,
    //   opacity: 0,
    //   y: 40,
    //   ease: Expo.easeInOut
    // }, '-=5').to('.ringOne', 4, {
    //   delay: 0.4,
    //   x: 40,
    //   ease: Expo.easeInOut
    // }).to('.ringTwo', 4, {
    //   delay: 0.9,
    //   x: 40,
    //   ease: Expo.easeInOut
    // }, '-=5');

  }, []);

  
  useEffect(() => {
    const tl = new TimelineMax();
    
    tl.from('.ringOne', 4, {
      delay: 0.4,
      opacity: 0,
      y: 40,
      ease: ExpoScaleEase.easeInOut
    }, '-=5').to('.ringOne ring', 4, {
      delay: 0.9,
      x: 40,
      ease: ExpoScaleEase.easeInOut
    }, '-=5').to('.ringTwo ring', 4, {
      delay: 0.9,
      x: 40,
      ease: ExpoScaleEase.easeInOut
    }, '-=5');
 
  }, [])

    return <>
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

            <div className="contact" ref={contact}>GET IN TOUCH</div>
              
            <div className="menu" ref={menu}>
              <IoIosOptions className="options" ref={options} size={33} />
            </div>

            <div className="header">

          {/* NOTE: Change h1 classNaming convention */}
            <h1 className="ml7" id="title">
              <span className="text-wrapper">
                <span className="letters">
                  Annalise Murphy
                </span>
              </span>
            </h1>

          <p id="tagline" className="p1" ref={p1}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dignissimos tenetur similique magni adipisci perferendis totam tempore laborum sint beatae modi necessitatibus cumque debitis aut, velit odio dolorum, dolorem aspernatur?
          </p>

          <br />

          <p id="tagline" className="p2" ref={p2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi corporis magnam illo aspernatur nesciunt rerum officiis enim neque unde, maiores fuga asperiores dolorem totam ea sunt quia consequuntur itaque.
          </p>

          <div className="buttons">
            <button id="one" ref={one}>LEARN MORE</button>
            <button id="two" ref={two}>BUY NOW</button>
          </div>
        </div>

          <div className="bottom-text" ref={bottomText}>Coding Goddess Version 01.00.??</div>
              
          <div className="copyright" ref={copyright}>2020 by Annalise Murphy. All rights reserved.
          </div>
              
        <div className="media" ref={mediaUlLi}>
          <ul>
            <li><IoLogoFacebook className="logo-facebook" /></li>
            <li><IoLogoInstagram className="logo-instagram" /></li>
            <li><IoLogoTwitter className="logo-twitter" /></li>
            {/* change to git hub className */}
            <li><IoLogoOctocat className="logo-youtube" /></li>
          </ul>
        </div>

        </div>
        <script src="./script.js"></script>
      </section>
    </>
  };
