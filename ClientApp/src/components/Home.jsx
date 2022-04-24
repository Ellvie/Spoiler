import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;


    render() {
        return (
            <main>
                <h1>Recent discussions</h1>

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