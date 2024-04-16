import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Bottombar from '../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Building56 = ({navigation}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style = {{width: windowWidth, height: windowHeight * 0.9, justifyContent: 'space-between'}}>
                <View style = {{flex: 1}}>
                    <Text>56주년 기념관 페이지</Text>
                </View>
                <Bottombar n = {navigation}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
  };

  export default Building56;

  const style = StyleSheet.create({
    
  });