import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/screen/home'; //홈페이지
import Building09 from './source/screen/building09'; //9번 건물
import Building56 from './source/screen/building56'; //56번 건물

const Stack = createNativeStackNavigator();

const SchoolMapScreen = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName = 'Homepage'>
        <Stack.Screen
          name = 'Homepage'
          component = {Home}
          options = {{title: '홈페이지'}}
        />
        <Stack.Screen
          name = 'College of Engineering'
          component = {Building09}
          options = {{title: '공과대학'}}
        />
        <Stack.Screen
          name = '56th Anniversary Memorial Hall'
          component = {Building56}
          options = {{title: '56주년 기념관(법정대학, 특수대학원)'}}
        />
       </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SchoolMapScreen;