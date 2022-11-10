import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { Card, Button, Spinner } from "flowbite-react";


import 'react-photo-view/dist/react-photo-view.css';
import ServiceDetailsCard from "../../Common_Components/ServiceDetailsCard";
import Banner from "../Banner/Banner";
import './Home.css'
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SomeWorks from "../SomeWorks/SomeWorks";
import useTitle from "../../../hooks/useTitle";


const Home = () => {
  const[services,setService]=useState([]);

  const [loading,setLoading]=useState(true);


  const navigate=useNavigate();
  useTitle("Home");
  useEffect(()=>{
    fetch("https://aliens-photography-server.vercel.app/home/services")
    .then((res) => res.json())
    .then((data) => {setService(data)

      setLoading(false);
      if (data.length === 0) {
        console.log("nothing found");
      } else {
 
      }
    
    });
  },[])
  
  console.log(services);

  return (
    <div>
      {loading?<Spinner></Spinner>:<div className="container mx-auto Home">
   <Banner ></Banner>
     
   
      <div className="p-8 bg-amber-300 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service) => (
            <ServiceDetailsCard key={service._id} service={service}>
            </ServiceDetailsCard>
            
          ))}
        </div>
        <Button onClick={()=>{navigate('/services')}} className=" mt-10 mx-auto p-5" gradientDuoTone="cyanToBlue">
          See More Services
        </Button>
      </div>
      <PersonalInfo></PersonalInfo>
      <SomeWorks></SomeWorks>
    </div>}
    </div>
   
  );
};

export default Home;
