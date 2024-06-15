import react from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { ImageBackground, TouchableOpacity } from "react-native";
import AuthService from "../Services/AuthService";
import { useState, useEffect } from "react";
import ModalTelaPrincipal from "../components/modalTelaPrincipal/ModalTelaPrincipal";
import ApiService from "../Services/ApiService";

import ButtonVoltar from "../assets/Svg/Buttons/Bnt_Voltar";
import { BlurView } from 'expo-blur';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons'


const AcessoDetalhesImovel = () => {
    const navigation = useNavigation();
    const [dados, setDados] = useState("");
    const route = useRoute();
    const { imovel } = route.params;


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

    return (
        <View style={styles.container}>

            <ImageBackground style={styles.background} source={require('../assets/Images/Imovel.jpeg')}>

                {/*<ImageBackground style={styles.background} source={{uri: img}}></ImageBackground> */}

                <View style={styles.topo}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: -20 }}  >
                        <ButtonVoltar />
                    </TouchableOpacity>
                </View>


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
                    style={styles.portaDados}>

                    <View style={{ marginTop: 15, marginBottom: 15, marginHorizontal: 25, alignItems: 'center', flexDirection: 'column' }}>
                        <Text style={styles.title}>{imovel.bairro} </Text>
                        <Text style={styles.titlecida}>{imovel.cidade}</Text>
                        <Text style={styles.descricao}> Com um ambiente acolhedor e funcional, este lar possui dois quartos, incluindo uma suíte e um quarto de hóspedes. Com três banheiros, academia própria, piscina, ampla área de lazer e espaço para churrascos, é ideal para relaxar e entreter com conforto e estilo. </Text>
                        {/*<Text style={styles.descricao}>{imovel.descricao}</Text>*/}
                        
                    </View>

                    <View style={{ width: '80%', height: 1, backgroundColor: '#fff'}} />

                    <View style={styles.points}>
                        {imovel.observacoesNomes.map(
                            (Nome, key) => (
                                <Text style={styles.label} key={key}>{Nome}</Text>
                            )
                        )
                        }
                    </View>


                </BlurView>

            </ImageBackground>
            <View style={styles.gray} />
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
    topButtons: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10%',

    },
    portaDados: {
        width: '100%',
        height: '55%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    trippleButtons: {
        width: 100,
        height: 50,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 120,
        left: 120

    },
    btn: {
        width: 28,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
    },
    data: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    infos: {
        width: '90%',
        height: '93%',
        alignItems: 'center',
    },
    btns: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        display: 'flex',
        alignItems: 'center'
    },
    buttonTl: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#777',
    },
    circulo: {
        width: '80%',
        height: '80%',
        borderRadius: '50%'
    },
    content: {
        width: '100%',
        height: '92%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '5%'
    },
    text: {
        width: '90%',
        height: '20%',
        paddingTop: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    descricao: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 10,
        fontStyle: 'italic',
        color: '#FFFFFF',
        letterSpacing: 1

    },
    points: {
        width: 350,
        backgroundColor:"#fff",
        height: 100,
        flexDirection: 'row ',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    label: {
        fontSize: 10,
      },
    cilinders: {
        width: '100%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    tamanho: {
        display: 'flex',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    trio: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-around'
    },
    cilinder: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'rgba(153, 158, 169, 1)',
        borderRadius: 100,
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img1: {
        width: '1.8em',
        height: '1.8em',
    },
    img2: {
        width: '1.8em',
        height: '1.6em',
    },
    img3: {
        width: '1.8em',
        height: '1.7em',
    },
    img4: {
        width: '2.1em',
        height: '1.2em',
    },
    paragraph: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',

    },
    paragraph2: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',
        marginLeft: 5,
        marginRight: 10
    },
    hr: {
        width: '75%',
        marginVertical: '5%',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    seta: {
        color: 'rgb(255,255,255)',
        fontSize: '1em',
        fontWeight: 'bold'
    },
    return: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '2em',
        paddingTop: '1vh',
        color: 'rgb(255,255,255)'
    },
    topo: {
        width: '100%',
        height: '5vh',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '1vh',
        paddingRight: '1vh',
        alignItems: 'center',
        marginTop: 25
    },
    portaBack: {
        width: 40,
        height: 40,
        borderRadius: 10,
        paddingBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(100,100,100)'
    },
    title: {
        marginTop: -5,
        color: 'rgb(255,255,255)',
        fontSize: '1.2em',
        fontWeight: 'bold',


    },
    titlecida: {
        color: 'rgb(255,255,255)',
        fontSize: '1.2em',
        fontWeight: 'bold',


    },

}); 