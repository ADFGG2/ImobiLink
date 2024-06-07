import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image, ScrollView} from 'react-native';
import { imagem } from '../../assets/Images/Imovel.jpeg';



const  MeusImoveis= () => {
    return(
        <View style =  {styles.container}>
            <View style ={styles.header}>
                <View style ={styles.dados_imoveis}>
             
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: '100%',
        alignItems:'center',
        backgroundColor:'#000'
    },
    dados_imoveis: {
        width: '100%',
        height: 179,
        borderColor: '#000',
    }
})

export default MeusImoveis;