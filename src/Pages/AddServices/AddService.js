import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

let charge;
let service_description;
let confirm_service_description;
let name;
let photo;

const AddService = () => {
  const [accepted, setAccepted] = useState(false);

  useTitle("ADD Services");

  const [service, setService] = useState({ rating: "4" });

  const [userInfo, setuserInfo] = useState({
    file: [],
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
    });
  };
  const submit = async () => {
    const formdata = new FormData();
    formdata.append("avatar", userInfo.file);
    axios
      .post(
        "http://localhost:5000/imageupload",
        formdata,
        {
          headers: { "content-type": "multipart/form-data" },
        }
      )
      .then((res) => {
        console.warn(res);
      });
  };

  const handleAddition = (event) => {
    event.preventDefault();

    charge = event.target.charge.value;
    service_description = event.target.service_description.value;
    // confirm_password = event.target.confirmPassword.value;
    name = event.target.name.value;
    photo = event.target.photo.value;
    console.log(charge, service_description, photo, name);
    let current = new Date();
    const newService = { ...service };
    newService["name"] = name;
    newService["charge"] = charge;
    newService["description"] = service_description;
    newService["photo"] = photo;
    newService["timedate"] = current.toLocaleString();
    setService(newService);

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    event.target.reset();

    toast.success("Successfully ADDed");
  };

  return (
    <div className="mx-auto   rounded p-3 grid place-items-center mb-20 ">
      <h1 className="text-4xl font-bold my-20">Add Your Services</h1>
      <form
        onSubmit={handleAddition}
        className=" w-2/3 p-5 text-left shadow-2xl border border-sky-500"
      >
        <div className="mb-6 m-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Service Name"
            name="name"
            required={true}
          />
        </div>
        <div className="mb-6 m-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Service Charge
          </label>
          <input
            type="text"
            id="charge"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Service Charge"
            required={true}
            name="charge"
          />
        </div>
        <div className="mb-6 m-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Service Description
          </label>
          <textarea
            name="service_description"
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Description About the service..."
          ></textarea>
        </div>

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
            name="photo"
          />
        </div>

        <div className="text-center mt-4">
          {accepted ? (
            <button
              type="button"
              className=" text-white bg-blue-300 rounded-lg focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
              disabled
            >
              ADD
            </button>
          ) : (
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ADD
            </button>
          )}
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddService;
