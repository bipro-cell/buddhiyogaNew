import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,TextInput,TouchableWithoutFeedback,Animated,Easing } from "react-native";
import{REGISTER_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileManagement from "./ProfileManagement";
import Loader from "./loader";

function Register({props}){

const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[phone,setPhone]=useState('');
const [status,setStatus]=useState(0);

const [userData,setUserData]=useState('');
const [submitStatus,setSubmitStatus] = useState(false);

useEffect(()=>{
  if(userData ==='')
  {
    checkUserStorage();
  }
  
});

const checkUserStorage=async()=>{
  
  var userStorageData=await AsyncStorage.getItem('buddhiyogaUserData');
  if(Object.keys(JSON.parse(userStorageData)).length >0 ||userStorageData != null || userStorageData!=undefined)
  {
    setStatus(1);
    setUserData(userStorageData);
    userStorageData=JSON.parse(userStorageData);
    console.log(userStorageData.name)
    setName(userStorageData.name);
    setEmail(userStorageData.email)
    setPassword(userStorageData.password);
    setPhone(userStorageData.phone);
  }
}

    const submitButonHandler=async()=>{
      setSubmitStatus(true);
       let data = {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify({
    username:name,
    email:email,
    // phone:phone,
    password:password,
    "roles":["customer"]
    }),
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic YnVkZGhpeW9nYTpHZEpSIDdYeFUgdHQ5YyBlSFZ2IFZCcnIgVHhEdg=='
    },
    
  };
  let response=  await fetch(REGISTER_URL,data)
    .then(response => response.json())  // promise
    .then(async(json) =>{
      setSubmitStatus(false);
      console.log(json.id);

      if(json.code==="existing_user_login")
      {
        alert("User Already Exists");

      }
      else if(json.code==="existing_user_email")
      {
        alert("Email Already Exists");
      }
      else{
        var userData={name:name, email:email, password:password, phone:phone,userID:json.id};
        await AsyncStorage.setItem('buddhiyogaUserData', JSON.stringify(userData));
        setStatus(1);
        alert("Successfully Registered");

      }
     } )
    }

   
    return (
        <>
            <View>
              {status===0 &&
                <Text style={styles.headings}>Register</Text>
              }
              {status===1 &&
                <Text style={styles.headings}>Profile Management</Text>
              }

                <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Enter Name"
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
                <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Enter Email"
        value={email}
        onChangeText={newValue => setEmail(newValue)}
        editable={status==0?true:false}
      />

                      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Enter Phone"
        value={phone}
        onChangeText={newValue => setPhone(newValue)}
      />
                      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder="Enter Password"
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
        
            {
              submitStatus &&
              <TouchableWithoutFeedback style={{}} disabled>
            <View>
            <Text style={styles.btnstext}>Submit</Text>
            <Loader/>
            </View>
            </TouchableWithoutFeedback>
            }
            {
              !submitStatus &&
              <TouchableWithoutFeedback style={{}} onPress={()=>submitButonHandler()}>
            <View>
            <Text style={styles.btnstext}>Submit</Text>
            {/* <Loader/> */}
            </View>
            </TouchableWithoutFeedback>
            }
        
              
</View>
        </>
    )
}
export default Register;

// const Styles = StyleSheet.create({
// input:{}
// });
const styles = StyleSheet.create({
	headings :{
		marginVertical:20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(183,153,114,1)',
	},
    input :{
        backgroundColor: 'rgba(183,153,114,0.15)',
        marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    btnstext:{
        textAlign: 'center',
        backgroundColor: "rgba(183,153,114,1)",
        color: '#fff',
        marginVertical: 20,
        paddingVertical: 8,
        borderRadius: 10,


        // width: 80,
        // textAlign: 'center'
    }
})