import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
    const pressButton09 = () => navigation.navigate('College of Engineering');
    const pressButton56 = () => navigation.navigate('56th Anniversary Memorial Hall');

    return (
        <SafeAreaProvider>
            <SafeAreaView style = {{width: windowWidth, height: windowHeight, justifyContent: 'space-between'}}>
                <ScrollView style = {{flex: 1}} contentContainerStyle = {style.container}>
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
                <View style = {style.bottomBar}>
                    <TouchableOpacity style = {{flex: 1}}>
                        <Image
                            style = {style.bottomImage}
                            source = {require('../image/button1.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1}}>
                        <Image
                            style = {style.bottomImage}
                            source = {require('../image/button2.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1}}>
                        <Image
                            style = {style.bottomImage}
                            source = {require('../image/button3.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1}}>
                        <Image
                            style = {style.bottomImage}
                            source = {require('../image/button4.jpg')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style = {{flex: 1}}>
                        <Image
                            style = {style.bottomImage}
                            source = {require('../image/button5.jpg')}
                        />
                    </TouchableOpacity>
                </View>
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
        height: windowHeight * 0.15,
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
    },
    bottomBar: {
        width: windowWidth,
        height: windowHeight * 0.2,
        flexDirection: 'row',
    },
    bottomImage: {
        flex: 1,
        resizeMode: 'stretch',
        width: 'auto',
        height: 'auto'
    },
  });