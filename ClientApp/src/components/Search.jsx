import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import search from "../pics/search.png";

export class Search extends Component {
    static displayName = Search.name;


    render() {
        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={search}></img>Search</h1>

                <section className="content">
                    <form className="formFlex">
                        <input type="text" id="search" className="search" name="search" placeholder="Search..."></input>
                        <input type="submit" value="Search" className="smallSubmit"></input>
                    </form>
                </section>

                <section className="content">
                    <h2>Results</h2>

                    <Link className="flex" to="/forumSingle">
                        <div className="flex box">
                            <h3>TV-title - Episode name - S01E01</h3>
                        </div>
                    </Link>
                </section>
            </section>
        );
    }
}