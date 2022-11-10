import React from 'react';
import { Link } from 'react-router-dom';
import './404Page.css'
import { Button } from 'flowbite-react';

const ErrorPage = () => {
    return (
        <div className='m-5 p-5 d-flex'>
            <img src="https://iili.io/bJ2Wgt.md.webp%22%20alt=%22bJ2Wgt.md.webp" alt="" />
           <div className='ms-5 my-auto p-5'>
           <h1 className='my-auto p-5'>You are in Worng Path!</h1>
           <Link to={'/'} className='ms-5  text-center'><Button className='my-auto p-5' variant="warning" size="lg">
          Go to Home
        </Button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;