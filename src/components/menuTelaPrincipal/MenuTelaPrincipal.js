import { View, Text, Touchable, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Duvidas from '../../images/icons/telaInicio/duvidas.png';
import MeusImoveis from '../../images/icons/telaInicio/meusImoveis.png';
import Cadastrados from '../../images/icons/telaInicio/cadastrados.png';
import Imoblink from '../../images/icons/telaInicio/Imoblink.png';
import { useNavigation } from '@react-navigation/native';
import Certeza from '../certezaSair/Certeza';

const MenuTelaPrincipal = ({ func1, func2, func3, func4}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.menu}>
            <Pressable
                onPress={()=>{navigation.navigate(func1)}}>
                <Image 
                    source={Cadastrados}
                    style={styles.icon1}/>
            </Pressable>

            <Pressable
                onPress={()=>{navigation.navigate(func2)}}>

                <Image 
                    source={MeusImoveis}
                    style={styles.icon2}/>
            </Pressable>

            <Pressable
                onPress={()=>{navigation.navigate(func3)}}>

                <Image 
                    source={Duvidas}
                    style={styles.icon3}/>
            </Pressable>

            <Pressable 
                onPress={()=>{navigation.navigate(func4)}}
            >
                <Image 
                    source={Imoblink}
                    style={styles.icon4}/>
            </Pressable>

        </View>
    )
}

export default MenuTelaPrincipal;

const styles = StyleSheet.create({
    menu:{
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECEEF0',
        paddingLeft: '5vh',
        paddingRight: '5vh'
    },
    icon1:{
        width:'4.5vh',
        height: '5.45vh',        
    },
    icon2:{
        width:'5.05vh',
        height: '5.3vh',        
    },
    icon3:{
        width:'5vh',
        height: '5vh',        
    },
    icon4:{
        width:'5vh',
        height: '5.45vh',        
    }

})