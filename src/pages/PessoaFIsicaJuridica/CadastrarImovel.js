import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import ToastService from '../../Services/ToastService';
import ApiService from '../../Services/ApiService';
import AuthService from '../../Services/AuthService';

import DatePicker from 'react-native-neat-date-picker';
import CheckBox from '../../components/checkbox/checkbox';
import CepInput from '../../components/cepInput/cepInput';
import PhoneInput from '../../components/phoneInput/phoneInput';
import CpfInput from '../../components/cpfInput/cpfInput';
import RgInput from '../../components/rgInput/rgInput';

import InputNumerosSelect from '../../components/InputNumerosSelect/InputNumerosSelect';

const CadastrarImovel = ()=> {
    


    const navigation = useNavigation();

    const [NumMatricula, setNumMatricula] = useState("");
    const [AluguelVenda, setAluguelVenda] = useState("");
    const [Endereco, setEndereco] = useState("");
    const [Cep, setCep] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Cidade, setCidade] = useState("");
    const [TipoIDeMovel, setTipoIDeMovel] = useState("");
    const [Andares, setAndares] = useState("");
    const [Dorms, setDorms] = useState("");
    const [Salas, setSalas] = useState("");
    const [AreasUteis, setAreasUteis] = useState("");
    const [ValorCondominio, setValorCondominio] = useState("");
    const [ValorDoImovel, setValorDoImovel] = useState("");
    const [Status, setStatus] = useState("");
    const [Suites, setSuites] = useState("");
    const [Garagem, setGaragem] = useState("");
    const [CondominioFechado, setCondominioFechado] = useState("");
    const [ValorIPTU, setValorIPTU] = useState("");
    const [Permuta, setPermuta] = useState("");
    const [AutorizarPlaca, setAutorizarPlaca] = useState("");
    const [AutorizaFotos, setAutorizaFotos] = useState("");
    const [UnidadesAdicionais, setUnidadesAdicionais] = useState("");
    const [DescricoesAdicionais, setDescricoesAdicionais] = useState("");

   

    const op1 = [{ text: 'Academia', id: 1 }];
    const op2 = [{ text: 'Dispensa', id: 2 }];
    const op3 = [{ text: 'Piscina', id: 3 }];
    const op4 = [{ text: 'Aquecimento Solar', id: 4 }];
    const op5 = [{ text: 'Elevador de Serviço', id: 5 }];
    const op6 = [{ text: 'Play Ground', id: 6 }];
    const op7 = [{ text: 'Ar Condicionado', id: 7 }];
    const op8 = [{ text: 'Elevador Social', id: 8 }];
    const op9 = [{ text: 'Planejados', id: 9 }];
    const op10 = [{ text: 'Porteiro Fisico', id: 10 }];
    const op11 = [{ text: 'Escritório', id: 11 }];
    const op12 = [{ text: 'Área Gourmet', id: 12 }];
    const op13 = [{ text: 'Área de lazer', id: 13 }];
    const op14 = [{ text: 'Churrasqueira', id: 14 }];
    const op15 = [{ text: 'Closet', id: 15 }];
    const op16 = [{ text: 'Segurança 24h', id: 16 }];
    const op17 = [{ text: 'Salão de Festas', id: 17 }];
    const op18 = [{ text: 'Sala de Jogos', id: 18 }];
    const op19 = [{ text: 'Gáz Canalizado', id: 19 }];
    const op20 = [{ text: 'Lavabo', id: 20 }];
    const op21 = [{ text: 'Mobílias', id: 21 }];
    const op22 = [{ text: 'Quarto de Despejos', id: 22 }];
    const op23 = [{ text: 'Quadra de Esportes', id: 23 }];
    const op24 = [{ text: 'Sauna', id: 24 }];

    let Observacoes= [];
    
   


    async function RealizarCadastro() {      
        try {
            if (!NumMatricula || !AluguelVenda || !Endereco || !Cep || !Bairro || !Cidade || !TipoIDeMovel || !Andares || !Dorms || !Salas || !AreasUteis || !ValorCondominio || !ValorDoImovel || !Status || !Suites || !Garagem || !CondominioFechado || !ValorIPTU || !Permuta || !AutorizarPlaca || !AutorizaFotos || !UnidadesAdicionais || !DescricoesAdicionais) {
                ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
                return;            
            }
          if(Senha != confirmasenha){       
            ToastService.Error("Erro ao realizar cadastro", "confirmar senha esta diferente");
            return;}
            const body = {
                
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
        source={require("../../images/fundos/back6.png")}
        style={styles.back}
        >
        <TouchableOpacity onPress={() => navigation.goBack()} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity> 
        <Text style={styles.titulo}>CADASTRO</Text>
        <View style={styles.portaInputs}>

            <View style={styles.duplinha}>

                <TextInput 
                style={styles.inputs2}
                value={NumMatricula}
                onChangeText={(texto) => setNumMatricula(texto)}
                placeholder="Número de Matrícula" />
                
                <InputNumerosSelect options={["ALUGUEL", "VENDA"]} onSelect={setAluguelVenda} defaultValue='' placeHold="Aluguel ou Venda"/>
                

            </View> 

            
            <TextInput 
            style={styles.inputs}
            value={Endereco}
            onChangeText={(texto) => setEndereco(texto)}
            placeholder="Endereço" />

            <View style={styles.duplinha}>

                <CepInput
                    cepPai={Cep}
                    setCepPai={setCep} 
                    setBairro={setBairro}
                    setCidade={setCidade}
                    setRua={setEndereco}
                />
                
                <TextInput 
                style={styles.inputs2}
                value={Bairro}
                onChangeText={(texto) => setBairro(texto)}
                placeholder="Bairro" />

            </View>
            
            <TextInput 
            style={styles.inputs}
            value={Cidade}
            onChangeText={(texto) => setCidade(texto)}
            placeholder="Cidade" />

            <View style={styles.duplinha}>
                <InputNumerosSelect 
                    options={["Chácara","Terreno","Casa","Sítio","Fazenda", "Área Comercial", "Area Residencial"]} 
                    onSelect={setTipoIDeMovel}
                    placeHold="Tipo de Imóvel" />
                <InputNumerosSelect 
                    options={[1,2,3,4,5,6,7,8,9,10]} 
                    onSelect={setAndares} 
                    placeHold="Andares" 
                    numero={true}/>
            </View>

            <View style={styles.duplinha}>
                <InputNumerosSelect 
                    options={[0,1,2,3,4,5,6,7,8,9,10]} 
                    onSelect={setDorms}
                    placeHold="Dorms"
                    numero={true} />
                <InputNumerosSelect 
                    options={[0,1,2,3,4,5,6,7,8,9,10]} 
                    onSelect={setSuites}
                    placeHold="Suites"
                    numero={true} />
            </View>

            <View style={styles.duplinha}>            
                <InputNumerosSelect 
                    options={[0,1,2,3,4,5,6,7,8,9,10]} 
                    onSelect={setSalas}
                    placeHold="Salas"
                    numero={true}    />

                <InputNumerosSelect 
                    options={[0,1,2,3,4,5,6,7,8,9,10]} 
                    onSelect={setGaragem}
                    placeHold="Garagens"
                    numero={true} />
            </View>

            <View style={styles.duplinha}>           
                <InputNumerosSelect 
                    options={[0,1,2,3,4,5,6,7,8,9,10]} 
                    onSelect={setAreasUteis}
                    placeHold="Áreas Uteis"
                    numero={true} />

                <InputNumerosSelect 
                    options={[true, false]} 
                    onSelect={setCondominioFechado}
                    placeHold="Cond. Fechado"
                    numero={true} />
            </View>

            <View style={styles.duplinha}>            
                <TextInput
                    style={styles.inputs2}
                    value={ValorCondominio}
                    onChangeText={(texto) => setValorCondominio(texto)}
                    placeholder="Valor Cond." 
                />

                <TextInput
                    style={styles.inputs2}
                    value={ValorIPTU}
                    onChangeText={(texto) => setValorIPTU(texto)}
                    placeholder="Valor IPTU" 
                />

            </View>

            <View style={styles.duplinha}>            
                <TextInput
                    style={styles.inputs2}
                    value={ValorDoImovel}
                    onChangeText={(texto) => setValorDoImovel(texto)}
                    placeholder="Valor do Imóvel" 
                />
                <InputNumerosSelect 
                    options={["Disponível","Habitado"]} 
                    onSelect={setAndares}
                    placeHold="Status"    />
            </View>


            
            <Pressable onPress={()=>{console.log(Andares)}}>
                <Text>mostrar</Text>
            </Pressable>
        </View>
        
            
        
        

        </ImageBackground>
      </View>
  );
};




export default CadastrarImovel;
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