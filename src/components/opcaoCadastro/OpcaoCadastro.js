import { View, Text, Touchable, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const OpcaoCadastro = ({ tipoUsuario }) => {
  return (
    <View 
        style={styles.botao}
        >
        
            <View style={styles.portabolinha}>
                <View style={styles.bolinha}></View>
            </View>
            
            <View style={styles.portaTexto}>
                <Text style={styles.texto}>
                {tipoUsuario}
                </Text>                         
            </View>
            <View></View>
        
    </View>
  )
}

export default OpcaoCadastro;


const styles = StyleSheet.create({
    botao:{
        width: 309,
        height: 49,
        backgroundColor: '#D9D9D9',
        borderRadius: 49/2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '2vh',
        shadowOffset: {
            width: 3, // deslocamento horizontal da sombra
            height: 3, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.3, // opacidade da sombra
        shadowRadius: 4, // raio da sombra
        elevation: 1, // elevação da sombra (apenas Android)
    },
    portabolinha:{
        width:'10%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bolinha:{
        width:40 ,
        height:40,
        borderRadius:40/2 , 
        backgroundColor: '#999EA9',
        marginLeft: 20,
        shadowOffset: {
            width: 2, // deslocamento horizontal da sombra
            height: 2, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.3, // opacidade da sombra
        shadowRadius: 1, // raio da sombra
        elevation: 1, // elevação da sombra (apenas Android)
    },
    portaTexto:{
        width: '90%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        fontSize: 24,
        color: '#999EA9'
    }
})