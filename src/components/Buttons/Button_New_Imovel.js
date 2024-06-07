import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function ButtonNewImovel({ size, focused }) {
    return (
        <View style={[styles.container, { backgroundColor: focused ? '#C1C5CE' : '#999EA9' }]}>
            <Entypo name="plus" size={size} color={focused ? '#fff' : '#E3E9F2'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'
    }
})