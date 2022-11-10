import React, { Component } from "react";
import Slider from "react-slick";
import ReviewCard from "../Review_cards/ReviewCard";

export default class ReviewItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    
    const {reviews}=this.props.reviews;
    console.log(reviews)

    return (
      <div>
     
        <Slider {...settings}>
         {
          reviews.map(review=><ReviewCard review={review} ></ReviewCard>)
         }
        </Slider>
      </div>
    );
  }
}