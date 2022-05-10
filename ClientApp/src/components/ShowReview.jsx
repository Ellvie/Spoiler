import React, { Component } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";

export class ShowReview extends Component {
    static displayName = ShowReview.name;

    constructor(props) {
        super(props);
        this.state = {
            showName: '',
            season: '',
            episode: '',
            episodeName: '',
            airDate: '',
            airTime: '',
            genre: '',
            network: '',
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
    handleSubmit(event) {
        //Post to show table
        Axios.post('https://localhost:7202/api/shows', {
            showName: this.state.showName,
            season: this.state.season,
            episode: this.state.episode,
            episodeName: this.state.episodeName,
            airDate: this.state.airDate,
            airTime: this.state.airTime,
            genre: this.state.genre,
            network: this.state.network,
            description: this.state.description,
        })
            .then(() => {
                this.setState({
                    showName: '',
                    season: '',
                    episode: '',
                    episodeName: '',
                    airDate: '',
                    airTime: '',
                    genre: '',
                    network: '',
                    description: '',
                });
            })
            .catch(error => console.error(error));


        //Post to review table
        Axios.post('https://localhost:7202/api/reviews', {
            reviewTitle: this.state.reviewTitle,
            reviewContent: this.state.reviewContent,
            rating: this.state.rating,
            user: this.state.user
        })
            .then(() => {
                this.setState({
                    reviewTitle: '',
                    reviewContent: '',
                    rating: '',
                    user: null
                });
            })
            .catch(error => console.error(error));

        event.preventDefault();
    }

    render() {
        return (
            <main>
                <Link className="flex back" to="/Reviews"><img className="miniIcon" src={left}></img>Back</Link>
                <section className="comment">
                    <h1>Add a show review</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label for="showName">Show name:</label><br></br>
                        <input type="text" id="showName" name="showName" required value={this.state.showName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="season">Season:</label><br></br>
                        <input type="number" id="season" name="season" required value={this.state.season} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="episode">Episode:</label><br></br>
                        <input type="number" id="episode" name="episode" required value={this.state.episode} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="episodeName">Episode name:</label><br></br>
                        <input type="text" id="episodeName" name="episodeName" required value={this.state.episodeName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="airDate">Air Date:</label><br></br>
                        <input type="text" id="airDate" name="airDate" required value={this.state.airDate} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="airTime">Air Time:</label><br></br>
                        <input type="text" id="airTime" name="airTime" required value={this.state.airTime} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" required value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="network">Network:</label><br></br>
                        <input type="text" id="network" name="network" required value={this.state.network} onChange={this.handleChange}></input><br></br><br></br>

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
            </main>
        );
    }
}