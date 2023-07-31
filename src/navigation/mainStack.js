import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import Splash from '../screens/Splash'
import Artical from '../screens/Artical/Artical'


const Stack = createNativeStackNavigator();

const AuthStack = () => {

    const [splashShow, setSplashShow] = useState(true)


    var options = {
      Home: {
        
  
      },

    }


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
   
    <Stack.Screen name='Home' component={Home} options={{headerShown:true,title:'',headerStyle: {
        backgroundColor: '#0092bb',
      },}} />

<Stack.Screen name='Artical' component={Artical} options={{headerShown:true,title:'',headerStyle: {
        backgroundColor: '#0092bb',
      },
      headerBackVisible:false,
      
      }} />

  
  </Stack.Navigator>
  
    )
  }
  
  export default AuthStack



