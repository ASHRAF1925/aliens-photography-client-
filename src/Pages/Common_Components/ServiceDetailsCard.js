import React from 'react';


import { Card, Button } from "flowbite-react";
import  {enshort}  from '../../Utilities/Function_short';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useNavigate } from 'react-router-dom';


const ServiceDetailsCard = ({service}) => {
    const navigate=useNavigate();
    return (
        <div>
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
                  <Button onClick={()=>navigate(`/services/${service._id}`)}  gradientMonochrome="info">See Details</Button>
                </div>
              </Card>
        </div>
    );
};

export default ServiceDetailsCard;