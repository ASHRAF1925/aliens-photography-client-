import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ItemCarousel from "../Banner/Banner";
import { Card, Button } from "flowbite-react";


import 'react-photo-view/dist/react-photo-view.css';
import ServiceDetailsCard from "../../Common_Components/ServiceDetailsCard";

const Home = () => {
  const services = useLoaderData();
  const navigate=useNavigate();
  
  console.log(services);

  return (
    <div className="container mx-auto">
      <h1>Thios is home{services.length}</h1>
      <ItemCarousel></ItemCarousel>
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
    </div>
  );
};

export default Home;
