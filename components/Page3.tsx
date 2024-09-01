import { StyleSheet, Text, View, ScrollView,TouchableOpacity,TextInput } from "react-native";
import React, { useState, useEffect } from "react";

//Importing Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";



const Page3 = () => {
  //Usestate for foodList
  const [list, setList] = useState([]);
  const FoodMenu = async () => {
    const URL = "http://192.168.0.106:3000/menu";
    let result = await fetch(URL);
    result = await result.json();
    setList(result);
  };
  useEffect(() => {
    FoodMenu();
  }, []);
  return (
    <View style={{backgroundColor:'white'}} >
        <SearchBar />
    </View>
  );
};

const SearchBar = () => {
  const [data, setData] = useState([]);
  const SearchFood = async (text) => {
    const URL = `http://192.168.0.106:3000/menu?q=${text}`;
    let result = await fetch(URL);
    console.warn(URL);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  return (
    <View>
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Restaurant name or a dish?"
        placeholderTextColor={"darkgray"}
        style={styles.searchText}
        onChangeText={(text) => SearchFood(text)}
      />
      <TouchableOpacity>
        <AntDesign style={styles.search} name="search1" />
      </TouchableOpacity>
      </View><View>

        <ScrollView>
        {data.length ? (
          data.map((items) => (
            
            <View style={styles.list}>
              <View style={styles.combine}>
                <View style={styles.row1}>
                  <Text style={styles.name}>{items.name}</Text>
                  <Text style={styles.country}>{items.country}</Text>
                </View>
                <View style={styles.row2}>
                  <Text style={styles.price}>${items.price}</Text>
                </View>
              </View>
              <View style={styles.row3}></View>
              <TouchableOpacity>
                <Text style={styles.add} >Add</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>

    </View>
    </View>

        
  );
};

export default Page3;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  combine: {},
  name: {
    fontSize: 22,
    fontWeight: "bold"
  },
  country: {
    fontSize: 20,
    fontWeight: "normal",
    color: "gray"
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fd5c63"
  },
  add: {
    padding: 20,
    // height:'100%',
    backgroundColor: "#fd5c63",
    borderRadius: 15,
    color: "white",
    fontSize: 25
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    width: 360,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "lightgray",
    // marginLeft:'auto',
    marginHorizontal: "auto",
    marginVertical: 20,
    marginTop: 30
  },
  searchText: {
    fontSize: 20,
    width: 280
  },
  search: {
    color: "red",
    fontSize: 20,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
});
