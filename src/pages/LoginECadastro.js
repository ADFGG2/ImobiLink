import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native-web';
import Botao from '../components/Botao';
import { useNavigation } from '@react-navigation/native';

const LoginECadastro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../images/fundos/back1.png')}
        style={styles.imagemFundo}
      >
        <View style={styles.espaco} ></View>

        <View style={styles.menu}>
          <Botao labelbutton="Login" aoclicar={() => navigation.navigate('Login')} />
          <Botao labelbutton="Cadastrar" aoclicar={() => navigation.navigate('SelecaoCadastro')} />
          <TouchableOpacity onPress={() => navigation.navigate('Duvidas')}><Text>Precisa de ajuda?</Text></TouchableOpacity>
        </View>

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
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  espaco: {
    height: '70%'
  },
  menu: {
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '25%'

  }

});
