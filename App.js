/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import './globalVariables';
import { Image } from 'react-native';
 import Game from "./screens/game";
 import Login from "./screens/login";
 import Posts from "./screens/posts";
 import Contact from './screens/contact';
 import Hamburger from './components/hamburger';
 import Comment from './components/comment';
 import Share from './components/share';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './screens/profile';
import Aboutus from './screens/aboutus';
import Shop from './screens/shop';
 import Setting from './screens/setting';
import Language from './components/language';
import {NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import chatGPT from './components/ChatGPT';
const App = (props)=> {

  useEffect(() => {
    fetchAppLang();
  },[]);


  const fetchAppLang = async () => {
  const locale = Platform.select({
    ios: NativeModules.SettingsManager?.settings?.AppleLocale || NativeModules.SettingsManager?.settings?.AppleLanguages[0],
    android: NativeModules.I18nManager.localeIdentifier,
  });
  console.log(locale);
  // if(locale.includes('en'))
  //   {
  //     await AsyncStorage.setItem("postUrl", "https://buddhiyoga.in/site/en/wp-json/wp/v2/posts/");
  //     await AsyncStorage.setItem("gameBoard", 'en'); 
  //     global.config.GL_LANG_CODE='en';
  //     global.config.POST_URL="https://buddhiyoga.in/site/en/wp-json/wp/v2/posts/";
  //   }
  //   else 
    if(locale.includes('or'))
    {
      await AsyncStorage.setItem("postUrl", "https://buddhiyoga.in/site/or/wp-json/wp/v2/posts/");
      await AsyncStorage.setItem("gameBoard", 'or');
      global.config.GL_LANG_CODE='or';
      global.config.POST_URL="https://buddhiyoga.in/site/or/wp-json/wp/v2/posts/";
    }
    else
    {
      await AsyncStorage.setItem("postUrl", "https://buddhiyoga.in/site/en/wp-json/wp/v2/posts/");
      await AsyncStorage.setItem("gameBoard", 'en'); 
      global.config.GL_LANG_CODE='en';
      global.config.POST_URL="https://buddhiyoga.in/site/en/wp-json/wp/v2/posts/";
    }
  }

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
    
  function DrawerRoutes(){
    return(
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home" 
    screenOptions={{headerShown:false,
      drawerStyle:{backgroundColor: '#D5C0A4'},
      drawerItemStyle:{borderBottomWidth:1,borderColor: 'rgba(0,0,0,0.4)',width:"100%", paddingVertical: 7,paddingHorizontal:5, marginHorizontal: 0,marginVertical: 0, },
       drawerType:'front',
       drawerActiveBackgroundColor: 'rgba(255,255,255,0.2)',
       drawerActiveTintColor: '#582c24',
       drawerInactiveTintColor: '#582c24',

      }}>
      <Drawer.Screen name="Home" component={Game} options={{
           drawerIcon: ({focused, size}) => (
            <Image source={require("./assets/other/home.png")} style={{width:'12.3%',height:'110%'}}/>
        
           ),
           
        }}/>
      <Drawer.Screen name="Profile" component={Profile}  options={{
           drawerIcon: ({focused, size}) => (
            <Image source={require("./assets/other/register.png")} style={{width:'12.3%',height:'110%'}}/>
        
           ),
           
        }}/>
        <Drawer.Screen name="Shop" component={Shop}  options={{
           drawerIcon: ({focused, size}) => (
            <Image source={require("./assets/other/register.png")} style={{width:'12.3%',height:'110%'}}/>
        
           ),
           
        }}/>
      <Drawer.Screen name="About us" component={Aboutus}  options={{
           drawerIcon: ({focused, size}) => (
            <Image source={require("./assets/other/bookmark.png")} style={{width:'12.3%',height:'110%'}}/>
        
           ),
           
        }}/>
      <Drawer.Screen name="Contact us" component={Contact}  options={{
           drawerIcon: ({focused, size}) => (
            <Image source={require("./assets/other/messege.png")} style={{width:'12.3%',height:'110%'}}/>
        
           ),
           
        }}/>
         <Drawer.Screen name="Setting" component={Setting}  options={{
           drawerIcon: ({focused, size}) => (
            <Image source={require("./assets/other/settings.png")} style={{width:'12.3%',height:'110%'}}/>
        
           ),
           
        }}/>
    </Drawer.Navigator>
    )
  }

  return (
    <>
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Game" component={DrawerRoutes} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="ChatGPT" component={chatGPT}/>
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="Share" component={Share} />
        <Stack.Screen name="Language" component={Language} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
 export default App;
 