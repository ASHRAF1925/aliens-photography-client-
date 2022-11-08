import React from 'react';
import {  useLoaderData, } from 'react-router-dom';

import ServiceDetailsCard from '../Common_Components/ServiceDetailsCard';


const Services = () => {
    const services=useLoaderData();

    return (
        <div className='container mx-auto'>
              <div className="p-8 bg-amber-300 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service) => (
            <ServiceDetailsCard key={service._id} service={service}>
            </ServiceDetailsCard>
            
          ))}
        </div>
  
      </div>
        </div>
      
    );
};

export default Services;