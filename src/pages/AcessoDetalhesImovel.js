import react from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Animated } from 'react-native';
import { ImageBackground, TouchableOpacity } from "react-native";
import AuthService from "../Services/AuthService";
import { useState, useEffect, useRef } from "react";
import ModalTelaPrincipal from "../components/modalTelaPrincipal/ModalTelaPrincipal";
import ApiService from "../Services/ApiService";

import ButtonVoltar from "../assets/Svg/Buttons/Bnt_Voltar";
import { BlurView } from 'expo-blur';
import { Feather, Ionicons, FontAwesome, } from '@expo/vector-icons'
import IconCamaDetalhes from '../assets/Svg/Diversos/Cama_Detalhes_imovel';
import IconChuveiroDetalhes from '../assets/Svg/Diversos/Chuveiro_Detalhes_imovel';
import IconSofaDetalhes from '../assets/Svg/Diversos/Sofa_Detalhes_Imovel'

const AcessoDetalhesImovel = () => {
    const navigation = useNavigation();
    const [dados, setDados] = useState("");
    const route = useRoute();
    const { imovel } = route.params;
    const [isOpen, setIsOpen] = useState(false);


    const [img, setImg] = useState("");

    useEffect(() => {
        pegaImagem();
    }, []);

    async function pegaImagem() {

        try {
            let valor = imovel.codigo;
            const response = await ApiService.Get(`/imoveis/PegaImagemFav/${valor}`);
            setImg(response.data);
        }
        catch (erro) {
            console.log(erro);
            ToastService.Error("Erro ao buscar imagens");
        }
    }
    useEffect(() => {
        VerificarLogin();
    }, []);


    async function VerificarLogin() {


        const usuarioEstaLogado = await AuthService.VerificarSeUsuarioEstaLogado();


        if (usuarioEstaLogado) {
            const dadosUser = await AuthService.PegarDadosLogados();
            console.log(dadosUser);
            setDados(dadosUser);
        }
        else {
            navigation.navigate("LoginECadastro.js");
        }
    }

    const getColorByStatus = (status) => {
        switch (status) {
            case "Habitado":
                return "green"; // verde para disponível
            case "Desabilitado":
                return "red"; // vermelho para Indisponivel
            case "Pausado":
                return "yellow"; // amarelo para pausado
            default:
                return "black"; // cor padrão
        }
    }
    const translateY = useRef(new Animated.Value(310)).current;
    const [isVisible, setIsVisible] = useState(true);

    const toggleAnimation = () => {
        Animated.timing(translateY, {
            toValue: isVisible ? 310: -20, // Ajuste o valor de 300 para a altura desejada
            duration: 800,
            useNativeDriver: true,
        }).start();

        setIsVisible(!isVisible);
    }

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    };



    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '100%', position: 'fixed' }}>

                <ImageBackground style={styles.background} source={{ uri: img }}>

                    <View style={styles.buttonVoltar}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, left: -8 }}  >
                            <ButtonVoltar />
                        </TouchableOpacity>
                    </View>



                    <Animated.View style={[styles.animatedView, { transform: [{ translateY }] }]}>

                        <View style={styles.trippleButtons}>
                            {dados.Tipo == "PJ" || dados.Tipo == "PF" ?

                                <BlurView intensity={70} tint={"dark"} style={styles.btn}>
                                    <Pressable onPress={() => { navigation.navigate("EditarImovel", { imovel }) }}>
                                        <Feather name="edit-2" size={16} color="white" style={{}} />
                                    </Pressable>
                                </BlurView> : null}

                            <BlurView intensity={70} tint={"dark"} style={styles.btn}>
                                <Pressable onPress={() => { navigation.navigate("ImagensImovel", { imovel }) }}>
                                    <Ionicons name="image-outline" size={20} color="white" />
                                </Pressable>
                            </BlurView>

                            <BlurView intensity={70} tint={"dark"} style={styles.btn}>
                                <Pressable >
                                    <FontAwesome name="circle" size={24} color="#1CD62F" />
                                </Pressable>
                            </BlurView>

                        </View>

                        <BlurView
                            intensity={50} tint={"dark"}
                            style={styles.areainfor}>

                            <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'center', flexDirection: 'column' }}>
                                <Pressable 
                                style={{ position:'relative', left:-150, top:30,  }}
                                onPress={() => { toggleIcon(); toggleAnimation(); }}>
                                    {isOpen ? (
                                        <FontAwesome name="angle-double-down" size={27} color="white" />
                                    ) : (
                                        <FontAwesome name="angle-double-up" size={27} color="white" />
                                    )}
                                </Pressable>
                                <Text style={styles.title}>{imovel.bairro} </Text>
                                <Text style={styles.titlecida}>{imovel.cidade}</Text>
                                <Text style={styles.descricao}>{imovel.descricao}</Text>

                                <View style={{ width: '80%', height: 1, backgroundColor: '#fff', marginTop: 10 }}
                                />

                                <View style={styles.points}>
                                    {imovel.observacoesNomes.map((Nome, key) => (
                                        <View style={styles.itemContainer} key={key}>
                                            <Feather name="check" size={15} style={styles.icon} />
                                            <Text style={styles.label}>{Nome.replace(/([a-z])([A-Z])/g, '$1 $2')}</Text>
                                        </View>
                                    ))}
                                </View>

                                <View style={{ width: '100%', height: 150, justifyContent: 'center', flexDirection: 'row', }}>

                                    <View style={styles.cilinders}>
                                        <View style={styles.circulos}>
                                            <Ionicons name="expand" size={30} color="#999EA9" />
                                        </View>
                                        <Text style={styles.metragem}>{imovel.areaUtil.toLocaleString()} m²</Text>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 7,
                                            fontStyle: 'italic',
                                            color: '#FFFFFF',
                                            letterSpacing: 1,
                                            margin: 2
                                        }}> Terreno amplo com espaço para aréa de lazer</Text>
                                    </View>

                                    <View style={styles.cilinders}>
                                        <View style={styles.circulos}>
                                            <IconCamaDetalhes />
                                        </View>
                                        <Text style={styles.metragem}> {imovel.dormitorios} </Text>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 7,
                                            fontStyle: 'italic',
                                            color: '#FFFFFF',
                                            margin: 3
                                        }}> Quarto com otima ventilação e controle de iluminação</Text>
                                    </View>

                                    <View style={styles.cilinders}>
                                        <View style={styles.circulos}>
                                            <IconChuveiroDetalhes />
                                        </View>
                                        <Text style={styles.metragem}> {imovel.suites}</Text>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 7,
                                            fontStyle: 'italic',
                                            color: '#FFFFFF',
                                            margin: 3
                                        }}>Revestimentos de qualidade,iluminação e decoração moderna</Text>
                                    </View>

                                    <View style={styles.cilinders}>
                                        <View style={styles.circulos}>
                                            <IconSofaDetalhes />
                                        </View>
                                        <Text style={styles.metragem}> {imovel.salas}</Text>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 7,
                                            fontStyle: 'italic',
                                            color: '#FFFFFF',
                                            letterSpacing: 1,
                                            margin: 2
                                        }}> Terreno amplo com espaço para aréa de lazer</Text>
                                    </View>

                                </View>

                            </View>

                        </BlurView>
                    </Animated.View>


                </ImageBackground>
            </View>
        </View>
    );

}
export default AcessoDetalhesImovel;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#555',
    },
    areainfor: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    trippleButtons: {
        width: 100,
        height: 28,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        left: 260,
        top: 1

    },
    btn: {
        width: 28,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
    },
    descricao: {
        marginHorizontal: 20,
        marginTop: 15,
        textAlign: 'center',
        fontSize: 10,
        fontStyle: 'italic',
        color: '#FFFFFF',
        letterSpacing: 1

    },
    points: {
        width: 350,
        height: 110,
        marginTop: 10,
        left: 10,
        flexWrap: 'wrap',
    },
    itemContainer: {
        flexDirection: 'row', // Alinha os itens em linha
        alignItems: 'center', // Centraliza verticalmente os itens na linha
        marginVertical: 3, // Espaçamento vertical entre os itens

    },
    icon: {
        color: "#fff",
        marginRight: 1, // Espaçamento entre o ícone e o texto
    },
    label: {
        color: '#fff',
        fontSize: 10,


    },
    cilinders: {
        width: 68,
        height: 140,
        borderRadius: 68 / 2,
        backgroundColor: "#999EA9",
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 12

    },
    circulos: {
        width: 58,
        height: 58,
        borderRadius: 58 / 2,
        margin: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.2, // opacidade da sombra
        shadowRadius: 4, // raio da sombra
    },
    metragem: {
        fontSize: 10,
        fontWeight: '600',
        color: '#fff',
    },
    buttonVoltar: {
        width: '100%',
        height: '5vh',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '1vh',
        paddingRight: '1vh',
        alignItems: 'center',
        marginTop: 25
    },
    title: {
        marginTop: -5,
        color: 'rgb(255,255,255)',
        fontSize: '1.2em',
        fontWeight: '600',
        letterSpacing: 1


    },
    titlecida: {
        color: 'rgb(255,255,255)',
        fontSize: '1.2em',
        fontWeight: '600',
        letterSpacing: 1.2


    },

}); 