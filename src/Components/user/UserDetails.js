import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3003/users/${id}`)
      .then((res) => setUser([res.data]));
  }, []);
  console.log(user);

  return (
    <div>
      <h1 className="text-black text-center items-center text-3xl font-semibold font-Montserrat mt-10">
        User Details
      </h1>
      <div className="flex justify-center mt-10 ">
        <div className="block p-6 rounded-lg shadow-lg bg-white md:w-2/4 sm:w-full">
          {user.map((data, index) => (
            <div key={data.index}>
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-4">
                Name : {data.name}
              </h5>
              <p className="text-gray-700 text-base mb-2">
                Company : {data.company.name}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Email : {data.email}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Phone : {data.phone}
              </p>
              <p className="text-gray-700 text-base mb-2">
                Website : {data.website}
              </p>
              <p className="text-gray-700 text-base mb-2">
                City : {data.address.city}
              </p>
              <Link to={"/"} className="px-6 py-2 flex text-white bg-blue-600 rounded-lg justify-center mt-10">
                Back to Home
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
