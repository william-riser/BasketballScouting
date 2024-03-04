import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestPage() {
    const [playerData, setPlayerData] = useState([]);
    const [statData, setStatData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3001/data');
                setPlayerData(result.data.data); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3001/api/stats');
                setStatData(result.data.data); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div className="container mx-auto p-4">  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
                {playerData.map((item) => (
                    <div key={item.player_id} className="bg-blue-200 rounded-lg p-4 shadow-md">  
                        <p className="font-semibold">Player ID: {item.player_id}</p>
                        <p className="text-gray-700">Name: {item.name}</p>
                    </div>
                ))}
            </div>
            </div>
            <div className="container mx-auto p-4">  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
                {statData.map((item) => (
                    <div key={item.stat_id} className="bg-blue-200 rounded-lg p-4 shadow-md">  
                        <p className="font-semibold">Type: {item.type}</p>
                        <p className="text-gray-700">Count: {item.count}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default TestPage;