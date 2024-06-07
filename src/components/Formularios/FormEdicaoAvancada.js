
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useState } from "react";

export function FormAvanc(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <View style =  {styles.container}>
            <View style =  {styles.header}>
                <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            placeholder="Tipo de Imovel"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Andar"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            placeholder="Dorms"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Suítes"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            placeholder="Sala"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Garagem"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            placeholder="Área Útil"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cond Fechado"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            placeholder="Valor Cond"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Valor do IPTU"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.input}
                            placeholder="Valor do Imóvel R$"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Status"
                            placeholderTextColor="rgba(136, 136, 136, 0.9)"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
    },
    header:{
        width: 365.98,
        height: 272.92,
        
    },
    row: {
        marginTop: 9.9,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    input: {
        width: 170,
        height: 37.05,
        borderColor: "#707070",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 5,
        marginStart: 7,
        fontSize: 12
    },
})