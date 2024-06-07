import {View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
    import { useState } from 'react';
   



export function ModalEdicaoAvancada (){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.rowdupli}>
                <TextInput
                    style={styles.inputdupli}
                    placeholder="Tipo de Imovel"
                    placeholderTextColor="rgba(136, 136, 136, 0.9)"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputdupli}
                    placeholder="Andar"
                    placeholderTextColor="rgba(136, 136, 136, 0.9)"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.row}>
            <TextInput
                    style={styles.input}
                    placeholder="Andar"
                    placeholderTextColor="rgba(136, 136, 136, 0.9)"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.rowdupli}>
                <TextInput
                    style={styles.inputdupli}
                    placeholder="Tipo de Imovel"
                    placeholderTextColor="rgba(136, 136, 136, 0.9)"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.inputdupli}
                    placeholder="Andar"
                    placeholderTextColor="rgba(136, 136, 136, 0.9)"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.row}>
            <TextInput
                    style={styles.input}
                    placeholder="Andar"
                    placeholderTextColor="rgba(136, 136, 136, 0.9)"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.area_button}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text_button}>Edição Avançada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text_button}>Edição Avançada</Text>
            </TouchableOpacity>
            </View> 

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'120%',
        height:'100%',
        marginTop:- 215,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor:"#BEBEBE",
        alignItems:'center',
        justifyContent:'center',
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.5, // opacidade da sombra
        shadowRadius: 10, // raio da sombra
        elevation: 7, // elevação da sombra (apenas Android)

    },
    header:{
        position:'relative',
        marginHorizontal:  20,
        marginBottom: 480
    },
    rowdupli: {
        marginTop: 9.9,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    row: {
        marginTop: 9.9,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input:{
        width: 355,
        height: 37.05, 
        borderColor: "#707070",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 5,
        marginStart: 7,
        fontSize: 12
    },
    inputdupli: {
        width: 171.50,
        height: 37.05,
        borderColor: "#707070",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 5,
        marginStart: 7,
        fontSize: 12
    },
    area_button:{
        margin:50,
        backgroundColor:"#fff",
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
        
    },
    button:{
        width: 118,
        height: 33,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft:210,
        marginTop: -5,
        backgroundColor: "#D9D9D9",
        borderRadius: 12,
        shadowOffset: {
            width: 0, // deslocamento horizontal da sombra
            height: 0, // deslocamento vertical da sombra
        },
        shadowOpacity: 0.9, // opacidade da sombra
        shadowRadius: 3, // raio da sombra
        elevation: 4, // elevação da sombra (apenas Android)
    }
})