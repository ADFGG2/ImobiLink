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
 
const AcessoFavoritos = () => {
 
 
  const navigation = useNavigation();
  const [imoveis, setImoveis] = useState([]);
  const [imoveisShow, setImoveisShow] = useState("");
 
  const signIn = () => {
    senha == '' ? alert("input vazio") : alert("usuario: " + user + "\n  senha: " + senha)
  }
 
  const imovel = {
    valorTotal: "1.500,00", tipo: "Venda", local: "Rua rouxinou n°102", tamanho: "23", quartos: "2", banheiros: "3", salas: "4", ativo: false
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
      <Text style={styles.titulo}>Imoveis Favoritos</Text>
    </ImageBackground>
 
 
    <View style={styles.portaPesquisa}>
      <BarraDePesquisa key={1} setImoveisShow={setImoveisShow} imoveisShow={imoveisShow} imoveis={imoveis} />
    </View>
 
   
      <View style={styles.portaCards}>
        {imoveisShow ? imoveisShow.map(
          (imovel, key) => (
            <CardImovel key={key} imovel={imovel} estrela />
          )
        )
          :
          imoveis.map((imovel, key) => (
            <CardImovel key={key} imovel={imovel} estrela />
          ))
        }
      </View>
 
    </View>
 
  );
}
 
export default AcessoFavoritos;
 
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