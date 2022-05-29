import React, { Component } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";


export class FilmReview extends Component {
    static displayName = FilmReview.name;

    constructor(props) {
        super(props);
        this.state = {
            filmName: '',
            year: '',
            genre: '',
            studio: '',
            description: '',

            reviewTitle: '',
            reviewContent: '',
            rating: '',

            isAuthenticated: false,
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
    async handleSubmit(event) {
        event.preventDefault();

        //Post to film table
        const filmResponse = await Axios.post('https://localhost:7202/api/films', {
            filmName: this.state.filmName,
            year: this.state.year,
            genre: this.state.genre,
            studio: this.state.studio,
            description: this.state.description,
        })



        //Post to forum comment table
        await Axios.post('https://localhost:7202/api/reviews', {
            reviewTitle: this.state.reviewTitle,
            reviewContent: this.state.reviewContent,
            rating: this.state.rating,
            userKey: this.state.user.sub,
            filmKey: filmResponse.data.filmId
        })

        this.setState({
            filmName: '',
            year: '',
            genre: '',
            studio: '',
            description: '',
            reviewTitle: '',
            reviewContent: '',
            rating: '',
            user: null,
            data: []
        });

        this.props.history.push('/Reviews')
    }

    render() {
        return (
            <section className="frame">
                <Link className="flex back" to="/Reviews"><img className="miniIcon" src={left}></img>Back</Link>
                <section className="postForm">
                    <h1>Add a film review</h1>

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

                        <label for="rating">Rating:</label><br></br>
                        <input type="number" id="rating" name="rating" min="0" max="10" required value={this.state.rating} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="reviewTitle">Review title:</label><br></br>
                        <input type="text" id="reviewTitle" name="reviewTitle" placeholder="Title..." required value={this.state.reviewTitle} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="reviewContent">Review content:</label><br></br>
                        <textarea id="reviewContent" name="reviewContent" placeholder="Your review..." required value={this.state.reviewContent} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </section>
        );
    }
}