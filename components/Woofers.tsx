import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal
} from "react-native";
import React, { useState, useEffect } from "react";

//Importing Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

//Importing Component
import Map from "./Map";

const Woofers = (props) => {
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
          <Text style={styles.menuHeading}>360 restaurants around you</Text>

          <SmallDish
            url={
              "https://i.pinimg.com/564x/5d/4d/1f/5d4d1ff305a69bf3998b12a895baa479.jpg"
            }
            name={"Pav Bhaji"}
            Hotel={"Amar Hotel"}
            stars={"4.1"}
            discription={
              "A spicy mashed vegetable curry served with buttered bread rolls, garnished with onions and lemon."
            }
            price={"199"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/e9/14/a0/e914a0278e763833eaddb76fca98428e.jpg"
            }
            name={"Veg Thali"}
            Hotel={"Classic Veg"}
            stars={"3.5"}
            discription={
              "A platter of assorted vegetarian dishes, including rice, bread, curries, dal, and dessert."
            }
            price={"899"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/b4/63/db/b463db279943759c58f685bd054ace89.jpg"
            }
            name={"Pizza"}
            Hotel={"Pizza Hut"}
            stars={"3.1"}
            discription={
              "A baked flatbread topped with tomato sauce, cheese, and various toppings like vegetables, meat, and herbs"
            }
            price={"499"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/10/9f/04/109f046d8e41106b9f18797d7d8600ce.jpg"
            }
            name={"Biryani"}
            Hotel={"Biryani Center "}
            stars={"3.2"}
            discription={
              "A fragrant rice dish cooked with aromatic spices, saffron, marinated meat or vegetables, and garnished with fried onions."
            }
            price={"399"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/00/ed/39/00ed390bb97eef0ec52bda0665badd65.jpg"
            }
            name={"Burger Meal"}
            Hotel={"Burger King"}
            stars={"4.5"}
            discription={
              "A sandwich with a meat or veggie patty, lettuce, tomato, cheese, and condiments, served in a soft bun."
            }
            price={"299"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/21/22/bd/2122bd37ef7179c95352ad2b941b592d.jpg"
            }
            name={"Haleem"}
            Hotel={"Abdul Dhabha"}
            stars={"2.5"}
            discription={
              "A slow-cooked, rich stew made from lentils, meat, and spices, with a creamy, hearty texture."
            }
            price={"399"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/f1/15/da/f115dafedd08aa0e950cbe7eec37239d.jpg"
            }
            name={"Veg Salad"}
            Hotel={"Healthy Dhabha"}
            stars={"4.3"}
            discription={
              "A fresh mix of leafy greens, vegetables, and toppings like nuts and cheese, tossed in a tangy dressing."
            }
            price={"199"}
          />
          <SmallDish
            url={
              "https://i.pinimg.com/564x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg"
            }
            name={"Cake"}
            Hotel={"Cake Point"}
            stars={"4.5"}
            discription={
              "A sweet, baked dessert, typically made with flour, sugar, eggs, and flavorings, often layered and frosted."
            }
            price={"99"}
          />
        </View>
      </ScrollView>
      
    </View>
  );
};

const searchThings = () =>{
  return(
    <View></View>
  )
}

