import React, { Component } from 'react';

export class Guide extends Component {
    static displayName = Guide.name;


    render() {
        return (
            <main>
                <h1>TV-Guide</h1>

                <div className="flex">
                    <img className="miniPic" src="" alt="Picture of channel logo"></img>
                    <h2>TV-title - Episode name - S01E01</h2>
                    <img className="miniPic" src="" alt="Picture of tv-show"></img>
                </div> 
            </main>
        );
    }
}