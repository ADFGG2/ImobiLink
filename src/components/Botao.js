import { View, Text, Touchable, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

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
        width: '60vw',
        height: '7vh',
        borderRadius: '2.5vh',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
    texto:{
        fontSize: '1.6em',
        fontWeight: 'bold',
        color: '#FEFEFE'
    },
    textoAuxiliar:{

      color: '#FEFEFE'
    }
})