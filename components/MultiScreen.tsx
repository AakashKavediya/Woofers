import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Importing components
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importing Icons
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Importing your custom component
import Woofers from "./Woofers"; // Ensure that this path is correct
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
const MultiScreen = () => {
const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Woofers"
          component={Woofers}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={30} color={'black'} />
            )
          }}
        />
        <Tab.Screen
          name="Page2"
          component={Page2}
          options={{
            
            tabBarIcon: ({ color }) => (
              <FontAwesome name="map" size={25} color={"black"} />
            )
          }}
        />
        <Tab.Screen
          name="Page3"
          component={Page3}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" size={30} color={"black"} />
            )
          }}
        />
        <Tab.Screen
          name="Page4"
          component={Page1}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="local-offer" size={28} color="black" />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MultiScreen;
