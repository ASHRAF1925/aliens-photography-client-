import React, { useContext } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../../../../Assets/logo.jpg'
import {  AuthContext } from "../../../../Contexts/UserContext";
import toast from 'react-hot-toast'
import { Link } from "react-router-dom";
import './Navbar.css'
const NavigationBar = () => {
    const activelink='text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 Text-gradient ';
    const normallink='text-xl'
    

    const { user, logout } = useContext(AuthContext);



    const handlelogout = () => {
      logout()
        .then(() => {
          // Sign-out successful.
          console.log("signout successful");
          toast.success('Successfully Loged out!')
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
  return (
  <div className="bg-blue-900 bg-color mx-auto">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 border-2 rounded-xl border-sky-500 p-5">
      <Navbar  fluid={false} className="  " rounded={true}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className=" h-20 "
            alt=""
          />
          <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
            Alien's Photography
          </span>
        </Navbar.Brand>
        {user?.uid ? (
                <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img={user.photoURL}
                      rounded={true}
                    />
                  }
                >
                  
                </Dropdown>
                <Navbar.Toggle />
              </div> 
              ) : (
                <Link to="/login" className="flex md:order-2">
              
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
                </Link>
              )}

           
        
        <Navbar.Collapse>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/'>Home</NavLink>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/services'>Services</NavLink>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/blogs'>Blogs</NavLink>
         {user?.uid && (
          // navigate(`/services/${service._id}`
            
                  <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/addServices'>Add Services</NavLink>
               
           
              )}

{user?.uid && (
            
           
            <NavLink className={({isActive})=>isActive ? activelink:normallink} to={`/myreviews/${user.uid}`}>My Reviews</NavLink>
     
        )}
        {user?.uid && (
            
           
            <NavLink>
           
            <button onClick={handlelogout} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign Out</button>
          </NavLink>
     
        )}
              
              
      
         
        </Navbar.Collapse>
      </Navbar>
    </div>

  </div>
  );
};

export default NavigationBar;
