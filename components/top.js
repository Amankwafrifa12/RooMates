import react, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Design = () => {
  return ( <View style={styles.image}><Image source={require('../assets/top.png') }  
  style={styles.images}
  /></View>
  

);
}
 
const styles = StyleSheet.create({
  image: {position: 'absolute',
   top:-40,
   left:0,

 },
 images: { width: 320,
   height: 320,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 4,
    

 },

 imgs: { width: 300,
   height: 300,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 4,
    

 }
 
});
export default Design;







