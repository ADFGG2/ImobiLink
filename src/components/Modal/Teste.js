import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,} from 'react-native';

export function ActionModal(){

    

    return(
        <View style =  {styles.container}>
            <Text> Testando  Modal </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
    }
})