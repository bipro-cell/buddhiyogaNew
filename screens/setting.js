import React,{useCallback} from "react";
import { View,Text,StyleSheet,SafeAreaView, TouchableWithoutFeedback,Linking } from "react-native";
import Hamburger from '../components/hamburger';
import Language from "../components/language";
function Setting({navigation}){
// console.log(navigation.closeDrawer);
    const resetGame=(e)=>{
        setGameState(1);
      }
      const about=(e)=>{
        alert("about game");
    
      }

        const _openAppSetting = useCallback(async () => {
          await Linking.openSettings();
        }, []);

        return(
            <>
            <SafeAreaView>
            <Hamburger navigation={navigation} resetFunction={resetGame} infoFunction={about}/>
            <View style={styles.mains}>
                <View >
                    <TouchableWithoutFeedback onPress={_openAppSetting }>
                    <Text style={styles.textstyle}>Change Language</Text>  
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
    },
    textstyle:{
        fontSize:20,
        paddingTop:10,
        marginLeft:10,
        fontWeight:"bold",
        textAlign:'left',
        
      },
})

export default Setting