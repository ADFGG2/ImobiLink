
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import seta from '../../images/icons/downSeta.png';

const InputNumerosSelect = ({ options, onSelect, defaultValue, placeHold, numero, boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || '');

    const handleSelect = (option) => {
        setSelectedOption(option);
        setModalVisible(false);
        onSelect(option);
        console.log(option);
    };
    

    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.inputs2}>
                {numero? <Text>{placeHold+" | "+selectedOption || placeHold }</Text>:<Text>{selectedOption || placeHold }</Text> } 
                <Image source={seta} style={styles.seta} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}  
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        {options.map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleSelect(option)}
                                style={styles.option}
                            >
                                <Text>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#00000',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        paddingBottom: 1,
    },
    option: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    inputs2:{
        width: '44vw',
        height: '5vh',
        borderWidth: '1px',
        borderRadius: '2vw',
        borderColor: '#707070',
        padding: '1vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
      },
    seta:{
        width: '3vw',
        height: '2.5vh'
    }
});

export default InputNumerosSelect;