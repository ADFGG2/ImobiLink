import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput } from 'react-native-web';
import Botao from '../components/Botao';
import { useState } from 'react';

export default function Login() {

  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');


  const signIn = ()=> {
    alert('cliquei');
  }

  
  return (
    <View style={styles.container}>

      <ImageBackground
      source={require('../images/back2.png')}
      style={styles.imagemFundo}
      >
        <View style= {styles.espaco} ></View>

        <View style= {styles.menu}>

          <View style={styles.view}>          

              <Image style={styles.img} source={require("../images/pessoinha.png")} />              

              <TextInput 
              style={styles.Input}
              onChangeText={setUser}
              value="user"
              placeholder="user"/>

          </View>

          <View style={styles.view}>

              <Image style={styles.img} source={require("../images/cadeado.png")}/>

              <TextInput 
              style={styles.Input}
              onChangeText={setSenha}
              value="senha"
              placeholder="senha" 
            />
          </View>

          <Botao labelbutton="Logar" aoclicar= {signIn} />
          <Text>Esqueci minha senha</Text>
        </View>

        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
imagemFundo: {
    flex:1,
    resizeMode: "cover",
    height:"100%",
    width: "100%",
  },
espaco: {
    height: '70%'
  },
menu: {
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '25%'
    
  },
view: {
    backgroundColor: '#D9D9D9',
    width: '70vw',
    height: '6vh',
    borderRadius: '1vh',
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: 'row',
    paddingLeft: '1vw'
},
Input:{
    width: '55vw',
    height: '5vh',
    fontSize: '1.4em',
    fontWeight: 'bold',
    borderLeftWidth:1,
    paddingLeft: "3vw",
    borderColor: "#999EA9",
    borderRadius: '0 0 1vh 1vh',
    color: '#999EA9'
},
img:{
  width: '5.3vw',
  height: '3vh'
}

});

