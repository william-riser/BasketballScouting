import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams(); // Get search parameters
    const searchTerm = searchParams.get("name");

    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3001/players?name=${searchTerm}`);
                setPlayerData(result.data.data); 
                console.log("API Response:", result.data.data); // Log API response
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="container mx-auto p-6"> {/* Main container */}
            <a href="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block m-3'>Home</a>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Search Results</h1>
            <p className="mb-4 px-2 bg-gray-100 rounded-md">Count: {playerData.length}</p>

            <ul className="list-none p-0"> {/* Remove default list style */}
                {playerData.map((player) => (
                    <li key={player.id} className="mb-4 bg-white shadow-md rounded-lg p-4">
                        <div className="flex items-center"> {/* Player info */}
                            <strong className="font-semibold text-lg mr-4">Name:</strong> 
                            <span>{player.name}</span>
                        </div>
                        <div className="flex items-center mt-2"> {/* Age */}
                            <strong className="font-semibold text-lg mr-4">Age:</strong> 
                            <span>{player.age}</span> 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}
    
export default SearchResultsPage;
      