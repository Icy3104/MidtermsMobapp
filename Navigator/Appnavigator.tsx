import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Jobfinderscreen from '../Screens/Jobfinderscreen';
import Savejobscreen from '../Screens/Savejobscreen';
import Applicationformscreen from '../Screens/Applicationformscreen';
import { RootStackParamList } from '../Context/types';

// Create Stack Navigator with Proper Typing
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false, // Hide header globally
      }}
    >
      {/* Job Finder Screen */}
      <Stack.Screen 
        name="Jobfinderscreen" 
        component={Jobfinderscreen} 
      />

      {/* Saved Jobs Screen */}
      <Stack.Screen 
        name="Savejobscreen" 
        component={Savejobscreen} 
      />

      {/* Application Form Screen */}
      <Stack.Screen 
        name="Applicationformscreen" 
        component={Applicationformscreen} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
