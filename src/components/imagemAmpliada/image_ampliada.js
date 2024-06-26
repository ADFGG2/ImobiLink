import { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import upload from '../../images/icons/upload.png';
import ToastService from '../../Services/ToastService';
import ApiService from '../../Services/ApiService';

import { FontAwesome, AntDesign } from '@expo/vector-icons';

export function ModelImage({ adiciona, link, isVisible, setVisible, setLink, imovel, buscarImagens, id, tipo }) {
  const [idImovel, setIdImovel] = useState(imovel?.codigo || "");
  const [descricao, setDescricao] = useState("");
  const [URLImage, setURLImage] = useState("");

  async function selecionarImagem() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (result.canceled) {
      return;
    }
    setURLImage(result.assets[0].uri);
  }

  async function enviar() {
    if (imovel) {
      setIdImovel(imovel.codigo)
      try {
        if (!URLImage || !descricao) {
          ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
          console.log("faltam dados")
          return;
        }
        setIdImovel(imovel.codigo)

        const body = {
          idImovel,
          descricao,
          URLImage
        };

        await ApiService.Post("/Imoveis/CadastrarImagem", body);
        ToastService.Success("Usuário cadastrado com sucesso!");
        setVisible(false);
        buscarImagens();
      }
      catch (erro) {
        ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
        console.log(erro);
        return;
      }
    } else {
      try {
        if (!URLImage) {
          ToastService.Error("Erro ao atualizar imagem de perfil", "selecione uma imagem");
          console.log("Erro ao atualizar imagem de perfil", "selecione uma imagem");
          return;
        }
        console.log("id: " + id)
        const body = {
          "URLImage": URLImage
        };

        switch (tipo) {
          case "PF":
            await ApiService.Post("/PessoasFisicas/DefinirImagemDePerfil", URLImage);
            break;
          case "PJ":
            await ApiService.Post("/PessoasJuridicas/DefinirImagemDePerfil", body);
            break;
          case "Corretor":
            await ApiService.Post("/Corretores/DefinirImagemDePerfil", body);
            break;
          case "Imobiliaria":
            await ApiService.Post("/Imobiliarias/DefinirImagemDePerfil", body);
            break;
          default:
            break;
        }

        ToastService.Success("imagem cadastrada com sucesso!");
        setVisible(false);
        buscarImagens();
      }
      catch (erro) {
        ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
        console.log(erro);
        return;
      }
    }
  }

  if (!adiciona) {
    return (
      <Modal transparent={true} visible={isVisible} onRequestClose={() => { setVisible(false); setLink(null); }}>
        <TouchableWithoutFeedback onPress={() => { setVisible(false); setLink(null); }}>
          <View style={styles.container}>
            <TouchableWithoutFeedback>
              <View style={styles.content}>
                <Image source={link} style={styles.imagem} />
                <Pressable onPress={() => { setVisible(false); setLink(null); }}>
                  <AntDesign style={{ bottom:35,  shadow: { width: 1, height: 1 }}} name="closecircle" size={24} color="white" />
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  } else {
    return (
      <Modal transparent={true} visible={isVisible} onRequestClose={() => { setVisible(false); setLink(null); }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Pressable style={styles.Pressable} onPress={selecionarImagem}>
              <View style={styles.portaConteudo}>
                {!URLImage ? <FontAwesome name="upload" size={70} color='rgb(150,150,150)' /> : <Image source={{ uri: URLImage }} style={styles.imagem} />}
              </View>
            </Pressable>
            {imovel ? <TextInput
              style={styles.textInput}
              placeholder="Ex: Suíte Principal"
              placeholderTextColor="rgba(0, 0, 0, 0.5)"
              value={descricao}
              onChangeText={(texto) => setDescricao(texto)} />
              : null}
          </View>

          <Pressable style={styles.enviar} onPress={() => { enviar() }}>
            <Text style={styles.enviarTxt}> Enviar </Text>
          </Pressable>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: '50%',
    borderRadius: 11,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(150,150,150)'
  },
  Pressable: {
    width: '95%',
    height: '80%',
    borderRadius: 11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(200,200,200)',
    marginTop: 2
  },
  portaConteudo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upload: {
    width: 100,
    height: 130,
  },
  imagem: {
    width: "100%",
    height: '100%',
    borderRadius: 11,
    backgroundColor: 'rgb(0,100,100)'
  },
  textInput: {
    width: '90%',
    height: 40,
    marginBottom: 7,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    fontStyle:'italic'
  },
  enviar: {
    backgroundColor: 'rgb(200,200,200)',
    width: 150,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 3, // deslocamento horizontal da sombra
      height: 3, // deslocamento vertical da sombra
  },
  shadowOpacity: 0.2, // opacidade da sombra
  shadowRadius: 4, // raio da sombra
    
  },
  enviarTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(100,100,100)'
  }
});
