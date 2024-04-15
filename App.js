import react, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Design from './components/top';
import Bottoms from './components/bottom';

export default function App() {
  
  return (
     
    <View style={styles.container}>  
    <Design /> 
    <Bottoms />
    <Button title="Sign Up" />
    <Button title="Login" />

    
      
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    

  },

  input: {
    borderRadius: 50,
    borderWidth: 1,
    width: 250, 
    paddingLeft: 10, 
    paddingRight: 10 ,
    margin: 5, 
    
  },

  
});
