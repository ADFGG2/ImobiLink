import { View, Text, Touchable, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
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
        width:'90vw',
        height: '5vh',
        backgroundColor: '#D9D9D9',
        borderRadius: '2.5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: '2vh'
    },
    portabolinha:{
        width:'10%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bolinha:{
        width: '4.5vw',
        height: '4.5vw',
        borderRadius: '2.25vw', 
        backgroundColor: '#999EA9'
    },
    portaTexto:{
        width: '90%',
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto:{
        color: '#FFFFFF',
        fontSize: '1.5em'
    }
})