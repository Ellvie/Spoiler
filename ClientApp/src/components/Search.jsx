import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Search extends Component {
    static displayName = Search.name;


    render() {
        return (
            <main>
                <h1>Search</h1>

                <section className="content">
                    <form className="formFlex">
                        <input type="text" id="search" name="search" placeholder="Search..."></input>
                        <input type="submit" value="Search"></input>
                    </form>
                </section>

                <section className="content">
                    <h2>Results</h2>

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