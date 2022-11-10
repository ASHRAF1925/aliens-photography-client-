import { Spinner } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';


const PrivateRoute = ({children}) => {
  let location=useLocation();
    const {user,loading} =useContext(AuthContext);
    
    if(loading){
        return  <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }

    if(user && user.uid)
    {
        return children;
    }
    
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;