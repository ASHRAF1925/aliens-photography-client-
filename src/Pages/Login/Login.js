import React, { useContext, useState } from "react";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { json, Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/UserContext";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import useTitle from "../../hooks/useTitle";

let email;
let password;

const Login = () => {
  const [errors, setError] = useState("");

  useTitle("Login");

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const { signingoogle, signingitpop } = useContext(AuthContext);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log("from header", from);

  const handlegooglesignin = () => {
    signingoogle()
      .then((result) => {
        const user = result.user;
        console.log("from google", user);
       


        const newcurrentUser = {
          email: user.email,
        };
        console.log(newcurrentUser);

        //get jwt token

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newcurrentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });

        toast.success("Successfully log IN!");
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError(error.message);
        toast.error({ errors });
      });
  };

  const handlegitsignin = () => {
    signingitpop()
      .then((result) => {
        const user = result.user;
        console.log("from git", user);
        setError("");
        toast.success("Successfully log IN!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError(error.message);
        toast.error({ errors });
      });
  };

  // function for handling form email password login
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.email);
    email = event.target.email.value;
    password = event.target.password.value;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("new user", user);
        const newcurrentUser = {
          email: user.email,
        };
        console.log(newcurrentUser);

        //get jwt token

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newcurrentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
          });
        setError("");
        toast.success("Successfully log IN!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError(error.message);
        toast.error({ errors });
      });
  };

  return (
    <div className="  container">
      <h1>Please Login</h1>
      <div className="grid place-items-center  ">
        <form
          onSubmit={handleLogin}
          className=" border border-sky-500  p-5 text-left shadow-2xl"
        >
          <div className="mb-6 m-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email"
              required={true}
              name="email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              name="password"
              required={true}
            />
          </div>

          <div className="flex items-start mb-6">
            <p>
              Does not have any account ?{" "}
              <Link to="/register">
                <span className="bg-blue-200 p-2">Register now!</span>
              </Link>{" "}
            </p>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-75 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex mt-5">
          <Button
            className="mx-5"
            onClick={handlegooglesignin}
            variant="primary"
            size="lg"
          >
            <FcGoogle className="me-2"></FcGoogle>Continue With Google
          </Button>
          <Button onClick={handlegitsignin} variant="primary" size="lg">
            <BsGithub></BsGithub> Continue With GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
