import React, { Component } from 'react';
//import { NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

import '../style.scss'

export class NavMenu extends Component {
    static displayName = NavMenu.name;

/*     constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    } */

/*     toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
 */
    render() {
        return (
            <header>
                <nav className="spaceBetween">
                        <Link className="logo" to="/">�Spoiler!</Link>
                        {/* <NavbarToggler onClick={this.toggleNavbar} className="" /> */}
                        
                        {/* <div className="" isOpen={!this.state.collapsed} navbar> */}
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
