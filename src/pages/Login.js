import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground, TextInput } from 'react-native-web';
import Botao from '../components/Botao';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ApiService from '../Services/ApiService';
import AuthService from '../Services/AuthService';
import { useEffect } from 'react';
import ToastService from '../Services/ToastService';

const Login = () => {

  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    VerificarLogin();
  }, []);

  async function VerificarLogin() {
    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();


    if (usuarioEstaLogado) {
      const dadosUsuarioLogado = await AuthService.PegarDadosLogados();
    
      switch (dadosUsuarioLogado.Tipo) {
        case "Corretor":
            

          navigation.navigate("TelaPrincipal1")

          break;

        case "Imobiliaria":
          
          navigation.navigate("TelaPrincipal1")

          break;
        
        case "Pj":

          navigation.navigate("TelaPrincipal2");

          break;

        case "PF":

          navigation.navigate("TelaPrincipal2");

          break;
      
        default:
          


          break;
      }
    }
  }
  async function RealizarLogin() {
    if (senha == "" || user == "") {
      ToastService.Error("campo vazio! \n preencha todos os campos")
      return;
    }
    try {
      const body = new URLSearchParams({
        user,
        senha
      });

      const response = await ApiService.Post("/Usuarios/Login", body)
      const token = response.data.token;
      const pagina = response.data.page;

      await AuthService.SalvarToken(token);
      navigation.navigate(pagina);

    }
    catch (error) {
      console.log("erro: "+error)
      if (error.response?.status === 401) {
        ToastService.Error("Erro ao realizar login", "E-mail e/ou senha inválidos!");
        console.log("Erro ao realizar login", "E-mail e/ou senha inválidos!")
        return;
      }
      ToastService.Error("Erro ao realizar login", "Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
      console.log("Erro ao realizar login", "Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
    }
  }



  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../images/fundos/back2.png')}
        style={styles.imagemFundo}
      >
        <TouchableOpacity onPress={() => navigation.navigate('LoginECadastro')} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity>
      </ImageBackground>
      <View style={styles.menu}>

        <View style={styles.view}>

          <Image style={styles.img} source={require("../images/icons/pessoinha.png")} />

          <TextInput
            style={styles.Input}
            value={user}
            onChangeText={(text) => { setUser(text) }}
            placeholder="CPF ou CNPJ" />

        </View>

        <View style={styles.view}>

          <Image style={styles.img} source={require("../images/icons/cadeado.png")} />

          <TextInput
            style={styles.Input}
            value={senha}
            onChangeText={(text) => { setSenha(text) }}
            secureTextEntry={true}
            placeholder="senha"
          />
        </View>

        <Botao labelbutton="Logar" aoclicar={RealizarLogin} />
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
    flex: 1,
    height: "70vh",
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
  Input: {
    width: '55vw',
    height: '5vh',
    fontSize: '1.4em',
    fontWeight: 'bold',
    borderLeftWidth: 1,
    paddingLeft: "3vw",
    borderColor: "#999EA9",
    borderTopRightRadius: '1vh',
    borderBottomRightRadius: '1vh',
    color: '#999EA9'
  },
  img: {
    width: '5.3vw',
    height: '3vh'
  },
  return: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(255,255,255)'
  }

});

