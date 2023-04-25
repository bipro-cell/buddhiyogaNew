import React,{useState,useEffect} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated,View,Text,Image, TouchableWithoutFeedback ,Easing,TouchableOpacity,ScrollView,StyleSheet} from "react-native";

const PostBottomSticky = ({increaseFont,decreaseFont,postComment,postShare}) =>{
    return (
        <View style={styles.tabView}>
            <View style={{flexDirection:"row", alignItems:"center",width:"100%", justifyContent:"space-evenly"}}>
            <TouchableWithoutFeedback onPress={(e)=>increaseFont()}>
            <Image  source={require("../assets/other/fontsplus.png")} style={{flex: .35, aspectRatio:2.8,
                 resizeMode:"contain"}} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={(e)=>decreaseFont()}>
            <Image  source={require("../assets/other/fontminus.png")} style={{flex: .35, aspectRatio:2.8,
                 resizeMode:"contain"}} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={(e)=>postComment()}>
            <Image  source={require("../assets/other/messege.png")} style={{flex: .35, aspectRatio:2.8,
                 resizeMode:"contain"}} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={(e)=>postShare()}>
            <Image  source={require("../assets/other/share.png")} style={{flex: .35, aspectRatio:2.8,
                 resizeMode:"contain"}} />
            </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabView:{
        position: 'absolute',
        // flex:0.1,
        left: 0,
        right: 0,
        bottom: 78,
        backgroundColor:'#b79972',
        flexDirection:'row',
        height:40,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        zIndex:1

    }
})


export default PostBottomSticky;