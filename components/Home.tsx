import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Importing components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing Components
import Woofers from './Woofers';

const Home = () => {
    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Woofers" component={Woofers} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Home

const styles = StyleSheet.create({})