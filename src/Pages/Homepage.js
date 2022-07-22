import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Homepage() {
  const [users, setUsers] = useState([]);

  const loadUser= async() => {
    await axios.get("http://localhost:3003/users").then((res) => setUsers(res.data));
  }

  useEffect(() => {
    loadUser();
  }, [users]);

  const DeleteHandler=(id)=>{
    axios.delete(`http://localhost:3003/users/${id}`)
    .then(
     loadUser() 
    )
  }


  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="flex flex-col">
        <h1 className="text-black text-center items-center text-3xl font-semibold font-Montserrat">
          Homepage
        </h1>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-black">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-left text-white px-6 py-4"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-left text-white px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-left text-white px-6 py-4"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-left text-white px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium  text-white px-6 py-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((datas, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {datas.id}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {datas.name}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {datas.phone}
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {datas.email}
                      </td>
                      <td className="flex justify-center items-center space-x-4  py-3">
                        <Link to={`/users/${datas.id}`} className="px-6 py-2 text-white bg-black rounded-lg">
                          View
                        </Link>
                        <Link to={`/editUser/${datas.id}`} className="px-6 py-2 text-white bg-blue-600 rounded-lg">
                          Edit
                        </Link>
                        <button onClick={()=>DeleteHandler(datas.id)} className="px-6 py-2 text-white bg-red-600 rounded-lg">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
