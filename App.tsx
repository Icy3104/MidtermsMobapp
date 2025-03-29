import React from 'react';
import { JobProvider } from './Context/Jobcontext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigator/Appnavigator';

const App = () => {
  return (
    <JobProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </JobProvider>
  );
};

export default App;
