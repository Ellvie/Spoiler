import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

export class SideMenu extends Component {
    static displayName = SideMenu.name;


    render() {
        return (
            <div className="sideMenu">
                <ul>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/News">News</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/Guide">TV-guide</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/Forum">Forum</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/Recaps">Recaps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/Reviews">Reviews</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="" to="/Search">Search</NavLink>
                    </NavItem>
                </ul>
            </div>
        );
    }
}