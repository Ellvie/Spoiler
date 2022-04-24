import React, { Component } from 'react';

export class Forum extends Component {
    static displayName = Forum.name;


    render() {
        return (
            <main>
                <h1>Forum</h1>

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