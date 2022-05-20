import React, { Component, useState } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';



export class ForumComment extends Component {
    static displayName = ForumComment.name;

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            forumId: this.props.forumId,
            user: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Get user
    componentDidMount() {
        this._subscription = authService.subscribe(() => this.populateState());
        this.populateState();
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription);
    }

    async populateState() {
        const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
        this.setState({
            isAuthenticated,
            //userName: user && user.name
            user: user
        });
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        Axios.post('https://localhost:7202/api/Comment', {
            comment: this.state.value,
            commentKey: this.state.forumId,
            user: this.state.user
        })
            .then(() => {
                this.setState({value: ''});
            })
            .catch(error => console.error(error));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <section>
                    <h1>Add a comment</h1>
                        <textarea id="forumComment" placeholder="Add a comment..." value={this.state.value} onChange={this.handleChange} /> 
                    <input type="submit" value="Submit" />
                </section>
            </form>
        );
    }


    //static displayName = ForumComment.name;

    //async PostForm() {
    //const url = "https://localhost:7202/api/Forum"
    //    const [data, setData] = useState({
    //        forumComment: ""
    //    });
    

    //    function submit(e) {
    //        e.preventDefault();
    //        Axios.post(url, {
    //            forumComment: data.forumComment
    //        })
    //            .then(res => {
    //                console.log(res.data)
    //            })
    //    }

    //    function handle(e) {
    //        const newdata = { ...data }
    //        newdata[e.target.id] = e.target.value
    //        setData(newdata)
    //        console.log(newdata)
    //        }

        
    //        return (
    //            <section>
    //                <h1>Add a comment</h1>

    //                <form className="" onSubmit={(e) => submit(e)}>
    //                    <textarea onChange={(e) => handle(e)} id="forumComment" value={data.forumComment} name="forumComment" placeholder="Add a comment..."></textarea>
    //                    <input type="submit" value="Post"></input>
    //                </form>
    //            </section>
    //        );
        
    //}

}


