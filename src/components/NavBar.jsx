import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex items-center">
      {/* Logo and EcoRider text */}
      <div className="flex items-center ml-4">
        
        <span className="text-white text-2xl font-bold">EcoRider</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 gap-6 ml-auto mr-20 justify-end text-white font-bold">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/post-ride" className="hover:text-gray-300">Post a Ride</Link></li>
        <li><Link to="/search-rides" className="hover:text-gray-300">Search Rides</Link></li>
        <li><Link to="/user-profile" className="hover:text-gray-300">User Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
