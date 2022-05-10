import React, { Component } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";


export class FilmForum extends Component {
    static displayName = FilmForum.name;

    constructor(props) {
        super(props);
        this.state = {
            filmName: '',
            year: '',
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
            year: this.state.year,
            genre: this.state.genre,
            studio: this.state.studio,
            description: this.state.description,
        })
            .then(() => {
                this.setState({
                    filmName: '',
                    year: '',
                    genre: '',
                    studio: '',
                    description: ''
                });
            })
            .catch(error => console.error(error));


        //Post to forum comment table
        Axios.post('https://localhost:7202/api/forum', {
            forumComment: this.state.entry,
            //userName: this.state.userName
            user: this.state.user
        })
            .then(() => {
                this.setState({
                    entry: '',
                    user: null
                });
            })
            .catch(error => console.error(error));

        event.preventDefault();
    }

    render() {
        return (
            <main>
                <Link className="flex back" to="/Forum"><img className="miniIcon" src={left}></img>Back</Link>
                <section className="comment">
                    <h1>Add a film forum entry</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label for="filmName">Film name:</label><br></br>
                        <input type="text" id="filmName" name="filmName" required value={this.state.filmName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="year">Year:</label><br></br>
                        <input type="number" id="year" name="year" min="0" max="3000" required value={this.state.year} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" required value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="studio">Studio:</label><br></br>
                        <input type="text" id="studio" name="studio" required value={this.state.studio} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description" required value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="entry">Entry:</label><br></br>
                        <textarea id="entry" name="entry" placeholder="Your entry..." required value={this.state.entry} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </main>
        );
    }
}