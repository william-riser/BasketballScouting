import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/home';
import SearchResultsPage from './components/searchResults';
import PlayerCard from './components/playerCard';
import AddPlayer from './components/addPlayer';
import AddStat from './components/addStat';
import AddScoutingReport from './components/addScoutingReport';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/searchResults" element={<SearchResultsPage  />} />
          <Route path="/playerCard" element={<PlayerCard />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
          <Route path="/addStat" element={<AddStat />} />
          <Route path="/addScoutingReport" element={<AddScoutingReport />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
