import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';



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
            <View style={styles.pTexto}>
                <Text style={styles.titulo}>Agora ja falta pouco</Text>
                <Text style={styles.texto}>Selecione qual o perdfil de cadastro</Text> 
            </View>
            

            <View style={styles.menu}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.coluna} onPress={() => navigation.navigate('CadastroPessoaFisica')} >
                        <Image source={require("../images/icons/u3.png")} style={styles.imagem}/>
                        <Text style={styles.user}>Pessoa Física</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.coluna} onPress={() => navigation.navigate('CadastroPessoaJuridica')} >
                        <Image source={require("../images/icons/u2.png")} style={styles.imagem}/>
                        <Text style={styles.user}>Pessoa Jurídica</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linha}>
                    <TouchableOpacity style={styles.coluna} onPress={() => navigation.navigate('CadastroCorretora')}>
                        <Image source={require("../images/icons/u1.png")} style={styles.imagem} />
                        <Text style={styles.user}>Corretor</Text>                        
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.coluna} onPress={() => navigation.navigate('CadastroImobiliaria')} >
                        <Image source={require("../images/icons/u4.png")} style={styles.imagem} />
                        <Text style={styles.user}>Imobiliaria</Text>                        
                    </TouchableOpacity>
                </View>
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
    height: '20%'
  },
  back: {
    flex:1,
    resizeMode: "cover",
    height:"100%",
    width: "100%"
  },
  pTexto:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  titulo:{
    display: 'flex',
    fontWeight: 'bold',
    fontSize: '2em'
  },
  texto:{
    display: 'flex',
    fontSize: '1em'
 },
    espaco2:{
        width: '100%',
        height: '3%'
    },
  menu:{
    display: 'flex',
    width: '100%',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  linha:{
    display: 'flex',
    width: '70vw',
    height: '20vh',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  coluna:{
    display: 'flex',
    width: '30vw',
    height: '15vh',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: '2vh'
  },
  imagem:{
    display: 'flex',
    width: '16vw',
    height: '8vh'
  },
  descricao:{
    display: 'flex'
  },
  return:{  
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh'
  }

});