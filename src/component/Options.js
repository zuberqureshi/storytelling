import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Options = () => {



const data =[
    [require('../assets/cricket.png'),'Cricket'],
    [require('../assets/bitcoin.png'),'Cricket'],
    [require('../assets/earth.png'),'Cricket'],
    [require('../assets/cricket.png'),'Cricket'],

   
]





  return (
   
    <View style={styles.mainContainer}>

    {
        data.map((e,index) => 
          
            <View 
             key={index}
            style={styles.card} >
               
               <Image source={e[0]} style={styles.cardImg} />

                <Text style={styles.cardText} >{e[1]}</Text>
            </View>

          
         )
    }
     

    </View>


  )
}

export default Options

const styles = StyleSheet.create({
    
    mainContainer:{
        
        flexDirection:'row',
        gap:responsiveWidth(5),
        flexWrap:'wrap',
       
        marginTop:responsiveWidth(5),
       justifyContent:'center',
       paddingBottom:responsiveWidth(3)

    
        
     
    },
    card:{
       alignItems:'center',
       backgroundColor:'#0092bb',
       width:responsiveWidth(20),
       height:responsiveHeight(10),
       justifyContent:'center',
       borderRadius:responsiveWidth(2)


    },
    cardImg:{
        resizeMode:'contain',
        width:responsiveWidth(8),
        height:responsiveHeight(5),
    },
    cardText:{
        color:'#ffffff',
        fontSize:responsiveFontSize(1.9),
        fontFamily:'Poppins-Regular',
        fontWeight:'500'

    }




})