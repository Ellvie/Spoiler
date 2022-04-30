import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { SideMenu } from './SideMenu';
import { Footer } from './Footer';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />


                <div className="flex">
                    <SideMenu />
                    <Container>
                        {this.props.children}
                    </Container>
                </div>

                <Footer />
            </div>
        );
    }
}
