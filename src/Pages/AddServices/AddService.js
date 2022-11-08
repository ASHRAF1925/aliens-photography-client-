import React, { useState } from 'react';







let email;
let password;
let confirm_password;
let name;
let photo;

const AddService = () => {
    const [accepted, setAccepted] = useState(false);


    const handleRegister = (event) => {
        event.preventDefault();
    
        email = event.target.email.value;
        password = event.target.password.value;
        confirm_password = event.target.confirmPassword.value;
        name = event.target.name.value;
        console.log(email, password, confirm_password, name);
   
      };
    
    return (
        <div className="mx-auto w-50  rounded p-3 grid place-items-center ">
        <h1>Add Your Services</h1>
        <form
          onSubmit={handleRegister}
          className="   p-5 text-left shadow-2xl border border-sky-500"
        >
          <div className="mb-6 m-auto">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Service Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Service Charge"
              required={true}
              name="email"
            />
          </div>
          <div className="mb-6 m-auto">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Service Description
            </label>
          <textarea name="service_description" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description About the service..."></textarea>
          </div>


          

          
          <div className="formdesign">
            <div className="form-row">
              <label>Select Cover Photo</label>
              <input
                type="file"
                className="form-control ml-2"
                name="upload_file"
                // onChange={handleInputChange}
              />
            </div>
            <div className="form-row ">
              <button
                // onClick={uploadImage}
                className="btn bg-blue-700 p-1 mb-2 mt-2 rounded-xl"
              >
                Upload
              </button>
            </div>
          </div>
   
          <div className="text-center">
            {accepted ? (
              <button
                type="submit"
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-75 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ADD
              </button>
            ) : (
              <button
                type="button"
                className=" text-white bg-blue-300 rounded-lg focus:outline-none font-medium rounded-lg text-sm w-75 sm:w-auto px-5 py-2.5"
                disabled
              >
                ADD
              </button>
            )}
          </div>
        </form>
      </div>
    );
};

export default AddService;