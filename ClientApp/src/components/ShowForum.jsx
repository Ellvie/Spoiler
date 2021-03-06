import React, { Component } from 'react';
import Axios from 'axios';
import authService from './api-authorization/AuthorizeService';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";
import forum from "../pics/forum.png";

export class ShowForum extends Component {
    static displayName = ShowForum.name;

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

            entry: '',

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

        const showResponse = await Axios.post('https://localhost:7202/api/shows', {
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

        await Axios.post('https://localhost:7202/api/forum', {
            forumComment: this.state.entry,
            showKey: showResponse.data.showId,
            userKey: this.state.user.sub
        })

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
            entry: '',
            show: {}
        })


        this.props.history.push('/Forum')
    }

    render() {
        return (
            <section className="frame">
                <Link className="flex back" to="/Forum"><img className="miniIcon" src={left}></img>Back</Link>
                <section className="postForm boxNo">
                    <h1 className="flex"><img className="miniIcon" src={forum}></img>Show forum entry</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label for="showName">Show name:</label><br></br>
                        <input type="text" id="showName" name="showName" placeholder="Ex. Stranger Things..." required value={this.state.showName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="season">Season:</label><br></br>
                        <input type="number" id="season" name="season" placeholder="Ex. 1..." required value={this.state.season} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="episode">Episode:</label><br></br>
                        <input type="number" id="episode" name="episode" placeholder="Ex. 2..." required value={this.state.episode} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="episodeName">Episode name:</label><br></br>
                        <input type="text" id="episodeName" name="episodeName" placeholder="Ex. Chapter Two: The Weirdo on Maple Street..." required value={this.state.episodeName} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="airDate">Air Date:</label><br></br>
                        <input type="text" id="airDate" name="airDate" placeholder="YY-MM-DD" required value={this.state.airDate} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="airTime">Air Time:</label><br></br>
                        <input type="text" id="airTime" name="airTime" placeholder="00:00" required value={this.state.airTime} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" placeholder="Ex. Sci-Fi..." required value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="network">Network:</label><br></br>
                        <input type="text" id="network" name="network" placeholder="Ex. Netflix..." required value={this.state.network} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description" placeholder="Ex. Young boy vanishes and supernatural mysteries unfold..." required value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="entry">Entry:</label><br></br>
                        <textarea id="entry" name="entry" rows="10" placeholder="Your entry..." required value={this.state.entry} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </section>
        );
    }
}