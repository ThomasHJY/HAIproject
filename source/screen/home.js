import React from 'react';
import {Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a> 하단 버튼 이미지 출처

import Bottombar from '../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
    const pressButton09 = () => navigation.navigate('College of Engineering');
    const pressButton56 = () => navigation.navigate('56th Anniversary Memorial Hall');

    return (
        <SafeAreaProvider>
            <SafeAreaView style = {{width: windowWidth, height: windowHeight * 0.9, justifyContent: 'space-between'}}>
                <ScrollView style = {{flex: 1, backgroundColor: '#ffffff'}} contentContainerStyle = {style.container}>
                    <TouchableOpacity 
                        style = {style.building}
                        onPress = {(pressButton09)}
                    >
                        <Image 
                            style = {style.buildingImage}
                            source = {require('../image/building09.jpg')}
                        />
                        <Text style = {style.buildingText}>공과대학</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style = {style.building}
                        onPress = {(pressButton56)}
                    >
                        <Image
                            style = {style.buildingImage}
                            source = {require('../image/building56.jpg')}
                        />
                        <Text style = {style.buildingText}>56주년 기념관</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Bottombar n = {navigation}/> 
            </SafeAreaView>
        </SafeAreaProvider>
    );
  };
  
  export default Home;

  const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 40,
        },
    building: {
        width: windowWidth * 0.25,
        height: windowHeight * 0.25,
    },
    buildingImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: 'auto',
        height: 'auto'
    },
    buildingText: {
        fontSize: 10,
        color: '#000000',
        width: 'auto',
        height: 'auto',
        alignSelf: 'center',
    },
    bottomBar: {
        width: windowWidth,
        height: windowHeight * 0.075,
        flexDirection: 'row',
    },
    bottomImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: 'auto',
        height: 'auto',
    },
  });