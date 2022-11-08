import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddService from "../../Pages/AddServices/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";



export const routes =createBrowserRouter([
    {
        path:"/",
        
        element:<Main></Main>,
        children:[
            {
                path:"/",
                loader:()=>fetch("http://localhost:5000/home/services"),
                element:<Home></Home>
            },
            {
                path:'/services',
                loader:()=>fetch("http://localhost:5000/services"),
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addServices',
                element:<AddService></AddService>
            }
        ]
    }
]);