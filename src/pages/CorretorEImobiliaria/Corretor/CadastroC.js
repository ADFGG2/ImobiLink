import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-neat-date-picker';
import CheckBox from '../../../components/checkbox/checkbox';
import PhoneInput from '../../../components/phoneInput/phoneInput';
import CpfInput from '../../../components/cpfInput/cpfInput';
import ToastService from '../../../Services/ToastService';
import ApiService from '../../../Services/ApiService';
import AuthService from '../../../Services/AuthService';

import ButtonVoltar from '../../../assets/Svg/Buttons/Bnt_Voltar';
import LogoBackground from '../../../assets/Svg/Logo/Logobackground';

const CadastroCorretor = () => {
  const navigation = useNavigation();


  const [Observacoes, setObservacoes] = useState([]);
  const [Nome_completo, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [CRECI, setCRECI] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [confirmasenha, setconfirmasenha] = useState("");
  const options2 = [{ text: 'Concordo com os termos e condições de uso', id: 1 }];

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

  async function RealizarCadastro() {
    try {
      if (!Nome_completo || !CPF || !CRECI || !Email || !Telefone || !Senha || !date) {
        ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
        return;
      }
      if (Senha != confirmasenha) {

        ToastService.Error("Erro ao realizar cadastro", "confirmar senha esta diferente");
        return;
      }
      const body = {
        Nome_completo,
        CPF,
        CRECI,
        Email,
        Telefone,
        date,
        Senha
      };


      const response = await ApiService.Post("/Corretores/CadastrarCorretor", body)
      const token = response.data.token;

      await AuthService.SalvarToken(token);
      navigation.navigate("TelaPrincipal1");

    }
    catch (error) {
      console.log(error)
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
        source={require('../../../assets/Images/BackGround/Back_Cadastrar.png')}
        style={styles.back}
      >

        <LogoBackground />

        <TouchableOpacity
          style={{ marginTop: 235, }}
          onPress={() => navigation.navigate('SelecaoCadastro')} >

          <ButtonVoltar />
        </TouchableOpacity>

        <Text style={styles.titulo}>CADASTRO</Text>
      </ImageBackground>

      <View style={styles.portaInputs}>

        <TextInput
          style={styles.inputs}
          value={Nome_completo}
          onChangeText={(texto) => setNome(texto)}
          placeholder="Nome Completo"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" />

        <View style={styles.duplinha}>

          <CpfInput
            cpfPai={CPF}
            setCpfPai={setCPF} />


          <TextInput
            style={styles.inputs2}
            value={CRECI}
            onChangeText={(texto) => setCRECI(texto)}
            placeholder="CRECI F"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            maxLength={6} />

        </View>


        <TextInput
          style={styles.inputs}
          value={Email}
          onChangeText={(texto) => setEmail(texto)}
          placeholder="E-mail"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" />

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
              placeholder="Data de nascimento"
              placeholderTextColor="rgba(0, 0, 0, 0.5)" />

          </Pressable>

        </View>

        <TextInput
          style={styles.inputs}
          value={Senha}
          onChangeText={(texto) => setSenha(texto)}
          placeholder="Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" />


        <TextInput
          style={styles.inputs}
          value={confirmasenha}
          onChangeText={(texto) => setconfirmasenha(texto)}
          placeholder="Repita a senha"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" />



        <DatePicker
          isVisible={showDatePicker}
          mode={'single'}
          onCancel={onCancel}
          onConfirm={onConfirm}
          colorOptions={{ headerColor: '#000', selectedDateBackgroundColor: "#000" }}
        />

        <CheckBox options={options2} onchange={HandleCheckBox} itensSelecionados={Observacoes} />

      </View>

      <Pressable
        style={styles.botao}
        onPress={RealizarCadastro}>
        <Text style={styles.textobtn}>Cadastrar</Text>
      </Pressable>

    </View>
  );
};

export default CadastroCorretor;




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
    marginTop: -250,
    height: "70vh",
    width: "100%",
  },
  titulo: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 70
  },
  portaInputs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  inputs: {
    width: '90vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    marginBottom: '1vh',
    borderColor: '#9FA0A1',
    padding: '1vh'
  },
  duplinha: {
    width: '90vw',
    height: '5vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#9FA0A1',
    marginBottom: '1vh'
  },
  inputs2: {
    width: '44vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    borderColor: '#9FA0A1',
    padding: '1vh'
  },
  botao: {
    backgroundColor: '#999EA9',
    width: 230,
    height: 57,
    borderRadius: 20,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 3, // deslocamento horizontal da sombra
      height: 3, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 4, // raio da sombra
    elevation: 1, // elevação da sombra (apenas Android)
  },
  textobtn: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FEFEFE'
  }

});
