import React,{ useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';


const RgInput = ({rgPai, setRgPai }) => {

  const [rg, setRg] = useState("");
   


  return (
    
    <MaskInput
    value={rg}
    style={styles.inputs2}
    placeholder='RG'
    placeholderTextColor="rgba(0, 0, 0, 0.5)"
    onChangeText={(masked, unmasked) => {
      setRg(masked); // you can use the unmasked value as well
      setRgPai(unmasked);


    }}
    mask={[ /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/]}

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

export default RgInput;