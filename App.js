import 'react-native-gesture-handler';
import React from 'react';
//import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/screen/home'; //홈
import Building09 from './source/screen/building09'; //9번 건물
const Stack = createNativeStackNavigator();

const SchoolMapScreen = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen
          name = 'Home'
          component = {Home}
          options = {{title: 'Campus Map'}}
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