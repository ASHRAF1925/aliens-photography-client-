import React from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import logo from '../../../../Assets/logo.jpg'

const NavigationBar = () => {
    const activelink='bg-blue-100 text-black';
    const normallink=''
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
        <Navbar.Collapse>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/'>Home</NavLink>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/services'>Services</NavLink>
         <NavLink className={({isActive})=>isActive ? activelink:normallink} to='/blogs'>Blogs</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
