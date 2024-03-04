import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams(); // Get search parameters
    const searchTerm = searchParams.get("name"); // Extract 'q' parameter

    const [playerData, setPlayerData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:3001/players?name=${searchTerm}`);
                setPlayerData(result.data.data); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (
        <ul>
            {playerData.map((player) => (
            <li key={player.id}>
                <strong>Name:</strong> {player.name}, <strong>Age:</strong> {player.age}
            </li>
            ))}
        </ul>
    );

}
    
export default SearchResultsPage;