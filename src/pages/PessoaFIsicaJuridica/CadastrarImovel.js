import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
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
import RealInput from '../../components/RealInput/RealInput';


const CadastrarImovel = () => {
  
  let ID;
  let Id_dono;

  const navigation = useNavigation();

  const [NumMatricula, setNumMatricula] = useState("");
  const [Finalidade, setFinalidade] = useState("");
  const [Endereco, setEndereco] = useState("");
  const [CEP, setCep] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Cidade, setCidade] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Andares, setAndares] = useState("");
  const [Dorms, setDorms] = useState("");
  const [Salas, setSalas] = useState("");
  const [AreaUtil, setAreaUtil] = useState("");
  const [ValorCondominio, setValorCondominio] = useState("");
  const [ValorDoImovel, setValorDoImovel] = useState("");
  const [Status, setStatus] = useState("");
  const [Suites, setSuites] = useState("");
  const [Garagem, setGaragem] = useState("");
  const [CondominioFechado, setCondominioFechado] = useState(false);
  const [ValorIPTU, setValorIPTU] = useState("");
  const [Permuta, setPermuta] = useState("");
  const [AutorizarPlaca, setAutorizarPlaca] = useState("");
  const [AutorizaFotos, setAutorizaFotos] = useState("");
  const [UnidadesDisponiveis, setUnidadesDisponiveis] = useState("");
  const [Descricao, setDescricao] = useState("");

  let Observacoes = [];

  
useEffect(() => {
  VerificarLogin();
}, []);

