import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import tv from "../pics/tv.png";
import film from "../pics/film.png";
import recap from "../pics/recap.png";

export class Recaps extends Component {
    static displayName = Recaps.name;



    constructor(props) {
        super(props);
        this.state = {
            recaps: []
        };
    }


    componentDidMount = () => {
        this.getRecaps();
    };


    getRecaps = () => {
        Axios.get('https://localhost:7202/api/recaps')
            .then((response) => {
                const data = response.data;
                this.setState({
                    recaps: data
                });
            })

            .catch(error => console.error(error));
    }


    displayRecaps = (recap) => {
        if (!recap || !recap.length) return null;
        return recap.map((recap) => (
            <Link key={recap.recapId} className="flex box" to={{
                pathname: "/recapSingle",
                state: recap
            }}>
                <div className="flex entry">
                    <h3>{recap.show ? recap.show.showName : recap.film.filmName} - {recap.show ? recap.show.episodeName : recap.film.year}  {recap.show ? "- S" + recap.show.season + "E" + recap.show.episode : null}</h3>
                </div>
            </Link>
        ));
    };

    render() {
        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={recap}></img>Recaps</h1>

                <section className="content boxNo">
                    <h2>Add</h2>
                    <div className="flex">
                        <Link className="flex" to="/showRecap"><img className="miniIcon" src={tv}></img>TV-show</Link>
                        <Link className="flex" to="/filmRecap"><img className="miniIcon" src={film}></img>Film</Link>
                    </div>
                </section>

                <section className="content boxNo">
                    <h2>Latest</h2>

                    {this.displayRecaps(this.state.recaps)}

                </section>
            </section>
        );
    }
}