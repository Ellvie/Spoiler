import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import home from "../pics/home.png";
import news from "../pics/news.png";
import tv from "../pics/tv.png";
import forum from "../pics/forum.png";
import recap from "../pics/recap.png";
import review from "../pics/review.png";
import search from "../pics/search.png";

export class SideMenu extends Component {
    static displayName = SideMenu.name;

    navSlide = () => {
        let burger = document.querySelector('.burgernav');
        let nav = document.querySelector('.nav-links');
        let navLinks = document.querySelectorAll('.nav-links li');


        burger.addEventListener('click', () => {
            //Toggle nav
            nav.classList.toggle('nav-active');

            //Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
                }
            });

            //Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    render() {
        return (
            <div className="">
                <ul className="sideMenu nav-links">
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/"><img className="miniIcon" src={home}></img>Home</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/News"><img className="miniIcon" src={news}></img>News</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/Guide"><img className="miniIcon" src={tv}></img>TV-guide</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/Forum"><img className="miniIcon" src={forum}></img>Forum</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/Recaps"><img className="miniIcon" src={recap}></img>Recaps</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/Reviews"><img className="miniIcon" src={review}></img>Reviews</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="sideMenuLink" to="/Search"><img className="miniIcon" src={search}></img>Search</Link>
                    </li>
                </ul>
            </div>
        );
    }



}