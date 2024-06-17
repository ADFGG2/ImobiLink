import { StyleSheet, View, Image, TouchableOpacity, Text, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Maximize from "../../images/icons/Maximize"
import Excluir from "../../images/icons/Excluir"
import { useState } from "react";
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const PortaImagem = ({ link, descricao, setLink, id, setConfirmDialogVisible, setIdImovelAtual, fav, favoritar, imovelId, tipo }) => {

  return (
    <View style={styles.retangulo}>
      <Image source={link} style={styles.imageimovel} />
      < View style={styles.bnt_area}>
        <View style={styles.bnt_max_exclud}>

          <Pressable onPress={() => setLink(link)} >
          <FontAwesome5 name="expand-alt" size={10} color="white" />
          </Pressable>
          {
            tipo == "PJ" || tipo == "PF" ?
              <Pressable onPress={() => { setIdImovelAtual(id), setConfirmDialogVisible(true) }}>
                <MaterialCommunityIcons name="delete-forever" size={15} color="white" />
              </Pressable> :
              null}
        </View>
      </View>
      <View style={styles.textinicon}>
        <Text style={styles.textdescrition}> {descricao} </Text>
        {
          tipo == "PJ" || tipo == "PF" ?
            <Pressable 
            onPress={() => { favoritar(id, imovelId) }}
            style={{position:'relative', left: 65, bottom: 13}}>
              {fav ? <MaterialIcons name="favorite" size={10} color="#BD0B0B" /> : <MaterialIcons name="favorite-border" size={10} color="#000" />}
            </Pressable> :
            null}

      </View>
    </View>
  );


}
export default PortaImagem;
const styles = StyleSheet.create({
  retangulo: {
    width: 155,
    height: 116,
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: "#BEBEBE",
    marginBottom: '1.5vh',
    borderRadius: 12,
    shadowOffset: {
      width: 0, // deslocamento horizontal da sombra
      height: 0, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.5, // opacidade da sombra
    shadowRadius: 3, // raio da sombra
    elevation: 4, // elevação da sombra (apenas Android)
  },
  bnt_area: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%'
  },
  imageimovel: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    borderRadius: 12,
    position: 'absolute'
  },
  bnt_max_exclud: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  textinicon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 73
  },
  textdescrition: {
    fontSize: 12,
    fontStyle: 'italic',


  },
})