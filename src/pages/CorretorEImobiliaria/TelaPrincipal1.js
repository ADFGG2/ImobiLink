import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuTelaPrincipal from '../../components/menuTelaPrincipal/MenuTelaPrincipal';
import ModalTelaPrincipal from '../../components/modalTelaPrincipal/ModalTelaPrincipal';
import foto from '../../images/exemplo/fotoExemplo.jpg'
import btn1 from '../../images/icons/telaPrincipal/btn1.png'
import btn2 from '../../images/icons/telaPrincipal/btn2.png'
import btn3 from '../../images/icons/telaPrincipal/btn3.png'
import { useEffect, useState } from 'react';
import AuthService from '../../Services/AuthService';

const TelaPrincipal1 = () => {

  const navigation = useNavigation();
  const[dados, setDados] = useState("");
  


  useEffect(() => {
    VerificarLogin();
  }, []);

  async function VerificarLogin() {
    
    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();
    

    if (usuarioEstaLogado) {
      const dadosUser = await AuthService.PegarDadosLogados();
      setDados(dadosUser);
    }
    else{
      navigation.navigate("LoginECadastro.js");
    }
  }

  
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../images/fundos/back7.png')}
        style={styles.imagemFundo}
      >
        <View style={styles.perfil}>
            <Pressable style={ styles.irPerfil} onPress={()=>{navigation.navigate("Perfil")}}>
              <View style={styles.portaImg}>
                <Image source={foto} style={styles.foto}/>
              </View>
              
              <View style={styles.dados}>
                <Text style={styles.nome}>{dados.Tipo == "Corretor"? dados.Nome : dados.RazaoSocial}</Text>
                <Text style={styles.tipo}>{dados.Tipo}</Text>
              </View>
            </Pressable>
          <View style={styles.portaModal}>
            <ModalTelaPrincipal />
          </View>
          
        </View>
        <View style={styles.portaBotoes}>

          <Pressable style={styles.poertaBtn} onPress={()=>{navigation.navigate("AcessoVendas")}}>
            <ImageBackground source={btn1} style={styles.btn}>
              <Text style={styles.btnTxt}>Imoveis À Venda</Text>  
            </ImageBackground> 
          </Pressable>

          <Pressable style={styles.poertaBtn} onPress={()=>{navigation.navigate("AcessoAlugueis")}}>
            <ImageBackground source={btn2} style={styles.btn}>
              <Text style={styles.btnTxt}>Imoveis À Alugar</Text>  
            </ImageBackground> 
          </Pressable>

          <Pressable style={styles.poertaBtn} onPress={()=>{navigation.navigate("AcessoFavoritos")}}>
            <ImageBackground source={btn3} style={styles.btn}>
              <Text style={styles.btnTxt}>Imoveis Favoritos</Text>  
            </ImageBackground> 
          </Pressable>

        </View>

      </ImageBackground>
      <MenuTelaPrincipal 
      func1="AcessoVendas"
      func2="AcessoAlugueis"
      func3="Duvidas"
      func4="Imobilink" />
    </View>
  );

};



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%'
  },
  imagemFundo: {
    display: 'flex',
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    paddingTop: '12%',
    alignItems: 'center'
  },
  menu: {
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '25%'
  },
  portaImg:{
    width: '20%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  foto: {
    width: '10vh',
    height: '10vh',
    borderWidth: '1vh',
    borderColor: '#E3E9F2',
    borderRadius: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  perfil:{
    width: '75%',
    height: '13vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, 
  irPerfil:{
    display: 'flex',
    flexDirection: 'row',
  },
  dados: {
    width: '65%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '2vh'
  },
  nome: {
    fontSize: '1.1em',
    fontWeight: '900',
    color: '#FFF'
  },
  tipo: {
    fontSize: '1em',
    fontWeight: '100',
    color: '#FFF'
  },
  portaModal:{
    width: '3.5vh',
    height: '13vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '1vh'
  },
  portaBotoes:{
    width: '100%',
    height: '19.5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '5vh'
  },
  btn:{
    width: '25vh',
    height: '6.5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0.5vh',
    marginBottom: '0.5vh'
  },
  btnTxt:{
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#FFF'
  }

});
export default TelaPrincipal1;