import React from 'react';
import { Helmet } from 'react-helmet';

export default class Scripts extends React.Component {
  render() {
    return (
      <div className="scripts-src">
        <Helmet>
          {/* Roboto Font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap" />

          <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js" type="text/javascript" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js" type="text/javascript" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" type="text/javascript" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js" type="text/javascript" />

          <title>Annalise Murphy Dev</title>
        </Helmet>
      </div>
    )
  }
}
