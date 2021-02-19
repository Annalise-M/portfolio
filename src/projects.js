import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default class Projects extends React.Component {
    render() {
        return (
            <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <span onClick={() => this.parallax.scrollTo(1)}>Scroll down here!</span>
                </ParallaxLayer>
            </Parallax>
        )
    }
}