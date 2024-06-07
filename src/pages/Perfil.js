import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthService from '../Services/AuthService';
import foto from '../../src/assets/Images/Image Perfil .png';
import edit from '../images/icons/edit.png';
import ModalTelaPrincipal from '../components/modalTelaPrincipal/ModalTelaPrincipal';

import LogoBackgroundPerfil from '../../src/assets/Svg/Logo/Logo_background_perfil';
import ButtonVoltarEditarPerfil from '../assets/Svg/Buttons/Bnt_Voltar_editar_perfil';
import { Feather } from '@expo/vector-icons'

const Perfil = () => {

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
      console.log(dadosUser)
    }
    else {
      navigation.navigate("LoginECadastro.js");
    }
  }

  const formatRG = (rg) => {
    return rg ? rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4') : '';
  };

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber ? phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3') : '';
  };

  const getPrimeiroENome = (nomeCompleto) => {
    if (!nomeCompleto) return "";
    const partes = nomeCompleto.split(" ");
    if (partes.length < 2) return nomeCompleto; // Retorna o nome completo se houver menos de duas partes
    return `${partes[0]} ${partes[1]}`; // Retorna o primeiro nome e o sobrenome
  };

  if (dados.Tipo == "PJ") {

    return (
      <View style={styles.container}>

        <ImageBackground
          source={require('../images/fundos/back9.png')}
          style={styles.imagemFundo}
        >
          <View style={styles.topo}>
            <TouchableOpacity onPress={() => navigation.goBack()} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity>
            <View style={styles.portaModal}>
              <ModalTelaPrincipal />
            </View>
          </View>
          <View style={styles.portaImg}>
            <Image source={foto} style={styles.foto} />
          </View>

          <View style={styles.portaDados}>
            <Text style={styles.titleName}>{dados.nome}</Text>
            <View style={styles.portaEdit}><Image style={styles.edit} source={edit} /></View>

            <View style={styles.duplinha}>
              <Text style={styles.tipo} >Email:</Text>
              <Text style={styles.dado}>{dados.email}</Text>
            </View>

            <View style={styles.duplinha}>
              <Text style={styles.tipo} >Endereco: </Text>
              <Text style={styles.dado}>{dados.bairro}, {dados.cidade}</Text>
            </View>

            <View style={styles.duplinha}>
              <Text style={styles.tipo} >Telefone:</Text>
              <Text style={styles.dado}>{dados.telefone}</Text>
            </View>


            <View style={styles.duplinha}>
              <Text style={styles.tipo}>RG: </Text>
              <Text style={styles.dado}>{dados.rg}</Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    );

  }
  else if (dados.Tipo == "PF") {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

          <ImageBackground >
            < LogoBackgroundPerfil />
          </ImageBackground>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ButtonVoltarEditarPerfil />
          </TouchableOpacity>

          <View style={styles.ellipse}>
            <Pressable style={styles.circuloInternoPerfil} >
              <Image
                source={foto} style={styles.imagemPerfil} />
            </Pressable>

            <View style={styles.area_bnt_editar}>
              <TouchableOpacity style={styles.button_editar}>
                <Feather name="edit-2" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.portaDados}>
            <Text style={styles.titleName}>{getPrimeiroENome(dados.nome)}</Text>

            <TouchableOpacity >
              <Text style={styles.text_editar_perfil}> Editar Perfil </Text>
            </TouchableOpacity>

            <View style={styles.duplinha}>
              <Text style={styles.text_dados} >Email</Text>
              <Text style={styles.text_info}>{dados.email}</Text>
            </View>

            <View style={styles.duplinha}>
              <Text style={styles.text_dados} >Endereco </Text>
              <Text style={styles.text_info}>{dados.bairro}, {dados.cidade}</Text>
            </View>

            <View style={styles.duplinha}>
              <Text style={styles.text_dados} >Telefone</Text>
              <Text style={styles.text_info}>{formatPhoneNumber(dados.telefone)}</Text>
            </View>


            <View style={styles.duplinha}>
              <Text style={styles.text_dados}>RG </Text>
              <Text style={styles.text_info}>{formatRG(dados.rg)}</Text>
            </View>

            <View style={styles.duplinha}>
              <Text style={styles.text_dados} >Senha </Text>
              <View style={{alignContent:'center', alignItems:'center', flexDirection:'row',}}>
              <Text style={styles.text_senha}> * * * * * * * * * * * * </Text>
              <Feather name="eye-off" size={20} color="black" style={{marginLeft:5}}/>
              </View>
            </View>

            

          </View>

        </View>
      </View>
    );
  }
  else if (dados.Tipo == "Corretor") {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={require('../images/fundos/back9.png')}
          style={styles.imagemFundo}>
        </ImageBackground>
      </View>
    );
  }
  else if (dados.Tipo == "Imobiliaria") {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={require('../images/fundos/back9.png')}
          style={styles.imagemFundo}
        >
          <View style={styles.portaImg}>
            <Image source={foto} style={styles.foto} />
          </View>

        </ImageBackground>

      </View>
    );
  }

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 54,
    paddingVertical: 15,
    backgroundColor: "#BEBEBE"
  },
  ellipse: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  circuloInternoPerfil: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2, // Metade da largura e altura para manter a forma circular
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#BEBEBE",
    overflow: 'hidden',// Garantir que a imagem não saia da elipse
    shadowOffset: {
      width: 0, // deslocamento horizontal da sombra
      height: 0, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.1, // opacidade da sombra
    shadowRadius: 7, // raio da sombra
    elevation: 2, // elevação da sombra (apenas Android)
  },
  imagemPerfil: {
    width: 125,
    height: 125,
    borderRadius: 125 / 2, // Metade da largura e altura para manter a forma circular
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: 17,
    backgroundColor: "#BEBEBE",
    overflow: 'hidden',// Garantir que a imagem não saia da elipse
  },
  area_bnt_editar: {
    backgroundColor: '#BEBEBE',
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.30)',
    top: '30%',
    right:'19%'
  },
  text_editar_perfil: {
    marginTop: 30,
    marginLeft: 200,
    marginRight: 10,
    fontSize: 12,
    fontWeight: '500',
    color: "#4391C8"
  },
  imagemFundo: {
    display: 'flex',
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  menu: {
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
    width: '100%',
    height: '25%'
  },
  portaImg: {
    width: '100%',
    height: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  foto: {
    width: '15vh',
    height: '15vh',
    borderWidth: '1vh',
    borderColor: '#E3E9F2',
    borderRadius: '7.5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  portaDados: {
    width: 335,
    height: 575,
    alignItems: 'center',
    backgroundColor: "#BEBEBE",
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 80,
    shadowOffset: {
      width: 2, // deslocamento horizontal da sombra
      height: 2, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 5, // raio da sombra
    elevation: 2, // elevação da sombra (apenas Android)

  },
  duplinha: {
    width: '100%',
    
  },
  tipo: {
    color: 'rgba(153, 158, 169, 1)',
    fontSize: '1em'
  },
  dado: {
    color: 'rgb(0,0,0)',
    fontSize: '1em'
  },
  titleName: {
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 30,
    borderBottomWidth: 1,
  },
  return: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(255,255,255)'
  },
  topo: {
    width: '100%',
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    alignItems: 'center',
    marginTop: 25
  },
  portaBack: {
    width: 40,
    height: 40,
    borderRadius: 10,
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(100,100,100)'
  },
  edit: {
    width: '1.5em',
    height: '1.5em',
    marginLeft: '90%'
  },
  text_dados: {
    marginTop: 30,
    marginLeft: 34,
    fontSize: 15,
    fontWeight: '600',
    color: "#000",
    opacity: 0.4,
    
  },
  text_info: {
    marginTop: 5,
    marginLeft: 34,
    fontSize: 14,
    color: "#000",
  },
  text_senha: {
    marginTop: 5,
    marginLeft: 34,
    fontSize: 14,
    color: "#000",
  },
});
export default Perfil;