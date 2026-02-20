import React from 'react';
import './GlitchText.scss';

export default function GlitchText({ children, className = '' }) {
  return (
    <div className={`glitch-wrapper ${className}`}>
      <div className="glitch" data-text={children}>
        {children}
      </div>
    </div>
  );
}
