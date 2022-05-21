import React, { Component } from 'react';

export class RecapSingle extends Component {
    static displayName = RecapSingle.name;


    render() {
        return (
            <section>
                <h1>Recap - TV-title - Episode name - S01E01</h1>

                <div className="column">
                    <div className="flex">
                        <img className="miniPic" src="" alt="User picture"></img>
                        <h2>Användarnamn</h2>
                        <p className="date">2022-03-30 16:24</p>
                    </div>
                    <p>Lorem ipsum</p>
                </div>
            </section>
        );
    }
}