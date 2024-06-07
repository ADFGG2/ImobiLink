import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ButtonNewImovel from '../Buttons/Button_New_Imovel';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export default function Footer({ exibirTab, tipoLogin }) {

    const navigation = useNavigation();

    function click(action) {

        let pagina = "";

        if (action == "home") {
            switch (tipoLogin) {
                case "Corretor":
                    pagina = "TelaPrincipal1"
                    break;
                case "Imobiliaria":
                    pagina = "TelaPrincipal1"
                    break;
                case "Pj":
                    pagina = "TelaPrincipal2"
                    break;
                case "PF":
                    pagina = "TelaPrincipal2"
                    break;
                default:
                    break;
            }
        }
        else if (action == "perfil") {
            pagina = "Perfil"
        }
        else if (action == "new") {
            switch (tipoLogin) {
                case "Pj":
                    pagina = "AcessoMeusImoveis"
                    break;
                case "PF":
                    pagina = "AcessoMeusImoveis"
                    break;
                default:
                    break;
            }
        }




        navigation.navigate(pagina);
    }

    useEffect(() => {
        console.log("TesteTab", exibirTab)
    }, []);

    return (
        <>
            {
                exibirTab && (tipoLogin == "PF" || tipoLogin == "PJ") ? (
                    <View style={styles.container} >
                        <Pressable style={styles.button} onPress={() => click("home")}>
                            <Entypo name="home" size={25} color={"#999EA9"} />
                            <Text style={styles.texto}>Home</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => click("perfil")}>
                            <MaterialCommunityIcons name="file-document-edit" size={25} color={"#999EA9"} />
                            <Text style={styles.texto}>Perfil</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => click("new")}>
                            <ButtonNewImovel size={25} />
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => click("imoveis")}>
                            <Entypo name="home" size={25} color={"#999EA9"} />
                            <Text style={styles.texto}>Meus Imoveis</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => click("duvidas")}>
                            <FontAwesome5 name="question" size={25} color={"#999EA9"} />
                            <Text style={styles.texto}>Dúvidas</Text>
                        </Pressable>
                    </View >
                ) :
                    exibirTab && (tipoLogin == "Corretor" || tipoLogin == "Imobiliaria") ? (
                        <View style={styles.container} >
                            <Pressable style={styles.button} onPress={() => click("home")}>
                                <Entypo name="home" size={25} color={"#999EA9"} />
                                <Text style={styles.texto}>Home</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={() => click("perfil")}>
                                <MaterialCommunityIcons name="file-document-edit" size={25} color={"#999EA9"} />
                                <Text style={styles.texto}>Perfil</Text>
                            </Pressable>
        
                            <Pressable style={styles.button} onPress={() => click("imoveis")}>
                                <Entypo name="home" size={25} color={"#999EA9"} />
                                <Text style={styles.texto}>Meus Imoveis</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={() => click("duvidas")}>
                                <FontAwesome5 name="question" size={25} color={"#999EA9"} />
                                <Text style={styles.texto}>Dúvidas</Text>
                            </Pressable>
                        </View >
                    ) : null
            }
        </>
    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#202020',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: "#999EA9",
        fontSize: 11
    }
});

