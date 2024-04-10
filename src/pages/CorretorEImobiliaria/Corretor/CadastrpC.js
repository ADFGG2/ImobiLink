import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const cadastroCorretor = () => {
    const [Nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [RG, setRG] = useState("");
    const [Email, setEmail] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [Nasc, setNasc] = useState("");
    const [Senha, setSenha] = useState("");
    const [Cidade, setCidade] = useState("");
    const [CEP, setCEP] = useState("");
    const [Bairro, setBairro] = useState("");
    



  return (
      <View style={styles.container}>
        <ImageBackground
        source={require("../../../images/fundos/back6.png")}
        style={styles.back}
        >
        <TouchableOpacity onPress={() => navigation.navigate('LoginECadastro')} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity> 
        <Text style={styles.titulo}>CADASTRO</Text>
        <View style={styles.portaInputs}>

            <TextInput 
            style={styles.inputs}
            value={Nome}
            onChangeText={(texto) => setNome(texto)}
            placeholder="Nome Completo" />

            <View style={styles.duplinha}>

                <TextInput 
                style={styles.inputs2}
                value={CPF}
                onChangeText={(texto) => setCPF(texto)}
                placeholder="CPF" />

                <TextInput 
                style={styles.inputs2}
                value={RG}
                onChangeText={(texto) => setRG(texto)}
                placeholder="RG" />

            </View>
           

            <TextInput 
            style={styles.inputs}
            value={Email}
            onChangeText={(texto) => setEmail(texto)}
            placeholder="E-mail" />

            <View style={styles.duplinha}>

                <TextInput 
                style={styles.inputs2}
                value={Telefone}
                onChangeText={(texto) => setTelefone(texto)}
                placeholder="DDD + Telefone" />

                <TextInput 
                style={styles.inputs2}      
                value={Nasc}
                onChangeText={(texto) => setNasc(texto)}          
                placeholder="Data de Nasc" />
                
            </View>

            <TextInput 
            style={styles.inputs}
            value={Senha}
            onChangeText={(texto) => setSenha(texto)}
            placeholder="Senha" />

            <TextInput 
            style={styles.inputs}
            placeholder="Repita a senha" />

            <TextInput 
            style={styles.inputs}
            value={Cidade}
            onChangeText={(texto) => setCidade(texto)}
            placeholder="Cidade" />

            <View style={styles.duplinha}>

                <TextInput 
                style={styles.inputs2}
                value={CEP}
                onChangeText={(texto) => setCEP(texto)}
                placeholder="Cep" />

                <TextInput 
                style={styles.inputs2}
                value={Bairro}
                onChangeText={(texto) => setBairro(texto)}
                placeholder="Bairro" />
            
            </View>
            <TouchableOpacity 
            style={styles.botao}>
                <Text style={styles.textobtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        
            
        
        

        </ImageBackground>
      </View>
  );
};

export default cadastroCorretor;




const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  back: {
    flex:1,
    resizeMode: "cover",
    height:"100%",
    width: "100%",
    display: 'flex'
  },
  return:{  
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(255,255,255)'
  },
  titulo:{
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: '5vh'
  },
  portaInputs:{
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '18vh'
  },
  inputs:{
    width: '90vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    marginBottom: '1vh',
    borderColor: '#707070',
    padding: '1vh'
  },
  duplinha:{
    width: '90vw',
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1vh'
  },
  inputs2:{
    width: '44vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    borderColor: '#707070',
    padding: '1vh'
  },
  botao:{
    width: '43vw',
    height: '6vh',
    borderRadius: '3vh',
    backgroundColor: '#999EA9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textobtn:{
    fontSize: '1.6em',
    fontWeight: '500',
    color: '#FFFFFF'
  }
  
});
