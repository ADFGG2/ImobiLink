import React,{ useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';


const CpfInput = ({cpfPai, setCpfPai }) => {

  const [cpf, setCpf] = useState("");

  return (
    
    <MaskInput
    value={cpf}
    style={styles.inputs2}
    placeholder='CPF'
    placeholderTextColor="rgba(0, 0, 0, 0.5)"
    onChangeText={(masked, unmasked) => {
      setCpf(masked); // you can use the unmasked value as well
      setCpfPai(unmasked);

    }}
    mask={[ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
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

export default CpfInput;