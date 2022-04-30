import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from "../pics/testbanner1.jpg";
import banner2 from "../pics/testbanner2.jpg";
import banner3 from "../pics/testbanner3.jpg";

export class BannerCarousel extends Component {
    static displayName = BannerCarousel.name;


    render() {
        return (
            <Carousel>
                <div>
                    <img src={banner1} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner2} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner3} alt="Banner of TV-show." />
                </div>
            </Carousel>
        );
    }
}





// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>