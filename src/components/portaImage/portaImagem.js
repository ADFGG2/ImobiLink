import { StyleSheet, View, Image, TouchableOpacity, Text  } from "react-native"
import Maximize from "../../images/icons/Maximize"
import Excluir from "../../images/icons/Excluir"
import { useState } from "react";

const PortaImagem = ({link, descricao, setLink, idImage, ExcluirImagem})=>{
    
    return(
        <View style={styles.retangulo}>          
          <Image source={link} style={styles.imageimovel} />
          <View style={styles.bnt_area}>
            <View style={styles.bnt_max_exclud}>
              <TouchableOpacity onClick={()=>setLink(link) } >
                <Maximize />
              </TouchableOpacity>
              <TouchableOpacity onClick={()=>ExcluirImagem(idImage)}>
                <Excluir />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textinicon}>
            <Text style={styles.textdescrition}> {descricao} </Text>
          </View>
        </View>
    );

    
}
export default PortaImagem;
    const styles = StyleSheet.create({
        retangulo: {
            width: 175,
            height: 136,
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
            width: '99%',
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
            marginTop: 88
        },
        textdescrition: {
            fontSize: 12,
            marginTop: 3,
            fontStyle: 'italic'
        
        },
    })