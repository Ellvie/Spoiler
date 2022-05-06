import React, { Component, useState } from 'react';
import Axios from 'axios';

export class FilmEntry extends Component {
    static displayName = FilmEntry.name;

    constructor(props) {
        super(props);
        this.state = {
            //value: ''
            filmName: '',
            premiereDate: '',
            genre: '',
            studio: '',
            description: '',
            entry: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //this.setState({
        //    //value: event.target.value,
        //    //name: event.target.value
        //    filmName: event.target.filmName,
        //    premiereDate: event.target.premiereDate,
        //    genre: event.target.genre,
        //    studio: event.target.studio,
        //    description: event.target.description,
        //    entry: event.target.entry
        //});

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        Axios.post('https://localhost:7202/api/films', {
            filmName: this.state.filmName,
            premiereDate: this.state.premiereDate,
            genre: this.state.genre,
            studio: this.state.studio,
            description: this.state.description,
            entry: this.state.entry
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
                    <h1>Add a film entry</h1>

                    <form className="" onSubmit={this.handleSubmit}>
                        <label for="filmName">Film name:</label><br></br>
                        <input type="text" id="filmName" name="filmName" value={this.state.filmName} onChange={this.handleChange}></input><br></br>

                        <label for="premiereDate">Premiere Date:</label><br></br>
                        <input type="date" id="premiereDate" name="premiereDate" value={this.state.premiereDate} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre" value={this.state.genre} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="studio">Studio:</label><br></br>
                        <input type="text" id="studio" name="studio" value={this.state.studio} onChange={this.handleChange}></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}></input><br></br><br></br>

                        <textarea id="entry" name="entry" placeholder="Your entry..." value={this.state.entry} onChange={this.handleChange}></textarea>

                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </main>
        );
    }
}