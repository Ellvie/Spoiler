import React, { Component } from 'react';

export class FilmEntry extends Component {
    static displayName = FilmEntry.name;


    render() {
        return (
            <main>
                <section className="comment">
                    <h1>Add a film entry</h1>

                    <form className="">
                        <label for="filmName">Film name:</label><br></br>
                        <input type="text" id="filmName" name="filmName"></input><br></br>

                        <label for="premiereDate">Premiere Date:</label><br></br>
                        <input type="text" id="premiereDate" name="premiereDate"></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre"></input><br></br><br></br>

                        <label for="studio">Studio:</label><br></br>
                        <input type="text" id="studio" name="studio"></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description"></input><br></br><br></br>


                        <textarea id="entry" name="entry" placeholder="Your entry..."></textarea>
                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </main>
        );
    }
}