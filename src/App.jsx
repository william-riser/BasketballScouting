import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TestPage from './components/TestPage';
import HomePage from './components/home';
import SearchResultsPage from './components/searchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:3001/data');
            setSearchResults(result.data.data); 
        } catch (error) {
            console.error(error);
        }
    };
    fetchData();
};


  return (
    <BrowserRouter> 
      <div>
        <Routes>
          <Route path="/" element={<HomePage handleSearch={handleSearch} />} />
          <Route path="/searchResults" element={<SearchResultsPage searchResults={searchResults} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
