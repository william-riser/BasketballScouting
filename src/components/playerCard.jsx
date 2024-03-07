import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PlayerCard = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("id");
    const navigate = useNavigate();

    const [playerData, setPlayerData] = useState([]); 
    const [statData, setStatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerID = parseInt(searchTerm);
                const result = await axios.get(`http://localhost:3001/players/${playerID}`);
                setPlayerData(result.data.data[0]); 
                console.log("API Response:", result.data.data); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerID = parseInt(searchTerm);
                const result = await axios.get(`http://localhost:3001/stats/player/${playerID}`);
                setStatData(result.data.data);
                console.log("Stat Data:", statData);
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

    const handleDelete = async () => {
        try {
            const result = await axios.delete(`http://localhost:3001/players/${searchTerm}`);
            console.log('Player deleted:', result.data);
            navigate('/');
          // Handle success, e.g., redirect to the player list or show a success message
        } catch (error) {
          console.error('Error deleting player:', error.message);
          // Handle error, e.g., show an error message to the user
        }
      };

    const statClick =() => {
        navigate(`/addStat?id=${searchTerm}`);
    }
    
    

  return (
    <div className='container mx-auto p-6'>
    <a href="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block m-3'>Home</a>
    <button
        onClick={handleDelete}
        className="bg-red-500 text-white font-bold py-3 px-6 rounded-full inline-block m-3 hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
    >
      Delete Player
    </button>

    <div className='player-profile flex items-start gap-6 mt-6'>  
        <div className='player-info'>
            <h1 className='text-3xl font-bold mb-2'>{playerData.name}</h1> 
            <div className='player-stats grid grid-cols-2 gap-4'>
                <p><span className='font-semibold'>Age:</span> {playerData.age}</p>
                <p><span className='font-semibold'>Height:</span> {convertHeight(playerData.height)}</p>
                <p><span className='font-semibold'>Position:</span> {playerData.position}</p> 
            </div>
        </div> 
    </div>
    <button
        onClick={statClick}
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full inline-block m-3 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
    > 
        Add Stat
    </button>
    <h2 className='text-2xl font-bold mt-6'>Stats</h2> 
    {statData.map((item) => (
        <div className="card bg-gray-100 p-4 rounded-md shadow-md mt-4" key={item.id}> 
            <p className="font-medium">Type: {item.type}</p> 
            <p>Count: {item.count}</p>
            <p>Season {item.season}</p>
        </div>
    ))}
</div>
  );
};

export default PlayerCard;
