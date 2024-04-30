import { useState } from "react";
import { Pressable } from "react-native";
import { Modal, View, StyleSheet, Image, Text } from "react-native-web";
import Menu from "../../images/icons/Menu.png";
import close from "../../images/icons/close.png";
import edit from "../../images/icons/edit.png";
import logout from "../../images/icons/logout.png";
import Certeza from "../certezaSair/Certeza";

const ModalTelaPrincipal = ()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);


    return(
        <View style ={styles.centeredView}>
            {console.log("primeiro dado: "+modalVisible)}
            <Certeza status={modalVisible2} />
             
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            >
                <View style={styles.modais}>
                
                    <Pressable
                    onPress={() => {setModalVisible(!modalVisible); setModalVisible2(false)}}>
                            <View style={styles.modalView}>
                                <Image source={close} style={styles.closeimg}/>
                            </View>
                    </Pressable>

                    <Pressable
                    onPress={() => navigation.navigate("EditarPerfil")}>
                            <View style={styles.modalView}>
                                <Image source={edit} style={styles.closeimg}/>
                            </View>
                    </Pressable>

                    <Pressable
                    onPress={()=>{setModalVisible2(!modalVisible2); setModalVisible(!modalVisible)}}>
                            <View style={styles.modalView}>
                                <Image source={logout} style={styles.logoutimg}/>
                            </View>
                    </Pressable>      
                    
                </View>
            </Modal>

            
                <Pressable onPress={() => setModalVisible(true)}>
                    <View>
                        <Image source={Menu} style={!modalVisible ? styles.Menu : styles.invisivel} />
                    </View>
                </Pressable>

            
            
        </View>

    );
}
export default ModalTelaPrincipal;
const styles = StyleSheet.create({
    centeredView: {
        width:'4vh'
    },
    modais: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '4vh',
        flexDirection: 'column',
        marginLeft: '78%',
        marginTop: '14.5%'
    },
    Menu:{
        width: '3vh',
        height: '3vh'
    },
    modalView:{
        width: '3.5vh',
        height: '3.5vh',
        borderRadius: '1.75vh',
        backgroundColor: '#E3E9F2',
        display: 'flex',
        marginBottom: '1vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeimg:{
        width: '3vh',
        height: '3vh'
    },
    logoutimg:{
        width: '1.9vh',
        height: '1.8vh'
    },
    invisivel:{
        width: 0
    },
    
});