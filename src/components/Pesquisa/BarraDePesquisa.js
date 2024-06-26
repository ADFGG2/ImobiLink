import React, { useEffect, useState } from "react";
import { Modal, View, StyleSheet, TextInput, Text, Pressable, TouchableWithoutFeedback } from "react-native-web";
import { Octicons } from '@expo/vector-icons'
import InputFlatList from "../inputFlatList/inputFlatList";

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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                <Modal
                    transparent={true}
                    visible={modalVisible2}
                    onRequestClose={() => {
                        setModalVisible2(!modalVisible2);
                    }}
                >
                    <TouchableWithoutFeedback onPress={() => setModalVisible2(false)}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback>
                                <View style={styles.content}>
                                    <Text style={styles.modalTitle}>Filtro</Text>
                                    <View style={styles.valores}>
                                        <TextInput
                                            style={styles.inputsValor}
                                            value={filtroDeValorMinimo}
                                            onChangeText={(texto) => setFiltroDeValorMinimo(texto.replace(/[^0-9]/g, ''))}
                                            placeholder="Valor Mínimo"
                                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                        />
                                        <TextInput
                                            style={styles.inputsValor}
                                            value={filtroDeValorMaximo}
                                            onChangeText={(texto) => setFiltroDeValorMaximo(texto.replace(/[^0-9]/g, ''))}
                                            placeholder="Valor Máximo"
                                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                                        />
                                    </View>
                                    <View style={styles.valoresLista}>
                                        <InputFlatList
                                            options={cidadesDisponiveis}
                                            onSelect={setFiltroDeCidade}
                                            defaultValue={filtroDeCidade}
                                            placeHold="Cidades"
                                        />
                                    </View>
                                    <View style={styles.valoresLista}>
                                        <InputFlatList
                                            options={bairrosDisponiveis}
                                            onSelect={setFiltroDeBairro}
                                            defaultValue={filtroDeBairro}
                                            placeHold="Bairros"
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>

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
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        borderColor: '#B0B0B0',
        padding: '0.3em',
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        width: '90%',
        height: '30%',
        backgroundColor: '#bebebe',
        borderRadius: 11,
        alignItems: 'center ',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    modalTitle: {
        fontSize: 21,
        fontWeight: '700',
        letterSpacing: 1,
        marginTop: 15,
    },
    valores: {
        width: '90%',
        height: '20%',
        marginTop: 15,
        alignItems: 'center',
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    valoresLista: {
        width: '90%',
        height: '20%',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
