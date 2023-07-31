import { StyleSheet, Text, View,FlatList,Image,Dimensions, } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Carousel = () => {
     
    const flatlistRef = useRef()

    const [activeIndex, setActiveIndex] = useState(0)



    //Auto Scroll

    useEffect(() => {
       //if activeIndex === last index --> jump back to the first index
       //else activeIndex +1

      let interval = setInterval(() => {
         if(activeIndex === carouselData.length - 1){
            flatlistRef.current.scrollToIndex({
                index: 0,
                animation: true,
            });
          
            }
            else{
                flatlistRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animation: true,
               });
         }
        
       }, 2000);

       return () => clearInterval(interval)
    },[activeIndex])
    
const getItemLayout =(data , index) =>({
    length:WIDTH,
    offset:WIDTH*index,
    index: index
})



    //Data froCarousel

    const carouselData = [
        {
            id:'01',
            img:require('../assets/b1.jpg')
        },
        {
            id:'02',
            img:require('../assets/b2.jpg')
        },
        {
            id:'03',
            img:require('../assets/b3.jpg')
        }
    ]

    //Display img
  const renderItem = ({item,index}) =>{

    return(
        <View>
            <Image source={item.img} style={{height:HEIGHT*0.2,width:WIDTH}}/>
        </View>


    )
  }

  //Render Dot Indicators
  const renderDotIndictors = () =>{
   return (carouselData.map((dot,index) => {

    //if the active index === index

    if(activeIndex === index ){
     
        return (<View key={index} style={{backgroundColor:'#0092bb' , height:responsiveWidth(2.5),width:responsiveWidth(2.5),borderRadius:responsiveWidth(2.5)}} ></View>)

    }
    else{return (<View key={index} style={{backgroundColor:'#d7f3f4' ,height:responsiveWidth(2.5),width:responsiveWidth(2.5),borderRadius:responsiveWidth(2.5)}} ></View>)}
    }))
  }

  //handelScroll
  const handleScroll = (event) =>{

    //Get The scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log({scrollPosition})

    //Get the index of current active item

    const i= scrollPosition / WIDTH;
    var index  = Math.round(i)
    // console.log({index})

    //Update The index

    setActiveIndex(index)



  }


  return (
    <View style={{position:'relative'}}>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item)=>item.id}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}


      />

      <View style={styles.dot} >
      {renderDotIndictors()}
      </View>
     
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({

dot:{
    flexDirection:'row',
    justifyContent:'center',
    gap:6,
    position:'absolute',
    bottom:0,
    alignSelf:'center',
    marginBottom:responsiveWidth(2)

}

})