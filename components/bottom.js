import react, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Bottoms = () => {
  return ( <View style={styles.bttm}><Image source={require('../assets/bttm.png') }  
  style={styles.bttms}
  /></View>
  

);
}
 
const styles = StyleSheet.create({
  bttm: {position: 'absolute',
   bottom:0,
   right:0,

 },
 bttms: { width: 100,
   height: 100,
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.8,
   shadowRadius: 4,
    

 }
 
});
export default Bottoms;







