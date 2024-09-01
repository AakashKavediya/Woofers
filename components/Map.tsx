// Map.tsx
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from "react-native";
import React, { Component } from "react";

import { WebView } from "react-native-webview";

// Importing Icons
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import Woofers from "./Woofers"; // Ensure this path is correct

const Map = (props) => {

  return (
    <View>
      <Text>Map</Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate(Woofers)}>
          <Feather name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="map-location-dot" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  extraSpace: {
    height: 65
  }
});
