import React, { useEffect } from 'react';
import { TweenMax, Expo } from 'gsap/gsap-core';

const Loader = () => {

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
  
  }, []);

  return (
    <>
    
    </>
  );
};

export default Loader;
