import { View, Text, Touchable, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Botao = ({ labelbutton, aoclicar }) => {
  return (
    <TouchableOpacity 
        style={styles.botao}
        onPress={aoclicar}>
        <Text style={styles.texto}>
            {labelbutton}
        </Text>
    </TouchableOpacity>
  )
}

export default Botao;

const styles =  StyleSheet.create({
  botao: {
        backgroundColor: '#999EA9',
        width: 230,
        height: 57,
        borderRadius: 20,
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
    texto:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FEFEFE'
        
    },
    textoAuxiliar:{

      color: '#FEFEFE'
    }
})