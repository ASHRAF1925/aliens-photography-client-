import React, { useContext } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../../../../Assets/logo.jpg'
import {  AuthContext } from "../../../../Contexts/UserContext";
import toast from 'react-hot-toast'
import { Link } from "react-router-dom";
const NavigationBar = () => {
    const activelink='text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 Text-gradient';
    const normallink=''
    

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
    <div>
      <Navbar className="bg-blue-500 mx-auto " rounded={true}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className=" h-20 "
            alt=""
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
                      img={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
              </div> 
              ) : (
                <Link to="/login" className="flex md:order-2">
                  <button className="btn btn-primary">Login</button>
                </Link>
              )}

           
        
        <Navbar.Collapse>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/'>Home</NavLink>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/services'>Services</NavLink>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/blogs'>Blogs</NavLink>
         {user?.uid && (
            
                  <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/addServices'>Add Services</NavLink>
               
           
              )}

{user?.uid && (
            
           
            <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/myreviews'>My Reviews</NavLink>
     
        )}
        {user?.uid && (
            
           
            <NavLink>
            <button onClick={handlelogout}>Sign Out</button>
          </NavLink>
     
        )}
              
              
      
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
