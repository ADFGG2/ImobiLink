
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import seta from '../../images/icons/downSeta.png';
import { AntDesign } from '@expo/vector-icons'

const InputNumerosSelect = ({ options, onSelect, defaultValue, placeHold, numero, boolean }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue || '');

    const handleSelect = (option) => {
        setSelectedOption(option);
        setModalVisible(false);
        onSelect(option);
    };


    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.inputs2}>
                {numero ? <Text style={styles.text}>{placeHold + "         " + selectedOption || placeHold}</Text> : <Text style={styles.text}>{selectedOption || placeHold}</Text>}
                <AntDesign name="down" size={10} color="#999EA9" />
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
                                <Text style={styles.modalText}>{option}</Text>
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
    inputs2: {
        width: '44vw',
        height: '5vh',
        borderWidth: '1px',
        borderRadius: '2vw',
        borderColor: '#707070',
        padding: '1vh',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    text: {
        color: 'rgba(0, 0, 0, 0.5)', // Change this color to your desired color
    },
    modalText: {
        color: 'rgba(0, 0, 0, 0.5)',
    }
});

export default InputNumerosSelect;