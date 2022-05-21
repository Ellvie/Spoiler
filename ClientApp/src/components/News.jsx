import React, { Component } from 'react';

export class News extends Component {
    static displayName = News.name;

    constructor(props) {
        super(props);
        this.state = { news: {} };
    }

    componentDidMount() {
        this.getNews();
    }

    render() {

        return (
            <section>
                <h1>News</h1>

                <section className="content">
                    <div className="column">
                        <img className="responsive" src="" alt="Picture."></img>
                        <h2>Title</h2>
                        <p className="date">2022-03-30</p>
                        <p>{this.state.news.content}</p>
                    </div>
                </section>
            </section>
        );
    }

    async getNews() {
        await fetch('https://localhost:7202/api/news')
            .then(response => response.json())
            .then(data => {
                this.setState({ news: data });
            })
            .catch(error => console.error(error));
    }

}