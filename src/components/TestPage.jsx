import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TestPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3001/data');
                setData(result.data.data); 
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key={item.player_id}>  
                    <p>Player ID: {item.player_id}</p>
                    <p>Name: {item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default TestPage;