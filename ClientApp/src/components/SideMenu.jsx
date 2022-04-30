import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SideMenu extends Component {
    static displayName = SideMenu.name;


    render() {
        return (
            <div className="sideMenu">
                <ul>
                    <li>
                        <Link className="" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="" to="/News">News</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="" to="/Guide">TV-guide</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="" to="/Forum">Forum</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="" to="/Recaps">Recaps</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="" to="/Reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link tag={Link} className="" to="/Search">Search</Link>
                    </li>
                </ul>
            </div>
        );
    }
}