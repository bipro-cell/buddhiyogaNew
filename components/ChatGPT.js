import React,{useState,useEffect} from "react";
import { Animated,Text, TouchableWithoutFeedback ,Easing,ScrollView,Image,View, SafeAreaView,Dimensions,TouchableOpacity} from "react-native";
import {AI_URL}  from '@env';
import axios from "axios";
const ChatGPT=()=>{
  const { width, height } = Dimensions.get('window');

    // const [aiResult,setAiResult]=useState("");
    // useEffect(()=>{
    //    if(aiResult.length<=0) 
    //    {
    //     callChatGPTData();
    //    }
    // });
    async function callChatGPTData(data) {
        console.log(AI_URL)
        try {
            fetch("http://69.57.163.217:8000/aiapi/getTextFromOpenAIApi", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"textToAI":data}),
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
            })
            .done();
        } 
        catch (error) {
        console.error(error);
        }
       
      }
    async function clickHandler(data) {
        // alert(data);
        await callChatGPTData(data);
    }

    const cellStr=['janma','krodha','kama','vaikuntha'];
    return(
        <SafeAreaView style={{backgroundColor:"#cfc19f", width: width,height: height,flex: 1, flexDirection: "column",justifyContent: 'space-between', paddingHorizontal: 10}}>
            <ScrollView style={{}}>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row',alignContent: 'center', alignItems: 'center',flexWrap: 'wrap'}}>
                {cellStr.map((cell)=>
                 <View style={{width: "48%", paddingHorizontal:30, paddingVertical: 30}}>
                    <TouchableOpacity onPress={(e) => clickHandler(cell)}>
                    <Text style={{fontSize: 20,textTransform: 'capitalize',fontWeight: 'bold',backgroundColor: '#b79972',textAlign: 'center', padding: 20, lineHeight: 95, borderRadius: 10, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1, elevation: 10, shadowColor: '#b79972'}}>{cell}</Text>
                    </TouchableOpacity>
                 </View>
                 )}
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ChatGPT;