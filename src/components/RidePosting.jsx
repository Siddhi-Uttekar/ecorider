import { useState } from 'react';

const RidePosting = () => {
  const [rideDetails, setRideDetails] = useState({
    startingPoint: '',
    destination: '',
    departureTime: '',
    availableSeats: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails({
      ...rideDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ride Details:', rideDetails);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Post a Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Starting Point:</label>
          <input
            type="text"
            name="startingPoint"
            value={rideDetails.startingPoint}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Destination:</label>
          <input
            type="text"
            name="destination"
            value={rideDetails.destination}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Departure Time:</label>
          <input
            type="datetime-local"
            name="departureTime"
            value={rideDetails.departureTime}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Available Seats:</label>
          <input
            type="number"
            name="availableSeats"
            value={rideDetails.availableSeats}
            onChange={handleChange}
            min="1"
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Post Ride
        </button>
      </form>
    </div>
  );
};

export default RidePosting;
