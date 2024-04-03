import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SchoolMapScreen = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen
          name = 'Home'
          component = {Home}
          options = {{title: 'Homepage'}}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SchoolMapScreen;