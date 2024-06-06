import { Text, Image, StyleSheet, View, Pressable, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import { ModelImage } from "../components/imagemAmpliada/image_ampliada";
import PortaImagem from '../components/portaImage/portaImagem.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModalTelaPrincipal from '../components/modalTelaPrincipal/ModalTelaPrincipal.js';
import Mais from '../images/icons/Mais.svg';
import { ScrollView } from 'react-native';
import ApiService from '../Services/ApiService.js';

const EditarImovel = () => {
  const navigation = useNavigation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [adiciona, setAdiciona] = useState(false);
  const [link, setLink] = useState("");  
  const [imagens, setImagens] = useState([]);
  const route = useRoute();
  const { imovel } = route.params;


  useEffect(() => { buscarImagens() }, [])

  const handleMaximizeClick = () => {
    setModalIsOpen(true);
  };

  async function buscarImagens() {
    try{
      let valor = imovel.codigo;
      const response = await ApiService.Get(`/imoveis/ListarImagens/${valor}`);
      setImagens(response.data);
      console.log(response.data[0].urlImage);
    }
    catch(erro){
      console.log(erro);
      ToastService.Error("Erro ao buscar imagens");
    }    
  }

  async function ExcluirImagem(id){
    try{
      
      const response = await ApiService.Post(`/imoveis/ApagarImagem`, {id});
      
    }
    catch(erro){
      console.log(erro);
      ToastService.Error("Erro ao buscar imagens");
    }    
  }
  


  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Pressable onPress={() => navigation.goBack()} >
          <Text style={styles.return}> {`<`} </Text>
        </Pressable>
        <View style={styles.portaModal}>
          <ModalTelaPrincipal />
        </View>
      </View>

      <View style={styles.textline}>
        <Text style={styles.text}> Imagens </Text>
        <View style={styles.linha}></View>
      </View> 
      

      <ModelImage isVisible={modalIsOpen} adiciona={adiciona} setLink={setLink} setVisible={setModalIsOpen} link={link} imovel={imovel} buscarImagens={buscarImagens} />

      <ScrollView contentContainerStyle={styles.area}>

      <View style={styles.retanguloAdd}>
          <View style={styles.addImageContainer}>
            <Pressable onPress={() => { setAdiciona(true); setModalIsOpen(true); Ver() }}>
              <Image 
                style={styles.imageAdd}
                source={Mais}
              />
              <Text style={styles.textadddescrition}> Adicionar img </Text>
            </Pressable>
          </View>
        </View>

        {imagens.map((imagem, key) => (
          <Pressable key={key} onPress={async()=>{setAdiciona(false), await setModalIsOpen(true), setLink({uri:imagem.urlImage})}}>
            <PortaImagem link={{uri:imagem.urlImage}} descricao={imagem.descricao} setLink={setLink} idImage={imagem.id} ExcluirImagem={ExcluirImagem} />
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
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textline: {
    width: '100%',
    marginTop: 10,
    marginBottom: 15,
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
    marginTop: 15,
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
    width: 175,
    height: 136,
    alignItems: 'center',
    backgroundColor: 'rgb(210,210,210)',
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
    width: '99%',
    height: '80%',
    alignItems: 'center',
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 12,
  },
  imageAdd: {
    width: 100,
    height: 40,
    opacity: 0.7,
    marginTop: 40,
  },
  textadddescrition: {
    fontSize: 12,
    marginTop: 34,
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
