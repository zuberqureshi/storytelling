import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import Navigation from './src/navigation/index'
import {TranslatorProvider} from 'react-native-translator'
import {requestUserPermission, notificationListener} from './src/utiles/notificationService'


const App = () => {

  useEffect(() => {
    
    requestUserPermission()
    notificationListener()
     
    }, [])
    


  return (
    <>
   <TranslatorProvider>
   <Navigation/>

   </TranslatorProvider>
   
 
    </>
  )
}

export default App

const styles = StyleSheet.create({})