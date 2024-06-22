import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CheckBox = ({ options, itensSelecionados, onchange, pequeno }) => {

    function toggle(id) {
        onchange(id);
    }

    return (
        <View style={styles.container}>
            {options.map((op, index) => (
                <View style={styles.optionContainer} key={op?.id} >
                    <TouchableOpacity
                        style={!pequeno ? styles.touchable : styles.touchablePequeno}
                        onPress={() => toggle(op?.id)}>
                        {itensSelecionados.findIndex(i => i === op?.id) !== -1 ? (
                            <Image
                                source={require('../../images/icons/check.png')}
                                style={!pequeno ? styles.checklogo : styles.checklogoPequeno}
                            />

                        ) : null}

                    </TouchableOpacity>
                    <Text style={!pequeno ? styles.optext : styles.optextPequeno}>{op.text} </Text>
                </View>
            ))}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        marginLeft: '-11%',
        marginBottom: 47
    },
    optionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    touchable: {
        height: 17,
        width: 17,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems:'center',
        borderColor: '#707070',
        borderWidth: 2
    },
    touchablePequeno: {
        height: 10,
        width: 10,
        borderRadius: 1,
        justifyContent: 'center',
        borderColor: '#707070',
        borderWidth: 1
    },
    optext: {
        marginLeft:5,
        color: '#555',
        fontSize: 14,
        fontWeight: '400',
    },
    optextPequeno: {
        marginLeft: 9,
        color: '#555',
        fontSize: 10,
        fontWeight: '400',
    },
    checklogo: {
        width: 19,
        height: 19
    },
    checklogoPequeno: {
        width: 10,
        height: 10
    }
});

export default CheckBox;
