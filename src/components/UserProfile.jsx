const UserProfile = () => {
    const user = {
      name: 'John Doe',
      rating: 4.5,
      reviews: [
        'Great ride experience!',
        'Very punctual and friendly driver.',
      ],
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p className="text-lg font-medium">Name: {user.name}</p>
        <p className="text-lg font-medium">Rating: {user.rating} ⭐</p>
        <h3 className="text-xl font-bold mt-4">Reviews:</h3>
        <ul className="list-disc list-inside">
          {user.reviews.map((review, index) => (
            <li key={index} className="text-gray-700">{review}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default UserProfile;
