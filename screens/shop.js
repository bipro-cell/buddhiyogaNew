import React from "react";
import Hamburger from '../components/hamburger';
import { View,Text,StyleSheet,SafeAreaView,Linking, TouchableWithoutFeedback  } from "react-native";
import {SHOP_URL} from "@env";
function Shop({navigation}) {

    const resetGame=(e)=>{
        setGameState(1);
      }
      const about=(e)=>{
        alert("about game");
    
      }

    return ( 
        <>
        <SafeAreaView>
        <Hamburger navigation={navigation} resetFunction={resetGame} resetStatus={false} infoFunction={about}/>
        <View style={styles.mains}>
        <TouchableWithoutFeedback onPress={()=>{Linking.openURL(SHOP_URL)}}>
           <Text style={{fontStyle:"normal",fontWeight:"bold",fontSize:17,marginTop:"90%", marginHorizontal:40}}>Click here to visit the SHOP page.</Text>
           </TouchableWithoutFeedback>
        </View>
        </SafeAreaView>
        </>
        );
}
const styles = StyleSheet.create({
    mains:{
        paddingHorizontal: 15,
        backgroundColor: 'rgba(183,153,114,0.25)',
        height: '100%',
        
    }
})

export default Shop;