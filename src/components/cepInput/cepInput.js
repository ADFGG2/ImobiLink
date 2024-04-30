import React,{ useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';
import validarCEP from '../../Services/FoundCep';


const CepInput = ({cepPai, setCepPai, setBairro, setCidade, setRua }) => {

  const [cep, setCep] = useState("");

  return (
    
    <MaskInput
    value={cep}
    style={styles.inputs2}
    placeholder='cep'
    onChangeText={(masked, unmasked) => {
      setCep(masked); // you can use the unmasked value as well
      setCepPai(unmasked);
      
      setRua? validarCEP(unmasked, setBairro, setCidade, setRua) : validarCEP(unmasked, setBairro, setCidade)
    }}
    mask={[ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
  />
   
  );
};

const styles = StyleSheet.create({

    inputs2:{
        width: '44vw',
        height: '5vh',
        borderWidth: '1px',
        borderRadius: '2vw',
        borderColor: '#707070',
        padding: '1vh'
    }

});

export default CepInput;