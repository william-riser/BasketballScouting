import './index.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TestPage from './components/TestPage';
import HomePage from './components/home';
import SearchResultsPage from './components/searchResults';
import PlayerCard from './components/playerCard';
import AddPlayer from './components/addPlayer';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/searchResults" element={<SearchResultsPage  />} />
          <Route path="/playerCard" element={<PlayerCard />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
