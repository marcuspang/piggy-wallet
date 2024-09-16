import React from 'react';

const PiggyWalletHomeScreen = () => {
  const handleLogIn = () => {
    // Add your login logic here
    console.log("Log In clicked");
  };

  return (
    <div className="w-full h-screen bg-purple-600 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-48 h-48 mb-8">
          <img src="/api/placeholder/192/192" alt="Piggy Bank" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-4xl font-bold text-white text-center mb-4">Welcome to Piggy Wallet</h1>
        <p className="text-white text-center mb-8">
          Empowering kids in high-inflation economies with secure crypto savings accounts.
        </p>
        <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold mb-4">
          Sign Up
        </button>
        <p className="text-white text-center">
          Already have an account?{' '}
          <button
            onClick={handleLogIn}
            className="font-semibold underline focus:outline-none"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default PiggyWalletHomeScreen;