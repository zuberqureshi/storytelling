import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import React,{useState} from 'react'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import {useTranslator} from 'react-native-translator';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



const Artical = (props) => {

    // console.log("props Artical",props.route.params)

    const params = props.route.params

    const {translate} = useTranslator();

    const [value, setValue] = useState('zuber');
    const [result, setResult] = useState('');

    
    const onTranslate = async () => {
     try{ const _result = await translate('en','hi', 'zuber', {
        type : 'google',
        // timeout: 10000,
      });
     await setResult(_result);
      } catch (e) {
        console.log("Translate Error")
      }

    };

  return (

    <View style={styles.mainContainer} >


    <View style={styles.wrapper} >
  
     <Text style={styles.titel} >{params.tag}</Text>
        
    <ScrollView 

      showsVerticalScrollIndicator={false}
    style={styles.descrp} >
     {/* <Text style={styles.descrpText} >
     Today is the anniversary of the publication of Robert Frost’s iconic poem “Stopping by Woods on a Snowy Evening,” a fact that spurred the Literary Hub office into a long conversation about their favorite poems, the most iconic poems written in English, and which poems we should all have already read (or at least be reading next). Turns out, despite frequent (false) claims that poetry is dead and/or irrelevant and/or boring, there are plenty of poems that have sunk deep into our collective consciousness as cultural icons. (What makes a poem iconic? For our purposes here, it’s primarily a matter of cultural ubiquity, though unimpeachable excellence helps any case.) So for those of you who were not present for our epic office argument, I have listed some of them here.

NB that I limited myself to one poem per poet—which means that the impetus for this list actually gets bumped for the widely quoted (and misunderstood) “The Road Not Taken,” but so it goes. I also excluded book-length poems, because they’re really a different form. Finally, despite the headline, I’m sure there are many, many iconic poems out there that I’ve missed—so feel free to extend this list in the comments. But for now, happy reading (and re-reading):
Without a doubt one of the most important poems of the 20th century. “It has never lost its glamour,” Paul Muldoon observed. “It has never failed to be equal to both the fracture of its own era and what, alas, turned out to be the even greater fracture of the ongoing 20th century and now, it seems, the 21st century.” See also: “The Love Song of J. Alfred Prufrock.”
     </Text> */}

     <Text style={styles.descrpText} >
      {result}
     </Text>
    </ScrollView>


    <View style={styles.buttonContainer} >

      <TouchableOpacity style={styles.like} onPress={()=>{onTranslate()}} >
        <Text style={styles.likeText} >Like</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Unlike} >
        <Text style={styles.UnlikeText} >UnLike</Text>
      </TouchableOpacity>




    </View>


    </View>
        



    </View>
  )
}

export default Artical

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#d7f3f4'

    },
    wrapper:{
        margin:responsiveWidth(6),
        backgroundColor:'#ecf0f1',
        borderRadius:responsiveWidth(4),
        justifyContent:'center',
        alignItems:'center',
        padding:responsiveWidth(3),
        gap:responsiveWidth(4)

    },
    titel:{
        color:'#000',
        fontSize:responsiveFontSize(2.1),
        fontWeight:'bold',
      
    },
    descrp:{
        height:HEIGHT*0.55,


    },
    descrpText:{
        fontSize:responsiveFontSize(1.8),
        
        textAlign:'justify',
        letterSpacing:responsiveFontSize(0.1)
        
    },
    buttonContainer:{
        flexDirection:'row',
        gap:responsiveWidth(10),
     
       

    },
    like:{
        backgroundColor:'#0092bb',
        paddingVertical:responsiveWidth(2),
        paddingHorizontal:responsiveWidth(8),
        borderRadius:responsiveWidth(1.5)
    },
    likeText:{
        color:'#ffffff',
        fontSize:responsiveFontSize(2.1)
    },
    Unlike:{
        backgroundColor:'#0092bb',
        paddingVertical:responsiveWidth(2),
        paddingHorizontal:responsiveWidth(6.5),
        borderRadius:responsiveWidth(1.5)
    },
    UnlikeText:{
        color:'#ffffff',
        fontSize:responsiveFontSize(2.1)
    }
    



})