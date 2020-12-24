import { createRef, useEffect } from 'react';
import gsap, { TweenMax, Expo } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap/CSSPlugin';
import originalZen from './images/originalZen.png';
import './App.scss';


gsap.registerPlugin(CSSPlugin);


const Loader = () => {

  const item1 = createRef();
  const zenLogo = createRef();

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

    // TweenMax.from('.options', 3, {
    //   delay: 8.4,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // TweenMax.from('.bottom-text', 3, {
    //   delay: 8.7,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // TweenMax.from('.copyright', 3, {
    //   delay: 8.9,
    //   opacity: 0,
    //   y: 20,
    //   ease: Expo.easeInOut
    // });

    // TweenMax.staggerFrom('.media ul li', 2, {
    //   delay: 8.7,
    //   opacity: 0,
    //   y: 20,
    //   ease: Power3.easeInOut
    // }, 0.1);

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
  
  // const textWrapper = document.querySelector('.ml7 .letters');
  // textWrapper.innerHTML = textWrapper.textContent.replace('/([^\x00-\x80]|\w)/g', <span className="">$&</span>);

  return (
    <section>
      <div className="container">
        <div className="loading-screen" ref={item1}></div>
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
      </div>
    </section>
  )
};

export default Loader;
