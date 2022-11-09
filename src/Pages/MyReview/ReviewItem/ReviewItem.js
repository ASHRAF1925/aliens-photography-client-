import React, { useState } from "react";
import { Card,Avatar } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";

const ReviewItem = ( {review} ) => {
    const [rating, setRating] = useState(review.rating);
    const [hover, setHover] = useState(review.rating);
    console.log(review)


    const date=new Date(review.timeandDate);
    const time=new Date(review.timeandDate);


    const handleDelete=()=>{
        const agree=window.confirm("Are you Want To delete ?")
        console.log(review._id)
        if(agree){
            fetch(`http://localhost:5000/reviews/${review._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{console.log(data)
            
            if(data.deletedCount>0){
                toast.success("Review Deleted Successfully!");
            }
            
            });
            
        }
    }


    

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
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {review.servicename}
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

              <p>Commented on : {date.toLocaleDateString()}{time.toTimeString()} </p>

              <div className="flex justify-between">
              <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Review</button>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit Review</button>
      
              </div>


              
        </Card>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>

    </div>
  );
};

export default ReviewItem;
