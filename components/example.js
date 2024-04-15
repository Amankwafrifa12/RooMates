import react, { useState } from "react";
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Design from './components/top';
import Bottoms from './components/bottom';

export default function App() {
  const clickHandler = () => {
    setName('Nana Yaw');
    setAge(30)
    
  }
  const [name, setName] = useState('Kwasi');
  const [age, setAge] = useState(20);
  return (
     
    <View style={styles.container}>  
    <Design /> 
    <Bottoms />
      <Text>my name is {name} and I am {age} years</Text>  
      <TextInput 
      placeholder="enter name"
      style={styles.input}
      onChangeText={(val) => setName(val) }/>
       <TextInput 
      placeholder="enter name"
      style={styles.input}
      onChangeText={(val) => setAge(val) }/>
      
           
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
