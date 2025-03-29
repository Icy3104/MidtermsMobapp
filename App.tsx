import React from 'react';
import { JobProvider } from './Context/Jobcontext';
import AppNavigator from './Navigator/Appnavigator'; // Corrected import

const App = () => {
  return (
    <JobProvider>
      <AppNavigator /> {/* Using Navigation instead of a single screen */}
    </JobProvider>
  );
};

export default App;