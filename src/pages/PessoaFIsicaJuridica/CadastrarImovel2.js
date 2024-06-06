import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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

const CadastrarImovel2 = () => {
  let ID;
  async function VerificarLogin() {
      
    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();
    
  
    if (usuarioEstaLogado) {
      const dadosUser2 = await AuthService.PegarDadosLogados();
      if(dadosUser2.Tipo == "PJ"){
        ID = dadosUser2.CNPJ;
      }else{
        ID = dadosUser2.CPF;
      }  
  
    }
    else{
      navigation.navigate("LoginECadastro.js");
    }
  }

  useEffect(() => {
    VerificarLogin();
  }, []);

  const route = useRoute();
  const { body } = route.params;
  const navigation = useNavigation();
  console.log(body.Id_dono);

  const [Permuta, setPermuta] = useState("" || body.Permuta);
  const [AutorizarPlaca, setAutorizarPlaca] = useState("" || body.AutorizarPlaca);
  const [AutorizaFotos, setAutorizaFotos] = useState("" || body.AutorizaFotos);
  const [UnidadesDisponiveis, setUnidadesDisponiveis] = useState("" || body.UnidadesDisponiveis);
  const [Descricao, setDescricao] = useState("" || body.Descricao);

  const op1_8 = [
    { text: 'Dispensa', id: 2 },
    { text: 'Piscina', id: 3 },
    { text: 'Aquecimento Solar', id: 4 },
    { text: 'Elevador de Serviço', id: 5 },
    { text: 'Play Ground', id: 6 },
    { text: 'Ar Condicionado', id: 7 },
    { text: 'Elevador Social', id: 8 }
  ];

  const op9_16 = [
    { text: 'Academia', id: 1 },
    { text: 'Planejados', id: 9 },
    { text: 'Porteiro Fisico', id: 10 },
    { text: 'Escritório', id: 11 },
    { text: 'Área Gourmet', id: 12 },
    { text: 'Área de lazer', id: 13 },
    { text: 'Churrasqueira', id: 14 },
    { text: 'Closet', id: 15 },
    { text: 'Segurança 24h', id: 16 }
  ];

  const op17_24 = [
    { text: 'Salão de Festas', id: 17 },
    { text: 'Sala de Jogos', id: 18 },
    { text: 'Gáz Canalizado', id: 19 },
    { text: 'Lavabo', id: 20 },
    { text: 'Mobílias', id: 21 },
    { text: 'Quarto de Despejos', id: 22 },
    { text: 'Quadra de Esportes', id: 23 },
    { text: 'Sauna', id: 24 }
  ];


  const [Observacoes, setObservacoes] = useState([]);


  async function RealizarCadastro() {
    try {
      if (!Permuta || !AutorizarPlaca || !AutorizaFotos || !UnidadesDisponiveis || !Descricao) {
        ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
        return;
      }
      body.Permuta = Permuta=="sim";
      body.AutorizaFotos = AutorizaFotos == 'sim';
      body.AutorizarPlaca = AutorizarPlaca == 'sim';
      body.UnidadesDisponiveis = UnidadesDisponiveis;
      body.Descricao = Descricao;
      body.Observacoes = Observacoes;
      body.Id_dono = ID;

      const response = await ApiService.Post("/Imoveis/CadastrarImovel", (body))

      await navigation.navigate("AcessoMeusImoveis");
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

  function HandleCheckBox(id) {
    const index = Observacoes.indexOf(id);

    if (index !== -1) {
      // Se o número estiver na lista, remova-o
      const novaLista = [...Observacoes];
      novaLista.splice(Observacoes, 1);
      setObservacoes(Observacoes);
    } else {
      // Se o número não estiver na lista, adicione-o
      setObservacoes([...Observacoes, id]);
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
            <InputNumerosSelect
              options={["sim", "não"]}
              onSelect={setPermuta}
              placeHold="Permuta"
              numero={true} />

            <InputNumerosSelect
              options={["sim", "não"]}
              onSelect={setAutorizarPlaca}
              placeHold="Perm. Placa"
              numero={true} />
          </View>

          <View style={styles.duplinha}>
            <InputNumerosSelect
              options={["sim", "não"]}
              onSelect={setAutorizaFotos}
              placeHold="Perm. Fotografar"
              numero={true} />

            <InputNumerosSelect
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              onSelect={setUnidadesDisponiveis}
              placeHold="qnt. Disponiveis"
              numero={true} />
          </View>
          <View style={styles.portaCheckPai}>
            <View style={styles.fileira}>
              <CheckBox options={op1_8} onchange={HandleCheckBox} itensSelecionados={Observacoes} pequeno />
            </View>
            <View style={styles.fileira}>
              <CheckBox options={op9_16} onchange={HandleCheckBox} itensSelecionados={Observacoes} pequeno />
            </View>
            <View style={styles.fileira}>
              <CheckBox options={op17_24} onchange={HandleCheckBox} itensSelecionados={Observacoes} pequeno />
            </View>
          </View>
          <TextInput
            style={styles.inputs}
            value={Descricao}
            onChangeText={(texto) => setDescricao(texto)}
            placeholder="Descrições Adicionais"
          />

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




export default CadastrarImovel2;
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
  },
  portaCheckPai: {
    display: 'flex',
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  fileira: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%'
  }

});