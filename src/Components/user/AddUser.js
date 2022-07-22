import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"


function AddUser() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const data = {
    name,
    email : mail,
    phone,
    website,
    company: {
      name: company,
    },
    address: {
      city,
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post("http://localhost:3003/users",data)
    .then(navigate("/"));
  };

  return (
    <div className="flex flex-col justify center">
      <h1 className="text-black items-center text-center text-3xl font-semibold font-Montserrat mt-10">
        Add User
      </h1>
      <div className="flex justify-center mt-5 ">
        <div className="block p-6 rounded-lg shadow-lg bg-white w-1/2">
          <form>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Company
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Company"
              />
            </div>

            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Email address
              </label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Phone
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Phone"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                Website
              </label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Website"
              />
            </div>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">
                City
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="City"
              />
            </div>
            <button
              onClick={submitHandler}
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
