import React, { useContext, useState } from "react";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

let email;
let password;

const Login = () => {
  const [errors, setError] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log("from header", from);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.email);
    email = event.target.email.value;
    password = event.target.password.value;
    console.log(email, password);
    // signIn(email,password)
    // .then((userCredential) => {

    //   const user = userCredential.user;
    //   console.log(from);
    //   setError('');
    //   toast.success('Successfully log IN!')
    //   navigate(from,{replace:true});

    // })
    // .catch((error) => {
    //   console.log(error.code,error.message);
    //   setError(error.message);
    //   toast.error({errors})
    // });
  };

  return (
    <div className="  container">
      <h1>Please Login</h1>
      <div className="grid place-items-center ">
      <form onSubmit={handleLogin} className="  bg-gray-200 p-5 text-left">
        <div class="mb-6 m-auto">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required="true"
            name="email"
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            name="password"
            required={true}
          />
        </div>

        <div class="flex items-start mb-6">
       
          <p>Does not have any account ? <Link to="/register">Register now!</Link> </p>
        </div>
       <div className="text-center">
       <button
          type="submit"
          class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-75 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
       </div>
      </form>
      </div>

     
    </div>
  );
};

export default Login;
