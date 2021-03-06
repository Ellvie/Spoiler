import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import tv from "../pics/tv.png";
import film from "../pics/film.png";
import forum from "../pics/forum.png";

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
        if (!forum || !forum.length) return null;
        return forum.map((forum) => (
            <Link key={forum.forumId} className="flex box" to={{
                pathname: "/forumSingle",
                state: forum}}>
                <div className="flex entry">
                    <h3>{forum.show ? forum.show.showName : forum.film.filmName} - {forum.show ? forum.show.episodeName : forum.film.year}  {forum.show ? "- S" + forum.show.season + "E" + forum.show.episode : null}</h3>
                </div>
            </Link>
        ));
    };

    render() {
        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={forum}></img>Forum</h1>

                <section className="content boxNo">
                    <h2>Add</h2>
                    <div className="flex">
                        <Link className="flex" to="/showForum"><img className="miniIcon" src={tv}></img>TV-show</Link>
                        <Link className="flex" to="/filmForum"><img className="miniIcon" src={film}></img>Film</Link>
                    </div>
                </section>

                <section className="content boxNo">
                    <h2>Latest</h2>
                    
                        {this.displayForum(this.state.forum)}
                    
                </section>
            </section>
        );
    }
}