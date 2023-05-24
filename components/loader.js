import React from "react";
import { View,ActivityIndicator,StyleSheet } from "react-native";

function Loader(){

    return(
        <View style={styles.container}>
    <ActivityIndicator size="large" color="#563229"/>
  </View>
)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      marginTop:20
    },
  });
export default Loader;