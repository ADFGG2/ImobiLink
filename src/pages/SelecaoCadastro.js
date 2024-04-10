import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import OpcaoCadastro from '../components/opcaoCadastro/OpcaoCadastro';



const SelecaoCadastro = () => {  

  const navigation = useNavigation();  

  return(
    <View style={styles.container}>
        <ImageBackground
            source={require("../images/fundos/back3.png")}
            style={styles.back}
        > 
            <TouchableOpacity onPress={() => navigation.navigate('LoginECadastro')} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity>
            <View style={styles.espaco}></View>
            <Text style={styles.titulo}> PERFIL DE ACESSO</Text>
            <View style={styles.centraliza}>

              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroPessoaFisica")}}>
                <OpcaoCadastro tipoUsuario={"Pessoa Fisica"}  />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroPessoaJuridica")}}>
                <OpcaoCadastro tipoUsuario={"Pessoa Jurídica"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroCorretor")}}>                
                <OpcaoCadastro tipoUsuario={"Corretora"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroImobiliaria")}}>
                  <OpcaoCadastro tipoUsuario={"Imobiliaria"} />
              </TouchableOpacity>
             
            </View>
        </ImageBackground>
    </View>
  ); 
}


export default SelecaoCadastro;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  espaco:{
    width: '100%',
    height: '50%'
  },
  back: {
    flex:1,
    resizeMode: "cover",
    height:"100%",
    width: "100%"
  },
  return:{  
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh'
  },
  titulo:{
    fontSize: '2.4em',
    fontWeight: '50',
    textAlign: 'center',
    color: '#999EA9',
    marginBottom: '5vh'
  },
  centraliza:{
    width: '100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});