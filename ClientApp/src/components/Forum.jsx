import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import tv from "../pics/tv.png";
import film from "../pics/film.png";

export class Forum extends Component {
    static displayName = Forum.name;


    render() {
        return (
            <main>
                <h1>Forum</h1>

                <section className="content">
                    <h2>Add</h2>
                    <div className="flex">
                        <Link className="flex" to="/showEntry"><img className="miniIcon" src={tv}></img>TV-show</Link>
                        <Link className="flex" to="/filmEntry"><img className="miniIcon" src={film}></img>Film</Link>
                    </div>
                </section>

                <section className="content">
                    <h2>Latest</h2>
                    <Link className="flex" to="/forumSingle">
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