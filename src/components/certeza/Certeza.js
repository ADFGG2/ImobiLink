import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import AuthService from "../../Services/AuthService";

const Certeza = (status) => {
  const [modalVisible2, setModalVisible2] = useState(false);

  async function Sair() {
    try{
        console.log("cheguei aqui")
        await AuthService.Sair();
        navigation.navigate('LoginECadastro');
    }
    catch(erro){
        console.log(erro)
    }
      
  }

  function reafirmar(bool){ 
        setModalVisible2(bool["status"])
  }

  useEffect(() => {
    reafirmar(status);
  }, [status]);

  return (
    <View style ={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible2}
            onRequestClose={() => {
            setModalVisible2(!modalVisible2);
            }}>
                <View style={styles.centeredView2}>
                    <View style={styles.modalView2}>

                        <Text style={styles.modalText2}>Deseja Realmente Sair?</Text>

                        <View style={styles.portaBotoes2}>

                            <Pressable                        
                            onPress={() => {Sair()}}>
                                <View style={styles.buttonSair}>
                                    <Text style={styles.textStyle}>Sair</Text>
                                </View>
                                
                            </Pressable>

                            <Pressable                        
                            onPress={() => {setModalVisible2(false)}}>
                                <View
                                style={styles.buttonCancelar}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </View>
                            </Pressable>

                        </View>
                       
                    </View>
                </View>
            </Modal>
        </View>
  );
};

const styles = StyleSheet.create({
    centeredView2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView2: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonSair: {
        width: '7.5vh',
        height: '2vh',
        borderRadius: 20,
        padding: '1.2vh',
        backgroundColor: '#FF0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '1vh'
      },
      buttonCancelar: {
        width: '7.5vh',
        height: '2vh',
        borderRadius: 20,
        padding: '1.2vh',
        backgroundColor: '#999EA9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText2: {
        marginBottom: 15,
        textAlign: 'center',
      },
      portaBotoes2:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evently'
      }
});

export default Certeza;