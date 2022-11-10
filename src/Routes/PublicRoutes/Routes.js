import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import ErrorPage from "../../Pages/404/404Page";
import AddService from "../../Pages/AddServices/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivareRoute/PrivateRoute";



export const routes =createBrowserRouter([
    {
        path:"/",
        
        element:<Main></Main>,
        children:[
            {
                path:"/",
           
                element:<Home></Home>
            },
            {
                path:'/services',
              
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://aliens-photography-server-ashraf1925.vercel.app/services/${params.id}`)
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
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/myreviews/:id',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
             
            },
            {
                path:'/myreviews/update/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=>fetch(`https://aliens-photography-server-ashraf1925.vercel.app/myreviews/update/${params.id}`)
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
              },
              
        ]
    }
]);