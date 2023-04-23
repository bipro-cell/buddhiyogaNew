import React,{useState,useEffect} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated,View,Text, TouchableWithoutFeedback ,Easing,TouchableOpacity,ScrollView,StyleSheet} from "react-native";

const PostBottomSticky = () =>{
    return (
        <View style={styles.tabView}>
            <View style={{flexDirection:"row", alignItems:"center",width:"100%", justifyContent:"space-evenly"}}>
            <TouchableWithoutFeedback onPress={()=>console.log("Increase Font Size")}>
            <Icon name='plus' size={25} style={{marginHorizontal:'5%'}} ></Icon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("Decrease Font Size")}>
            <Icon name='minus' size={25} style={{marginHorizontal:'5%'}} ></Icon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("Check Comments")}>
            <Icon name='comment' size={25} style={{marginHorizontal:'5%'}} ></Icon>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>console.log("Share")}>
            <Icon name='share' size={25} style={{marginHorizontal:'5%'}} ></Icon>
            </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabView:{

        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: 40,
        backgroundColor:'#b79972',
        flexDirection:'row',
        height:80,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        zIndex:1

    }
})


export default PostBottomSticky;