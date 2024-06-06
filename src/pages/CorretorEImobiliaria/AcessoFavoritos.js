import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ImageBackground, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CardImovel from '../../components/cardImovel/CardImovel'

const AcessoFavoritos = () => {


  const signIn = () => {
    senha == '' ? alert("input vazio") : alert("usuario: " + user + "\n  senha: " + senha)
  }

  const imovel = {
    valorTotal: "1.500,00", tipo: "Venda", local: "Rua rouxinou n°102", tamanho: "23", quartos: "2", banheiros: "3", salas: "4", ativo: false
  }

  return (
    <ImageBackground
      source={require('../../images/fundos/back6.png')}
      style={styles.imagemFundo}
    >
      <CardImovel imovel={imovel} />
    </ImageBackground>
  );
}

export default AcessoFavoritos;

const styles = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    height: "70vh",
    width: "100%",
  }
})


