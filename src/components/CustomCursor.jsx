import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.scss';

export default function CustomCursor() {
  const cursorRef = useRef();
  const followerRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const expandCursor = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3
      });
      gsap.to(follower, {
        scale: 1.5,
        duration: 0.3
      });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', expandCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', expandCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return (
    <div className="custom-cursor-wrapper">
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </div>
  );
}
