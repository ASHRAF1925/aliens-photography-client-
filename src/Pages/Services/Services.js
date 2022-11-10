import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import {  useLoaderData, } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

import ServiceDetailsCard from '../Common_Components/ServiceDetailsCard';


const Services = () => {
    
    const[services,setService]=useState([]);
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
      fetch("https://aliens-photography-server.vercel.app/services")
      .then((res) => res.json())
    .then((data) => {setService(data)
      setLoading(false)
      if (data.length === 0) {
        console.log("nothing found");
      } else {
 
      }
    
    });
    },[])
    
    console.log(services)
    useTitle("Services")

    return (
      <div>
        {
          loading?<Spinner></Spinner>:  <div className='container mx-auto'>
          <div className="p-8 bg-amber-300 my-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
      {services.map((service) => (
        <ServiceDetailsCard key={service._id} service={service}>
        </ServiceDetailsCard>
        
      ))}
    </div>

  </div>
    </div>
        }
      </div>
      
    );
};

export default Services;