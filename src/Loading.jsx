import React from 'react';
// import styles from './App.scss';
import originalZen from './images/originalZen.png';

export default function Loading() {
  return (
    <>
     <div className="loading-container">
       <div className="loading-screen"></div>
       
       <div className="loader">
         <div className="zenOne ring"></div>
          <img src={originalZen} alt="" />
       </div>

       <div className="zenTwo ring">
         <img src={originalZen} alt="" />
       </div>

     </div>
    
    </>
  )
}
