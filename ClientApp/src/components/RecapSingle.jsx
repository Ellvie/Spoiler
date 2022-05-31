import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";
import recap from "../pics/recap.png";

export class RecapSingle extends Component {
    static displayName = RecapSingle.name;



    constructor(props) {
        super(props);
        this.state = {
            recap: this.props.location.state,
            recaps: []
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        this.getRecaps();
    };


    getRecaps = async () => {
        var response = await Axios.get('https://localhost:7202/api/recaps/',
            {
                params:
                {
                    recapId: this.state.recap.recapId
                }
            });

        this.setState({
            recaps: response.data
        });
    }


    displayRecaps = (recaps) => {
        if (!recaps || !recaps.length) return null;
        console.log(recaps)
        return recaps.map((r) => (
            <div key={r.recapId} className="column boxNo">
                <div className="flex comment">
                    {/*<img className="miniPic" src="" alt="User picture"></img>*/}
                    <h2 className="user">{r.user.email}</h2>
                    <p className="date">{r.added}</p>
                </div>
                <p>{r.recapTitle}</p>
            </div>
        ));
    };

    render() {
        return (

            <section className="frame">
                <Link className="flex back" to="/Recaps"><img className="miniIcon" src={left}></img>Recaps</Link>
                <section className="boxNo">
                    <h1 className="flex"><img className="miniIcon" src={recap}></img>{this.state.recap.show ? this.state.recap.show.showName : this.state.recap.film.filmName} - {this.state.recap.show ? this.state.recap.show.episodeName : this.state.recap.film.year}  {this.state.recap.show ? "- S" + this.state.recap.show.season + "E" + this.state.recap.show.episode : null}</h1>

                    <div className="column boxNo">
                        <h2 className="title">{this.state.recap.recapTitle}</h2>
                        <div className="flex comment">
                            <h2 className="user">{this.state.recap.user.email}</h2>
                            <p className="date">{this.state.recap.added}</p>
                        </div>
                        <p>{this.state.recap.recapContent}</p>
                    </div>


                    {this.displayRecaps(this.state.recap)}


                </section>
            </section>
        );
    }
}