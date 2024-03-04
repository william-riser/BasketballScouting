import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import for navigation



const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = async () => {
      const fetchData = async () => {
          try {
              const result = await axios.get('http://localhost:3001/data');
              console.log("API Response:", result.data.data); // Log API response
              setSearchTerm(result.data.data); 
              navigate(`/searchResults?q=${searchTerm}`); 
          } catch (error) {
              console.error(error);
          }
      };
      fetchData();
  };



  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Basketball Scouting</h1>

      <div className="bg-white rounded-lg shadow-md p-6 w-96">
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-blue-400" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className="bg-blue-600 px-6 py-2 text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
            onClick={handleSearch}
          >
             Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
