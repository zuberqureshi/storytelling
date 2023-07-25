import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Splash from '../screens/Splash'

const Stack = createNativeStackNavigator();

const AuthStack = () => {

    const [splashShow, setSplashShow] = useState(true)

    const load = ()=>{

  
        setTimeout(() => {
          setSplashShow(false)
         }, 2000);
      }
      
    //this useEffect Run Ones time when user open the application  
    useEffect(() => {
     
      //In this Step , we calling load Function, it is decalare above
      load()
  
      console.log(" inside useeffect   ");
    
    }, []);


    console.log("mainStack",splashShow)
 
    return (
  
      // it is a navigator stack, contain all screen routes
  
  <Stack.Navigator screenOptions={{headerShown:false}}>
  
   {splashShow?<Stack.Screen name='Splash' component={Splash}/>:null}
   
    <Stack.Screen name='Home' component={Home} />

  
  </Stack.Navigator>
  
    )
  }
  
  export default AuthStack



