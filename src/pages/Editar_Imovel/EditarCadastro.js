import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Modal, } from 'react-native';
import Checkbox from '../../Components/CheckBox/CheckBox';
import { ActionModal } from '../../Components/Modal/Teste'
import { FormAvanc } from '../../Components/Formularios/FormEdicaoAvancada'
import  { ReturnMenu } from '../../Components/Buttons/Return_menu'
import LogoBackground from '../../assets/Icons/LogoBackground.svg'


const EditarCadastro = ({ }) => {
    const [visibleModal, setVisibleModal] = useState(false);


    return (
        <View style={styles.container}>
            
            <ImageBackground style = {{position:'Fixed', left:-55, top: 150}}>
                <LogoBackground/>
            </ImageBackground>

            <View style={styles.btn_retun_menu}>
                <ReturnMenu/>
            </View>

            <View style={styles.text_line}>
                <Text style={styles.text_tema}> Dados Cadastrais </Text>
                <View style={styles.linha_space}></View>
            </View>

            <View style = {styles.form}>
                <FormAvanc />
            </View>

            <View style = {styles.checkbox}>
                <Checkbox />
            </View>

            <TouchableOpacity style={styles.button_edição}onPress={() => setVisibleModal(true)}>
                <Text style={styles.text_button}>Edição Avançada</Text>
            </TouchableOpacity>
            
            <Modal visible={false} transparent={true} onRequestClose={() => setVisibleModal(false)}>
                <ActionModal/>
            </Modal>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 31,
        paddingTop: 54,
        paddingVertical: 15,
        backgroundColor:"#BEBEBE"
    },
    btn_retun_menu: {
        width: '100%',
        paddingBottom: 30,

    },
    text_line: {
        width: '100%',
        marginTop: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent:'center',
    },
    text_tema: {
        color: "#777777",
        fontSize: 38,
        fontWeight: 'bold',
        paddingBottom: 10,

    },
    linha_space: {
        width: '100%',
        height: 0.5,
        marginTop: 15,
        backgroundColor: 'black',
        opacity: 0.4

    },
    form:{
        width: 365.98,
        height: 272.92,
    
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    linha: {
        height: 2,
        backgroundColor: "#000",
        marginTop: 8,

    },

    button_edição: {
        width: 118,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 210,
        marginTop: 45,
        backgroundColor: "#D9D9D9",
        borderRadius: 12,
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.9, // opacidade da sombra
        shadowRadius: 3, // raio da sombra
        elevation: 4, // elevação da sombra (apenas Android)
    },
    text_button: {
        fontSize: 12,
        fontStyle: 'italic',
    }

})

export default EditarCadastro;