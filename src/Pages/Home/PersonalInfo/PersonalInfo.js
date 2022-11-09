import React from 'react';
import img1 from '../../../Assets/per.png'

const PersonalInfo = () => {
    return (
        <div className='my-20'>
         <div className="flex  items-center justify-between">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full p-20 ">
              <h1 className="font-bold text-2xl mt-20 text-green-100 ">Hi I am Alein.</h1>
              <p className="mt-1 text-xl text-yellow-100 ">I have experiencs of 20 Years in Photography and Digital Art.I try to give my best Effort to Serve the Client.Take My service to Kepp your Memory  </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full">
              <img className='w-full' src={img1} alt="" />
            </div>
          </div>
        </div>
    );
};

export default PersonalInfo;