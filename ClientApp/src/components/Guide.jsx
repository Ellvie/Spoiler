import React, { Component } from 'react';

import guide from "../pics/tv.png";

export class Guide extends Component {
    static displayName = Guide.name;


    render() {
        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={guide}></img>TV-Guide</h1>

                <section className="content">
                    <div className="flex">
                        <img className="miniPic" src="" alt="Picture of channel logo"></img>
                        <h2>TV-title - Episode name - S01E01</h2>
                        <img className="miniPic" src="" alt="Picture of tv-show"></img>
                    </div>
                </section>
            </section>
        );
    }
}