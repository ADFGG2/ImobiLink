import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ImageBackground, ScrollView, TouchableOpacity, View, Text } from 'react-native';
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


const AcessoMeusImoveis = () => {
  const navigation = useNavigation();
  const [imoveis, setImoveis] = useState([]);
  const [imoveisFiltrados, setImoveisFiltrados] = useState([]);
  const [imoveisShow, setImoveisShow] = useState(imoveis);
  const [pesquisa, setPesquisa] = useState("");
  let tipo;

  async function verificarLogin() {

    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();

    if (usuarioEstaLogado) {
      const dadosUser = await AuthService.PegarDadosLogados();
      tipo = dadosUser.Tipo;

    }
    else {
      navigation.navigate("LoginECadastro.js");
    }
  }

  useEffect(() => { verificarLogin() }, [])
  useEffect(() => { buscarImoveis() }, [])


  async function buscarImoveis() {
    const dadosUser2 = await AuthService.PegarDadosLogados();

    try {
      let response
      if (dadosUser2.Tipo == "PJ") {
        response = await ApiService.Get('/Imoveis/ListarMeusImoveisCnpj');
      } else {
        response = await ApiService.Get('/Imoveis/ListarMeusImoveisCpf');
      }
      setImoveis(response.data);
      setImoveisShow(response.data);
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
        style={styles.backgraud_image}
      >

        <LogoBackground />
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 235, }}  >
          <ButtonVoltar />
        </TouchableOpacity>

        <Text style={styles.titulo}>Meus Imoveis</Text>

      </ImageBackground>


      <View style={styles.portaPesquisa}>
      <BarraDePesquisa key={1} setImoveisShow={setImoveisShow} imoveisShow={imoveisShow} imoveis={imoveis} />
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.portaCards}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  portaCards: {
    marginTop: '143%',
    width: '90%',
    paddingBottom: 20
  }
})

export default AcessoMeusImoveis;

