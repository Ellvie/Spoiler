import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';

import '../style.scss'

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="" light>
          <div>
            <NavbarBrand tag={Link} className="logo" to="/">¡Spoiler!</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="" />
            <Collapse className="" isOpen={!this.state.collapsed} navbar>
              <ul className="">
                <LoginMenu>
                </LoginMenu>
              </ul>
            </Collapse>
          </div>
        </Navbar>
      </header>
    );
  }
}
