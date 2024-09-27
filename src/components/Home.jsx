// src/components/Home.jsx

const Home = () => {
  return (
    <div className="text-center p-8 bg-gray-50">
      <h1 className="text-5xl font-bold mb-6">Welcome to EcoRider!</h1>
      <p className="text-xl mb-8">
        EcoRider is a comprehensive ridesharing platform that connects drivers with passengers seeking to share a journey, offering numerous benefits like cost savings, convenience, and environmental sustainability.
        We Revolutionize Ridesharing with Safety, Sustainability, and Social Impact.
      </p>

      {/* Flex container for images */}
      <div className="flex justify-center items-center space-x-6">
        <img src="./src/assets/imgg.jpg" alt="EcoRider" className="w-full max-w-lg h-80 object-cover rounded-lg shadow-lg" />
        <img src="./src/assets/img3.jpeg" alt="EcoRider" className="w-full max-w-lg h-80 object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
