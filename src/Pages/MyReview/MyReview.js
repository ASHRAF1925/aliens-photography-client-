import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";
import ReviewItem from "./ReviewItem/ReviewItem";
import { Card, Avatar } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";

let rating=0;
let hover=0;

const MyReview = () => {
  const { user, logout } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/services/user/review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  console.log(reviews[0]);

  const handleDelete = (review) => {
    const agree = window.confirm("Are you Want To delete ?");
    console.log(review._id);
    if (agree) {
      fetch(`http://localhost:5000/reviews/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            toast.success("Review Deleted Successfully!");
            const remaingReviews=reviews.filter(rev=>rev._id!==review._id);
            setReviews(remaingReviews)
          }
        });
    }
  };

  return (
    <div>
      <div className="bg-blue-600 pt-20 pb-10">
        <p className="text-4xl  mr-4 font-bold"></p>
        <hr className="my-4 w-2/4 h-1 mx-auto bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {reviews.map(
          (review) =>{

            rating=review.rating;
            hover=review.rating;

            return (
                <div key={review._id}>
                  <div className="max-w-sm my-5 mx-4">
                    <Card>
                      <Avatar img={review.userPhoto} size="xl" rounded={true} />
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {review.userName}
                      </h5>
    
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {review.servicename}
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {review.comment}
                      </p>
                      <div className="star-rating text-5xl ">
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (
                            <button
                              type="button"
                              key={index}
                              className={index <= (hover || {rating}) ? "on" : "off"}
                            >
                              <span className="star">&#9733;</span>
                            </button>
                          );
                        })}
                      </div>
    
                      <p>
                        Commented on :{" "}
                        {new Date(review.timeandDate).toLocaleDateString()}
                        {new Date(review.timeandDate).toTimeString()}{" "}
                      </p>
    
                      <div className="flex justify-between">
                        <button
                          onClick={() => handleDelete(review)}
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Delete Review
                        </button>
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Edit Review
                        </button>
                      </div>
                    </Card>
                  </div>
                  <Toaster position="top-center" reverseOrder={false} />
                </div>
              )
          }
          //    <ReviewItem key={review._id} review={review}></ReviewItem>
        )}
      </div>
    </div>
  );
};

export default MyReview;
