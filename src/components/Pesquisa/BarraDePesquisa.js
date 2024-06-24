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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, }}>
                <Modal
                    transparent={true}
                    visible={modalVisible2}
                    style={styles.modal}
                    onRequestClose={() => {
                        setModalVisible2(!modalVisible2);
                    }}>
                    <View
                        style={styles.modal}>
                        <View style={styles.content}>
                            <Text style={{fontSize: 21, fontWeight: '600', letterSpacing: 1, marginTop:15}} >Filtro</Text>
                        <View style={styles.valores}>
                            <TextInput
                                style={styles.inputsValor}
                                value={filtroDeValorMinimo}
                                onChangeText={(texto) => setFiltroDeValorMinimo(texto.replace(/[^0-9]/g, ''))}
                                placeholder="Valor Mínimo"
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"  />
                                

                            <TextInput
                                style={styles.inputsValor}
                                value={filtroDeValorMaximo}
                                onChangeText={(texto) => setFiltroDeValorMaximo(texto.replace(/[^0-9]/g, ''))}
                                placeholder="Valor Máximo"
                                placeholderTextColor="rgba(0, 0, 0, 0.5)"  />
                        </View>
                        <View
                            style={styles.valoresLista}
                        >
                            <InputFlatList
                                options={cidadesDisponiveis}
                                onSelect={setFiltroDeCidade}
                                defaultValue={filtroDeCidade}
                                placeHold="Cidades" />
                        </View>

                        <View style={styles.valoresLista}>
                            <InputFlatList
                                options={bairrosDisponiveis}
                                onSelect={setFiltroDeBairro}
                                defaultValue={filtroDeBairro}
                                placeHold="Bairros" />
                        </View>
                    </View>
            </View>
        </Modal >
                </View >

    <View style={styles.BarraDePesquisa} key={1}>
        <Pressable style={styles.filtro} onPress={() => { setModalVisible2(true) }}>
            <Octicons name="filter" size={23} color="black" />
        </Pressable>
    </View>
            
        </>
    );
}

export default BarraDePesquisa;

const styles = StyleSheet.create({
    BarraDePesquisa: {
        width:50,
        height: 50,
        borderRadius: 50/2,
        justifyContent: 'center',
        alignItems:'center',
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
        width: '90%',
        height: '30%',
        backgroundColor: '#bebebe',
        borderRadius: 11,
        alignItems: 'center ',
        shadowColor: '#000',
        shadowOffset: {
            width: 1, // deslocamento horizontal da sombra
            height: 1, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.4, // opacidade da sombra
        shadowRadius: 6, // raio da sombra
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    valores: {
        width: '90%',
        height: '20%',
        marginTop: 15,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputsValor: {
        width: 120,
        height: '5vh',
        borderRadius: '0.7vh',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        fontSize: 12, 
        alignItems:'center',
        justifyContent:'center'
    },
    valoresLista:{
        width: '90%',
        height: '20%',
        marginTop: 15,
        alignItems:'center',
        justifyContent: 'center',
    }
});
