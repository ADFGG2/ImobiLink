import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CepInput from '../../../components/cepInput/cepInput';
import CheckBox from '../../../components/checkbox/checkbox';
import PhoneInput from '../../../components/phoneInput/phoneInput';
import CnpjInput from '../../../components/cnpjInput/cnpjInput';
import ToastService from '../../../Services/ToastService';
import ApiService from '../../../Services/ApiService';
import AuthService from '../../../Services/AuthService';

import ButtonVoltar from '../../../assets/Svg/Buttons/Bnt_Voltar';
import LogoBackground from '../../../assets/Svg/Logo/Logobackground';

const CadastroPessoaJuridica = () => {
  const navigation = useNavigation();
  const [NomeEmpresa, setNome] = useState("");
  const [CNPJ, setCNPJ] = useState("");
  const [InscricaoEstadual, setInscricaoEstadual] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [confirmasenha, setconfirmasenha] = useState("");
  const [Cidade, setCidade] = useState("");
  const [CEP, setCEP] = useState("");
  const [Bairro, setBairro] = useState("");
  const options2 = [{ text: 'Concordo com os termos e condições de uso', id: 1 }];
  const [Observacoes, setObservacoes] = useState([]);




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
    if (!NomeEmpresa || !CNPJ || !InscricaoEstadual || !Email || !Telefone || !Senha || !Cidade || !CEP || !Bairro) {
      ToastService.Error("Erro ao realizar cadastro", "preencha todos os campos");
      console.log("erro");
      return;
    }
    if (Senha != confirmasenha) {
      ToastService.Error("Erro ao realizar cadastro", "confirmar senha esta diferente");
      return;
    }

    try {
      const body = {
        NomeEmpresa,
        CNPJ,
        InscricaoEstadual,
        Email,
        Telefone,
        Senha,
        Cidade,
        CEP,
        Bairro
      };

      const response = await ApiService.Post("/PessoasJuridicas/CadastrarPessoaJuridica", body)
      const token = response.data.token;

      await AuthService.SalvarToken(token);
      navigation.navigate("TelaPrincipal2");


    }
    catch (error) {
      console.log(error + "esse é o erro")
      if (error.response?.status === 401) {
        ToastService.Error("Erro ao realizar cadastro", "Dados invalidos!");
        return;
      }
      ToastService.Error("Erro ao realizar cadastro", "Houve um erro no servidor ao realizar o seu login\r\nTente novamente mais tarde.");
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
      </ImageBackground >

      <View style={styles.portaInputs}>

        <TextInput
          style={styles.inputs}
          value={NomeEmpresa}
          onChangeText={(texto) => setNome(texto)}
          placeholder="Nome Completo"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
        />


        <View style={styles.duplinha}>

          <CnpjInput
            cnpjPaiPai={CNPJ}
            setCnpjPai={setCNPJ} />


          <TextInput
            style={styles.inputs2}
            value={InscricaoEstadual}
            onChangeText={(texto) => setInscricaoEstadual(texto)}
            placeholder="Inscricao Estadual"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            maxLength={6} />

        </View>


        <TextInput
          style={styles.inputs}
          value={Email}
          onChangeText={(texto) => setEmail(texto)}
          placeholder="E-mail"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" />



        <PhoneInput
          telefonePai={Telefone}
          setTelefonePai={setTelefone}
          tamanhoCompleto={true}
        />

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

        <TextInput
          style={styles.inputs}
          value={Cidade}
          onChangeText={(texto) => setCidade(texto)}
          placeholder="Cidade"
          placeholderTextColor="rgba(0, 0, 0, 0.5)" />

        <View style={styles.duplinha}>

          <CepInput
            cepPai={CEP}
            setCEPPai={setCEP}
            setBairro={setBairro}
            setCidade={setCidade} />

          <TextInput
            style={styles.inputs2}
            value={Bairro}
            onChangeText={(texto) => setBairro(texto)}
            placeholder="Bairro"
            placeholderTextColor="rgba(0, 0, 0, 0.5)" />

        </View>

        <CheckBox options={options2} onchange={HandleCheckBox} itensSelecionados={Observacoes} />

        <Pressable
          style={styles.botao}
          onPress={RealizarCadastro}>
          <Text style={styles.textobtn}>Cadastrar</Text>
        </Pressable>

      </View>
    </View >
  );
};

export default CadastroPessoaJuridica;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    flex: 1,
    marginTop: -250,
    height: "70vh",
    width: "100%",
  },
  return: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(255,255,255)'
  },
  Esquerda: {
    width: '44vw',
    height: '5vh',
    paddingRight: '90%'
  },
  titulo: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: '5vh'
  },
  portaInputs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
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
    marginBottom: '1vh',
    borderColor: '#9FA0A1',
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
    marginTop: -10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 3, // deslocamento horizontal da sombra
      height: 3, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 4, // raio da sombra
    elevation: 1, // elevação da sombra (apenas 
  },
  textobtn: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FEFEFE'
  }

});
