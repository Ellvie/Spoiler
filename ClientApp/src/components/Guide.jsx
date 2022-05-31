import React, { Component } from 'react';

import guide from "../pics/tv.png";
import channel from "../pics/channel.png";
import program from "../pics/program.png";

export class Guide extends Component {
    static displayName = Guide.name;


    render() {
        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={guide}></img>TV-Guide</h1>

                <section className="content">
                    <div className="boxNo">
                        <h2>Currently on:</h2>
                        <div className="flex boxNo">
                            <div className="flex">
                                <img className="guidePic" src={channel} alt="Picture of channel logo"></img>
                                <h3>TV-title - Episode name - S01E01</h3>
                            </div>
                            <div>
                                <img className="guidePic" src={program} alt="Picture of tv-show"></img>
                            </div>
                        </div>

                        <div className="flex boxNo">
                            <div className="flex">
                                <img className="guidePic" src={channel} alt="Picture of channel logo"></img>
                                <h3>TV-title - Episode name - S01E01</h3>
                            </div>
                            <div>
                                <img className="guidePic" src={program} alt="Picture of tv-show"></img>
                            </div>
                        </div>

                        <div className="flex boxNo">
                            <div className="flex">
                                <img className="guidePic" src={channel} alt="Picture of channel logo"></img>
                                <h3>TV-title - Episode name - S01E01</h3>
                            </div>
                            <div>
                                <img className="guidePic" src={program} alt="Picture of tv-show"></img>
                            </div>
                        </div>

                        <div className="flex boxNo">
                            <div className="flex">
                                <img className="guidePic" src={channel} alt="Picture of channel logo"></img>
                                <h3>TV-title - Episode name - S01E01</h3>
                            </div>
                            <div>
                                <img className="guidePic" src={program} alt="Picture of tv-show"></img>
                            </div>
                        </div>

                        <div className="flex boxNo">
                            <div className="flex">
                                <img className="guidePic" src={channel} alt="Picture of channel logo"></img>
                                <h3>TV-title - Episode name - S01E01</h3>
                            </div>
                            <div>
                                <img className="guidePic" src={program} alt="Picture of tv-show"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}