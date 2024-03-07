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
    const [scoutingReport, setScoutingReport] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerID = parseInt(searchTerm);
                const result = await axios.get(`http://localhost:3001/scoutingReport/player/${playerID}`);
                setScoutingReport(result.data.data);
                console.log("Scouting Report:", scoutingReport);
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
    
    const scoutingReportClick = () => {
        navigate(`/addScoutingReport?id=${searchTerm}`);
    }
    

  return (
    <div className='container mx-auto p-6'>
            <div className='flex flex-col items-center gap-4 mb-4'> {/* Buttons container */}
                <a href="/" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full'>Home</a>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white font-bold py-3 px-6 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
                >
                    Delete Player
                </button>
            </div>

            <div className='player-profile flex flex-col md:flex-row items-start gap-6 mt-6'> {/* Player info section */}
                <div className='player-info w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md'> 
                    <h1 className='text-3xl font-bold mb-4'>{playerData.name}</h1>
                    <div className='player-stats grid grid-cols-2 gap-4'>
                        <p className='text-lg'><span className='font-semibold'>Age:</span> {playerData.age}</p>
                        <p className='text-lg'><span className='font-semibold'>Height:</span> {convertHeight(playerData.height)}</p>
                        <p className='text-lg'><span className='font-semibold'>Position:</span> {playerData.position}</p>
                    </div>
                </div> 

                <div className='stats-section w-full md:w-1/2 mt-6 md:mt-0'> {/* Stats & scouting report */}
                    <button
                        onClick={statClick}
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full inline-block mb-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    > 
                        Add Stat
                    </button>

                    <h2 className='text-2xl font-bold mb-4'>Stats</h2> 
                    {statData.map((item) => (
                        <div className="card bg-gray-100 p-4 rounded-md shadow-md mt-2" key={item.stat_id}> 
                            <p className="font-medium">Type: {item.type}</p> 
                            <p>Count: {item.count}</p>
                            <p>Season {item.season}</p>
                        </div>
                    ))}

                    <button
                        onClick={scoutingReportClick}
                        className="bg-blue-500 text-white font-bold mt-6 py-3 px-6 rounded-full inline-block mb-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    > 
                        Add Scouting Report
                    </button>
                    <h2 className='text-2xl font-bold'>Scouting Reports</h2> 
                    {scoutingReport.map((item) => (
                        <div className="card bg-gray-100 p-4 rounded-md shadow-md mt-2" key={item.scoutingReport_id}> 
                            <p>Strengths: {item.strengths}</p> 
                            <p>Weaknesses: {item.weaknesses}</p>
                            <p>Notes: {item.notes}</p>
                        </div>
                    ))}
                </div>
            </div>
       </div>
  );
};

export default PlayerCard;
