import React from 'react';
import { Helmet } from 'react-helmet';

export default class Headers extends React.Component {
  render() {
    return (
        <Helmet className="header-scripts">

          {/* stylesheet */}
          <link rel="stylesheet" href="App.scss"/>

          {/* google fonts */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" />

          {/* ion-icons
          <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js" type="module" /> */}

          {/* nomodule ion-icons */}
          {/* <script src="http://localhost:3000/static/js/ionicons/ionicons.js"  nomodule="text/javascript" /> */}

          {/* gsap */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js" type="text/javascript" />

          {/* Anime.js */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" type="text/javascript" />

          {/* JQuery */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js" type="text/javascript" />
          
          <title>Annalise Murphy</title>

          <script src="/script.js" />

        </Helmet>
    )
  }
}
