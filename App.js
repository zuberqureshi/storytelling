import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/index'
import {TranslatorProvider} from 'react-native-translator'

const App = () => {
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