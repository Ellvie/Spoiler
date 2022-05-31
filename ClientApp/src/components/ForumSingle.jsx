import React, { Component } from 'react';
import { ForumComment } from './ForumComment';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";
import forum from "../pics/forum.png";


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


    getForumComments = async () => {
        var response = await Axios.get('https://localhost:7202/api/comment/',
            {
                params:
                {
                    forumId: this.state.forum.forumId
                }
            });

        this.setState({
            forumComments: response.data
        });
    }


    displayComments = (forumComments) => {
        if (!forumComments || !forumComments.length) return null;
        console.log(forumComments)
        return forumComments.map((comment) => (
            <div key={comment.forumCommentId} className="column boxNo">
                <div className="flex comment">
                    {/*<img className="miniPic" src="" alt="User picture"></img>*/}
                    <h2 className="user">{comment.user.email}</h2>
                    <p className="date">{comment.added}</p>
                </div>
                <p>{comment.comment}</p>
            </div>
        ));
    };

    render() {
        return (
            <section className="frame">
                <Link className="flex back" to="/Forum"><img className="miniIcon" src={left}></img>Forum</Link>
                <section className="boxNo">
                    <h1 className="flex"><img className="miniIcon" src={forum}></img>{this.state.forum.show ? this.state.forum.show.showName : this.state.forum.film.filmName} - {this.state.forum.show ? this.state.forum.show.episodeName : this.state.forum.film.year}  {this.state.forum.show ? "- S" + this.state.forum.show.season + "E" + this.state.forum.show.episode : null}</h1>

                    <div className="column boxNo">
                        <div className="flex comment">
                            <h2 className="user">{this.state.forum.user.email}</h2>
                            <p className="date">{this.state.forum.added}</p>
                        </div>
                        <p>{this.state.forum.forumComment}</p>
                    </div>

                    

                    {this.displayComments(this.state.forumComments)}


                    <br></br><br></br><br></br><br></br>

                    <section className="content">
                        <ForumComment forumId={this.state.forum.forumId} />
                    </section>
                </section>
            </section>
        );
    }
}