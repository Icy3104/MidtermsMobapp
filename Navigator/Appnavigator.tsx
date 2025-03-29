import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Jobfinderscreen from '../Screens/Jobfinderscreen';
import Savejobscreen from '../Screens/Savejobscreen';
import Applicationformscreen from '../Screens/Applicationformscreen';
import { RootStackParamList } from '../Context/types';

// Define Stack Navigator with Types
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false, // ❌ Completely remove the header for all screens
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
    </NavigationContainer>
  );
};

export default AppNavigator;