//CREATING SEARCH BAR
const SearchBar = () => {
  const [data,setData] = useState([])
  const SearchFood = async (text) =>{
    const URL = `http://192.168.0.106:3000/menu?q=${text}`;
    let result = await fetch(URL);
    console.warn(URL);
    result = await result.json();
    
  }
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Restaurant name or a dish?"
        placeholderTextColor={"darkgray"}
        style={styles.searchText}
        onChangeText={(text)=>SearchFood(text)}
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

const SomeMoreDish = (props) => {
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
const SmallDish = (props) => {
  //Const for showing dishes
  const [dish,setDish] = useState([])
  //Const for showing Modal
  const [showModal,setShowModal] = useState(false)  
  //Const for creating Tic option
   const [tic,setTic] = useState(false)


  //Const for setting count option
  const [count,setCount] = useState(1)

  //function for updating count
  const UpAddCount = () =>{
    setCount(count+1)
  }
  const UpSubtractCount = () =>{
    setCount(count-1)
  }

  //Function for creating tic button
  const TickNow = () => {
    setTic(!tic)
  }
  return (
    <View>
      <View>
        <View style={styles.FlashCard}>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.Dishbanner}>
              <Image
                style={styles.DishBannerImage}
                source={{ uri: props.url }}
              />
            </View>
            <View style={styles.nameContent}>
              <View style={styles.DishName}>
                <Text style={styles.DishNameText}>{props.name}</Text>
                <Text style={styles.HotelName}>{props.Hotel}</Text>
              </View>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>{props.stars}</Text>
                <AntDesign name="star" size={16} color="white" />
              </View>
            </View>
            <View>
              <Text style={styles.flashCardDiscription}>
                {props.discription}
              </Text>
            </View>
          </TouchableOpacity>

          {/* MODAL */}
          {showModal ? (
            <Modal animationType="slide" transparent={true} visible={showModal}>
              <View style={styles.modalMainBox}>
                <View style={styles.modalSubBox}>
                  <TouchableOpacity
                    style={styles.closeModal}
                    onPress={() => setShowModal(false)}
                  >
                    <AntDesign
                      style={styles.closeIcon}
                      name="plus"
                      size={30}
                      color="white"
                    />
                  </TouchableOpacity>
                  <View>
                    <Image
                      style={styles.modalBanner}
                      source={{ uri: props.url }}
                    />
                  </View>
                  <View style={styles.foodInfo}>
                    <View style={styles.nameContent}>
                      <View style={styles.DishName}>
                        <Text style={styles.DishNameText}>{props.name}</Text>
                        <Text style={styles.HotelName}>{props.Hotel}</Text>
                      </View>
                      <View style={styles.rating}>
                        <Text style={styles.ratingText}>{props.stars}</Text>
                        <AntDesign name="star" size={16} color="white" />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.flashCardDiscription}>
                        {props.discription}
                      </Text>
                    </View>
                    <View style={styles.AddOnContainer}>
                      <View>
                        <Text style={styles.AddOn}>Add on</Text>
                        <Text style={styles.CanAddOn}>
                          You can add upto 4 options
                        </Text>
                      </View>
                      <View style={styles.checkBox}>
                        <View style={styles.Ticboxs}>
                          <View style={styles.combine}>
                            <View style={styles.veg}>
                              <Entypo
                                style={styles.vegTicl}
                                name="circle"
                                size={14}
                                color="green"
                              />
                            </View>
                            <Text style={styles.optionText}>
                              10% off on vegetable
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => TickNow()}
                            style={styles.tickOption}
                          >
                            {tic ? <View style={styles.fillBox}></View> : null}
                          </TouchableOpacity>
                        </View>
                        <View style={styles.Ticboxs}>
                          <View style={styles.combine}>
                            <View style={styles.veg}>
                              <Entypo
                                style={styles.vegTicl}
                                name="circle"
                                size={14}
                                color="green"
                              />
                            </View>
                            <Text style={styles.optionText}>
                              10% off on vegetable
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => TickNow()}
                            style={styles.tickOption}
                          >
                            {tic ? <View style={styles.fillBox}></View> : null}
                          </TouchableOpacity>
                        </View>
                        <View style={styles.Ticboxs}>
                          <View style={styles.combine}>
                            <View style={styles.veg}>
                              <Entypo
                                style={styles.vegTicl}
                                name="circle"
                                size={14}
                                color="green"
                              />
                            </View>
                            <Text style={styles.optionText}>
                              10% off on vegetable
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => TickNow()}
                            style={styles.tickOption}
                          >
                            {tic ? <View style={styles.fillBox}></View> : null}
                          </TouchableOpacity>
                        </View>
                        <View style={styles.Ticboxs}>
                          <View style={styles.combine}>
                            <View style={styles.veg}>
                              <Entypo
                                style={styles.vegTicl}
                                name="circle"
                                size={14}
                                color="green"
                              />
                            </View>
                            <Text style={styles.optionText}>
                              10% off on vegetable
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => TickNow()}
                            style={styles.tickOption}
                          >
                            {tic ? <View style={styles.fillBox}></View> : null}
                          </TouchableOpacity>
                        </View>
                        <View style={styles.Ticboxs}>
                          <View style={styles.combine}>
                            <View style={styles.veg}>
                              <Entypo
                                style={styles.vegTicl}
                                name="circle"
                                size={14}
                                color="green"
                              />
                            </View>
                            <Text style={styles.optionText}>
                              10% off on vegetable
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => TickNow()}
                            style={styles.tickOption}
                          >
                            {tic ? <View style={styles.fillBox}></View> : null}
                          </TouchableOpacity>
                        </View>
                        <View style={styles.Ticboxs}>
                          <View style={styles.combine}>
                            <View style={styles.veg}>
                              <Entypo
                                style={styles.vegTicl}
                                name="circle"
                                size={14}
                                color="green"
                              />
                            </View>
                            <Text style={styles.optionText}>
                              10% off on vegetable
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => TickNow()}
                            style={styles.tickOption}
                          >
                            {tic ? <View style={styles.fillBox}></View> : null}
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.priceConatiner}>
                      <View style={styles.counterContainer}>
                        <TouchableOpacity onPress={() => UpSubtractCount()}>
                          <AntDesign name="minus" size={16} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.count}>{count}</Text>
                        <TouchableOpacity onPress={() => UpAddCount()}>
                          <AntDesign name="plus" size={16} color="white" />
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity>
                        <Text style={styles.price}>Add ${props.price}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          ) : // <CreateModal
          //   url={props.url}
          //   name={props.name}
          //   Hotel={props.Hotel}
          //   stars={props.stars}
          //   discription={props.discription}
          //   price={props.price}
          //   CreateModal = {props.setShowModal}
          // />
          null}
        </View>
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
  },
  modalBanner:{
    backgroundColor:'white',
    height:200,
    width:'100%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  AddOnContainer:{
    borderTopWidth:1,
    borderTopColor:'lightgray',
    paddingTop:10,
    marginTop:20,
  },
  AddOn:{
    fontSize:25,
  },
  CanAddOn:{
    color:'gray',
    fontSize:20,
  },
  checkBox:{
    marginTop:15,
    },
  Ticboxs:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:8,
  },
  combine:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  optionText:{
    fontSize:18,
    color:'gray',
    marginLeft:10,
  },
  veg:{
    padding:2,
    borderWidth:2,
    borderColor:'green'
  },
  vegTicl:{
    backgroundColor:'green',
    borderRadius:20,
  },
  tickOption:{
    height:20,
    width:20,
    borderWidth:2,
    borderColor:'gray',
    padding:1,
    display:'flex',
    alignItems:'center',
    justifyContent:"center",
  },
  fillBox:{
    height:14,
    width:14,
    backgroundColor:'gray',
  },
  priceConatiner:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,

  },
  count:{
    fontSize:22,
    color:'white',
    fontWeight:'bold',
  },
  counterContainer:{
    width:90,
    backgroundColor:"#fd5c63",
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    borderRadius:8,
    alignItems:'center',
  },
  price:{
    width:250,
    fontSize:25,
    fontWeight:'bold',
    backgroundColor:'red',
    borderRadius:10,
    color:'white',
    padding:10,
    textAlign:'center',
  },
  foodInfo:{
    padding:10,
    paddingHorizontal:15,
  },
  modalSubBox:{
    backgroundColor:'white',
    // position:'absolute',
    bottom:0,
  },
  modalMainBox:{
    position:'absolute',
    bottom:0,
    backgroundColor:'rgba(0, 0, 0, 0.59)',
    width:'100%',
  },
  closeModal:{
        display:'flex',
    alignItems:'center',
    justifyContent:'center',
    
  },
  closeIcon:{
    padding:10,
    color:'white',
    backgroundColor:'black',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    borderRadius:30,
  },
});
