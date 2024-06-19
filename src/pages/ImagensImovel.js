import { Text, ImageBackground, StyleSheet, View, Pressable, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ModelImage } from "../components/imagemAmpliada/image_ampliada";
import PortaImagem from '../components/portaImage/portaImagem.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModalTelaPrincipal from '../components/modalTelaPrincipal/ModalTelaPrincipal.js';
import Mais from '../images/icons/Mais.svg';
import ApiService from '../Services/ApiService.js';
import Certeza from '../components/certezaSair/Certeza.js';
import ToastService from '../Services/ToastService.js';
import AuthService from '../Services/AuthService.js';

import LogoBackgroundPerfil from '../assets/Svg/Logo/Logo_background_perfil.js'
import ButtonVoltar from "../assets/Svg/Buttons/Bnt_Voltar";

const EditarImovel = () => {
  const navigation = useNavigation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
  const [id, setIdImovelAtual] = useState(0);
  const [adiciona, setAdiciona] = useState(false);
  const [link, setLink] = useState("");
  const [imagens, setImagens] = useState([]);
  const [fav, setFav] = useState("");
  const [dados, setDados] = useState("");
  const route = useRoute();
  const { imovel } = route.params;

  useEffect(() => { buscarImagens() }, [])
  useEffect(() => { VerificarLogin() }, [])

  async function VerificarLogin() {

    const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();

    if (usuarioEstaLogado) {
      const dadosUser = await AuthService.PegarDadosLogados();
      setDados(dadosUser);
    }
    else {
      console.log("passei aqui1")
      await navigation.navigate("LoginECadastro.js");
    }
  }
  const handleMaximizeClick = () => {
    setModalIsOpen(true);
  };

  async function buscarImagens() {
    try {
      let valor = imovel.codigo;
      const response = await ApiService.Get(`/imoveis/ListarImagens/${valor}`);
      setImagens(response.data);
    }
    catch (erro) {
      console.log(erro);
      ToastService.Error("Erro ao buscar imagens");
    }
  }

  async function ExcluirImagem() {
    try {
      await ApiService.Delete(`/imoveis/ApagarImagem/${id}`);
      buscarImagens();
      setConfirmDialogVisible(false);
      ToastService.Success("Imagem apagada com sucesso!");
    }
    catch (erro) {
      console.log(erro);
      ToastService.Error("Erro ao deletar imagem");
    }
  }
  async function favoritar(id, idImovel) {
    try {
      await ApiService.Post(`/imoveis/AdicionarImagemFavorita`, { id, idImovel });
      buscarImagens();
      setConfirmDialogVisible(false);
      setFav("true")
      ToastService.Success("Imagem apagada com sucesso!");
    }
    catch (erro) {
      console.log(erro)
    }
  }
  function sair() {
    try {
      if (imagens.length >= 5) {
        navigation.navigate("AcessoDetalhesImovel", {imovel})
        //fav? navigation.goBack() : ToastService.Error("defina uma imagem favorita")
      }
      else {
        ToastService.Error("necessario pelo menos 5 imagens")
        console.log("necessario pelo menos 5 imagens")
      }
    }
    catch (erro) {
      console.log(erro)
    }
  }


  return (
    <View style={styles.container}>

      <ImageBackground >
        < LogoBackgroundPerfil />
      </ImageBackground>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position:'relative', left: - 158, top: -59 }}  >
        <ButtonVoltar />
      </TouchableOpacity>

      <Certeza
        status={confirmDialogVisible}
        setStatus={setConfirmDialogVisible}
        titulo="apagar imagem"
        descricao="deseja realmente apagar esta imagem?"
        condicao1="sim"
        condicao2="não"
        funcao={() => { ExcluirImagem(id) }}
      />

      <View style={styles.textline}>
        <Text style={styles.text}> Imagens </Text>
        <View style={styles.linha}></View>
      </View>


      <ModelImage
        isVisible={modalIsOpen}
        adiciona={adiciona}
        setLink={setLink}
        setVisible={setModalIsOpen}
        link={link}
        imovel={imovel}
        buscarImagens={buscarImagens}
        setFav={setFav}
      />

      <ScrollView contentContainerStyle={styles.area}>

        {
          dados.Tipo == "PJ" || dados.Tipo == "PF" ?
            <View style={styles.retanguloAdd}>
              <View style={styles.addImageContainer}>
                <Pressable style={styles.PortaAdicionarImagem} onPress={() => { setAdiciona(true); setModalIsOpen(true); }}>
                  <FontAwesome6 name="plus" size={55} color='rgba(0, 0, 0, 0.1)'/>
                </Pressable>
              </View>
              <Text style={styles.textadddescrition}> Descrição </Text>
            </View>
            : null
        }

        {imagens.map((imagem, key) => (
          <Pressable key={key} onPress={async () => { setAdiciona(false), await setModalIsOpen(true), setLink({ uri: imagem.urlImage }) }}>
            <PortaImagem
              tipo={dados.Tipo}
              link={{ uri: imagem.urlImage }}
              descricao={imagem.descricao}
              setLink={setLink}
              id={imagem.id}
              setConfirmDialogVisible={setConfirmDialogVisible}
              setIdImovelAtual={setIdImovelAtual}
              fav={imagem.fav}
              imovelId={imovel.codigo}
              favoritar={favoritar}
            />
          </Pressable>
        )

        )}



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 31,
    paddingTop: 54,
    paddingVertical: 15,
    backgroundColor:"#BDBDBD"
  },
  textline: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#777777',
    fontSize: 38,
    fontWeight: 'bold',
  },
  linha: {
    width: '100%',
    height: 1,
    marginTop: 20,
    marginBottom:20,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  area: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  retanguloAdd: {
    width: 155,
    height: 116,
    alignItems: 'center',
    backgroundColor: '#BEBEBE',
    borderRadius: 12,
    marginBottom: '1.5vh',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },
  addImageContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    backgroundColor: "#C4C4C4",
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  PortaAdicionarImagem: {
   
  },
  imageAdd: {
    width: 100,
    height: 40,
    opacity: 0.7,
    marginTop: 40,
  },
  textadddescrition: {
    marginTop:3,
    fontSize: 12,
    fontStyle: 'italic',
    opacity: 0.5,
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
  return: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '2em',
    paddingTop: '1vh',
    color: 'rgb(100,100,100)',
  },
});

export default EditarImovel;