import React from 'react';
import { View, Text, StyleSheet,ImageBackground, Pressable,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Duvidas = () => {

const navigation = useNavigation();  
  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('../images/fundos/back5.png')}
        style={styles.imagemFundo}
        >
          <Pressable onPress={() => navigation.goBack()} ><Text style={styles.return}> {`<`} </Text></Pressable>
          <Text style={styles.text}>Duvidas</Text>  
        </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  imagemFundo: {
      flex:1,
      resizeMode: "cover",
      height:"100%",
      width: "100%",
    }
});

export default Duvidas;