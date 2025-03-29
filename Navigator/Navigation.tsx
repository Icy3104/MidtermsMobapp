import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Jobfinderscreen from '../Screens/Jobfinderscreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JobFinder" component={Jobfinderscreen} options={{ title: 'Job Finder' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
