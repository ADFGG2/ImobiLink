import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


const CheckTermosDeUso = ({ options, itensSelecionados, onchange, pequeno }) => {

    function toggle(id) {
        onchange(id);
    }

    return (
        <View style={styles.container}>
            {options.map((op, index) => (
                <View style={styles.optionContainer} key={op?.id} >
                    <TouchableOpacity
                        style={styles.checkbox}
                        onPress={() => toggle(op?.id)}>
                        {itensSelecionados.findIndex(i => i === op?.id) !== -1 ? (
                            <Feather name="check" size={15} color="#707070" />
                            
                        ) : null}
                    </TouchableOpacity>
                    <Text style={styles.label}>{op.text} </Text>
                </View>
            ))}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
    },
    optionContainer: {
        width:300,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#707070',
        marginRight: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    checked: {
        width: 8,
        height: 8,
        backgroundColor: '#707070',
    },
    label: {
        fontSize: 12,
        color:"#707070"
    }
});

export default CheckTermosDeUso;
