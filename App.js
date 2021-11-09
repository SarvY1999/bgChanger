
import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)');

  const changeBG = () =>{

    let color = "rgb("+
      Math.floor(Math.random() * 256) +
      ","+ 
      Math.floor(Math.random() * 256) +
      ","+ 
      Math.floor(Math.random() * 256) +
      ")";

    setRandomColor(color); 
  };

  const changeToBlack = () =>{

    let black = "rgb(0, 0, 0)"

    setRandomColor(black); 
  };

  return (
    <>
    <StatusBar backgroundColor={randomColor}/>
      <View style={[styles.container, {backgroundColor:randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeToBlack}>
          <Text style={[styles.text, {marginTop:20}]}>Reset</Text>
        </TouchableOpacity>
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(32, 0, 126)',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 20,
    textTransform: 'uppercase',
  },
});

export default App;
