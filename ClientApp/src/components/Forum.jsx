import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import tv from "../pics/tv.png";
import film from "../pics/film.png";

export class Forum extends Component {
    static displayName = Forum.name;

    constructor(props) {
        super(props);
        this.state = {
            forum: []
        };
    }


    componentDidMount = () => {
        this.getForum();
    };


    getForum = () => {
        Axios.get('https://localhost:7202/api/forum')
            .then((response) => {
                const data = response.data;
                this.setState({
                    forum: data
                });
            })

            .catch(error => console.error(error));
    }


    displayForum = (forum) => {
        if (!forum.length) return null;

        return forum.map((forum) => (
            <Link key={forum.ForumId} className="flex" to="/forumSingle">
                <div className="flex entry">
                    <h3>{ forum.ForumComment } - Episode name - S01E01</h3>
                    <img className="miniPic" src="" alt="Picture of tv-show"></img>
                </div>
            </Link>
        ));
    };

    render() {
        return (
            <main>
                <h1>Forum</h1>

                <section className="content">
                    <h2>Add</h2>
                    <div className="flex">
                        <Link className="flex" to="/showForum"><img className="miniIcon" src={tv}></img>TV-show</Link>
                        <Link className="flex" to="/filmForum"><img className="miniIcon" src={film}></img>Film</Link>
                    </div>
                </section>

                <section className="content">
                    <h2>Latest</h2>
                    
                        {this.displayForum(this.state.forum)}
                    
                </section>
            </main>
        );
    }
}