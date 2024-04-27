import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const CheckBox = ({options = [], onchange}) =>{

    const [selected, setSelected] = useState([]);

    function toggle(id) {
        let index = selected.findIndex(i => i===id);
        let arrSelecteds = [...selected];
        if(index !== -1)
        {
            arrSelecteds.splice(index, 1);
        } 
        else {
            arrSelecteds.push(id)
        }
        setSelected(arrSelecteds);
    }

    //useEffect(() => onChange(selected), [selected]);

    return (
        <View style={styles.container}>
            {options.map((op, index) => (
                <View style={styles.optionContainer} key={op?.id} > 
                    <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => toggle(op?.id)}>
                        { selected.findIndex(i => i=== op?.id) !== -1? (
                        <Image                             
                            source={require('../../images/icons/check.png')} 
                            style={styles.checklogo}/>
                            
                    ) : null}
                                            
                    </TouchableOpacity>
                    <Text style={styles.optext}>{op.text} </Text>
                </View>
            ))}
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        marginLeft: 12,
        marginTop: "5vw",
        marginBottom: "2vw"
    },
    optionContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    touchable: {
        height: 20,
        width: 20,  
        borderRadius:4,
        justifyContent: 'center',
        borderColor: '#3EBD93',
        borderWidth: 2
    },
    optext: {
        marginLeft: 12,
        color: '#555',
        fontSize: 16,
        fontWeight: '600',
    },
    checklogo:{
        width: 19,
        height: 19
    }
});

export default CheckBox;
