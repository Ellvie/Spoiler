import React, { Component } from 'react';
//import { NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

import '../style.scss'
import logo from "../pics/spoiler.png";

export class NavMenu extends Component {
    static displayName = NavMenu.name;

     constructor(props) {
        super(props);

        //this.navSlide = navSlide();

/*         this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        }; */
    }

/*     toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
 */

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
            <header>
                <nav className="spaceBetween">
                    <div class="burgernav">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    <Link className="logo" to="/">¡Spoiler!</Link>
                        <div className="">
                            <ul className="flex">
                                <LoginMenu>
                                </LoginMenu>
                            </ul>
                        </div>
                </nav>
            </header>
        );
    }


     


}
