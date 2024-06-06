import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonVoltar from '../assets/Svg/Buttons/Bnt_Voltar';
import OndaLateral from '../assets/Svg/Diversos/Onda_lateral'
import LogoDuvida from '../assets/Svg/Logo/Logo_Imob_Duvidas';
import FAQList from '../components/Duvidas_Frequentes/DúvidasFrequentes';
import { BlurView } from 'expo-blur';



const Duvidas = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imagemFundo}>

        <Pressable onPress={() => navigation.goBack()} >
          <ButtonVoltar />
        </Pressable>

        <LogoDuvida />
        <OndaLateral />
      </ImageBackground>

      <BlurView intensity={85} tint={"light"} style={styles.duvidas}>
        <Text style={{ fontSize: 19, fontWeight: '600', marginBottom: 15, alignItems: 'center', }}> Dúvidas Frequentes</Text>
        <FAQList />
      </BlurView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  duvidas: {
    alignItems: 'center',
    width: 350,
    height: 320,
    borderRadius: 32,
    marginBottom: 50,
    padding: 18,
    backgroundColor: "#D9D9D9",
    opacity: 0.9,
    shadowOffset: {
      width: 0, // deslocamento horizontal da sombra
      height: 0, // deslocamento vertical da sombra
    },
    shadowOpacity: 0.2, // opacidade da sombra
    shadowRadius: 4, // raio da sombra
    elevation: 1, // elevação da sombra (apenas Android)
  }
});

export default Duvidas;