import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'; // Assurez-vous d'installer heroicons si ce n'est pas déjà fait
import './Profile.css';

function Profile() {
  const [profile, setProfile] = useState({
    Email:"Sahan.lakhshita@gmail.com",
    firstName: "Sahan",
    lastName: "lakhshita",
    addressLine1: "414/H4",
    addressLine2: "Jaya Place",
    province: "Western",
    city: "Colombo",
    postalCode: "10320",
    gender: "Male",
    password: "Sahan1234"
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="top-0 left-0 bg-white p-20 rounded">
        <ul className="flex flex-col bg-white rounded mt-14 mr-6 p-10 shadow-lg hover:bg-orange-500 transition-colors duration-300 ease-in-out">
          <li className="mb-2 flex items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900">Profile</a>
          </li>
          <li className="mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <Link to="/History" className="text-gray-700 hover:text-gray-900">History</Link> {/* Utilisation de Link pour rediriger vers "/History" */}
          </li>
          <li className="mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 3v4.046a3 3 0 0 0-4.277 4.204H1.5v-6A2.25 2.25 0 0 1 3.75 3h7.5ZM12.75 3v4.011a3 3 0 0 1 4.239 4.239H22.5v-6A2.25 2.25 0 0 0 20.25 3h-7.5ZM22.5 12.75h-8.983a4.125 4.125 0 0 0 4.108 3.75.75.75 0 0 1 0 1.5 5.623 5.623 0 0 1-4.875-2.817V21h7.5a2.25 2.25 0 0 0 2.25-2.25v-6ZM11.25 21v-5.817A5.623 5.623 0 0 1 6.375 18a.75.75 0 0 1 0-1.5 4.126 4.126 0 0 0 4.108-3.75H1.5v6A2.25 2.25 0 0 0 3.75 21h7.5Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.085 10.354c.03.297.038.575.036.805a7.484 7.484 0 0 1-.805-.036c-.833-.084-1.677-.325-2.195-.843a1.5 1.5 0 0 1 2.122-2.12c.517.517.759 1.36.842 2.194ZM12.877 10.354c-.03.297-.038.575-.036.805.23.002.508-.006.805-.036.833-.084 1.677-.325 2.195-.843A1.5 1.5 0 0 0 13.72 8.16c-.518.518-.76 1.362-.843 2.194Z" />
            </svg>
            <Link to="/Abonnements" className="text-gray-700 hover:text-gray-900">Subscriptions</Link> {/* Utilisation de Link pour rediriger vers "/Abonnements" */}
          </li>
          <li className="mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            <a href="#" className="text-gray-700 hover:text-gray-900">Sign out</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100">
        <div className="bg-white p-5 shadow-md rounded" style={{ marginTop: '100px' }}>
          <div style={{ maxWidth: '700px', margin: 'auto' }}>
            <h1 className="text-xl font-bold mb-4 text-center">Informations personnelles</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {/* Email field removed */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                  Email
                </label>
                <input type="text" name="Email" id="Email" value={profile.Email} onChange={handleChange}
                       className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input type="text" name="firstName" id="firstName" value={profile.firstName} onChange={handleChange}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input type="text" name="lastName" id="lastName" value={profile.lastName} onChange={handleChange}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} name="password" id="password" value={profile.password} onChange={handleChange}
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                  <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-700" /> : <EyeIcon className="h-5 w-5 text-gray-700" />}
                  </button>
                </div>
              </div>
              {/* Other fields remain unchanged */}
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Update My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
