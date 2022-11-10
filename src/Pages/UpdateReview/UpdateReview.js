import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Card,Avatar,Button } from 'flowbite-react';
import { AuthContext } from '../../Contexts/UserContext';
import toast from 'react-hot-toast';

let previousrating=0;

const UpdateReview = () => {
    const review=useLoaderData();
    previousrating=review.rating;
    const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  const Singleservice = useLoaderData();
  const [reviews, setReviews] = useState();

  const [loginPressed, setloginPressed] = useState(false);

  const [reviwavialable, setReviewavailable] = useState(false);


  // useEffect(()=>{
  //   fetch(`https://aliens-photography-server.vercel.app/services/${params.id}`
  // },[])



  let location = useLocation();
  


  const [comment, setComment] = useState();
  const [userreview, setUserreview] = useState();
  const [update,setupdate]=useState(false);
  const navigate=useNavigate();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    console.log(event.target.value);
  };
    const{user}=useContext(AuthContext);



    const handleAddComment = (event) => {
        console.log("why")
        event.preventDefault();
        
        
    
        const newComment = { ...userreview };
    
        const timeAndDate = new Date();
    
        newComment["timeandDate"] = timeAndDate;
        newComment["comment"] = comment ?? 'No comment Added';
        newComment["rating"] = rating;
        newComment["servicename"] = Singleservice.name;
        newComment["serviceId"] = Singleservice._id;
        newComment["userEmail"] = user.email;
        newComment["userName"] = user.displayName ?? 'Anonymous';
        newComment["userPhoto"] = user.photoURL ??'https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg';
        newComment["servicePhoto"] = Singleservice.photo;
        setUserreview(newComment);
        setHover(0);
        setRating(0);
        
        console.log(newComment);
    
          fetch(`https://aliens-photography-server.vercel.app/myreviews/update/${Singleservice._id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body :JSON.stringify(newComment)
    
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setupdate(true);
            
            toast.success("Updated");
            navigate("/")
            
           
      
    
        })
        event.target.reset();
      };

    return (
        <div>
            <h1 className='text-5xl font-bold mt-20'>Previous Informations</h1>
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
                              className={
                                index <= ({previousrating } || { previousrating  }) ? "on" : "off"
                              }
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

                   
                    </Card>


                    <div className="bg-green-300 pt-20 pb-10">
        <h1 className="ml-10 text-left text-5xl font-bold ">Update  Review</h1>
        <hr className="my-4 w-2/4 h-1  bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700" />
        {user?.uid ? (
          // {/* if review found start */}
          <div className="bg-indigo-600 mx-auto w-2/3 p-10">
    

            <div className="border-2 border-orange-500">
              <h1 className="ml-10  text-3xl font-bold ">Update the Ratings</h1>
              {/* rating system */}
              <div className="star-rating text-5xl ">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover|| rating) ? "on" : "off"}
                      onClick={() => setRating(index)}
                      onMouseEnter={() => {
                        console.log(index);
                        setHover(index);
                      }}
                      onMouseLeave={() => {
                        console.log(rating);
                        setHover(rating);
                      }}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
              {/* rating system */}
            </div>
            <form onSubmit={handleAddComment}>
              <div className="mt-10">
                <h1 className="ml-10  text-3xl font-bold ">Update Comment</h1>
                <div className="mb-6 m-auto">
                  <textarea
                  required={true}
                    onChange={handleCommentChange}
                    name="service_description"
                    id="message"
                    rows="4"
                    className=" mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Comment Here..."
                  ></textarea>
                </div>
              </div>

              <div className=" container mx-auto w-2/5">
                {" "}
                <Button
                  type="submit"
                  className=" container mx-auto"
                  gradientMonochrome="lime"
                >
                 Update
                </Button>
              </div>
            </form>
          </div>
        ) : (
          // {/* if review found end */}
          <div className="text-center text-3xl font-bold p-10">
            {/* <h1>
              To Add Review
              <Button
                className="mx-auto mt-10"
                onClick={() => {
                  setloginPressed(true);
                }}
              >
                Log In
              </Button>
              {loginPressed && (
                <Navigate
                  to="/login"
                  state={{ from: location }}
                  replace
                ></Navigate>
              )}
            </h1> */}
          </div>
        )}
      </div>
                    

                    
        </div>
    );
};

export default UpdateReview;