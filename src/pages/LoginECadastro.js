
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import Botao from '../components/Botao';
import { useNavigation } from '@react-navigation/native';
import AuthService from '../Services/AuthService';
import { useEffect } from 'react';
import LogoCompleto from '../assets/Svg/Logo/Logo_Full';



const LoginECadastro = () => {
  const navigation = useNavigation();

  useEffect(() => {
    VerificarLogin();
  }, []);

  async function VerificarLogin() {
    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();


    if (usuarioEstaLogado) {
      try {
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
      } catch (error) {
        console.log(error)
      }

    }
  }

  return (
    <View style={styles.container}>

      

      <ImageBackground
        source={require('../assets/Images/BackGround/Back_Login_Cadastro.png')}
        style={styles.backgraud_image}
      >
        <View style={styles.espaco} >
        <LogoCompleto/>
        </View>
        
        <View style={styles.menu}>
          <Botao labelbutton="Login" aoclicar={() => navigation.navigate('Login')} />

          <Botao labelbutton="Cadastrar" aoclicar={() => navigation.navigate('SelecaoCadastro')} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Duvidas')}>
            <Text style={{ opacity: 0.6,}}>Precisa de ajuda?</Text>
          </TouchableOpacity>

      </ImageBackground>
    </View>
  );

};


LoginECadastro.navigationOptions = {
  title: 'Home',
}


export default LoginECadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgraud_image: {
    flex: 1,
    resizeMode: "cover",
    height: "70vh",
    width: "100%",
    marginBottom:302,
    alignItems:'center',
    
  },
  espaco: {
    marginTop: 70,
    
  },
  menu: {
    
    marginTop:200,
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '30%',
    margin:5
  }

});
