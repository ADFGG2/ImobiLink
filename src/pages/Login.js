import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground, TextInput } from 'react-native-web';
import Botao from '../components/Botao';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



  

const Login = () => {

  const navigation = useNavigation();  
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');


  const signIn = ()=> {
    senha=='' ? alert("input vazio") : alert("usuario: "+user+"\n  senha: "+senha)    
  }

  return (
    <View style={styles.container}>

      <ImageBackground
      source={require('../images/fundos/back2.png')}
      style={styles.imagemFundo}
      >
        <TouchableOpacity onPress={() => navigation.navigate('LoginECadastro')} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity> 
      </ImageBackground>
      <View style= {styles.menu}>

          <View style={styles.view}>          

              <Image style={styles.img} source={require("../images/icons/pessoinha.png")} />              

              <TextInput 
              style={styles.Input}
              onChangeText={setUser}
              placeholder="user"/>

          </View>

          <View style={styles.view}>

              <Image style={styles.img} source={require("../images/icons/cadeado.png")}/>

              <TextInput 
              style={styles.Input}
              onChangeText={setSenha}
              placeholder="senha" 
            />
          </View>

          <Botao labelbutton="Logar" aoclicar= {signIn} />
          <Text>Esqueci minha senha</Text>
        </View>
    </View>
  );
  
}

export default Login;


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
imagemFundo: {
    flex:1,
    height:"70vh",
    width: "100%",
  },
menu: {
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '30%'    
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
},
return:{  
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '2em',
  paddingTop: '1vh',
  color: 'rgb(255,255,255)'
}

});

