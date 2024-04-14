import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/screen/home'; //홈페이지
import Building09 from './source/screen/building09'; //9번 건물
import Building56 from './source/screen/building56'; //56번 건물

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;

const SchoolMapScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'Homepage'
        screenOptions={{
          headerStyle: {backgroundColor: '#ffffff', width: windowWidth},
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name = 'Homepage'
          component = {Home}
          options = {{
            headerTitleAlign: 'left',
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Image
                  style = {style.headerImage}
                  source = {require('./source/image/symbol.jpg')}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = 'College of Engineering'
          component = {Building09}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  공과대학
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = '56th Anniversary Memorial Hall'
          component = {Building56}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  56주년 기념관(법정대학, 특수대학원)
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SchoolMapScreen;

const style = StyleSheet.create({
  titleContainer: {
    width: windowWidth * 0.5,
    height: 50,
    justifyContent: 'center',
  },
  headerImage: {
    width: windowWidth * 0.3,
    aspectRatio: 1,
    resizeMode: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
  },
});