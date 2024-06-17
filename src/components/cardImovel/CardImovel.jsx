import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ToastService from '../../Services/ToastService';
import ApiService from '../../Services/ApiService';
import { Ionicons, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import IconCama from '../../assets/Svg/Diversos/Cama';
import IconChuveiro from '../../assets/Svg/Diversos/Chuveiro';
import IconSofa from '../../assets/Svg/Diversos/Sofa';

const cardImovel = ({ imovel }) => {
    const navigation = useNavigation();
    const [img, setImg] = useState("");

    useEffect(() => {
        pegaImagem();
    }, []);

    async function pegaImagem() {
        try {
            let valor = imovel.codigo;
            const response = await ApiService.Get(`/imoveis/PegaImagemFav/${valor}`);
            setImg(response.data);
        } catch (erro) {
            console.log(erro);
            ToastService.Error("Erro ao buscar imagens");
        }
    }

    const getFirstTwoNumbers = (numero) => {
        const numeroString = numero.toString();
        return numeroString.substring(0, 5);
    }

    const getColorByStatus = (status) => {
        switch (status) {
            case "Habitado":
                return "red";
            case "Disponível":
                return "green";
            case "Pausado":
                return "yellow";
            default:
                return "black";
        }
    }

    const getFirstAndSecondName = (fullName) => {
        const names = fullName.split(' ');
        if (names.length >= 2) {
            return `${names[0]} ${names[1]}`;
        } else {
            return fullName;
        }
    }

    return (
        <View style={styles.card} key={imovel?.Codigo}>

            <View style={styles.parte1}>
                <Image
                    source={{ uri: img }}
                    style={styles.imagemImovel}
                />

                <View style={styles.valorendereço}>
                    <View style={styles.primeirosTxts}>
                        <Text style={styles.textvalor}>
                            R$ {parseFloat(imovel.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Text>
                        <Text style={styles.texto}>{imovel.tipo}</Text>
                        <Text style={styles.texto}>{imovel.cidade}, {imovel.bairro}</Text>
                    </View>

                    <View style={styles.detalhesImoveis}>
                        <View style={styles.conjunto1}>
                            <Ionicons name="expand" size={15} color="black" />
                            <Text style={styles.texticons}>{getFirstTwoNumbers(parseFloat(imovel.areaUtil).toFixed(3))} m²</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <IconCama />
                            <Text style={styles.texticons}>{imovel.dormitorios}</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <IconChuveiro />
                            <Text style={styles.texticons}>{imovel.suites}</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <IconSofa />
                            <Text style={styles.texticons}>{imovel.salas}</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'column', alignItems: 'flex-start' }}>

                        <Pressable onPress={() => navigation.navigate("AcessoDetalhesImovel", { imovel })}>
                            <View style={styles.row}>
                                <AntDesign name="pluscircleo" size={14} color="black" />
                                <Text style={styles.detalhesImoveisTxt}>Detalhes</Text>
                            </View>
                        </Pressable>

                        <View style={styles.row2}>
                            <Ionicons name="person-circle-outline" size={18} color="black" />
                            <Text style={styles.detalhesImoveisTxt}>{getFirstAndSecondName(imovel.nomeAutor)}</Text>
                        </View>

                        <View style={styles.row}>
                            <View>
                                <FontAwesome name="circle" size={18} color={getColorByStatus(imovel.status)} />
                            </View>
                            <Text style={styles.detalhesImoveisTxt}>{imovel.status === "Disponível" ? "Disponível" : "Habitado"}</Text>
                        </View>

                        <Pressable >
                            <MaterialCommunityIcons style={{ position: 'relative', left: 130, bottom: 18,  }} name="alert" size={18} color="#D2AC21" />
                        </Pressable     > 

                    </View>

                </View>
            </View>
        </View>
    );
};

export default cardImovel;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 179,
        borderRadius: 11,
        marginTop: '2em',
        borderColor: '#797979',
        borderWidth: 1,
        shadowOffset: {
            width: 1, // deslocamento horizontal da sombra
            height: 1, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.4, // opacidade da sombra
        shadowRadius: 6, // raio da sombra

    },
    textvalor: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14,
    },
    texto: {
        textAlign: 'center',
        fontSize: 10
    },
    parte1: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 5, // Raio de 30 para o canto superior esquerdo
        borderTopRightRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'rgba(217, 217, 217, 0.5)',

    },
    imagemImovel: {
        width: '50%',
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: '#797979',
        borderTopLeftRadius: 11,
        borderBottomLeftRadius: 11,

    },
    primeirosTxts: {
        width: '100%',
        alignItens: 'center',
        justifyContent: 'center',
        paddingRight: 1
    },
    valorendereço: {
        width: '40%',
        height: '100%',
        display: 'flex',
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        paddingLeft: '5%'
    },
    detalhesImoveis: {
        marginLeft: -9,
        paddingLeft: 3,
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    conjunto: {
        alignItems: 'center',
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    conjunto1: {
        marginLeft: 1,
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texticons: {
        fontSize: 6,
        color: '121212',
        paddingLeft: '2px',
        fontWeight: '500'
    },
    row: {
        left: 1,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    row2: {
        left: -1,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    detalhesImoveisTxt: {
        paddingLeft: 2,
        fontSize: 10
    },
})