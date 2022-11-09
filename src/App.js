import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/PublicRoutes/Routes';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
   <RouterProvider router={routes}></RouterProvider>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>


    </div>
  );
}

export default App;
