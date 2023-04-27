import React from "react";
import { View,Text,StyleSheet,SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Hamburger from '../components/hamburger';
import Language from "../components/language";
function Setting({navigation}){
console.log(navigation.closeDrawer);
    const resetGame=(e)=>{
        setGameState(1);
      }
      const about=(e)=>{
        alert("about game");
    
      }

        return(
            <>
            <SafeAreaView>
            <Hamburger navigation={navigation} resetFunction={resetGame} infoFunction={about}/>
            <View style={styles.mains}>
                <View >
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate('Language')}>
                    <Text>Change Language</Text>
                    </TouchableWithoutFeedback>
                </View>
               
            </View>
            </SafeAreaView>
            </>
        )

}
const styles = StyleSheet.create({
    mains:{
        paddingHorizontal: 15,
        backgroundColor: 'rgba(183,153,114,0.25)',
        height: '100%',
    }
})

export default Setting