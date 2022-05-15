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

            forumComment: '',
            isAuthenticated: false,
            user: null,
            data: [],
            filmId: '',
            FilmKey: ''
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

            .then((response) => {
                console.log(response);
                this.setState({
                    filmName: '',
                    year: '',
                    genre: '',
                    studio: '',
                    description: '',
                    data: response.data
                });    
            })
            .catch(error => console.error(error));


        //Post to forum comment table
        Axios({
            method: 'post',
            url: 'https://localhost:7202/api/forum',
            data: {
                forumComment: this.state.forumComment,
                user: this.state.user,
                FilmKey: this.state.data.filmId
            },
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then(() => {
                this.setState({
                    forumComment: '',
                    user: null,
                    FilmKey: '',
                    data: ''
                });
            })
            .catch(error => console.error(error));

        event.preventDefault();

        ////Post to forum comment table
        //Axios.post('https://localhost:7202/api/forum', {
        //    forumComment: this.state.forumComment,
        //    user: this.state.user,
        //    filmId: this.state.data.filmId
        //})
        //    .then(() => {
        //        this.setState({
        //            forumComment: '',
        //            user: null,
        //            filmId: '',
        //            data: ''
        //        });
        //    })
        //    .catch(error => console.error(error));

        //event.preventDefault();
    }

    render() {
        return (
            <main>
                <Link className="flex back" to="/Forum"><img className="miniIcon" src={left}></img>Back</Link>
                <section className="comment">
                    <h1>Add a film forum entry</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label>Film name:</label><br></br>
                        <input type="text" id="filmName" name="filmName" required value={this.state.filmName} onChange={this.handleChange}></input><br></br><br></br>

                        <label>Year:</label><br></br>
                        <input type="number" id="year" name="year" min="0" max="3000" required value={this.state.year} onChange={this.handleChange}></input><br></br><br></br>

                        <label>Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" required value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label>Studio:</label><br></br>
                        <input type="text" id="studio" name="studio" required value={this.state.studio} onChange={this.handleChange}></input><br></br><br></br>

                        <label>Description:</label><br></br>
                        <input type="text" id="description" name="description" required value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>

                        <label>Entry:</label><br></br>
                        <textarea id="forumComment" name="forumComment" placeholder="Your entry..." required value={this.state.forumComment} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </main>
        );
    }
}