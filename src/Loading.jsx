import React from 'react';
import Headers from './helmet.jsx';
import originalZen from './images/originalZen.png';
import './App.scss';

export default function Loading() {
  return (
    <>
      <header>
        <Headers />
      </header>

      <section>
        <div className="container">

          <div className="loading-screen"></div>
            <div className="loader">
              <div className="ringOne ring">
                <img src={originalZen} alt="" />
              </div>
            </div>
            <div className="ringTwo ring">
              <img src={originalZen} alt="" />
            </div>
          
        <div className="logo">
          <ion-icon name="git-compare"></ion-icon>
            FilesFiddle
        </div>
        
        <div className="contact">GET IN TOUCH</div>

        <div className="menu">
          <ion-icon name="options"></ion-icon>
        </div>

        <div className="header">

        
        <h1 className="ml7" id="title">
          <span className="text-wrapper">
            <span className="letters">Annalise Murphy</span>
          </span>
        </h1>

          <p id="tagline" className="p2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dignissimos tenetur similique magni adipisci perferendis totam tempore laborum sint beatae modi necessitatibus cumque debitis aut, velit odio dolorum, dolorem aspernatur?
          </p>

          <br />

          <p id="tagline" className="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi corporis magnam illo aspernatur nesciunt rerum officiis enim neque unde, maiores fuga asperiores dolorem totam ea sunt quia consequuntur itaque.
          </p>

          <div className="buttons">
            <button id="one">LEARN MORE</button>
            <button id="two">BUY NOW</button>
          </div>
      </div>

      <div className="bottom-text">+0.0001db</div>

      <div className="copyright">2020 by Annalise Murphy. All rights reserved.</div>

      <div className="media">
        <ul>
          <li><ion-icon className="logo-linkedin"></ion-icon></li>
          <li><ion-icon className="logo-instagram"></ion-icon></li>
          <li><ion-icon className="logo-twitter"></ion-icon></li>
          <li><ion-icon className="logo-github"></ion-icon></li>
        </ul>
      </div>

      </div>
        <script src="./script.js"></script>
      </section>
    </>
  )
}
