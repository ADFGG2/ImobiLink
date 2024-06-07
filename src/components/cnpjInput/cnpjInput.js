import React,{ useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';


const CnpjInput = ({cnpjPai, setCnpjPai }) => {

  const [cnpj, setCnpj] = useState("");
  
  


  return (
    
    <MaskInput
    value={cnpj}
    style={styles.inputs2}
    placeholder='CNPJ'
    placeholderTextColor = "rgba(0, 0, 0, 0.5)"
    onChangeText={(masked, unmasked) => {
      setCnpj(masked); // you can use the unmasked value as well
      setCnpjPai(unmasked);

    }}
    mask={[ /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/,/\d/, "-", /\d/, /\d/]}

    />
   
  );
};


export default CnpjInput;

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

