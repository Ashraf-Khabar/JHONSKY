import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OutOfReach from '../Sections/OutOfReach/OutOfReach';
import Passion from '../Sections/Passion/Passion';
import YourCreativity from '../Sections/YourCreativity/YourCreativity';
import '../index.css';
import WhatWeDo from '../Sections/WhatWeDo/WhatWeDo';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return (
        <div data-theme="luxury">
            <Carousel showStatus={false} autoPlay={true} infiniteLoop={true} interval={2000} swipeable={false}>
                <YourCreativity />
                <OutOfReach />
                <Passion />
            </Carousel>
            <div style={{ marginTop: "-40px" }}>
                <WhatWeDo />
            </div>
        </div>
    );
};


export default Home;
