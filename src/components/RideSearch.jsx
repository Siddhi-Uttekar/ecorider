import { useState } from 'react';

const RideSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    destination: '',
    departureTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search Criteria:', searchCriteria);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Search Rides</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Destination:</label>
          <input
            type="text"
            name="destination"
            value={searchCriteria.destination}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Preferred Departure Time:</label>
          <input
            type="datetime-local"
            name="departureTime"
            value={searchCriteria.departureTime}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default RideSearch;
