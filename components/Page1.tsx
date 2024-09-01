import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from "react-native";
import React from "react";

const Page1 = () => {
  return (
    <View>
        <ScrollView>

      <Cuppon 
        name="Buy One, Get One Free"
        offer="Purchase any burger and get a second burger of equal or lesser value for free."
        cuppon="#XRGHG"
        url="https://i.pinimg.com/564x/8d/f5/40/8df5407df495f8ce9c7b8b9904bde058.jpg"
        />
        
      <Cuppon 
        name="$1 Off Any Big Mac"
        offer="Save $1 on any Big Mac purchase."
        cuppon="#XCFGD"
        url="https://i.pinimg.com/564x/0d/83/5a/0d835af84c55ac2ac0102e2864131b74.jpg"
      />
      
      <Cuppon 
        name="Free Fries with Burger Purchase"
        offer="Get a free medium fries with the purchase of any burger."
        cuppon="#CVHGK"
        url="https://i.pinimg.com/564x/8a/4a/aa/8a4aaa3a0326d8bef6fc3a6bb1eded18.jpg"
      />
      
      <Cuppon 
        name="50% Off Any Double Cheeseburger"
        offer="Enjoy 50% off any double cheeseburger."
        cuppon="#XCGHK"
        url="https://i.pinimg.com/564x/ca/82/a7/ca82a7fcfa15d6cb4b50bed88c2f1d77.jpg"
      />
      
      <Cuppon 
        name="Free Drink with Combo Meal"
        offer="Receive a free medium drink with the purchase of any burger combo meal."
        cuppon="#CVHJK"
        url="https://i.pinimg.com/736x/09/80/b9/0980b972f962b7ca72868b2574fd97f2.jpg"
      />
      
      <Cuppon 
        name="$2 Off Any Signature Burger"
        offer="Save $2 on any Signature Crafted Recipe burger."
        cuppon="#CVHMG"
        url="https://i.pinimg.com/564x/95/24/1d/95241d397efa0780f5a40454f96bbb73.jpg"
      />
      <Cuppon 
        name="Family Pack Offer"
        offer="Get 4 burgers, 4 fries, and 4 drinks for $20."
        cuppon="#WEHJO"
        url="https://i.pinimg.com/564x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg"
      />
        </ScrollView>
    </View>
  );
};

const Cuppon = (props) => {
    return(
        <View style={styles.discountContainer} >
        <View style={styles.left} >
            <View style={styles.leftTop} >
                <Text style={styles.name} >{props.name}</Text>
                <Text style={styles.offer} >{props.offer}</Text>
            </View>
            <View style={styles.leftBottom} >
                <Text style={styles.coppon} >{props.cuppon}</Text>
                <TouchableOpacity><Text style={styles.apply} >Apply</Text></TouchableOpacity>
            </View>
        </View>
        <View style={styles.right}>
            <Image style={styles.image}  source={{uri: props.url}} />
        </View>
      </View>
    )
}
export default Page1;

const styles = StyleSheet.create({
    discountContainer:{
        padding:10,
        margin:10,
        elevation:20,
        borderRadius:10,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flex:1,
    },
    left:{
        flex:2.8
    },
    right:{
        flex:1.2
    },
    leftTop:{
        marginBottom:8,
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
    },
    offer:{
        fontSize:18,
        color:'gray',
    },
    leftBottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    apply:{
        color:"white",
        padding:8,
        backgroundColor:'orangered',
        borderRadius:8,
        fontWeight:'bold',
        fontSize:16,
    },
    coppon:{
        color:'red',
        fontWeight:'bold',
        fontSize:18,
    },
    image:{
        flex:1,
        borderRadius:10,
        padding:10,
        margin:10,
    },
});