async function VerificarLogin() {
      
  const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();
  
  if(!usuarioEstaLogado){
    navigation.navigate("LoginECadastro.js");
  }
}

  async function RealizarCadastro() {
    try {
      const dadosUser = await AuthService.PegarDadosLogados();
      dadosUser.Tipo ==  "PF"? Id_dono = dadosUser.CPF : Id_dono = dadosUser.CNPJ;
      

    
      if (!NumMatricula || !Finalidade || !Endereco || !CEP || !Bairro || !Cidade || !Tipo || !Andares || !Dorms || !Salas || !AreaUtil || !ValorCondominio || !ValorDoImovel || !Status || !Suites || !Garagem || !CondominioFechado || !ValorIPTU) {
        ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");    
        console.log("Está faltando:");
    
        if (!NumMatricula) {
            console.log("- NumMatricula");
        }
        if (!Finalidade) {
            console.log("- Finalidade");
        }
        if (!Endereco) {
            console.log("- Endereco");
        }
        if (!CEP) {
            console.log("- Cep");
        }
        if (!Bairro) {
            console.log("- Bairro");
        }
        if (!Cidade) {
            console.log("- Cidade");
        }
        if (!Tipo) {
            console.log("- TipoDeImovel");
        }
        if (!Andares) {
            console.log("- Andares");
        }
        if (!Dorms) {
            console.log("- Dorms");
        }
        if (!Salas) {
            console.log("- Salas");
        }
        if (!AreaUtil) {
            console.log("- AreaUtil");
        }
        if (!ValorCondominio) {
            console.log("- ValorCondominio");
        }
        if (!ValorDoImovel) {
            console.log("- ValorDoImovel");
        }
        if (!Status) {
            console.log("- Status");
        }
        if (!Suites) {
            console.log("- Suites");
        }
        if (!Garagem) {
            console.log("- Garagem");
        }
        if (!CondominioFechado) {
            console.log("- CondominioFechado");
        }
        if (!ValorIPTU) {
            console.log("- ValorIPTU");
        }
    
        return;
    }
    
      
      const body = {
        "Matricula": parseInt(NumMatricula),
        Finalidade,
        Endereco,
        CEP,
        Bairro,
        Cidade,
        Tipo,
        Andares,
        "Dormitorios": Dorms,
        Suites,
        Salas,
        "Garagens":Garagem,
        "AreaUtil": parseFloat(AreaUtil),
        "CondominioFechado": CondominioFechado=="sim",
        "Valor":ValorDoImovel,
        Status,
        AutorizaFotos,
        AutorizarPlaca,
        Descricao,
        "TaxaCondo": ValorCondominio,
        "TaxaIPTU": ValorIPTU,
        Permuta,
        Observacoes,
        "IdDono":Id_dono,
        UnidadesDisponiveis,
      };
      navigation.navigate("CadastrarImovel2", {body});
    }
    catch (error) {
      console.log(error);
      if (error.response?.status === 401) {
        ToastService.Error("Erro ao realizar cadastro", "dados preenchidos incorretamente!");
        return;
      }
      ToastService.Error("Erro ao realizar cadastro", "Houve um erro no servidor ao realizar o seu cadastro\r\nTente novamente mais tarde.");
    }
  }


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../images/fundos/back6.png")}
        style={styles.back}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} ><Text style={styles.return}> {`<`} </Text></TouchableOpacity>
        <Text style={styles.titulo}>CADASTRAR IMÓVEL</Text>
        <View style={styles.portaInputs}>

          <View style={styles.duplinha}>

            <TextInput
              style={styles.inputs2}
              value={NumMatricula}
              onChangeText={(texto) => setNumMatricula(texto.replace(/[^0-9]/g, ''))}
              placeholder="Número de Matrícula" />

            <InputNumerosSelect options={["ALUGUEL", "VENDA"]} onSelect={setFinalidade} defaultValue='' placeHold="Aluguel ou Venda" />


          </View>


          <TextInput
            style={styles.inputs}
            value={Endereco}
            onChangeText={(texto) => setEndereco(texto)}
            placeholder="Endereço" />

          <View style={styles.duplinha}>

            <CepInput
              CEPPai={CEP}
              setCEPPai={setCep}
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
              options={["Chácara", "Terreno", "Casa", "Sítio", "Fazenda", "Área Comercial", "Area Residencial"]}
              onSelect={setTipo}
              placeHold="Tipo de Imóvel" />
            <InputNumerosSelect
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onSelect={setAndares}
              placeHold="Andares"
              numero={true} />
          </View>

          <View style={styles.duplinha}>
            <InputNumerosSelect
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onSelect={setDorms}
              placeHold="Dorms"
              numero={true} />
            <InputNumerosSelect
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onSelect={setSuites}
              placeHold="Suites"
              numero={true} />
          </View>

          <View style={styles.duplinha}>
            <InputNumerosSelect
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onSelect={setSalas}
              placeHold="Salas"
              numero={true} />

            <InputNumerosSelect
              options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onSelect={setGaragem}
              placeHold="Garagens"
              numero={true} />
          </View>

          <View style={styles.duplinha}>
            

          <TextInput
            style={styles.inputs2}
            value={AreaUtil}
            onChangeText={(texto) => setAreaUtil(texto.replace(/[^0-9]/g, ''))}
            placeholder="Tamanho em m²" />

            <InputNumerosSelect
              options={["sim", "não"]}
              onSelect={setCondominioFechado}
              placeHold="Cond. Fechado"
              numero={true} />
          </View>

          <View style={styles.duplinha}>
            
            <RealInput
              placeholder="Valor Cond."
              valor={ValorCondominio}
              setValor={(texto) => setValorCondominio(texto)}
            />
            
            <RealInput
              placeholder="Valor IPTU."
              valor={ValorIPTU}
              setValor={(texto) => setValorIPTU(texto)}
            />            

          </View>

          <View style={styles.duplinha}>
          <RealInput
              placeholder="Valor Imovel"
              valor={ValorDoImovel}
              setValor={(texto) => setValorDoImovel(texto)}
            />
            <InputNumerosSelect
              options={["Disponível", "Habitado"]}
              onSelect={setStatus}
              placeHold="Status" />
          </View>



          <Pressable
            style={styles.botao}
            onPress={RealizarCadastro}
          >
            <Text style={styles.textobtn}>Continuar</Text>
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
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    display: 'flex'
  },
  return: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(255,255,255)'
  },
  titulo: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: '5vh'
  },
  portaInputs: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '18vh'
  },
  inputs: {
    width: '90vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    marginBottom: '1vh',
    borderColor: '#707070',
    padding: '1vh'
  },
  duplinha: {
    width: '90vw',
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1vh'
  },
  inputs2: {
    width: '44vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    borderColor: '#707070',
    padding: '1vh'
  },
  botao: {
    width: '43vw',
    height: '6vh',
    borderRadius: '3vh',
    backgroundColor: '#999EA9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textobtn: {
    fontSize: '1.6em',
    fontWeight: '500',
    color: '#FFFFFF'
  }

});