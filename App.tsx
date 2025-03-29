import React from 'react';
import { JobProvider } from './Context/Jobcontext';
import { ThemeProvider } from './Context/ThemeContext'; // Import ThemeProvider
import AppNavigator from './Navigator/Appnavigator';

const App = () => {
  return (
    <ThemeProvider> {/* Wrap everything in ThemeProvider */}
      <JobProvider>
        <AppNavigator /> {/* Using Navigation instead of a single screen */}
      </JobProvider>
    </ThemeProvider>
  );
};

export default App;
