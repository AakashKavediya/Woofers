import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

//Importing components
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing Components
import Login from "@/components/Login";
import Home from "@/components/Woofers";
import Account from "@/components/Account";

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
            },
            headerLeft: () => (
              <TouchableOpacity>
                <Text></Text>
              </TouchableOpacity>
            )
          }}
          component={Home}
        />
        <Stack.Screen
          name="Account"
          options={{ headerShown: false }}
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
