import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  return (
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen flex flex-col items-center justify-center">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mt-6">Usa a porra do dark mode para não foder sua visão!</h1>
    </div>
  );
};

export default Home;
