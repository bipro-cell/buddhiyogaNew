import React,{useState,useEffect} from "react";
import { Animated,View,Text, TouchableWithoutFeedback ,Easing} from "react-native";
import { forwardRef } from "react";
const BlockInformation = forwardRef((props,ref) => {
    console.log(props,ref);
    const [isRotating, setRotation] = useState(true);
    const [lengthValueHolder,setlengthValueHolder] =useState(new Animated.Value(isRotating ? 0 : 1));

    useEffect(()=>{
       if(isRotating==true)
       {
        stopincreaseLengthFunction();
       }
       else
       {
        increaseLengthFunction();
       }
    },[isRotating]);

    const increaseLengthFunction = () =>{
        Animated.AnimatedInterpolation
        Animated.timing(lengthValueHolder,{
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false 
        }).start();
    }

    const stopincreaseLengthFunction = () =>{
        
        Animated.AnimatedInterpolation
        Animated.timing(lengthValueHolder,{
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false 
        }).start();
    }

    const lengthData = lengthValueHolder.interpolate({
        inputRange: [0,1],
        outputRange: ['10%','50%']
    });

    const viewLengthStyle={
        height: lengthData
    }

    const checkOnPress = ()=>{
        setRotation(!isRotating);
    }

return(
    
    <TouchableWithoutFeedback onPress={()=>checkOnPress()}>
    <Animated.View style={[{width:"100%", backgroundColor:"#D5C0A4",borderTopLeftRadius: 15,borderTopRightRadius: 15,borderColor:"rgba(0,0,0,1)",borderWidth: 1,padding: 15},viewLengthStyle]}>
        <Text>
        ref
        </Text>
    </Animated.View>
    </TouchableWithoutFeedback>
)

})

export default BlockInformation;