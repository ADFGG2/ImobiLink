import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthService from '../Services/AuthService';
import foto from '../images/exemplo/fotoExemplo.jpg';
import edit from '../images/icons/edit.png';
import ModalTelaPrincipal from '../components/modalTelaPrincipal/ModalTelaPrincipal';

const Perfil = () => {

  const navigation = useNavigation();
  const[dados, setDados] = useState("");
  


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
    else{
      navigation.navigate("LoginECadastro.js");
    }
  }
  if(dados.Tipo=="PJ"){

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
                <Image source={foto} style={styles.foto}/>
            </View>

            <View style={styles.portaDados}>
              <Text style={styles.titleName}>{dados.nome}</Text>
              <View style={styles.portaEdit}><Image style={styles.edit} source={edit}/></View>

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
  else if(dados.Tipo=="PF"){
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
                <Image source={foto} style={styles.foto}/>
            </View>

            <View style={styles.portaDados}>
              <Text style={styles.titleName}>{dados.nome}</Text>
              <View style={styles.portaEdit}><Image style={styles.edit} source={edit}/></View>

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
  else if(dados.Tipo=="Corretor"){
    return (
      <View style={styles.container}>
  
        <ImageBackground
          source={require('../images/fundos/back9.png')}
          style={styles.imagemFundo}
        >
  
        </ImageBackground>
      </View>
    );
  }
  else if(dados.Tipo=="Imobiliaria"){
    return (
      <View style={styles.container}>
  
        <ImageBackground
          source={require('../images/fundos/back9.png')}
          style={styles.imagemFundo}
        >
          <View style={styles.portaImg}>
            <Image source={foto} style={styles.foto}/>
          </View>
  
        </ImageBackground>
      </View>
    );
  }

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
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
  portaImg:{
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
  portaDados:{
    width: '75%',
    height: '65%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(200, 200, 200, 1)',
    borderRadius: '10%',
    padding: '3vh',
    shadowColor: 'rgb(150,150,150)',
    shadowOffset: {
      width: 2,
      height: 2,
    },

  },
  duplinha:{
    width: '100%',
    marginBottom: '2vh',
  },
  tipo:{
    color: 'rgba(153, 158, 169, 1)',
    fontSize: '1em'
  },
  dado:{
    color: 'rgb(0,0,0)',
    fontSize: '1em'
  },
  titleName:{
    textAlign: 'center',
    fontSize: '1.5em',
    textDecorationLine: 'underline'
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
edit:{
    width: '1.5em',
    height: '1.5em',
    marginLeft: '90%'
}
});
export default Perfil;