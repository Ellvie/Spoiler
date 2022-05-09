import React, { Component, useState } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';


export class FilmForum extends Component {
    static displayName = FilmForum.name;

    constructor(props) {
        super(props);
        this.state = {
            filmName: '',
            premiereDate: '',
            genre: '',
            studio: '',
            description: '',
            entry: '',

            isAuthenticated: false,
            //userName: null
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

    //Handle change in form
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    //Handle submitted form
    handleSubmit(event) {
        //Post to film table
        Axios.post('https://localhost:7202/api/films', {
            filmName: this.state.filmName,
            premiereDate: this.state.premiereDate,
            genre: this.state.genre,
            studio: this.state.studio,
            description: this.state.description,
        })
            .then(() => {
                this.setState({ value: '' });
            })
            .catch(error => console.error(error));


        //Post to forum comment table
        Axios.post('https://localhost:7202/api/forum', {
            forumComment: this.state.entry,
            //userName: this.state.userName
            user: this.state.user
        })
            .then(() => {
                this.setState({ value: '' });
            })
            .catch(error => console.error(error));

        event.preventDefault();
    }

    render() {
        return (
            <main>
                <section className="comment">
                    <h1>Add a film forum entry</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label for="filmName">Film name:</label><br></br>
                        <input type="text" id="filmName" name="filmName" value={this.state.filmName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="premiereDate">Premiere Date:</label><br></br>
                        <input type="date" id="premiereDate" name="premiereDate" value={this.state.premiereDate} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="studio">Studio:</label><br></br>
                        <input type="text" id="studio" name="studio" value={this.state.studio} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="entry">Entry:</label><br></br>
                        <textarea id="entry" name="entry" placeholder="Your entry..." value={this.state.entry} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </main>
        );
    }
}