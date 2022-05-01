import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from "../pics/peopleBanner2.jpg";
import banner2 from "../pics/mr.webbBanner.jpg";
import banner3 from "../pics/bridgeTown.jpg";
import banner4 from "../pics/motelCali.jpg";
import banner5 from "../pics/miss.holmes.jpg";
import banner6 from "../pics/sixStringDreams.jpg";
import banner7 from "../pics/bangBangDang.jpg";

export class BannerCarousel extends Component {
    static displayName = BannerCarousel.name;


    render() {
        return (
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={7000} transitionTime={700}>
                <div>
                    <img src={banner1} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner2} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner3} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner4} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner5} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner6} alt="Banner of TV-show." />
                </div>
                <div>
                    <img src={banner7} alt="Banner of TV-show." />
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




