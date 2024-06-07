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

const AcessoVendas = () => {
    const navigation = useNavigation();
    const [imoveis, setImoveis] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    async function verificarLogin() {

      const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();
    
      if (!usuarioEstaLogado) {
        navigation.navigate("LoginECadastro.js");        
      }
    }

    useEffect(()=>{verificarLogin()}, [])
    useEffect(()=>{buscarImoveis()}, [] )


  async function buscarImoveis() {
    
    
   
    try{
      
      const response = await ApiService.Get('/Imoveis/ListarImoveisAVenda');
      
      setImoveis(response.data);
    }
    catch(erro){
      console.log(erro)
      ToastService.Error("Erro ao buscar Imóveis");
    }
  }

  

  return (
    <View>
 <ImageBackground
      source={require('../../images/fundos/Ondas.png')}
      style={styles.imagemFundo}
    >
      <View style={styles.topo}>
        <TouchableOpacity onPress={() => navigation.navigate("TelaPrincipal1")} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity> 
        <View style={styles.portaModal}>
                <ModalTelaPrincipal />
        </View>
      </View>
      <Text  style={styles.title}>Imoveis À Venda</Text>
      
    </ImageBackground>

    <View style={styles.portaPesquisa}>
          <BarraDePesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
      </View>
      

      {imoveis.map(
        imovel => (
          <CardImovel key={imovel.Codigo} imovel={imovel}/>
        )

      )}
    </View>
  );   
}

export default AcessoVendas;

const styles = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    height: '25em',
    width: "100%",
    alignItems: 'center'
  },
  title:{
    fontSize: '3em',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '10%',
    marginBottom: '15%',
    textAlign: 'center'
  },
  topo:{
    width: '100%',
    height:'5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    alignItems: 'center',
    marginTop: 25
  },
  return:{  
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(255,255,255)'
  },
  portaPesquisa:{
    width: "100%",
    height: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1em',
  }
})


