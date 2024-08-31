import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import React, { useState, useEffect } from "react";

//Importing Icons
import AntDesign from "@expo/vector-icons/AntDesign";

const Woofers = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <View style={styles.ImageContainer}>
          <ImageContainer />
        </View>
        <View style={styles.menuContainer}>
          <Menu />
        </View>
        <View style={styles.menuContainer}>
          <SmallDish />
        </View>
      </ScrollView>
    </View>
  );
};

//CREATING SEARCH BAR
const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Restaurant name or a dish?"
        placeholderTextColor={"darkgray"}
        style={styles.searchText}
      />
      <TouchableOpacity>
        <AntDesign style={styles.search} name="search1" />
      </TouchableOpacity>
    </View>
  );
};

//Image Container
const ImageContainer = () => {
  return (
    <View>
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.ImageButton}>
          <Image
            style={styles.offerImage}
            source={{
              uri: "https://i.pinimg.com/736x/c1/7e/e9/c17ee9cdae9e106477935b422b6f0123.jpg"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ImageButton}>
          <Image
            style={styles.offerImage}
            source={{
              uri: "https://i.pinimg.com/736x/37/3f/8a/373f8af3326fa13267d41ffe81d01b9f.jpg"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.offerImage}
            source={{
              uri: "https://i.pinimg.com/736x/16/37/59/1637593bd614b45de9dd074ce239f869.jpg"
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

//Small Menu Component
const Menu = () => {
  const [moreDish,setMoreDish] = useState(false);
  const showDish = () => {
    setMoreDish(!moreDish)
  }
  return (
    <View>
      <Text style={styles.menuHeading}>Eat what makes your happy!</Text>
      <View style={styles.allSmallDishes}>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/5d/4d/1f/5d4d1ff305a69bf3998b12a895baa479.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Pav Bhaji</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/e9/14/a0/e914a0278e763833eaddb76fca98428e.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Veg Thali</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/b4/63/db/b463db279943759c58f685bd054ace89.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Pizze</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/10/9f/04/109f046d8e41106b9f18797d7d8600ce.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Biryani</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/00/ed/39/00ed390bb97eef0ec52bda0665badd65.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Meal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/21/22/bd/2122bd37ef7179c95352ad2b941b592d.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Haleem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/f1/15/da/f115dafedd08aa0e950cbe7eec37239d.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Veg Salad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Cake</Text>
        </TouchableOpacity>
        {moreDish ? <SomeMoreDish /> : null}
      </View>
      <View>
        <TouchableOpacity onPress={() => showDish()}>
          <Text style={styles.showmore}>Show More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SomeMoreDish = () => {
  return (
    <View>
      <View style={styles.moreSmallDishes}>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/9d/e8/f0/9de8f042c9e11c35939db2398d72bc45.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Juice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/7f/6d/3e/7f6d3ebdca842e61864b698a277c5418.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Dosa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/564x/00/3f/0f/003f0f0351967a7cb6212a8d9bfaf889.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Gulab Jamun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuDishButton}>
          <Image
            style={styles.menuDishImage}
            source={{
              uri: "https://i.pinimg.com/736x/6f/13/7e/6f137e7863730775d7c037700c5968b0.jpg"
            }}
          />
          <Text style={styles.menuDishText}>Soda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
//SMALL DISH COMPONENTS
const SmallDish = () => {
  const [dish,setDish] = useState([])
  const getDishList = async () => {
    const URL = "http://192.168.0.104:3000/smallDish";
    let result = await fetch (URL);
    result = await result.json();
    if(result){
      console.warn(result);
      setDish(result);
    }
  }
  useEffect(()=>{
    getDishList();
  },[])
  return (
    <View>
      <Text style={styles.menuHeading}>360 restaurants around you</Text>
      <View >
        {
          dish.length ? (
            dish.map((items) => (
              <View style={styles.FlashCard} >
              <TouchableOpacity>
              <View style={styles.Dishbanner}>
                <Image
                  style={styles.DishBannerImage}
                  source={{ uri: items.url }}
                />
              </View>
              <View style={styles.nameContent} >
                <View style={styles.DishName}>
                  <Text style={styles.DishNameText}>{items.name}</Text>
                  <Text style={styles.HotelName}>{items.Hotel}</Text>
                </View>
                <View style={styles.rating}>
                  <Text style={styles.ratingText}>{items.stars}</Text>
                  <AntDesign name="star" size={16} color="white" />
                </View>
              </View>
              <View>
                <Text style={styles.flashCardDiscription}>
                  {items.discription}
                </Text>
              </View>
        </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
};
export default Woofers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  searchContainer: {},
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
  ImageContainer: {
    paddingHorizontal: 20
  },
  offerImage: {
    height: 140,
    width: 240,
    borderRadius: 10
  },
  ImageButton: {
    marginRight: 20
  },
  menuHeading: {
    fontSize: 25,
    fontWeight: "bold",
    // padding: 10,
    marginLeft: 10
  },
  menuDishImage: {
    height: 65,
    width: 65,
    borderRadius: 40
  },
  menuDishText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 5
  },
  menuDishButton: {
    width: 70,
    margin: 8,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  menuContainer: {
    padding: 10,
    marginTop: 20
  },
  allSmallDishes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  showmore: {
    width: 330,
    fontSize: 20,
    color: "gray",
    borderWidth: 1,
    borderColor: "gray",
    padding: 6,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10
  },
  moreSmallDishes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  FlashCard: {
    padding: 10,
    margin: 10,
    elevation:20,
    // shadowColor:'gray',
    marginBottom:10,
    // borderWidth:1,
    // borderColor:'gray',
    backgroundColor:'white',
    borderRadius:20,

  },
  Dishbanner: {},
  DishBannerImage: {
    height: 150,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  flashCardDiscription: {
    fontSize:16,
    color:'gray',
    marginVertical:5,
  },
  DishName: {},
  rating: {
    backgroundColor: "#17B169",
    display:'flex',
    flexDirection:'row',
    padding:5,
    width:50,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  DishNameText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 1
  },
  nameContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
  
  },
  HotelName: {
    fontSize: 20,
    fontWeight: "normal",
    // paddingHorizontal: 10,
    color: "gray"
  },
  readMore: {},
  itemPrise: {},
  priceTag: {},
  ratingText: {
    fontSize: 18,
    color: "white"
  }
});
