import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Dialog from "react-native-dialog";


const Certeza = (status, setStatus, descricao, condicao1, condicao2, funcao) => {

  return (

    <View>
      <Dialog.Container visible={status}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" />
        <Dialog.Button label="Delete" />
      </Dialog.Container>
    </View>


    // <Modal
    //   transparent={false}
    //   visible={status}
    //   onRequestClose={() => {
    //     setStatus(false);
    //   }}>
    //   <View style={styles.centeredView}>
    //     <View style={styles.centeredView2}>
    //       <View style={styles.modalView2}>

    //         <Text style={styles.modalText2}>{descricao}</Text>

    //         <View style={styles.portaBotoes2}>

    //           <Pressable
    //             onPress={() => { funcao() }}>
    //             <View style={styles.buttonSair}>
    //               <Text style={styles.textStyle}>{condicao1}</Text>
    //             </View>

    //           </Pressable>

    //           <Pressable
    //             onPress={() => { setStatus(false) }}>
    //             <View
    //               style={styles.buttonCancelar}>
    //               <Text style={styles.textStyle}>{condicao2}</Text>
    //             </View>
    //           </Pressable>

    //         </View>

    //       </View>
    //     </View>
    //   </View>
    // </Modal>
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
  portaBotoes2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evently'
  }
});

export default Certeza;