import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;


    render() {
        return (
            <main>
                <h1>Recent</h1>
                

                <section className="content">
                    <h2>Forum discussions</h2>
                    <Link className="flex" to="/forumSingle">
                    <div className="flex">
                        <h3>TV-title - Episode name - S01E01</h3>
                        <img className="miniPic" src="" alt="Picture of tv-show"></img>
                    </div>
                    </Link>
                </section>

                <section className="content">
                    <h2>Recaps</h2>
                    <Link className="flex" to="/recapSingle">
                        <div className="flex">
                            <h3>TV-title - Episode name - S01E01</h3>
                            <img className="miniPic" src="" alt="Picture of tv-show"></img>
                        </div>
                    </Link>
                </section>

                <section className="content">
                    <h2>Reviews</h2>
                    <Link className="flex" to="/reviewSingle">
                        <div className="flex">
                            <h3>TV-title - Episode name - S01E01</h3>
                            <img className="miniPic" src="" alt="Picture of tv-show"></img>
                        </div>
                    </Link>
                </section>
            </main>
        );
    }
}