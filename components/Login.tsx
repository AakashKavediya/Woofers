import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
//Import Linear Gradient Background Color
import LinearGradient from "react-native-linear-gradient";

//Importing Component
import Woofers from "./Woofers";
import Account from "./Account";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.allInput}>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Username</Text>
            <TextInput
              placeholder="Enter Username"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Password</Text>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(Woofers)}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(Account)}
              style={styles.allText}
            >
              <Text style={styles.normalText}>
                {" "}
                <Text style={styles.boldText}>
                  Don't have an account?{" "}
                </Text>{" "}
                Click here to create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.policyContainer}>
          <Text style={styles.policy}>
            By continuing, you agree to our Terms of Service Private Policy
            Content Policy
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fd5c63"
  },
  header: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold"
  },
  allInput: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    marginBottom: 15
  },
  textInput: {
    backgroundColor: "white",
    width: 300,
    padding: 10,
    fontSize: 20,
    color: "black",
    borderRadius: 10
  },
  inputHeading: {
    color: "white",
    fontSize: 25
  },
  buttonContainer: {},
  buttonText: {
    width: 300,
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    padding: 10,
    fontSize: 25,
    borderRadius: 15,
    marginVertical: 10
  },
  allText: {
    display: "flex",
    flexDirection: "row",
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap"
  },
  boldText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  normalText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 20
  },
  policyContainer: {
    flex: 0.8,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  policy: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    width: 250,
    color: "white",
    textAlign: "center",
    bottom: 20
  }
});
