import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, FlatList } from 'react-native';

const InputFlatList = ({ options, onSelect, defaultValue = 'Todos', placeHold }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setModalVisible(false);
        onSelect(option);
    };

    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.inputs2}>
                <Text>{selectedOption || placeHold}</Text>
                <Image source={require('../../images/icons/downSeta.png')} style={styles.seta} />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={['Todos', ...options]}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => handleSelect(item)}
                                    style={[
                                        styles.option,
                                        selectedOption === item && styles.selectedOptionBackground
                                    ]}
                                >
                                    <Text style={[
                                        styles.optionText,
                                        selectedOption === item && styles.selectedOptionText
                                    ]}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    option: {
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginVertical: 5,
    },
    selectedOptionBackground: {
        backgroundColor: '#ADD8E6', // Light blue background for selected items
    },
    inputs2: {
        width: '44vw',
        height: '5vh',
        borderWidth: '1px',
        borderRadius: '2vw',
        borderColor: '#707070',
        padding: '1vh',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    seta: {
        width: '3vw',
        height: '2.5vh'
    },
    optionText: {
        color: '#000',
    },
    selectedOptionText: {
        fontWeight: 'bold',
    }
});

export default InputFlatList;
