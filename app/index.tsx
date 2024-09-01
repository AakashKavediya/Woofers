import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

//Importing components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing Components
import Login from "@/components/Login";
import Woofers from "@/components/Woofers";
import MultiScreen from "../components/MultiScreen";
import Account from "@/components/Account";
import Map from "@/components/Map";

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Woofers"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#fd5c63"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 40
            }
            // headerLeft: () => (
            //   <TouchableOpacity>
            //     <Text></Text>
            //   </TouchableOpacity>
            // )
          }}
          component={Woofers}
        />
        <Stack.Screen
          name="Account"
          options={{ headerShown: false }}
          component={Account}
        />

        <Stack.Screen
          name="MultiScreen"
          options={{ headerShown: false }}
          component={MultiScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
