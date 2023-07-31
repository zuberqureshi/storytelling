import { StyleSheet, Text, View,FlatList,Image,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';


const AlrticalCard = () => {

    const navigation = useNavigation()


    const data = [
        ['Cricket',require('../assets/cricket.png')],
        ['Bitcoin',require('../assets/bitcoin.png')],
        ['Earth',require('../assets/earth.png')],
        ['Cricket',require('../assets/cricket.png')],
        ['Cricket',require('../assets/cricket.png')],
        ['Cricket',require('../assets/cricket.png')],
        ['Cricket',require('../assets/cricket.png')],
        ['Cricket',require('../assets/cricket.png')],
    ]


    const renderItem = (props) => {


        return (
          <Item
            name={props.item[0]}
            img={props.item[1]}
            onPress={() => {
           
           
              }}
          
           
          />
        );
      };
      
      const Item = ({name,img,onPress}) => {
        
        // console.log("flatlist item",)
        
        return (
          <>
          <View style={styles.Container} >

              <View  style={styles.sunContainer} >

              <View style={styles.head} >
      
      <Text style={styles.titel} >{name}</Text>
      <Text style={styles.descrp} >Without setting this prop, FlatList would not know it needs to re-render any 
      items because it is a PureComponent and the prop comparison will not show any changes.</Text>
      </View>

      <Image source={img} style={styles.icon} />

              </View>

        

           
          
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Artical',{tag:name})}} >

             <Text style={styles.buttonText}  >Read More</Text>

          </TouchableOpacity>

          
          
          </View>

      
         </>
      );
      
      
      }




  return (

    <View style={styles.mainContainer} >
      
      <FlatList
        data={data}
        renderItem={renderItem}
        // ListEmptyComponent={EmptyText}
        showsVerticalScrollIndicator={false}
      />

    </View>
 
  )
}

export default AlrticalCard

const styles = StyleSheet.create({

    mainContainer:{
       
       flex:1,
    //    margin:responsiveWidth(3.5)
    alignSelf:'center'

    },
    Container:{
    backgroundColor:'#0092bb',
    marginBottom:responsiveWidth(1.5),
    borderRadius:responsiveWidth(3),
    padding:responsiveWidth(3),
    gap:responsiveWidth(2),


   

    
    },
    icon:{
        resizeMode:'contain',
        width:responsiveWidth(15),
        height:responsiveHeight(8),
        alignSelf:'center'
    },
    sunContainer:{
        flexDirection:'row',
        alignSelf:'center'

    },
    head:{
        // flexDirection:'row',
      width:responsiveWidth(70),
      margin:responsiveWidth(2),

      



      
    },
    titel:{
        color:'#ffffff',
        fontSize:responsiveFontSize(2.1),
        fontWeight:'500',
        marginBottom:responsiveWidth(2)
     

    },
    descrp:{
        color:'#ffffff',
        fontSize:responsiveFontSize(1.8),
        
       
    },
    button:{
        alignSelf:'center',
        backgroundColor:'#d7f3f4',
        paddingVertical:responsiveWidth(3.8),
        paddingHorizontal:responsiveWidth(15),
        borderRadius:responsiveWidth(2.5),
        
    },
    buttonText:{
        color:'#000',
        fontSize:responsiveFontSize(1.9),
        fontWeight:'500'
    }

})