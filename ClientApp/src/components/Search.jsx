import React, { Component } from 'react';

export class Search extends Component {
    static displayName = Search.name;


    render() {
        return (
            <main>
                <h1>Search</h1>

                <form className="formFlex">
                    <input type="text" id="search" name="search" placeholder="Search..."></input>
                    <input type="submit" value="Search"></input>
                </form>

                <a href="">
                    <div className="flex">
                        <h2>TV-title - Episode name - S01E01</h2>
                        <img className="miniPic" src="" alt="Picture of tv-show"></img>
                    </div>
                </a>
            </main>
        );
    }
}