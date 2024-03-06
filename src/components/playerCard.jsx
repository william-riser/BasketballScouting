import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const PlayerCard = () => {
    const [searchParams] = useSearchParams(); // Get search parameters
    const searchTerm = searchParams.get("id");

    const [playerData, setPlayerData] = useState([]); // Initialize playerData state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerID = parseInt(searchTerm);
                const result = await axios.get(`http://localhost:3001/players/${playerID}`);
                setPlayerData(result.data.data[0]); 
                console.log("API Response:", result.data.data); // Log API response
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    function convertHeight(heightInInches) {
        const feet = Math.floor(heightInInches / 12);
        const inches = heightInInches % 12; 
        return `${feet}' ${inches}"`;
    }
    
    

  return (
    <div className='container mx-auto p-6'>
            <a href="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block m-3'>Home</a>

            <div className='player-profile flex items-center gap-6 mt-6'> {/* Main profile container */}

                <div className='player-info'>
                    <h1 className='text-2xl font-bold mb-2'>{playerData.name}</h1>
                    <div className='player-stats grid grid-cols-2 gap-4'>
                        <p><span className='font-semibold'>Age:</span> {playerData.age}</p>
                        <p><span className='font-semibold'>Height:</span> {convertHeight(playerData.height)}</p>
                        <p><span className='font-semibold'>Position:</span> {playerData.position}</p> 
                        {/* Add more stats as needed */}
                    </div>
                </div> 
            </div>
        </div>
  );
};

export default PlayerCard;
