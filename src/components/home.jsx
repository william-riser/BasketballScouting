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
              navigate(`/searchResults?name=${searchTerm}`); 
          } catch (error) {
              console.error(error);
          }
      };
      fetchData();
  };



  return (
            <div className="min-h-screen flex flex-col items-center inset-0 justify-center bg-gray-100 relative" style={{ backgroundImage: "url(/public/bg.jpg)" }}>

                <div className="absolute inset-0 bg-gray-800 opacity-50"></div> 

                <h1 className="text-5xl font-bold text-white mb-8 z-10" >Basketball Scouting</h1>

                <div className="bg-white rounded-lg shadow-md p-6 w-96 z-10">
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder="Player Name..." 
                            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-blue-400" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button 
                            className="bg-orange-600 px-6 py-2 text-white rounded-r-md hover:bg-orange-700 focus:outline-none"
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
   