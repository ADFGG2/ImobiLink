
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OpcaoCadastro from '../components/opcaoCadastro/OpcaoCadastro';
import LogoCompleto from '../assets/Svg/Logo/Logo_Full';
import ButtonVoltar from '../assets/Svg/Buttons/Bnt_Voltar';


const SelecaoCadastro = () => {  

  const navigation = useNavigation();  

  return(
    <View style={styles.container}>

      
        <ImageBackground
            source={require('../assets/Images/BackGround/Back_cadastro.png')}
            style={styles.backgraud_image}
        > 
            <TouchableOpacity onPress={() => navigation.navigate('LoginECadastro')} >
                 <ButtonVoltar />
            </TouchableOpacity>

            <View style={styles.espaco} >
              <LogoCompleto/>
            </View>
            

            
            <View style={styles.centraliza}>

            <Text style={{  fontSize: '2.4em', fontWeight: 'bold',textAlign: 'center', color: '#999EA9', marginBottom: 10, marginTop: 110} }> PERFIL DE ACESSO</Text>


              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroPessoaFisica")}}>
                <OpcaoCadastro tipoUsuario={"Pessoa Fisica"}  />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroPessoaJuridica")}}>
                <OpcaoCadastro tipoUsuario={"Pessoa Jurídica"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{navigation.navigate("CadastroCorretor")}}>                
                <OpcaoCadastro tipoUsuario={"Corretor(a)"} />
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  espaco:{
    marginTop: 5
  },
  backgraud_image: {
    flex: 1,
    marginTop: -15,
    height: "70vh",
    width: "100%",

  },
  centraliza:{
    width: '100%',
    display:'flex',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});