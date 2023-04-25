import React from "react";
import { Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Zoomin from './zoomin';
function Postsheader({navigation}){

    return(
        <View style={{width:"100%",height:"5%",marginVertical:0,paddingVertical:3,flexDirection:"row",backgroundColor:"#b79972"}}>
            <View style={{flexDirection:"row", alignItems:"center",width:"50%", justifyContent:"flex-start"}}>
            <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
            <Image  source={require("../assets/other/backs.png")} style={{flex: .8, aspectRatio:2.8,
                 resizeMode:"contain"}} />
            </TouchableWithoutFeedback>
            <View style={{width:"50%"}}>
                <Image  source={require("../assets/login/buddiyogaLogo.png")} style={{flex: 1, aspectRatio:2.8,
                 resizeMode:"contain"}} />
             </View>
            </View>
        </View>
        
        
    )
}

export default Postsheader;