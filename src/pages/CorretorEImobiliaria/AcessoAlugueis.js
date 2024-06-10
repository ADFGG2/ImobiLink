import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CardImovel from '../../components/cardImovel/CardImovel'
import ApiService from '../../Services/ApiService';
import ToastService from '../../Services/ToastService';
import AuthService from '../../Services/AuthService';
import ModalTelaPrincipal from '../../components/modalTelaPrincipal/ModalTelaPrincipal';
import BarraDePesquisa from '../../components/Pesquisa/BarraDePesquisa';

import ButtonVoltar from '../../assets/Svg/Buttons/Bnt_Voltar';
import LogoBackground from '../../assets/Svg/Logo/Logobackground';


const AcessoAlugueis = () => {
  const navigation = useNavigation();
  const [imoveis, setImoveis] = useState([]);
  const [imoveisShow, setImoveisShow] = useState(imoveis)
  const [pesquisa, setPesquisa] = useState("");
  async function verificarLogin() {

    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();

    if (!usuarioEstaLogado) {
      navigation.navigate("LoginECadastro.js");
    }
    else {
      buscarImoveis();
    }
  }

  useEffect(() => { verificarLogin() }, [])


  async function buscarImoveis() {
    console.log("cheguei aqui")
    try {

      const response = await ApiService.Get('/Imoveis/ListarImoveisAlugaveis');
      console.log(response)
      setImoveis(response.data);
      setImoveisShow(response.data);
      console.log(imoveisShow);
    }
    catch (erro) {
      console.log(erro)
      ToastService.Error("Erro ao buscar Imóveis");
    }
  }



  return (

    <View style={styles.container}>

      <ImageBackground
        source={require('../../assets/Images/BackGround/Back_Cadastrar.png')}
        style={styles.backgraud_image}>
        <LogoBackground />
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 235, }}  >
          <ButtonVoltar />
        </TouchableOpacity>
        <Text style={styles.titulo}>Imoveis á alugar</Text>
      </ImageBackground>


      <View style={styles.portaPesquisa}>
        <BarraDePesquisa key={1} setImoveisShow={setImoveisShow} imoveisShow={imoveisShow} imoveis={imoveis} />
      </View>

     
        <View style={styles.portaCards}>
          {imoveisShow ? imoveisShow.map(
            (imovel, key) => (
              <CardImovel key={key} imovel={imovel} />
            )
          )
            :
            imoveis.map((imovel, key) => (
              <CardImovel key={key} imovel={imovel} />
            ))
          }
        </View>

      </View>

  );
}

export default AcessoAlugueis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  backgraud_image: {
    flex: 1,
    marginTop: -250,
    height: "70vh",
    width: "100%",
  },
  titulo: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50
  },
  portaPesquisa: {
    position: 'fixed',
    top: 250
  },
  portaCards:{
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 270,
    
  }
})


