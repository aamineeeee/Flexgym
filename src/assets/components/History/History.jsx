import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link depuis react-router-dom

// Données simulées des utilisateurs
const users = [
  { cart: 'Product 1 +Product 2', total: ' 659 DH ', date: '20/06/2024', localisation: 'Avenue Atlas، Imm 4, Appt 9 Agdal, Rabat 10080', },
 
];

function History() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="top-0 left-0 bg-white p-20 rounded">
        <ul className="flex flex-col bg-white rounded mt-14 mr-6 p-10 shadow-lg hover:bg-orange-500 transition-colors duration-300 ease-in-out">
          <li className="mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a9 9 0 00-9 9v3h18v-3a9 9 0 00-9-9z" />
            </svg>
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
        <div className="bg-white p-5 shadow-md mt-80 rounded ml-3 mr-3" style={{ marginTop: '100px' }}> {/* Ajout de la marge de 100 pixels */}
          {/* Table */}
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Cart
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total price
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date of order
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Shipping location
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {user.cart}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {user.total}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {user.date}
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    {user.localisation}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
