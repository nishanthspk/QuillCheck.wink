import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="bg-[#121a33] p-8 rounded-lg shadow-lg text-center w-[400px]">
        <div className="text-white mb-6">
          <img
            src="/logo.png"
            alt="QuillCheck"
            className="mx-auto mb-6"
            width={80}
          />
          <h1 className="text-3xl font-semibold">Evaluate Any Token</h1>
        </div>
        <div className="flex justify-around mb-6">
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            ETH
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            BSC
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Polygon
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
            Base
          </button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter token address"
            className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg w-full">
          Check
        </button>
        
      </div>
    </div>
  );
};

export default Home;
