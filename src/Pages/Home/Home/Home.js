import React from "react";
import { useLoaderData } from "react-router-dom";
import ItemCarousel from "../Banner/Banner";
import { Card, Button } from "flowbite-react";
import { enshort } from "../../../Utilities/Function_short";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div className="container mx-auto">
      <h1>Thios is home{services.length}</h1>
      <ItemCarousel></ItemCarousel>
      <div className="p-8 bg-amber-300 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service) => (
            <div key={service._id}>
             <Card>
                    <PhotoProvider >
      <PhotoView src={service.photo}>
        <img className="object-cover"style={{ objectFit: 'cover' }} src={service.photo} alt="" />
      </PhotoView>
    </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {enshort(service.description) + "..."}
                </p>
                <div className="text-left">
                  <h3>Rating : {service.rating}</h3>
                  <h2>Service Charge TK {service.charge}</h2>
                  <h5>Service Added on {service.timedate}</h5>
                </div>
                <div className="mx-auto">
                  <Button gradientMonochrome="info">See Details</Button>
                </div>
              </Card>
          
              

              <div></div>
            </div>
          ))}
        </div>
        <Button className=" mt-10 mx-auto p-5" gradientDuoTone="cyanToBlue">
          See More Services
        </Button>
      </div>
    </div>
  );
};

export default Home;
