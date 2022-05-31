import React, { Component } from 'react';

import news from "../pics/news.png";
import newsPic from "../pics/newsPic.jpg";

export class News extends Component {
    static displayName = News.name;

    constructor(props) {
        super(props);
        this.state = { news: {} };
    }

    componentDidMount() {
    }

    render() {

        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={news}></img>News</h1>
                <div className="boxNo">
                    <section>
                        <div className="column">
                            <h2>Festival to air on channel 2 this fall</h2>
                            <img className="responsive newsPic" src={newsPic} alt="Picture of the show in article."></img>

                            <p className="comment">2022-03-30</p>
                            <p>Duis enim ligula, suscipit quis pulvinar vitae, maximus non nunc. Phasellus accumsan dapibus porta. Nullam placerat arcu lectus, a porta tortor bibendum in. Duis sodales orci vel nisi rutrum porta. Nunc bibendum nisi et dignissim rhoncus. Etiam odio sem, elementum vitae metus vel, efficitur auctor elit. Nam id elit vehicula, ultrices turpis et, dictum justo. Fusce placerat purus ut finibus volutpat. Donec eleifend tellus vitae efficitur facilisis. Aliquam sagittis ullamcorper vulputate. Phasellus lacinia sapien at erat consequat sollicitudin. Ut ut pulvinar diam, eu pharetra tortor. Donec convallis ligula a sapien cursus commodo. </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc nunc, congue in fringilla eget, blandit viverra arcu. Maecenas vitae velit sit amet ligula efficitur dignissim vitae et ex. Nunc maximus porttitor justo eget imperdiet. Proin rutrum congue metus, non bibendum tortor eleifend non. Nulla vitae libero a sem dapibus sodales. Nullam sagittis dignissim nisl non porttitor. Ut sit amet nunc id eros scelerisque gravida nec sit amet magna. Duis accumsan dolor at velit interdum gravida. </p>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}