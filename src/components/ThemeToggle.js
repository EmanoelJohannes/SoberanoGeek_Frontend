import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md text-sm font-medium"
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;
