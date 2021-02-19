import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default function Projects() {
        return (
            <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <span onClick={() => this.parallax.scrollTo(1)}>Scroll down here!</span>
                </ParallaxLayer>
            </Parallax>
        )
}

// ReactDOM.render(<Projects />, document.getElementById('root'));