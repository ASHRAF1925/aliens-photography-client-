import React, { useState } from "react";
import { Card,Avatar } from "flowbite-react";

const ReviewCard = ({ review }) => {
    const [rating, setRating] = useState(review.rating);
    const [hover, setHover] = useState(review.rating);

    const date=new Date(review.timeandDate);
    const time=new Date(review.timeandDate);
    
  
  return (
    <div>
      <div className="max-w-sm my-5 mx-4">
        <Card>
        <Avatar 
    img={review.userPhoto}
    size="xl"
    rounded={true}
  />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {review.userName}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{review.comment}</p>
          <div className="star-rating text-5xl ">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                  
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>

              <p>Commented on : {review.timeandDate} </p>
              
        </Card>
      </div>
    </div>
  );
};

export default ReviewCard;
