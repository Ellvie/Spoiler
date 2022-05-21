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

    async handleSubmit(event) {
        event.preventDefault();
       var response = await Axios.post('https://localhost:7202/api/Comment', {
            comment: this.state.value,
            commentKey: this.state.forumId,
            userKey: this.state.user.sub
        })

        this.setState({
            value: ''
        });        
        window.location.reload();
    }

    render() {
        { if (!this.state.user) return null }
        return (
            <form onSubmit={this.handleSubmit}>
                <section className="box">
                    <h1>Add a comment</h1>

                        <textarea id="forumComment" placeholder="Add a comment..." value={this.state.value} onChange={this.handleChange} /> 
                        <input type="submit" value="Submit" />
                </section>
            </form>
        );
    }

}


