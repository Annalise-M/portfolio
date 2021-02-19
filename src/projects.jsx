import React from 'react';
// import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default function Projects() {
    let parallax;
    return (
        <Parallax pages={2} ref={ref => parallax = ref}>
            <ParallaxLayer offset={0.3} speed={0}>
                <span>Scroll down bitch!</span>
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
        </Parallax>
    );
}


// export default function Projects() {
//         return (
//             <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
//                 <ParallaxLayer offset={0} speed={0.5}>
//                     <span onClick={() => this.parallax.scrollTo(1)}>Scroll down here!</span>
//                 </ParallaxLayer>
//             </Parallax>
//         )
// }

// ReactDOM.render(<Projects />, document.getElementById('root'));