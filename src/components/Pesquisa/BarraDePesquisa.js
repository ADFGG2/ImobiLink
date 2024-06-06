import React from "react";
import { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

import { FontAwesome, Ionicons } from '@expo/vector-icons'

const BarraDePesquisa = ({ pesquisaPai, setPesquisaPai }) => {

    const [pesq, setPesq] = useState("");

    return (
        <View style={styles.BarraDePesquisa} key={1}>
            <FontAwesome
                name="search"
                size={17}
                color="black"
            />

            <TextInput
                style={{ placeholderTextColor: '#B0B0B0' }}
                placeholder="Busque Por..."
                value={pesq}
                onChange={(texto) => { setPesquisaPai(texto) }}
            />

            <Ionicons
                name="filter"
                size={17}
                color="black"
            />

        </View>);
}
export default BarraDePesquisa;

const styles = StyleSheet.create({
    BarraDePesquisa: {
        width: 265,
        height: 40,
        borderRadius: '1.5em',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        borderColor: '#B0B0B0',
        padding: '0.3em',
        // Adicionando sombra com box-shadow
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",

    },
});
