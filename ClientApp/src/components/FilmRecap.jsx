import React, { Component } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';
import { Link, Redirect } from 'react-router-dom';

import left from "../pics/arrowLeft.png";
import recap from "../pics/recap.png";


export class FilmRecap extends Component {
    static displayName = FilmRecap.name;

    constructor(props) {
        super(props);
        this.state = {
            filmName: '',
            year: '',
            genre: '',
            studio: '',
            description: '',

            recapTitle: '',
            recapContent: '',

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



        //Post to recap table
        await Axios.post('https://localhost:7202/api/recaps', {
            recapTitle: this.state.recapTitle,
            recapContent: this.state.recapContent,
            userKey: this.state.user.sub,
            filmKey: filmResponse.data.filmId
        })

        this.setState({
            filmName: '',
            year: '',
            genre: '',
            studio: '',
            description: '',
            recapTitle: '',
            recapContent: '',
            user: null,
            data: []
        });

        
        this.props.history.push('/Recaps')
    }


    render() {
        return (
            <section className="frame">
                <Link className="flex back" to="/Recaps"><img className="miniIcon" src={left}></img>Back</Link>
                <section className="postForm boxNo">
                    <h1 className="flex"><img className="miniIcon" src={recap}></img>Film recap</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label for="filmName">Film name:</label><br></br>
                        <input type="text" id="filmName" name="filmName" placeholder="Ex. Clueless..." required value={this.state.filmName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="year">Year:</label><br></br>
                        <input type="number" id="year" name="year" min="0" max="3000" placeholder="Ex. 1995..." required value={this.state.year} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" placeholder="Ex. Romantic Comedy..." required value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="studio">Studio:</label><br></br>
                        <input type="text" id="studio" name="studio" placeholder="Ex. Paramount Pictures..." required value={this.state.studio} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description" placeholder="Ex. The adventures of Cher at Meddlesome Beverly high school..." required value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="recapTitle">Recap title:</label><br></br>
                        <input type="text" id="recapTitle" name="recapTitle" placeholder="Title..." required value={this.state.recapTitle} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="recapContent">Recap content:</label><br></br>
                        <textarea id="recapContent" name="recapContent" rows="10" placeholder="Your recap..." required value={this.state.recapContent} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </section>
        );
    }
}