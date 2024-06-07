import { useEffect, useState, useRef } from "react";
import { Animated, Easing } from "react-native";
import { Modal, View, StyleSheet, Text, Pressable } from "react-native";
import AuthService from "../../Services/AuthService";
import { useNavigation } from '@react-navigation/native';

import ButtonMenu from "../../assets/Svg/Buttons/Bnt_Menu";
import { BlurView } from "expo-blur";
import IconFecharMenu from "../../assets/Svg/Buttons/Bnt_Fechar";
import IconEditar from "../../assets/Svg/Buttons/Bnt_Editar";
import IconExit from "../../assets/Svg/Buttons/Bnt_Exit"

const ModalTelaPrincipal = () => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const slideAnim = useRef(new Animated.Value(-200)).current; // Valor inicial fora da tela

    useEffect(() => {
        console.log(modalVisible2 ? "verdadeiro" : "falso")
    }, [modalVisible2]);

    const navigation = useNavigation();

    async function Sair() {
        try {
            await AuthService.Sair();
            navigation.navigate('LoginECadastro');
        } catch (erro) {
            console.log(erro);
        }
    }

    const toggleMenu = () => {
        if (modalVisible) {
            Animated.timing(slideAnim, {
                toValue: -200, // Mover para fora da tela
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start(() => setModalVisible(false));
        } else {
            setModalVisible(true);
            Animated.timing(slideAnim, {
                toValue: 0, // Mover para a posição final
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleOutsidePress = () => {
        if (modalVisible) {
            setModalVisible(false);
            Animated.timing(slideAnim, {
                toValue: -200,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <Pressable onPress={handleOutsidePress}>
            <View style={styles.centeredView}>
                <Modal animationType="fade" transparent={true} visible={modalVisible}>
                    <View style={styles.areamodal}>
                        <BlurView intensity={20} tint={"dark"} style={styles.popup_modal}>
                            <Pressable
                                onPress={() => { setModalVisible(!modalVisible), setModalVisible2(false) }}>
                                <View style={styles.modalView}>
                                    <IconFecharMenu />
                                </View>
                            </Pressable>
                        </BlurView>

                        <BlurView intensity={30} tint={"dark"} style={styles.popup_modal}>
                            <Pressable onPress={() => navigation.navigate("Perfil")}>
                                <View style={styles.modalView}>
                                    <IconEditar />
                                </View>
                            </Pressable>
                        </BlurView>

                        <BlurView intensity={30} tint={"dark"} style={styles.popup_modal}>
                            <Pressable onPress={() => { setModalVisible2(false); Sair(); }}>
                                <View style={styles.modalView}>
                                    <IconExit />
                                </View>
                            </Pressable>
                        </BlurView>
                    </View>
                </Modal>

                <BlurView intensity={20} tint={"dark"} style={styles.popup_menu}>
                    <Pressable onPress={toggleMenu}>
                        <ButtonMenu style={!modalVisible ? styles.Menu : styles.invisivel} />
                    </Pressable>
                </BlurView>


            </View>
        </Pressable>
    );
};

export default ModalTelaPrincipal;

const styles = StyleSheet.create({
    centeredView: {
        position: 'relative',
        width: '4vh',
    },
    areamodal: {
        width: 165,
        height: 165,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'fixed',
        right: -28,
        top: 72,
    },
    popup_modal: {
        width: 28,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        
    },
    popup_menu: {
        width: 28,
        height: 28,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        
    },
    Menu: {
        width: '3vh',
        height: '3vh',
    },
    modalView: {
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    closeimg
: {
        width: '3vh',
        height: '3vh',
    },
    logoutimg: {
        width: '1.9vh',
        height: '1.8vh',
    },
    invisivel: {
        width: 0,
    },
    sideMenu: {
        position: 'absolute',
        top: 0,
        left: '4vh',
        width: '15vh',
        backgroundColor: '#E3E9F2',
        borderRadius: '1vh',
        padding: '1vh',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        zIndex: 1,
    },
    menuItem: {
        marginBottom: '1vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    menuIcon: {
        width: '3vh',
        height: '3vh',
        marginLeft: '1vh',
    },
});
