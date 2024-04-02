import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated';

const Home = ({navigation}) => {
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
        scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
        savedScale.value = scale.value;
    });
    const animatedStyle = useAnimatedStyle(() => {
        return {transform: [{scale: scale.value}]};
    });

    return (
        <GestureDetector gesture={pinchGesture}>
            <View>
                <Animated.Image
                    source = {require('../image/hannam_campusmap.jpg')}
                    style = {animatedStyle}
                />
            </View>
        </GestureDetector>
    );
  };
  
  export default Home;