
import { View, Text, Touchable, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import imgDisponivel from '../../images/icons/cardImovel/ativado.jpg';
import imgIndisponivel from '../../images/icons/cardImovel/desativado.jpg';
import { useNavigation } from '@react-navigation/native';

const cardImovel = ({ imovel }) => {
    
  const navigation = useNavigation();

    return (
        <View style={styles.card} key={imovel?.Codigo}>
            <View style={styles.parte1}>
                <Image
                    source={require('../../images/ImagensImoveis/imovelexemplo.png')}
                    style={styles.imagemImovel}
                />
                <View style={styles.detalhesPart1}>
                    <View style={styles.primeirosTxts}>
                        <Text style={styles.texto1}>R$ {imovel.valor}</Text>
                        <Text style={styles.texto}>{imovel.tipo}</Text>
                        <Text style={styles.texto}>{imovel.cidade}, {imovel.bairro}</Text>

                        <View style={styles.conjunto1}>
                            <View style={styles.iconLargura}>
                                <Image
                                    source={require('../../images/icons/cardImovel/largura.png')}
                                    style={styles.iconimg} />
                            </View>
                            <Text style={styles.texticons}>{imovel.areaUtil} m²</Text>
                        </View>
                    </View>
                    

                    <View style={styles.detalhesEspecificos}>
                        
                        <View style={styles.conjunto}>
                            <View style={styles.iconCama}>
                                <Image
                                    source={require('../../images/icons/cardImovel/cama.png')}
                                    style={styles.iconimg} />
                            </View>

                            <Text style={styles.texticons}>{imovel.dormitorios}</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <View style={styles.iconChuveiro}>
                                <Image
                                    source={require('../../images/icons/cardImovel/Chuveiro.png')}
                                    style={styles.iconimg} />
                            </View>

                            <Text style={styles.texticons}>{imovel.suites}</Text>
                        </View>

                        <View style={styles.conjunto}>
                            <View style={styles.iconSofa}>
                                <Image
                                    source={require('../../images/icons/cardImovel/Sofa.png')}
                                    style={styles.iconimg} />
                            </View>

                            <Text style={styles.texticons}>{imovel.salas}</Text>
                        </View>

                    </View>

                    
                    <Pressable           
                        onPress={()=>{
                            navigation.navigate("AcessoDetalhesImovel", {imovel})
                   }}
                        >
                    <View style={styles.row}>    
                            <View style={styles.iconMais}>
                                <Image
                                    source={require('../../images/icons/cardImovel/Mais.png')}
                                    style={styles.iconimg2} />
                            </View>    
                            <Text style={styles.detalhesImoveisTxt} >Detalhes</Text>

                    </View>
                    </Pressable>                        
                    
                    <View style={styles.row}>
                        
                        <View style={styles.iconMais2}>
                            <Image
                                source={require('../../images/icons/pessoinha.png')}
                                style={styles.iconimg3} />
                        </View>

                        <Text style={styles.detalhesImoveisTxt} >{imovel.nomeAutor}</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.iconMais}>
                            <Image
                                source={imovel.status=="Disponível"  ? imgDisponivel : imgIndisponivel}
                                style={styles.iconimg2} />
                        </View>

                        <Text style={styles.detalhesImoveisTxt} >{imovel.status=="Disponível" ? "Disponível" : "Habitado"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default cardImovel;

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: '15em',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2em',
        borderColor: '#797979',
        borderWidth: 1,
    },
    texto1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.2em'
    },
    texto: {
        textAlign: 'center'
    },
    parte1: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 5, // Raio de 30 para o canto superior esquerdo
        borderTopRightRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(217, 217, 217, 0.5)',
        borderRadius: 25,
    },
    imagemImovel: {
        width: '50%',
        height: '100%',
        borderWidth: 1,
        borderRightColor: '#797979',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius:20,
        
    },
    primeirosTxts:{
        width: '100%',
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'center',
        paddingRight: 1 
    },
    detalhesPart1: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        paddingLeft: '5%'
    },
    detalhesEspecificos: {
        width: '90%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    conjunto: {
        marginLeft: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    conjunto1: {
        marginLeft: 1,
        marginTop: 1,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLargura: {
        width: '15px',
        height: '15px'

    },
    iconCama: {
        width: '18px',
        height: '15px'

    },
    iconChuveiro: {
        width: '18px',
        height: '15px'

    },
    iconSofa: {
        width: '21px',
        height: '10.5px'

    },
    iconimg: {
        width: '100%',
        height: '100%'
    },
    iconimg2: {
        width: '100%',
        height: '100%',
        borderRadius: '1vh',
    },
    iconimg3: {
        width: '70%',
        height: '70%',
    },
    texticons: {
        fontSize: '0.7em',
        color: 'rgb(150,170,255)',
        paddingLeft: '2px',
        fontWeight: 'bold'
    },
    icon: {
        width: '100%',
        height: '100%'
    },
    iconMais: {
        width: '3.0vw',
        height: '1.4vh',
        borderRadius: '1vh',
        borderWidth: '0.1vh',
        borderColor: 'Black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconMais2: {
        width: '3.0vw',
        height: '1.4vh',     
        borderRadius: '1vh',
        borderWidth: '0.1vh',
        borderColor: 'Black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'

    },
    detalhesImoveisTxt: {
        paddingLeft: '2vw'
    },
   


})