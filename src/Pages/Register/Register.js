import React, { useState } from "react";
import { useContext } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import axios from "axios";
import { async } from "@firebase/util";
import useTitle from "../../hooks/useTitle";

let email;
let password;
let confirm_password;
let name;
let photo;

const Register = () => {
  const { createUseremail, signingoogle, signingitpop, updateuserInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();
  photo = "url";

  const [password_error, setpassword_error] = useState("");
  const [login_error, setLogin_error] = useState("");
  const [success, setSuccess] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const [userInfo, setUserInfo] = useState({ file: [] });

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      file: event.target.files[0],
    });
  };

  useTitle("Register")
  // const uploadImage=async()=>{
  //   const formdata=new FormData();
  //   formdata.append('avatar',userInfo.file);
  //   // axios.post("http",formdata,{
  //   //   headers:{"content-Type":"multipart/form-data"}
  //   // })
  //   // .then(res =>{
  //   //   console.warn(res);

  //   // })

  // }
  const uploadImage = () => {
    console.log("work");
  };

  const handleRegister = (event) => {
    event.preventDefault();

    setSuccess(false);
    email = event.target.email.value;
    password = event.target.password.value;
    confirm_password = event.target.confirmPassword.value;
    name = event.target.name.value;
    console.log(email, password, confirm_password, name);
    photo=event.target.img.value;
    //Aasdf1!

    if (!/(?=.*[A-Z])/.test(password)) {
      setpassword_error("Please Provide at least one UpperCase letter");
      // toast.error({ password_error });
      // // navigate("/register");
    }
    if (password.length < 6) {
      setpassword_error("Password length should be more than 6");
      // toast.error({ password_error });
      // navigate("/register");
    }
    if (!/(?=.*[!@#$*])/.test(password)) {
      setpassword_error("SPEcial charecter missing");
      // toast.error({ password_error });
      // navigate("/register");
    }
    if (confirm_password !== password) {
      setpassword_error("Password Doesnot match");
      // toast.error({ password_error });
      // navigate("/register");
    }
    setpassword_error("");

    createUseremail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("working");
        setLogin_error("");
        setSuccess(true);
        console.log("name", name);
        console.log("url", photo);
        handleupdateProfile(name, photo);
        event.target.reset();
        // toast.success("Successfully Registered and Loged in !");
        navigate("/");

        setSuccess(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
        setLogin_error(error.message);
        setpassword_error(errorMessage);
        // toast.error({ login_error });
        // navigate("/register");
        // ..
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
    console.log(event.target.checked);
  };
  const handleupdateProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    console.log("find in", profile.displayName);
    updateuserInfo(profile)
      .then(() => {
        console.log("updated");
      })
      .catch((error) => {
        console.log("update error", error);
      });
  };

  return (
    <div className="mx-auto w-full  rounded p-3 grid place-items-center ">
      <h1 className="text-2xl font-bold m-4">Please Register</h1>
      <form
        onSubmit={handleRegister}
        className="   p-5 text-left w-3/4 shadow-2xl border border-sky-500"
      >
        <div className="mb-6 m-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Name"
            name="name"
          />
        </div>
        <div className="mb-6 m-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            name="password"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" confirm Password"
            name="confirmPassword"
            required={true}
          />
        </div>
        {/* <div className="formdesign">
          <div className="form-row">
            <label>Select Profile Picture</label>
            <input
              type="file"
              className="form-control"
              name="upload_file"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <button
              onClick={uploadImage}
              className="btn bg-blue-700 p-1 mb-2 mt-2 rounded-xl"
            >
              Upload
            </button>
          </div>
          
        </div> */}
        <div className="mb-6 m-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Image URL
            </label>
            <input
              type="text"
              id="img_url"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Imageurl"
              required={true}
              name="img"
            />
          </div>
        <div className="flex items-center mb-4">
          <input
            onClick={handleAccepted}
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Accept Terms and Conditions
          </label>
        </div>
        {success && <p> User created Successfully </p>}
        <div className="text-center">
          {accepted ? (
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          ) : (
            <button
              type="button"
              className=" text-white bg-blue-300 rounded-lg focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
              disabled
            >
              Register
            </button>
          )}
        </div>
      </form>
      
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Register;
