import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
    setIsLoaded(true);
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme) => {
    // Update document attributes
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update body classes
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f1f5f9';
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1e293b';
    }
    
    // Update localStorage
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    isLoaded,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {isLoaded ? children : null}
    </ThemeContext.Provider>
  );
};