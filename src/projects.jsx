import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { styles } from './App.scss';

export default function Projects() {
    // const parallax = React.createRef();

    return (
        <div className="projects">
            <h1>
                {/* <section styles={styles}> */}
                    {/* <Parallax pages={3} ref={parallax}> */}
                        <ParallaxLayer offset={0.1} speed={0}>
                            <section>Scroll down bitch!</section>
                        </ParallaxLayer>
                        <ParallaxLayer offset={1.2} speed={0}>
                            <span>Scroll down further bitch!</span>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0.9} speed={3}>
                            <span>Fast one bitch!</span>
                        </ParallaxLayer>
                        <ParallaxLayer offset={-0.2} speed={1.3}>
                            <span>Go the other direction bitch!</span>
                        </ParallaxLayer>
                    {/* </Parallax> */}
                {/* </ section> */}
            </h1>
        </div>
    );
}

