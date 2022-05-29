import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import home from "../pics/home.png";
import recap from "../pics/recap.png";
import forum from "../pics/forum.png";
import review from "../pics/review.png";
import right from "../pics/arrowRight.png";

export class Home extends Component {
    static displayName = Home.name;


    constructor(props) {
        super(props);
        this.state = {
            forum: [],
            recaps: [],
            reviews: []
        };
    }


    componentDidMount = () => {
        this.getForum();
        this.getRecaps();
        this.getReviews();
    };


    //GET Forum
    getForum = () => {
        Axios.get('https://localhost:7202/api/forum/getThree')
            .then((response) => {
                const data = response.data;
                this.setState({
                    forum: data
                });
            })

            .catch(error => console.error(error));
    }


    //DISPLAY Forum
    displayForum = (forum) => {
        if (!forum || !forum.length) return null;
        return forum.map((forum) => (
            <Link key={forum.forumId} className="flex box" to={{
                pathname: "/forumSingle",
                state: forum
            }}>
                <div className="flex entry">
                    <h3>{forum.show ? forum.show.showName : forum.film.filmName} - {forum.show ? forum.show.episodeName : forum.film.year}  {forum.show ? "- S" + forum.show.season + "E" + forum.show.episode : null}</h3>
                </div>
            </Link>
        ));
    };


    //GET Recaps
    getRecaps = () => {
        Axios.get('https://localhost:7202/api/recaps/getThree')
            .then((response) => {
                const data = response.data;
                this.setState({
                    recaps: data
                });
            })

            .catch(error => console.error(error));
    }


    //DISPLAY Recaps
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


    //GET Reviews
    getReviews = () => {
        Axios.get('https://localhost:7202/api/reviews/getThree')
            .then((response) => {
                const data = response.data;
                this.setState({
                    reviews: data
                });
            })

            .catch(error => console.error(error));
    }

    //DISPLAY Reviews
    displayReviews = (reviews) => {
        if (!reviews || !reviews.length) return null;
        return reviews.map((reviews) => (
            <Link key={reviews.recapId} className="flex box" to={{
                pathname: "/reviewSingle",
                state: reviews
            }}>
                <div className="flex entry">
                    <h3>{reviews.show ? reviews.show.showName : reviews.film.filmName} - {reviews.show ? reviews.show.episodeName : reviews.film.year}  {reviews.show ? "- S" + reviews.show.season + "E" + reviews.show.episode : null}</h3>
                </div>
            </Link>
        ));
    };



    render() {
        return (
            <section>
                <h1 className="flex"><img className="miniIcon" src={home}></img>Recent</h1>

                <section className="">

                    <section className="content box">
                        <h2 className="flex"><img className="miniIcon" src={forum}></img>Forum discussions</h2>

                        {this.displayForum(this.state.forum)}

                        <Link className="flex end" to="/Forum">More <img className="miniIcon" src={right}></img></Link>
                    </section>

                    <section className="content box">
                        <h2 className="flex"><img className="miniIcon" src={recap}></img>Recaps</h2>

                        {this.displayRecaps(this.state.recaps)}

                        <Link className="flex end" to="/Recaps">More <img className="miniIcon" src={right}></img></Link>
                    </section>

                    <section className="content box">
                        <h2 className="flex"><img className="miniIcon" src={review}></img>Reviews</h2>

                        {this.displayReviews(this.state.reviews)}

                        <Link className="flex end" to="/Reviews">More <img className="miniIcon" src={right}></img></Link>
                    </section>
                </section>
            </section>
        );
    }

}