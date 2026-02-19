// import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';


export default function Projects() {
    return (
        <div className="projects">
            <h1>        
                <section>
                    <ParallaxLayer offset={0.4} speed={1}>
                        <div className="title">WOWIEEEE</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nisi officia veniam vel facere quae voluptatem natus beatae quod laudantium? Ratione quam sapiente dolorem explicabo ipsum fuga delectus soluta a.
                        </div>
                        <img src="www.placecage.com" alt="project 1">This image here</img>
                    </ParallaxLayer>
                </section>
                <section>
                    <ParallaxLayer offset={1.2} speed={0}>
                        <div>PROJECT 2</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nisi officia veniam vel facere quae voluptatem natus beatae quod laudantium? Ratione quam sapiente dolorem explicabo ipsum fuga delectus soluta a.
                        </div>
                    </ParallaxLayer>
                </section>
                <section>
                    <ParallaxLayer offset={0.9} speed={3}>
                        <div>PROJECT 3</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nisi officia veniam vel facere quae voluptatem natus beatae quod laudantium? Ratione quam sapiente dolorem explicabo ipsum fuga delectus soluta a.
                        </div>
                    </ParallaxLayer>
                </section>
                <section>
                    <ParallaxLayer offset={-0.2} speed={1.3}>
                        <div>PROJECT 4</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nisi officia veniam vel facere quae voluptatem natus beatae quod laudantium? Ratione quam sapiente dolorem explicabo ipsum fuga delectus soluta a.
                        </div>
                    </ParallaxLayer>
                </section>
            </h1>
        </div>
    );
}

