import React from 'react';
import DuplicationAnalysis from './components/DuplicationAnalysis';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-800 font-sans">
      <header className="bg-white sticky top-0 z-10 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-slate-700">
              API Duplication Analysis
            </h1>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <DuplicationAnalysis />
      </main>
    </div>
  );
};

export default App;