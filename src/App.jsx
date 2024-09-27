import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import RidePosting from './components/RidePosting.jsx';
import RideSearch from './components/RideSearch.jsx';
import UserProfile from './components/UserProfile.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post-ride" element={<RidePosting />} />
            <Route path="/search-rides" element={<RideSearch />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
