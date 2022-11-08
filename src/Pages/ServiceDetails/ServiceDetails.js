import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const Singleservice = useLoaderData();
    console.log(Singleservice);
    return (
        <div>
            <h1>Service Details page of {Singleservice.name}</h1>
        </div>
    );
};

export default ServiceDetails;