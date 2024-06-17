import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import IconCamaDetalhes from '../../assets/Svg/Diversos/Cama_Detalhes_imovel';
import IconChuveiroDetalhes from '../../assets/Svg/Diversos/Chuveiro_Detalhes_imovel';
import IconSofaDetalhes from '../../assets/Svg/Diversos/Sofa_Detalhes_Imovel';

const { height } = Dimensions.get('window');

const ModalView = ({ isVisible, onClose, dados, imovel, navigation }) => {
  const translateY = useSharedValue(isVisible ? 0 : height);

  useEffect(() => {
    translateY.value = withSpring(isVisible ? 0 : height);
  }, [isVisible]);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      if (translateY.value > height / 3) {
        translateY.value = withSpring(height, {}, () => {
          runOnJS(onClose)();
        });
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.modal, animatedStyle]}>
        <View style={styles.trippleButtons}>
          {dados.Tipo == "PJ" || dados.Tipo == "PF" ? (
            <BlurView intensity={70} tint="dark" style={styles.btn}>
              <Pressable onPress={() => { navigation.navigate("EditarImovel", { imovel }) }}>
                <Feather name="edit-2" size={16} color="white" />
              </Pressable>
            </BlurView>
          ) : null}

          <BlurView intensity={70} tint="dark" style={styles.btn}>
            <Pressable onPress={() => { navigation.navigate("ImagensImovel", { imovel }) }}>
              <Ionicons name="image-outline" size={20} color="white" />
            </Pressable>
          </BlurView>

          <BlurView intensity={70} tint="dark" style={styles.btn}>
            <Pressable>
              <FontAwesome name="circle" size={24} color="#1CD62F" />
            </Pressable>
          </BlurView>
        </View>

        <BlurView intensity={50} tint="dark" style={styles.areainfor}>
          <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'center', flexDirection: 'column' }}>
            <Text style={styles.title}>{imovel.bairro} </Text>
            <Text style={styles.titlecida}>{imovel.cidade}</Text>
            <Text style={styles.descricao}>{imovel.descricao}</Text>
            <View style={{ width: '80%', height: 1, backgroundColor: '#fff', marginTop: 10 }} />

            <View style={styles.points}>
              {imovel.observacoesNomes.map((Nome, key) => (
                <View style={styles.itemContainer} key={key}>
                  <Feather name="check" size={15} style={styles.icon} />
                  <Text style={styles.label}>{Nome}</Text>
                </View>
              ))}
            </View>

            <View style={{ width: '100%', height: 150, justifyContent: 'center', flexDirection: 'row' }}>
              <View style={styles.cilinders}>
                <View style={styles.circulos}>
                  <Ionicons name="expand" size={30} color="#999EA9" />
                </View>
                <Text style={styles.metragem}>{imovel.areaUtil} m²</Text>
                <Text style={styles.cylinderText}>Terreno amplo com espaço para área de lazer</Text>
              </View>

              <View style={styles.cilinders}>
                <View style={styles.circulos}>
                  <IconCamaDetalhes />
                </View>
                <Text style={styles.metragem}>{imovel.dormitorios}</Text>
                <Text style={styles.cylinderText}>Quarto com ótima ventilação e controle de iluminação</Text>
              </View>

              <View style={styles.cilinders}>
                <View style={styles.circulos}>
                  <IconChuveiroDetalhes />
                </View>
                <Text style={styles.metragem}>{imovel.suites}</Text>
                <Text style={styles.cylinderText}>Revestimentos de qualidade, iluminação e decoração moderna</Text>
              </View>

              <View style={styles.cilinders}>
                <View style={styles.circulos}>
                  <IconSofaDetalhes />
                </View>
                <Text style={styles.metragem}>{imovel.salas}</Text>
                <Text style={styles.cylinderText}>Terreno amplo com espaço para área de lazer</Text>
              </View>
            </View>
          </View>
        </BlurView>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.5, // Altura do modal
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ModalView;
