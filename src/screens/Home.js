import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
   
    mainContainer:{
        flex:1,
     
    }

})