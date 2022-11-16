import React, { Component } from "react";
import Slider from "react-slick";
import useWindowDimensions from "../../../hooks/useWindow";
import ReviewCard from "../Review_cards/ReviewCard";


const ReviewItem = ({reviews}) => {
    

    const windowsize=useWindowDimensions();


    let slidenumber=3;

    var w = windowsize.width;
    if(w<480)
    {
      slidenumber=1;
    }
    else if(w>480 && w<900)
    {
      slidenumber=2;
    }
    else if(w>900)
    {
      slidenumber=3
    }
    



    console.log(w,slidenumber)
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: slidenumber,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
        <div>
     
        <Slider {...settings}>
         {
          reviews.map(review=><ReviewCard review={review} ></ReviewCard>)
         }
        </Slider>
      </div>
    );
};

export default ReviewItem;