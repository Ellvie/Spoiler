import React, { Component } from 'react';

export class News extends Component {
    static displayName = News.name;


    render() {
        return (
            <main>
                <h1>News</h1>

                <div className="column">
                    <img className="miniPic" src="" alt="Picture of channel logo"></img>
                    <h2>Title</h2>
                    <p className="date">2022-03-30</p>
                    <p>Lorem ipsum</p>
                </div>
            </main>
        );
    }
}