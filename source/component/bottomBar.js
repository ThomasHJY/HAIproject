import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bottombar = ({n}) => {
    const pressHome = () => n.navigate('Homepage');
    const pressSearch = () => n.navigate('Searchpage');
    const pressSchedule = () => n.navigate('Schedulepage');
    const pressGps = () => n.navigate('Gpspage');
    const pressNotice = () => n.navigate('Noticepage');

    return (
        <View style = {style.bottomBar}>
            <TouchableOpacity 
                style = {{flex: 1}}
                onPress = {(pressHome)}
            >
                <Image
                    style = {style.bottomImage}
                    source = {require('../image/button1.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style = {{flex: 1}}
                onPress = {(pressSearch)}
            >
                <Image
                    style = {style.bottomImage}
                    source = {require('../image/button2.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style = {{flex: 1}}
                onPress = {(pressSchedule)}
            >
                <Image
                    style = {style.bottomImage}
                    source = {require('../image/button3.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style = {{flex: 1}}
                onPress = {(pressGps)}
            >
                <Image
                    style = {style.bottomImage}
                    source = {require('../image/button4.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
                style = {{flex: 1}}
                onPress = {(pressNotice)}
            >
                <Image
                    style = {style.bottomImage}
                    source = {require('../image/button5.jpg')}
                />
            </TouchableOpacity>
        </View>
    );
  };
  
  export default Bottombar;

  const style = StyleSheet.create({
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