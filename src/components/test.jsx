import React from 'react';

const Test = () => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/data');
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const test = fetchData();
  return (
    <div>
        <p>{test}</p>
    </div>
  );
};

export default Test;
