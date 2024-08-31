import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";
import React, { useState } from "react";

//Importing Component
import Woofers from "./Woofers";
import Login from "./Login";

const Account = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Account</Text>
      </View>
      <View style={styles.allInput}>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Full Name</Text>
            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Username</Text>
            <TextInput
              placeholder="Create your Username"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Password</Text>
            <TextInput
              placeholder="Create Password"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Phone no.</Text>
            <TextInput
              placeholder="Enter your phone no."
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Address</Text>
            <TextInput
              placeholder="Enter your address"
              placeholderTextColor={"gray"}
              style={styles.textInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate(Login)}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(Login)}
              style={styles.allText}
            >
              <Text style={styles.normalText}>
                {" "}
                <Text style={styles.boldText}>
                  Already have an account?{" "}
                </Text>{" "}
                Click here to Log in
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

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fd5c63"
  },
  header: {
    flex: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20
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
