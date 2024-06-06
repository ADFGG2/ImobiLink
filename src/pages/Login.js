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

import ButtonVoltar from '../assets/Svg/Buttons/Bnt_Voltar';
import LogoCompleto from '../assets/Svg/Logo/Logo_Full';
import PessoaUser from '../assets/Svg/Diversos/User_pessoa';
import SenhaUser from '../assets/Svg/Diversos/Unlock_senha';

import Icon from 'react-native-vector-icons/MaterialIcons'; // Você pode usar qualquer conjunto de ícones



const Login = () => {


  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

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
      console.log("erro: " + error)
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
        source={require('../assets/Images/BackGround/Back_Login.png')}
        style={styles.backgraud_image}
      >

        <TouchableOpacity onPress={() => navigation.navigate('LoginECadastro')} >
          <ButtonVoltar />
        </TouchableOpacity>

        <View style={styles.space_logo} >
          <LogoCompleto />
        </View>

      </ImageBackground>



      <View style={styles.menu}>

        <View style={styles.view}>

          <PessoaUser />

          <TextInput
            style={styles.Input}
            value={user}
            onChangeText={(text) => { setUser(text) }}
            placeholder="CPF ou CNPJ" />

        </View>

        <View style={styles.view}>

          <SenhaUser />

          <TextInput
            style={styles.Input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={secureTextEntry}
            placeholder="Senha"
          />

          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon_eye}>
            <Icon name={secureTextEntry ? "visibility-off" : "visibility"} size={24} color="grey" />
          </TouchableOpacity>
        
        </View>

        <Botao labelbutton="Logar" aoclicar={RealizarLogin} />

        <TouchableOpacity style={{ opacity: 0.6, marginTop: -3, fontFamily: 'Arial', fontSize: 12, }}>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
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
  backgraud_image: {
    flex: 1,
    marginBottom: 302,
    height: "70vh",
    width: "100%",
  },
  menu: {
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '30%',
    marginBottom: 25
  },
  view: {
    backgroundColor: '#D9D9D9',
    opacity: 0.5,
    width: 272,
    height: 48,
    borderRadius: 7,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: 'row',

  },
  Input: {
    width: '55vw',
    height: '5vh',
    fontSize: 19,
    fontFamily: 'Courier New',
    fontWeight: '800',
    borderLeftWidth: 1,
    paddingLeft: 10,
    paddingRight: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#000",
    color: '#000',
    opacity: 0.5,

  },
  icon_eye: {
    position:'relative',
    left: -30
  }

});

