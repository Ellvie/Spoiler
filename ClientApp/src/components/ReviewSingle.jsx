import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import left from "../pics/arrowLeft.png";
import star from "../pics/review.png";

export class ReviewSingle extends Component {
    static displayName = ReviewSingle.name;

    constructor(props) {
        super(props);
        this.state = {
            review: this.props.location.state,
            reviews: []
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = () => {
        this.getReviews();
    };


    getReviews = async () => {
        var response = await Axios.get('https://localhost:7202/api/reviews/',
            {
                params:
                {
                    reviewId: this.state.review.reviewId
                }
            });

        this.setState({
            reviews: response.data
        });
    }


    displayReviews = (reviews) => {
        if (!reviews || !reviews.length) return null;
        console.log(reviews)
        return reviews.map((r) => (
            <div key={r.reviewId} className="column boxNo">
                <div className="flex comment">
                    <h2 className="user">{r.user.email}</h2>
                    <p className="date">{r.added}</p>
                </div>
                <p>{r.reviewTitle}</p>
            </div>
        ));
    };

    render() {
        return (

            <section className="frame">
                <Link className="flex back" to="/Reviews"><img className="miniIcon" src={left}></img>Reviews</Link>
                <section className="boxNo">
                    <h1 className="flex"><img className="miniIcon" src={star}></img>{this.state.review.show ? this.state.review.show.showName : this.state.review.film.filmName} - {this.state.review.show ? this.state.review.show.episodeName : this.state.review.film.year}  {this.state.review.show ? "- S" + this.state.review.show.season + "E" + this.state.review.show.episode : null}</h1>

                    <div className="column boxNo">
                        <h2 className="title">{this.state.review.reviewTitle}</h2>
                        <div className="flex comment">
                            <h2 className="user">{this.state.review.user.email}</h2>
                            <p className="date">{this.state.review.added}</p>
                        </div>
                        <p className="flex"><img className="miniIcon" src={star}></img>{this.state.review.rating} / 10</p><br></br><br></br>
                        <p>{this.state.review.reviewContent}</p>
                    </div>


                    {this.displayReviews(this.state.review)}


                </section>
            </section>
        );
    }
}