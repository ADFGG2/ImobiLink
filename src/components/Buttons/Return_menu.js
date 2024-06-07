import React from "react";
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import Voltar from '../../assets/Icons/voltar.svg'
import Menu from '../../assets/Icons/Menu.svg'

export function ReturnMenu(){


    return(
        <View style =  {styles.container}>
           <View style={styles.button} >
                    <TouchableOpacity>
                        <Voltar />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Menu />
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
    },
    button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    }
})