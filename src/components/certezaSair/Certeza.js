import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { ConfirmDialog } from 'react-native-simple-dialogs';



const Certeza = ({ status, setStatus, titulo, descricao, condicao1, condicao2, funcao }) => {


  return (

    <ConfirmDialog
      title={titulo}
      message={descricao}
      visible={status}
      onTouchOutside={() => setStatus(false)}
      positiveButton={{
        title: condicao1,
        onPress: () => { funcao() }
      }}
      negativeButton={{
        title: condicao2,
        onPress: () => setStatus(false)
      }}
    />


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