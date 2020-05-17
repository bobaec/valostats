import React from 'react';

export const themes = {
  lightMode: true,
  darkMode: false,
};

export const ThemeContext = React.createContext(themes.lightMode);
