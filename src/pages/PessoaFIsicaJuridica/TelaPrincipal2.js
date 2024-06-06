import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalTelaPrincipal from '../../components/modalTelaPrincipal/ModalTelaPrincipal';
import foto from '../../assets/Images/Image Perfil .png'
import { useEffect, useState } from 'react';
import AuthService from '../../Services/AuthService';


const TelaPrincipal2 = () => {

  const navigation = useNavigation();
  const [dados, setDados] = useState("");



  useEffect(() => {
    VerificarLogin();
  }, []);

  async function VerificarLogin() {

    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();


    if (usuarioEstaLogado) {
      const dadosUser = await AuthService.PegarDadosLogados();
      setDados(dadosUser);
    }
    else {
      navigation.navigate("LoginECadastro.js");
    }
  }

  const getPrimeiroENome = (nomeCompleto) => {
    if (!nomeCompleto) return "";
    const partes = nomeCompleto.split(" ");
    if (partes.length < 2) return nomeCompleto; // Retorna o nome completo se houver menos de duas partes
    return `${partes[0]} ${partes[1]}`; // Retorna o primeiro nome e o sobrenome
  };

  const getTipoUsuario = (tipo) => {
    return tipo === "PJ" ? "Pessoa Jurídica" : "Pessoa Física";
  };

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../assets/Images/BackGround/Back_Tela_Principal.jpg')}
        style={styles.imagemFundo}
      >


        <View style={styles.perfil}>

          <View style={styles.circuloExternoPerfil}>
            <Pressable style={styles.circuloInternoPerfil} onPress={() => { navigation.navigate("Perfil") }}>
              <Image
                source={foto} style={styles.imagemPerfil}
              />
            </Pressable>
          </View>

          <View style={styles.dados}>
            <Text style={styles.nome}>
              {dados.Tipo == "PJ" ? dados.NomeEmpresa : getPrimeiroENome(dados.nome)}
            </Text>
            <Text style={styles.tipo}>{getTipoUsuario(dados.Tipo)}</Text>
          </View>

          <ModalTelaPrincipal />

        </View>

        <View style={styles.portaBotoes}>

          <TouchableOpacity style={styles.button_1} onPress={() => { navigation.navigate("AcessoMeusImoveis") }}>
            <ImageBackground source={require('../../assets/Images/Imovel.jpeg')} resizeMode='contain'>
              <View style={{
                width: 250,
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              }}>
                <Text style={styles.btnTxt}>Meus Imoveis</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_2} onPress={() => { navigation.navigate("CadastrarImovel") }}>

            <ImageBackground source={require('../../assets/Images/Cadastrando.jpeg')} resizeMode='center' >
              <View style={{
                width: 250,
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              }}>
                <Text style={styles.btnTxt}>Cadastrar Imoveis</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_3} onPress={() => { navigation.navigate("EditarImovel") }}>

            <ImageBackground source={require('../../assets/Images/Editar Imovel.jpeg')} resizeMode='center' >
              <View style={{
                width: 250,
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              }}>

                <Text style={styles.btnTxt}>Editar Imoveis</Text>

              </View>
            </ImageBackground>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    
    </View>
  );

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
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

  perfil: {
    marginTop: 15,
    width: '80%',
    height: '10vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dados: {
    width: '65%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: '2vh'
  },
  nome: {
    fontSize: 25,
    fontFamily: 'sans-serif',
    fontWeight: '600',
    color: '#FFF'
  },
  tipo: {
    fontSize: '1em',
    fontWeight: '100',
    color: '#FFF'
  },

  portaBotoes: {
    width: '60%',
    height: '22vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

  },
  circuloExternoPerfil: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2, // Metade da largura/altura
    backgroundColor: '#E3E9F2', // Cor de fundo do círculo
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 2, // deslocamento horizontal da sombra
      height: 2, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.3, // opacidade da sombra
    shadowRadius: 5, // raio da sombra
    elevation: 2, // elevação da sombra (apenas Android)

  },
  circuloInternoPerfil: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2, // Metade da largura/altura
    backgroundColor: '#E3E9F2', // Cor de fundo do círculo interno
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowOffset: {
      width: 0, // deslocamento horizontal da sombra
      height: 0, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.3, // opacidade da sombra
    shadowRadius: 2, // raio da sombra
    elevation: 0, // elevação da sombra (apenas Android)

  },
  imagemPerfil: {
    width: 67,
    height: 67,
    borderRadius: 67 / 2, // Metade da largura/altura
  },
  button_1: {
    backgroundColor: '#999EA9',
    width: 230,
    height: 50,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: "#999EA9",
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    shadowOffset: {
      width: 3, // deslocamento horizontal da sombra
      height: 3, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 4, // raio da sombra
    elevation: 1, // elevação da sombra (apenas Android)
  },
  button_2: {
    backgroundColor: '#999EA9',
    width: 230,
    height: 50,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: "#999EA9",
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    shadowOffset: {
      width: 3, // deslocamento horizontal da sombra
      height: 3, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 4, // raio da sombra
    elevation: 1, // elevação da sombra (apenas Android)
  },
  button_3: {
    backgroundColor: '#999EA9',
    width: 230,
    height: 50,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: "#999EA9",
    marginTop: 13,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    shadowOffset: {
      width: 3, // deslocamento horizontal da sombra
      height: 3, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 4, // raio da sombra
    elevation: 1, // elevação da sombra (apenas Android)
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff'
  }

});
export default TelaPrincipal2;