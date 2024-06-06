import { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import upload from '../../images/icons/upload.png';
import ToastService from '../../Services/ToastService';
import ApiService from '../../Services/ApiService';

export function ModelImage({ adiciona, link, isVisible, setVisible, setLink, imovel, buscarImagens }) {
  const [idImovel, setIdImovel] = useState(imovel.codigo);
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

  async function enviar(){
    try{
    if(!URLImage || !descricao ){
      ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
      console.log("faltam dados")
      return;
    }
      setIdImovel(imovel)
      const body = {
        idImovel,
        descricao,
        URLImage
      };
      await ApiService.Post("/Imoveis/CadastrarImagem", body);
      ToastService.Success("Usuário cadastrado com sucesso!");
      setVisible(false);
      buscarImagens()
  }
    catch(erro){
      ToastService.Error("Erro ao realizar cadastro", "Preencha todos os dados!");
      console.log(erro);
      return;
    }
  }

  if (!adiciona) {
    return (
      <Modal transparent={true} visible={isVisible} onRequestClose={() => { setVisible(false); setLink(null); }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image source={link} style={styles.imagem} />
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <Modal transparent={true} visible={isVisible} onRequestClose={() => { setVisible(false); setLink(null); }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Pressable style={styles.Pressable} onPress={selecionarImagem}>
              <View style={styles.portaConteudo}>
                {!URLImage ? <Image source={upload} style={styles.upload} /> : <Image source={{uri:URLImage}} style={styles.imagem} />}
              </View>
            </Pressable>
            <TextInput 
            style={styles.textInput} 
            placeholder="Descrição" 
            value={descricao} 
            onChangeText={(texto) => setDescricao(texto)} />
          </View>

          <Pressable style={styles.enviar} onPress={()=>{enviar()}}>
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
    width: '90%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(150,150,150)'
  },
  Pressable: {
    width: '98%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(200,200,200)',
    marginTop: '1em'
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
    backgroundColor: 'rgb(0,100,100)'
  },
  textInput: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: '1em'
  },
  enviar:{
    width: '6em',
    heigth: '2em',
    borderRadius: '0.3em',
    backgroundColor: '#999EA9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enviarTxt:{
    fontSize: '1em',
    fontWeight: 'bold',
    color: 'rgb(255,255,255)'
  }
});
