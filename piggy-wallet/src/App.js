import React, { useState } from 'react';
import piggyBankImage from './images/piggy-bank.png';
import TaskManagementScreen from './components/TaskManagementScreen';

const PiggyWalletHomeScreen = ({ onLogin }) => {
  return (
    <div className="w-full h-screen bg-purple-600 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <div className="w-48 h-48 mb-8">
          <img src={piggyBankImage} alt="Piggy Bank" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-4xl font-bold text-white text-center mb-4">Welcome to Piggy Wallet</h1>
        <p className="text-white text-center mb-8">
          Empowering kids in high-inflation economies with secure crypto savings accounts.
        </p>
        <button
          onClick={onLogin}
          className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold mb-4"
        >
          Go to Tasks
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [showTasks, setShowTasks] = useState(false);

  const handleToggleView = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div>
      {showTasks ? (
        <TaskManagementScreen onBack={handleToggleView} />
      ) : (
        <PiggyWalletHomeScreen onLogin={handleToggleView} />
      )}
    </div>
  );
};

export default App;