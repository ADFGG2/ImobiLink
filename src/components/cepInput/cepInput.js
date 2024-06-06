import React,{ useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';
import validarCEP from '../../Services/FoundCep';


const CepInput = ({CEPPai, setCEPPai, setBairro, setCidade, setRua }) => {

  const [CEP, setCEP] = useState("");

  return (
    
    <MaskInput
    value={CEP}
    style={styles.inputs2}
    placeholder='CEP'
    placeholderTextColor = "rgba(0, 0, 0, 0.5)"
    onChangeText={(masked, unmasked) => {
      setCEP(masked); // you can use the unmasked value as well
      setCEPPai(unmasked);
      
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
        borderColor: '#9FA0A1',
        padding: '1vh'
    }

});

export default CepInput;