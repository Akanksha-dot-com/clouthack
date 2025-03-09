import React from "react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Clouthack 🚀</h1>
      <p className="text-lg mb-6">A Web3 Hackathon Rating & Certification Platform</p>
      <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
