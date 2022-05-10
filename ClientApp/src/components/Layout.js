import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { SideMenu } from './SideMenu';
import { Footer } from './Footer';
import { BannerCarousel } from './BannerCarousel';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />


                <div className="flex">
                    <SideMenu />
                    <div className="container">
                        <BannerCarousel />
                        
                        <main>
                            {this.props.children}
                        </main>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}
