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
        {/* think about replacing logo with NameBranding */}
      <div className="logo">
        <ion-icon name="git-compare"></ion-icon>
          FilesFiddle
      </div>
      
      <div className="contact">GET IN TOUCH</div>

      <div className="menu">
        <ion-icon name="options"></ion-icon>
      </div>

      <div className="header">
        {/* PICK UP FROM HEREEEEEEE */}
      </div>
     </div>
    
    </>
  )
}
