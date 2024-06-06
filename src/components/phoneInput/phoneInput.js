import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';


const PhoneInput = ({ telefonePai, setTelefonePai, tamanhoCompleto }) => {

  const [telefone, setTelefone] = useState("");

  return (

    <MaskInput
      value={telefone}
      style={tamanhoCompleto ? styles.inputCompleto : styles.input}
      placeholder='Telefone'
      placeholderTextColor = "rgba(0, 0, 0, 0.5)"
      onChangeText={(masked, unmasked) => {
        setTelefone(masked); // you can use the unmasked value as well
        setTelefonePai(unmasked);
      }}
      mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    />

  );
};

const styles = StyleSheet.create({

  input: {
    width: '44vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    borderColor: '#9FA0A1',
    padding: '1vh'
  }
  ,
  inputCompleto: {
    width: '90vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    marginBottom: '1vh',
    borderColor: '#9FA0A1',
    padding: '1vh'
  }
});

export default PhoneInput;