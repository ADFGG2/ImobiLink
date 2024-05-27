import React from "react";
import { useState } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native-web";
import lupa from '../../images/icons/Lupa.png';
import filtro from '../../images/icons/Filtro.png';

const BarraDePesquisa = ({ pesquisaPai, setPesquisaPai }) => {

    const [pesq, setPesq] = useState("");

    return (
        <View style={styles.BarraDePesquisa}  key={1}>
            <Image source={lupa} style={styles.lupa} />
            <TextInput
                style={styles.textoPesquisa}
                placeholder="Busque Por..."
                value={pesq}
                onChange={(texto) => { setPesquisaPai(texto) }} />

            <Image source={filtro} style={styles.filtro} />
        </View>);
}
export default BarraDePesquisa;

const styles = StyleSheet.create({
    BarraDePesquisa: {
        width: "75%",
        height: "3em",
        borderRadius: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        borderWidth: 1,
        borderColor: '#B0B0B0',
        padding: '0.3em',
        // Adicionando sombra com box-shadow
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    },
    lupa: {
        width: '1em',
        height: '1.1em'
    },
    textoPesquisa: {
        width: '70%',
        height: '2.5em',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize:'1em'
    },
    filtro: {
        width: '1.2em',
        height: '1.2em'
    },
});
