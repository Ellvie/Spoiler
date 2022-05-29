import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import tv from "../pics/tv.png";
import film from "../pics/film.png";
import review from "../pics/review.png";

export class Reviews extends Component {
    static displayName = Reviews.name;

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }


    componentDidMount = () => {
        this.getReviews();
    };


    getReviews = () => {
        Axios.get('https://localhost:7202/api/reviews')
            .then((response) => {
                const data = response.data;
                this.setState({
                    reviews: data
                });
            })

            .catch(error => console.error(error));
    }


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
                <h1 className="flex"><img className="miniIcon" src={review}></img>Reviews</h1>

                <section className="content">
                    <h2>Add</h2>
                    <div className="flex">
                        <Link className="flex" to="/showReview"><img className="miniIcon" src={tv}></img>TV-show</Link>
                        <Link className="flex" to="/filmReview"><img className="miniIcon" src={film}></img>Film</Link>
                    </div>
                </section>

                <section className="content">
                    <h2>Latest</h2>

                    {this.displayReviews(this.state.reviews)}

                </section>
            </section>
        );
    }
}