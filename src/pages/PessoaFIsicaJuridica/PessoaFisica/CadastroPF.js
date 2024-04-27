import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import ToastService from '../../../Services/ToastService';
import ApiService from '../../../Services/ApiService';
import AuthService from '../../../Services/AuthService';

import DatePicker from 'react-native-neat-date-picker';
import CheckBox from '../../../components/checkbox/checkbox';
import CepInput from '../../../components/cepInput/cepInput';
import PhoneInput from '../../../components/phoneInput/phoneInput';
import CpfInput from '../../../components/cpfInput/cpfInput';
import RgInput from '../../../components/rgInput/rgInput';


const CadastroPessoaFisica = () => {
    const navigation = useNavigation();

    const [Nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [rg, setRG] = useState("");
    const [Email, setEmail] = useState("");
    const [Telefone, setTelefone] = useState("");
    const [Senha, setSenha] = useState("");
    const [confirmasenha, setconfirmasenha] = useState("");
    const [Cidade, setCidade] = useState("");
    const [CEP, setCEP] = useState("");
    const [Bairro, setBairro] = useState("");
    const options2 = [{text: 'Concordo com os termos e condições de uso', id:1}];

    const [showDatePicker, setShowDatePicker] = useState(false)
    const [date, setDate] = useState('');

    const openDatePicker = () => setShowDatePicker(true);

    const onCancel = () => {
      setShowDatePicker(false)
    }

    const onConfirm = (output) => {
      setShowDatePicker(false)
      setDate(output.dateString)
    }


    async function RealizarCadastro() {      
        try {
          if(!Nome || !CPF || !rg || !Email || !Telefone || !Senha || !Cidade || !CEP || !Bairro || !date){
            ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
            return;            
          }
          if(Senha != confirmasenha){       
            ToastService.Error("Erro ao realizar cadastro", "confirmar senha esta diferente");
            return;}
            const body = {
                Nome,
                CPF,
                rg,
                Email,
                Telefone,
                date,
                Senha,
                Cidade,
                CEP,
                Bairro
            };
            const response = await ApiService.Post("/PessoasFisicas/CadastrarPessoaFisica", (body))

            const token = response.data.token;

            await AuthService.SalvarToken(token);
            navigation.navigate("TelaPrincipal2");
        }
        catch (error) {
          console.log(error);
            if (error.response?.status === 401) {
                ToastService.Error("Erro ao realizar login", "E-mail e/ou senha inválidos!");
                return;
            }
            ToastService.Error("Erro ao realizar login", "Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
        }
    }


  return (
      <View style={styles.container}>
        <ImageBackground
        source={require("../../../images/fundos/back6.png")}
        style={styles.back}
        >
        <TouchableOpacity onPress={() => navigation.navigate('SelecaoCadastro')} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity> 
        <Text style={styles.titulo}>CADASTRO</Text>
        <View style={styles.portaInputs}>

            <TextInput 
            style={styles.inputs}
            value={Nome}
            onChangeText={(texto) => setNome(texto)}
            placeholder="Nome Completo" />

            <View style={styles.duplinha}>

                <CpfInput 
                cpfPai={CPF} 
                setCpfPai={setCPF} />
                

                <RgInput
                rgPai={rg}
                setRgPai={setRG} />

            </View>
           

            <TextInput 
            style={styles.inputs}
            value={Email}
            onChangeText={(texto) => setEmail(texto)}
            placeholder="E-mail" />

            <View style={styles.duplinha}>

            <PhoneInput 
            telefonePai={Telefone} 
            setTelefonePai={setTelefone} />

            <Pressable
              style={styles.inputs2}
              onPress={openDatePicker}
            >
              <TextInput
              editable={false}
              value={date}
              placeholder="data de nascimento" />

            </Pressable>
                
            </View>

            <TextInput 
            style={styles.inputs}
            value={Senha}
            onChangeText={(texto) => setSenha(texto)}
            placeholder="Senha" />

            <TextInput
            style={styles.inputs}
            value={confirmasenha}
            onChangeText={(texto) => setconfirmasenha(texto)}
            placeholder="Repita a senha" />

            <TextInput 
            style={styles.inputs}
            value={Cidade}
            onChangeText={(texto) => setCidade(texto)}
            placeholder="Cidade" />

            <View style={styles.duplinha}>

            <CepInput
                cepPai={CEP}
                setCepPai={setCEP} 
                setBairro={setBairro}
                setCidade={setCidade}/>

                <TextInput 
                style={styles.inputs2}
                value={Bairro}
                onChangeText={(texto) => setBairro(texto)}
                placeholder="Bairro" />
            
            </View>

            <DatePicker
            isVisible={showDatePicker}
            mode={'single'}
            onCancel={onCancel}
            onConfirm={onConfirm}
            colorOptions={{ headerColor: '#000', selectedDateBackgroundColor: "#000" }}
            />

            <CheckBox options={options2} onChange={op => alert(op)} />
            <Pressable 
              style={styles.botao}
              onPress={RealizarCadastro}
              >
                <Text style={styles.textobtn}>Cadastrar</Text>
            </Pressable>
        </View>
        
            
        
        

        </ImageBackground>
      </View>
  );
};

export default CadastroPessoaFisica;




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
