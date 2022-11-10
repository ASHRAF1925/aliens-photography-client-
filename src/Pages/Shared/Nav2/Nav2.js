import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/UserContext";
import logo from "../../../Assets/logo.jpg";
import { Avatar } from "flowbite-react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const activelink =
    "text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 Text-gradient ";
  const normallink = "text-xl my-3";

  const { user, logout } = useContext(AuthContext);

  const handlelogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        console.log("signout successful");
        toast.success("Successfully Loged out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center lg:flex md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
           <div className="flex items-center justify-between ">
           <NavLink className="flex" to="/">
              <img src={logo} className=" h-20 mr-3 " alt="" />
              <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
                Alien's Photography
              </span>
            </NavLink>
            {user?.uid ? (
              <div className="ml-5">
                <Avatar
                  alt="User settings"
                  img={user.photoURL}
                  rounded={true}
                />
                <p>{user.displayName}</p>
              </div>
            ) : (
              <Link to="/login" className="ml-5 mt-5">
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-auto mb-2">
                  Login
                </button>
              </Link>
            )}
           </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8  md:space-x-10 md:space-y-0">
             
              
              <NavLink
                  className={({ isActive }) =>
                    isActive ? activelink : normallink
                  }
                  to="/"
                >
                  Home
                </NavLink>
          
             <NavLink
                className={({ isActive }) =>
                  isActive ? activelink : normallink
                }
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activelink : normallink
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
           
              {user?.uid && (
                // navigate(`/services/${service._id}`

                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelink : normallink
                  }
                  to="/addServices"
                >
                  Add Services
                </NavLink>
              )}
              

            {user?.uid && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activelink : normallink
                  }
                  to={`/myreviews/${user.uid}`}
                >
                  My Reviews
                </NavLink>
              )}
           {user?.uid && (
                <NavLink>
                  <button
                    onClick={handlelogout}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Sign Out
                  </button>
                </NavLink>
              )}
            
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
