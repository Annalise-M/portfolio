import gsap, { TweenMax, Expo, Power3 } from 'gsap/gsap-core';
import React, { useEffect } from 'react';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { 
  IoIosOptions,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoOctocat
} from "react-icons/io";
import originalZen from './images/originalZen.png';
import{ styles }from './App.scss';

gsap.registerPlugin(CSSPlugin);


// const ref = React.createRef();

export default function Loader() {

  const Item1 = React.forwardRef();
  const zenLogo = React.forwardRef();
  const options = React.forwardRef();
  const bottomText = React.forwardRef();
  const copyright = React.forwardRef();
  const mediaUlLi = React.forwardRef();

  useEffect(() => {
    TweenMax.to('.loading-screen', 4, {
      delay: 6.6,
      top: "-110%",
      ease: Expo.easeInOut
    });

    TweenMax.from('.logo', 3, {
      delay: 8.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from('.options', 3, {
      delay: 8.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from('.bottom-text', 3, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.from('.copyright', 3, {
      delay: 8.9,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    });

    TweenMax.staggerFrom('.media ul li', 2, {
      delay: 8.7,
      opacity: 0,
      y: 20,
      ease: Power3.easeInOut
    }, 0.1);

    // TweenMax.from('.menu', 3, {
    //   delay: 8.8,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // TweenMax.from('.p1', 3, {
    //   delay: 9,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // TweenMax.from('.p2', 3, {
    //   delay: 9.2,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // TweenMax.from('#one', 3, {
    //   delay: 9.4,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });
  
    // TweenMax.from('#two', 3, {
    //   delay: 9.7,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // const tl = new TimelineMax();
    // // const tl = gsap.timeline({tlVars})

    // tl.from('.ringOne', 4, {
    //   delay: 0.4,
    //   opacity: 0,
    //   y: 40,
    //   ease: Expo.easeInOut
    // }, '-=5').to('.ringOne', 4, {
    //   delay: 0.4,
    //   x: 40,
    //   ease: Expo.easeInOut
    // }).to('.ringTwo', 4,{
    //   delay: 0.9,
    //   x: 40,
    //   ease: Expo.easeInOut
    // }, '-=5');

    
  }, []);

    return <>
      <section styles={styles}>
        <div className="container">
          <div className="loading-screen" ref={Item1}></div>
            <div className="loader">
              <div className="ringOne ring">
                <img src={originalZen} alt="" />
              </div>
              </div>
              <div className="ringTwo ring">
                <img src={originalZen} alt="" />
              </div>
              <div className="logo" ref={zenLogo}>
                <span className="letters">Annalise Murphy</span>
              </div>
              <div className="menu">
                <IoIosOptions className="options" ref={options} size={33} />
              </div>
        </div>
          <div className="bottom-text" ref={bottomText}>Input something here</div>
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
        <script src="./script.js"></script>
      </section>
    </>
  };
