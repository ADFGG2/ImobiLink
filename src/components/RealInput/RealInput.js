import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { TextInputMask } from 'react-native-masked-text';


const RealInput = ({ valor, setValor, placeholder, tamanhoCompleto }) => {

  const [valorFormatado, setValorFormatado] = useState("");

  return (


    <TextInputMask
      type={'money'}
      value={valorFormatado}
      style={tamanhoCompleto ? styles.inputCompleto : styles.input}
      placeholder={placeholder}
      placeholderTextColor="rgba(0, 0, 0, 0.5)"
      onChangeText={(valor) => {
        setValorFormatado(valor);
        let valorSemFormatacao = valor.replace("R$", "").trim();
        valorSemFormatacao = valorSemFormatacao.replace(/\./g, ""); // Remove todos os pontos
        valorSemFormatacao = valorSemFormatacao.replace(",", "."); // Substitui a vírgula decimal por ponto
        setValor(Number(valorSemFormatacao));
      }}
    />

  );
};

const styles = StyleSheet.create({

  input: {
    width: '44vw',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    borderColor: '#707070',
    padding: '1vh'
  }
  ,
  inputCompleto: {
    width: '90%',
    height: '5vh',
    borderWidth: '1px',
    borderRadius: '2vw',
    borderColor: '#707070',
    padding: '1vh',
    marginBottom: '1vh'
  }
});

export default RealInput;