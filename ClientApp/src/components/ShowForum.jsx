import React, { Component } from 'react';

export class ShowForum extends Component {
    static displayName = ShowForum.name;


    render() {
        return (
            <main>
                <section className="comment">
                    <h1>Add a show forum entry</h1>

                    <form className="">
                        <label for="showName">Show name:</label><br></br>
                        <input type="text" id="showName" name="showName"></input><br></br><br></br>

                        <label for="season">Season:</label><br></br>
                        <input type="text" id="season" name="season"></input><br></br><br></br>

                        <label for="episode">Episode:</label><br></br>
                        <input type="text" id="episode" name="episode"></input><br></br><br></br>

                        <label for="episodeName">Episode name:</label><br></br>
                        <input type="text" id="episodeName" name="episodeName"></input><br></br><br></br>

                        <label for="airDate">Air Date:</label><br></br>
                        <input type="text" id="airDate" name="airDate"></input><br></br><br></br>

                        <label for="airTime">Air Time:</label><br></br>
                        <input type="text" id="airTime" name="airTime"></input><br></br><br></br>

                        <label for="genre">Genre:</label><br></br>
                        <input type="text" id="genre" name="genre"></input><br></br><br></br>

                        <label for="network">Network:</label><br></br>
                        <input type="text" id="network" name="network"></input><br></br><br></br>

                        <label for="description">Description:</label><br></br>
                        <input type="text" id="description" name="description"></input><br></br><br></br>

                        <label for="entry">Entry:</label><br></br>
                        <textarea id="entry" name="entry" placeholder="Your entry..."></textarea>
                        <input type="submit" value="Post"></input>
                    </form>
                </section>
            </main>
        );
    }
}