import React, { Component } from 'react';
import { ForumComment } from './ForumComment';
import Axios from 'axios';

export class ForumSingle extends Component {
    static displayName = ForumSingle.name;

    constructor(props) {
        super(props);
        this.state = {
            forum: this.props.location.state,
            forumComments: []
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        this.getForumComments();
    };


    getForumComments = () => {
        Axios.get('https://localhost:7202/api/comment/', { params: { forumId: this.state.forum.forumId } })
            .then((response) => {
                const data = response.data;
                this.setState({
                    forumComments: data
                });
            })

            .catch(error => console.error(error));
    }


    displayComments = (forumComments) => {
        if (!forumComments.length) return null;
        return forumComments.map((comment) => (
            <div key={comment.forumCommentId} className="column box">
                <div className="flex">
                    <img className="miniPic" src="" alt="User picture"></img>
                    <h2>Användarnamn</h2>
                    <p className="date">2022-03-30 16:24</p>
                </div>
                <p>{this.state.comment.comment}</p>
            </div>
        ));
    };

    render() {
        return (
            <main>
                <h1>{this.state.forum.show ? this.state.forum.show.showName : this.state.forum.film.filmName} - {this.state.forum.show ? this.state.forum.show.episodeName : this.state.forum.film.year}  {this.state.forum.show ? this.state.forum.show.episode : null}</h1>

                <div className="column box">
                    <div className="flex">
                        <img className="miniPic" src="" alt="User picture"></img>
                        <h2>Användarnamn</h2>
                        <p className="date">2022-03-30 16:24</p>
                    </div>
                    <p>{this.state.forum.forumComment}</p>
                </div>


                {this.displayComments(this.state.forumComments)}


                <section className="content">
                    <ForumComment />
                </section>
            </main>
        );
    }
}