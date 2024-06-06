import react from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import Fundo from "../images/fundos/Fundo.png"
import { ImageBackground, TouchableOpacity } from "react-native";
import AuthService from "../Services/AuthService";
import Cama from '../images/icons/CamaCinza.png';
import Chuveiro from '../images/icons/ChuveiroCinza.png';
import Expansao from '../images/icons/ExpansaoCinza.png';
import Sofa from '../images/icons/SofaCinza.png';
import { useState, useEffect } from "react";
import ModalTelaPrincipal from "../components/modalTelaPrincipal/ModalTelaPrincipal";



import edit from '../images/icons/editar.png';
import imgDisponivel from '../images/icons/cardImovel/ativado.jpg';
import imgIndisponivel from '../images/icons/cardImovel/desativado.jpg';


const AcessoDetalhesImovel = () => {
    const navigation = useNavigation();
    const [dados, setDados] = useState("");
    const route = useRoute();
    const { imovel } = route.params;



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
        return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={Fundo}>

                <View style={styles.topo}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.portaBack}><Text style={styles.return}> {`<`} </Text></TouchableOpacity>
                    <View style={styles.portaModal}>
                        <ModalTelaPrincipal />
                    </View>
                </View>
                <View style={styles.portaDados}>
                    <View style={styles.trippleButtons}>
                        { dados.Tipo=="PJ" || dados.Tipo=="PF"? 
                            <Pressable onPress={()=>{navigation.navigate("EditarImovel", {imovel})}}>
                                <Image source={edit} style={styles.button}/>
                            </Pressable>: 
                            null}
                        <Pressable onPress={()=>{navigation.navigate("ImagensImovel", {imovel})}}>
                            <Image source={image} style={styles.button}/>
                        </Pressable>
                        <Pressable style={styles.button}>
                                <Image
                                    source={imovel.status=="Disponível" ? imgDisponivel : imgIndisponivel}
                                    style={styles.circulo} />
                        </Pressable>
                    </View>

                    <View style={styles.data}>
                        <View style={styles.infos}>
                            <View style={styles.btns}>
                                <View style={styles.buttonTl}>
                                    <Text style={styles.seta}>{'<'}</Text>
                                </View>
                                <Text style={styles.title}>{imovel.bairro + ", " + imovel.cidade}</Text>
                                <View style={styles.buttonTl}>
                                    <Text style={styles.seta}>{'>'}</Text>
                                </View>
                            </View>
                            <View style={styles.content}>
                                <View style={styles.text}>
                                    <Text style={styles.descricao}>{imovel.descricao}</Text>
                                </View>
                                <View style={styles.hr} />
                                <View style={styles.points}>
                                {imovel.observacoesNomes.map(                                    
                                        (Nome, key) => (
                                            <Text style={styles.observacao} key={key}>{Nome}</Text>
                                        )
                                    )
                                }
                                                                
                                </View>
                                <View style={styles.cilinders}>
                                    <View style={styles.tamanho}>
                                        <View style={styles.cilinder}>
                                            <View style={styles.img}>
                                                <Image style={styles.img1} source={Expansao} />
                                            </View>
                                            <Text style={styles.paragraph2}>{imovel.areaUtil} m²</Text>
                                        </View>
                                    </View>
                                    
                                    
                                    <View style={styles.trio}>
                                        
                                        <View style={styles.cilinder}>
                                            <View style={styles.img}>
                                                <Image style={styles.img2} source={Cama} />
                                            </View>
                                            <Text style={styles.paragraph}> {imovel.dormitorios} </Text>
                                        </View>

                                        <View style={styles.cilinder}>
                                            <View style={styles.img}>
                                                <Image style={styles.img3} source={Chuveiro} />
                                            </View>
                                            <Text style={styles.paragraph}> {imovel.suites} </Text>
                                        </View>

                                        <View style={styles.cilinder}>
                                            <View style={styles.img}>
                                                <Image style={styles.img4} source={Sofa} />
                                            </View>
                                            <Text style={styles.paragraph}> {imovel.salas} </Text>
                                        </View>

                                    </View>
                                    
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                
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
        backgroundColor: '#555',
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
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#777',
        marginRight: 1.5
    },
    portaDados:{
        width: '100%',
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    trippleButtons: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    data: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.85)',
        borderTopRightRadius: '5%',
        borderTopLeftRadius: '5%'
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
    circulo:{
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
        textAlign: 'center',
        color: 'rgb(255,255,255)'
    },
    points: {
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '10%',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    cilinders: {
        width: '100%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    tamanho:{
        display: 'flex',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"        
    },
    trio:{
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
        display: 'flex',
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
        color: 'rgb(255,255,255)',
        fontSize: '1.2em',
        fontWeight: 'bold',
        width: '70%'
    },
    observacao:{
        color: 'rgb(255,255,255)'
    }
}); 