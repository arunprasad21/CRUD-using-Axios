import React, { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const data = {
    name,
    email: mail,
    phone,
    website,
    company: {
      name: company,
    },
    address: {
      city,
    },
  };

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3003/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setCompany(res.data.company.name);
        setMail(res.data.email);
        setPhone(res.data.phone);
        setWebsite(res.data.website);
        setCity(res.data.address.city);
      });
  }, []);

  const updatetHandler = (e) => {
    e.preventDefault();
    console.log(data);
    axios.put(`http://localhost:3003/users/${id}`, data).then(navigate("/"));
  };

  return (
    <div className="flex flex-col justify center">
      <h1 className="text-black items-center text-center text-3xl font-semibold font-Montserrat mt-10">
        Edit User
      </h1>
      <div className="flex justify-center mt-5 ">
        <div className="block p-6 rounded-lg shadow-lg bg-white md:w-1/2 sm:w-full">
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
              onClick={updatetHandler}
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
              Edit User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
