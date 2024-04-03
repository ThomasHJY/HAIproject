import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/screen/home'; //홈페이지
import Building09 from './source/screen/building09';

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
        <Stack.Screen
          name = 'Building09'
          component = {Building09}
          options = {{title: 'College of Engineering'}}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SchoolMapScreen;