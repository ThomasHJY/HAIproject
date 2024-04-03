import React from 'react';
import {View, ScrollView, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <ScrollView style = {style.view_building}>
            <View style = {style.view_building_row}>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </View>
        </ScrollView>
    );
  };
  
  export default Home;

  const style = StyleSheet.create({
    view_building: {
        flex: 1,
    },
    view_building_row: {
        flex: 1,
        flexDirection: 'row',
    },
  });