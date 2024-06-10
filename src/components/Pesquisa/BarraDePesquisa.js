import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet, Image, TextInput, Pressable, Text } from "react-native-web";
import lupa from '../../images/icons/Lupa.png';
import filtro from '../../images/icons/Filtro.png';
import InputFlatList from "../inputFlatList/inputFlatList";

import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons'

const BarraDePesquisa = ({ imoveis, imoveisShow, setImoveisShow }) => {
    const [modalVisible2, setModalVisible2] = useState(false);

    const [filtroDeValorMinimo, setFiltroDeValorMinimo] = useState("");
    const [filtroDeValorMaximo, setFiltroDeValorMaximo] = useState("");
    const [filtroDeCidade, setFiltroDeCidade] = useState("Todos");
    const [filtroDeBairro, setFiltroDeBairro] = useState("Todos");

    const [bairrosDisponiveis, setBairrosDisponiveis] = useState([]);
    const [cidadesDisponiveis, setCidadesDisponiveis] = useState([]);

    useEffect(() => {
        const listaDeBairros = [...new Set(imoveis.map(item => item.bairro))];
        const listaDeCidades = [...new Set(imoveis.map(item => item.cidade))];
        setBairrosDisponiveis(listaDeBairros);
        setCidadesDisponiveis(listaDeCidades);
    }, [imoveis]);

    useEffect(() => {
        filtrarImoveis();
    }, [filtroDeBairro, filtroDeCidade, filtroDeValorMaximo, filtroDeValorMinimo]);

    const filtrarImoveis = () => {
        let imoveisFiltrados = imoveis;

        if (filtroDeValorMinimo) {
            imoveisFiltrados = imoveisFiltrados.filter(item => item.valor >= filtroDeValorMinimo);
        }
        if (filtroDeValorMaximo) {
            imoveisFiltrados = imoveisFiltrados.filter(item => item.valor <= filtroDeValorMaximo);
        }
        if (filtroDeBairro && filtroDeBairro !== "Todos") {
            imoveisFiltrados = imoveisFiltrados.filter(item => item.bairro === filtroDeBairro);
        }
        if (filtroDeCidade && filtroDeCidade !== "Todos") {
            imoveisFiltrados = imoveisFiltrados.filter(item => item.cidade === filtroDeCidade);
        }
        setImoveisShow(imoveisFiltrados);
    };

    return (
        <>
            <View style={{ flex:1,alignItems:'center', justifyContent:'center', marginHorizontal:10,}}>
                <Modal
                    transparent={true}
                    visible={modalVisible2}
                    style={styles.Modal}
                    onRequestClose={() => {
                        setModalVisible2(!modalVisible2);
                    }}>
                    <View
                        style={styles.Modal}>
                        <View style={styles.content}>
                            <Text>Filtro</Text>
                            <View style={styles.valores}>
                                <TextInput
                                    style={styles.inputsValor}
                                    value={filtroDeValorMinimo}
                                    onChangeText={(texto) => setFiltroDeValorMinimo(texto.replace(/[^0-9]/g, ''))}
                                    placeholder="valor Minimo" />

                                <TextInput
                                    style={styles.inputsValor}
                                    value={filtroDeValorMaximo}
                                    onChangeText={(texto) => setFiltroDeValorMaximo(texto.replace(/[^0-9]/g, ''))}
                                    placeholder="valor Maximo" />
                            </View>
                            <View
                                style={styles.valores}
                            >
                                <InputFlatList
                                    options={cidadesDisponiveis}
                                    onSelect={setFiltroDeCidade}
                                    defaultValue={filtroDeCidade}
                                    placeHold="Cidades" />
                            </View>

                            <View>
                                <InputFlatList
                                    options={bairrosDisponiveis}
                                    onSelect={setFiltroDeBairro}
                                    defaultValue={filtroDeBairro}
                                    placeHold="Bairros" />
                            </View>
                        </View>
                    </View>
                </Modal>
                </View>

                <View style={styles.BarraDePesquisa} key={1}>
                    <MaterialCommunityIcons name="magnify" size={20} color="black" />
                    <TextInput
                        placeholder="Busque Por..."
                        placeholderTextColor="#B0B0B0"
                        onChange={(texto) => { setPesquisaPai(texto) }} />
                    <Pressable style={styles.filtro} onPress={() => { setModalVisible2(true) }}>
                        <Octicons name="filter" size={20} color="black" />
                    </Pressable>
                </View>
            
        </>
    );
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
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",

    },
    textoPesquisa: {
        width: '70%',
        height: '2.5em',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: '1em'
    },
    content: {
        width: '25em',
        height: '25em',
        backgroundColor: 'rgb(200,200,200)',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Modal: {
        flex:1,
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    valores: {
        width: '90%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputsValor: {
        width: '15vh',
        height: '5vh',
        borderRadius: '0.7vh',
        backgroundColor: 'rgb(230,230,230)',
        borderWidth: 1,
        borderColor: 'rgb(0,0,0)',
        padding: 3,
        fontSize: '1em'
    }
});
