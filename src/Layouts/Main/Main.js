import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../Pages/Shared/Header/Header/Header';
import Foter from '../../Pages/Shared/Footer/Footer'

const Main = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           <Foter></Foter>
            
        </div>
    );
};

export default Main;