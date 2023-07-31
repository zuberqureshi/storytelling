import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from '../../component/Carousel';
import Options from '../../component/Options';
import AlrticalCard from '../../component/AlrticalCard';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = () => {
  



 
  return (
    <SafeAreaView style={styles.mainContainer}>
    <Carousel/>
     {/* <Banner/> */}
     {/* <CarouselF/> */}
    <Options/>
    <Options/>
    <AlrticalCard/>
   
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
   backgroundColor:'#d7f3f4'
  },
 

});
